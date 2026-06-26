'use client';
import { MicrophoneIcon, ChatsCircleIcon, CalendarCheckIcon, ArrowsClockwiseIcon, GlobeIcon, ChartLineUpIcon } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const cards: { num: string; icon: Icon; h3: string; p: string; tags: string[] }[] = [
  {
    num: '01',
    icon: MicrophoneIcon,
    h3: 'AI Voicebot',
    p: 'Answers every inbound call, handles availability checks, and confirms reservations in natural conversation — in Thai, English, Chinese, Japanese, and more.',
    tags: ['inbound', 'availability', 'confirm'],
  },
  {
    num: '02',
    icon: ChatsCircleIcon,
    h3: 'AI Chatbot',
    p: 'Instant responses on LINE OA, WhatsApp, and Messenger. Handles availability checks and booking confirmations the moment a guest messages.',
    tags: ['LINE', 'WhatsApp', 'Messenger'],
  },
  {
    num: '03',
    icon: CalendarCheckIcon,
    h3: 'Smart Booking Flow',
    p: 'Room selection, dates, add-ons, and payment — all conversationally. No forms, no redirects, no drop-offs.',
    tags: ['no forms', 'payment', 'add-ons'],
  },
  {
    num: '04',
    icon: ArrowsClockwiseIcon,
    h3: 'PMS Integration',
    p: 'Real-time sync with your Property Management System. Every booking appears instantly in your PMS — no double entry, no risk.',
    tags: ['real-time', 'two-way sync'],
  },
  {
    num: '05',
    icon: GlobeIcon,
    h3: '40+ Languages',
    p: 'Guests from Thailand, China, Japan, Korea, Europe — Bokari speaks their language fluently and switches automatically mid-conversation.',
    tags: ['TH', 'EN', 'ZH', 'JP', '+36'],
  },
  {
    num: '06',
    icon: ChartLineUpIcon,
    h3: 'Booking Analytics',
    p: 'Full visibility into every conversation and conversion. Track peak demand, common objections, and revenue won — all in one dashboard.',
    tags: ['demand', 'conversion', 'revenue'],
  },
];

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="container">
        <div className="sec-head split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span className="eyebrow reveal"><span className="star">✦</span> Solutions</span>
            <h2 className="section-title reveal" data-d="1">Everything you need.<br /><span className="serif gold">Nothing you don&apos;t.</span></h2>
          </div>
          <p className="lead reveal" data-d="2">
            Bokari covers every channel — voice, web chat, LINE, WhatsApp — handling the full booking flow so your staff can focus on exceptional hospitality.
          </p>
        </div>
        <div className="grid-cards">
          {cards.map((card, i) => (
            <article key={card.num} className="card reveal" data-d={String((i % 3) + 1)}>
              <span className="num">{card.num}</span>
              <span className="ic">
                <card.icon size={22} />
              </span>
              <h3>{card.h3}</h3>
              <p>{card.p}</p>
              <div className="tag-row">{card.tags.map(t => <span key={t} className="mini-tag">{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
