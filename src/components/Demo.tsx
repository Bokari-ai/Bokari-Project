'use client';
import { PhoneIcon, ChatTextIcon, StackIcon } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const features: { icon: Icon; h4: string; p: string; d: string }[] = [
  {
    icon: PhoneIcon,
    h4: 'Voice — answers every call',
    p: 'Never miss an after-hours call. Bokari picks up every time, qualifies the enquiry, and closes the booking.',
    d: '2',
  },
  {
    icon: ChatTextIcon,
    h4: 'Chat — all channels, one AI',
    p: 'Website, LINE, WhatsApp, Messenger. Bokari replies in seconds and guides guests through the full booking flow.',
    d: '3',
  },
  {
    icon: StackIcon,
    h4: 'Unified — one platform, every channel',
    p: 'All conversations, bookings, and analytics in one dashboard. No silos, no manual syncing.',
    d: '4',
  },
];

export default function Demo() {
  return (
    <section id="demo" className="demo">
      <div className="container demo-grid">
        <div className="demo-copy">
          <span className="eyebrow reveal"><span className="star">✦</span> Product Demo</span>
          <h2 className="section-title reveal" data-d="1" style={{ marginTop: 20 }}>Your AI front desk,<br /><span className="serif gold">always on.</span></h2>
          <p className="lead reveal" data-d="2" style={{ marginTop: 18 }}>
            One platform that manages every guest conversation — from first enquiry to confirmed reservation — across voice and all messaging channels.
          </p>
          <div className="feat-list">
            {features.map(feat => (
              <div key={feat.h4} className="feat reveal" data-d={feat.d}>
                <span className="fic">
                  <feat.icon size={22} />
                </span>
                <div><h4>{feat.h4}</h4><p>{feat.p}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-wrap reveal" data-d="2">
          <span className="chat-tag t1">● replying · 0.4s</span>
          <span className="chat-tag t2">intent: BOOKING ✓</span>
          <div className="chat">
            <div className="chat-head">
              <span className="chat-ava">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 5 L17 16 L12 13 L7 16 Z" fill="#F2CB72" /></svg>
              </span>
              <div className="chat-id">
                <b>Bokari AI Agent</b>
                <span><span className="g" /> Replying now</span>
              </div>
              <div className="chat-toggle">
                <button className="on">Chat</button>
                <button>Voice</button>
              </div>
            </div>
            <div className="chat-body">
              <div className="msg in">Hello! Can you help me with a booking?</div>
              <div className="msg out">Of course — I&apos;d love to help. For the <b>Deluxe Room</b>, dates Nov 14–15, the rate is <span className="rate">฿3,200/night</span>. Shall I hold it for you?</div>
              <div className="msg-confirm"><span className="confirm-btn">Yes, confirm my booking <span className="ck">✓</span></span></div>
              <div className="msg in">Yes please — that&apos;s perfect.</div>
              <div className="typing"><i /><i /><i /></div>
            </div>
            <div className="chat-input">
              <span className="field">Type a message…</span>
              <span className="chat-send">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 12 20 4l-6 16-3-7-7-1Z" fill="#2A1E05" /></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
