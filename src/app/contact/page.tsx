'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { ArrowRightIcon, CheckCircleIcon, WarningCircleIcon } from '@phosphor-icons/react';
import type { LeadPayload } from '@/app/api/leads/route';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const PROPERTY_COUNTS = ['1', '2–5', '6–20', '20+'] as const;
const MONTHLY_CALLS  = ['< 100', '100–500', '500–2,000', '2,000+'] as const;

interface FormData {
  name: string;
  email: string;
  phone: string;
  property: string;
  propertyCount: string;
  monthlyCallVolume: string;
  message: string;
}

const EMPTY: FormData = {
  name: '', email: '', phone: '', property: '',
  propertyCount: '', monthlyCallVolume: '', message: '',
};

export default function ContactPage() {
  const [form, setForm]   = useState<FormData>(EMPTY);
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function set(field: keyof FormData) {
    return (value: string) => setForm(f => ({ ...f, [field]: value }));
  }
  function onChange(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function validate() {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim())     e.name = 'Required';
    if (!form.email.trim())    e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.property.trim()) e.property = 'Required';
    if (!form.propertyCount)   e.propertyCount = 'Required';
    if (!form.monthlyCallVolume) e.monthlyCallVolume = 'Required';
    return e;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setState('loading');

    try {
      const payload: LeadPayload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        property: form.property.trim(),
        propertyCount: form.propertyCount,
        monthlyCallVolume: form.monthlyCallVolume,
        message: form.message.trim() || undefined,
      };
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setState('success');
      setForm(EMPTY);
    } catch {
      setState('error');
    }
  }

  return (
    <>
      <Nav />
      <main className="contact-page">
        <div className="container">
          <div className="contact-grid">

            {/* ── Left: info ── */}
            <div className="contact-info">
              <span className="eyebrow"><span className="star">✦</span> Book a Demo</span>
              <h1 className="contact-h1">
                See Bokari<br />
                <span className="serif gold">in action.</span>
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                Fill in the form and our team will reach out within one business day to schedule a 30-minute scoping call.
              </p>
              <ul className="contact-perks">
                {[
                  'Live walkthrough tailored to your property type',
                  'Real call data from a 60-day paid pilot',
                  'No lock-in — works with your existing PMS',
                  'Supports 40+ languages out of the box',
                ].map(p => (
                  <li key={p}>
                    <CheckCircleIcon size={18} weight="fill" style={{ color: 'var(--color-cobalt-br)', flexShrink: 0, marginTop: 2 }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="contact-trust">
                <span className="contact-trust-label">Trusted by hotels across SEA</span>
              </div>
            </div>

            {/* ── Right: form card ── */}
            <div className="contact-card">
              {state === 'success' ? (
                <div className="contact-success">
                  <CheckCircleIcon size={48} weight="fill" style={{ color: 'var(--color-cobalt-br)' }} />
                  <h2>We&apos;ll be in touch soon!</h2>
                  <p>Thank you for your interest. Our team will contact you within one business day.</p>
                  <Button variant="ghost-bokari" size="sm" onClick={() => setState('idle')}>
                    Submit another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  <div className="form-row">
                    <Field label="Full Name" required error={errors.name}>
                      <Input placeholder="Somchai Wongkham" value={form.name} onChange={onChange('name')} aria-invalid={!!errors.name} />
                    </Field>
                    <Field label="Work Email" required error={errors.email}>
                      <Input type="email" placeholder="you@hotel.com" value={form.email} onChange={onChange('email')} aria-invalid={!!errors.email} />
                    </Field>
                  </div>

                  <div className="form-row">
                    <Field label="Phone Number" error={errors.phone}>
                      <Input type="tel" placeholder="+66 8X XXX XXXX" value={form.phone} onChange={onChange('phone')} />
                    </Field>
                    <Field label="Hotel / Property Name" required error={errors.property}>
                      <Input placeholder="The Grand Bangkok" value={form.property} onChange={onChange('property')} aria-invalid={!!errors.property} />
                    </Field>
                  </div>

                  <div className="form-row">
                    <Field label="Number of Properties" required error={errors.propertyCount}>
                      <Select value={form.propertyCount} onValueChange={set('propertyCount')}>
                        <SelectTrigger aria-invalid={!!errors.propertyCount}>
                          <SelectValue placeholder="Select…" />
                        </SelectTrigger>
                        <SelectContent>
                          {PROPERTY_COUNTS.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="Monthly Call Volume" required error={errors.monthlyCallVolume}>
                      <Select value={form.monthlyCallVolume} onValueChange={set('monthlyCallVolume')}>
                        <SelectTrigger aria-invalid={!!errors.monthlyCallVolume}>
                          <SelectValue placeholder="Select…" />
                        </SelectTrigger>
                        <SelectContent>
                          {MONTHLY_CALLS.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Message" optional>
                    <Textarea
                      placeholder="Anything specific you'd like us to prepare for the call?"
                      rows={3}
                      value={form.message}
                      onChange={onChange('message')}
                      className="resize-none"
                    />
                  </Field>

                  {state === 'error' && (
                    <div className="form-error-banner">
                      <WarningCircleIcon size={16} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <Button type="submit" variant="gold" className="form-submit" disabled={state === 'loading'}>
                    {state === 'loading' ? 'Sending…' : <>Book a 30-min call <span className="arrow"><ArrowRightIcon size={16} /></span></>}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({ label, required, optional, error, children }: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-field">
      <Label className="form-label">
        {label}
        {required && <span className="form-req"> *</span>}
        {optional && <span className="form-opt"> (optional)</span>}
      </Label>
      {children}
      {error && <span className="form-err-msg">{error}</span>}
    </div>
  );
}
