import { NextRequest, NextResponse } from 'next/server';

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  property: string;
  propertyCount: string;
  monthlyCallVolume: string;
  message?: string;
}

async function sendEmail(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
  const to = process.env.LEAD_NOTIFICATION_EMAIL ?? 'bokari@botnoigroup.com';

  if (!apiKey || apiKey.startsWith('re_xxx')) return;

  const { Resend } = await import('resend');
  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to,
    subject: `New Demo Request — ${lead.name} (${lead.property})`,
    html: `
      <h2>New Demo Request</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td><b>Name</b></td><td>${lead.name}</td></tr>
        <tr><td><b>Email</b></td><td><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
        <tr><td><b>Phone</b></td><td>${lead.phone || '—'}</td></tr>
        <tr><td><b>Property</b></td><td>${lead.property}</td></tr>
        <tr><td><b>Properties</b></td><td>${lead.propertyCount}</td></tr>
        <tr><td><b>Monthly Calls</b></td><td>${lead.monthlyCallVolume}</td></tr>
        <tr><td><b>Message</b></td><td style="white-space:pre-wrap">${lead.message || '—'}</td></tr>
        <tr><td><b>Submitted</b></td><td>${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })} (BKK)</td></tr>
      </table>
    `,
  });
}

async function appendToSheet(lead: LeadPayload) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!spreadsheetId || !clientEmail || !privateKey) return;

  const { google } = await import('googleapis');
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Leads!A:H',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[
        new Date().toISOString(),
        lead.name,
        lead.email,
        lead.phone ?? '',
        lead.property,
        lead.propertyCount,
        lead.monthlyCallVolume,
        lead.message ?? '',
      ]],
    },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json() as Partial<LeadPayload>;

  const { name, email, property, propertyCount, monthlyCallVolume } = body;
  if (!name?.trim() || !email?.trim() || !property?.trim() || !propertyCount || !monthlyCallVolume) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const lead: LeadPayload = {
    name: name.trim(),
    email: email.trim(),
    phone: body.phone?.trim(),
    property: property.trim(),
    propertyCount,
    monthlyCallVolume,
    message: body.message?.trim(),
  };

  const [emailResult, sheetResult] = await Promise.allSettled([
    sendEmail(lead),
    appendToSheet(lead),
  ]);

  const emailError = emailResult.status === 'rejected' ? String(emailResult.reason) : null;
  const sheetError = sheetResult.status === 'rejected' ? String(sheetResult.reason) : null;

  console.log('[leads] new submission', lead);
  if (emailError) console.error('[leads] email error', emailError);
  if (sheetError) console.error('[leads] sheet error', sheetError);

  return NextResponse.json({
    success: true,
    debug: { email: emailError ?? 'ok', sheet: sheetError ?? 'ok' },
  });
}
