'use client';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const wrap = document.getElementById('beams');
    if (!wrap) return;
    const conf = [
      { left: 12, w: 60, op: .35, delay: 0 },
      { left: 26, w: 36, op: .55, delay: 1.2 },
      { left: 40, w: 90, op: .7, delay: .5 },
      { left: 50, w: 50, op: .9, delay: 2.1 },
      { left: 60, w: 110, op: .65, delay: 1.6 },
      { left: 74, w: 40, op: .5, delay: .8 },
      { left: 86, w: 64, op: .4, delay: 2.6 },
    ];
    conf.forEach(c => {
      const b = document.createElement('div');
      b.className = 'beam';
      b.style.left = c.left + '%';
      b.style.width = c.w + 'px';
      b.style.opacity = String(c.op);
      b.style.transform = `translateX(-50%) rotate(${(c.left - 50) * 0.10}deg)`;
      b.style.animationDelay = c.delay + 's';
      wrap.appendChild(b);
    });
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="beams" id="beams" aria-hidden="true" />
      <div className="hero-stars" aria-hidden="true" />
      <div className="container hero-in">
        <span className="eyebrow reveal in"><span className="star">✦</span> AI Voicebot for Hospitality</span>
        <h1 className="reveal in" data-d="1">Never miss<br />a booking, <span className="serif gold">Ever.</span></h1>
        <p className="hero-sub reveal in" data-d="2">
          Bokari answers calls, replies to chats, and confirms reservations 24/7 in 40+ languages — so your team can focus on the guests in front of them.
        </p>
        <div className="hero-ctas reveal in" data-d="3">
          <a href="#cta" className="btn btn-gold">Book a Demo <span className="arrow">→</span></a>
          <a href="#demo" className="btn btn-ghost"><span className="play">▶</span> See it in action</a>
        </div>
        <div className="hero-proof reveal in" data-d="4">
          <span className="it"><span className="live-dot" /><b>Live</b> in production</span>
          <span className="sep" />
          <span className="it"><b>73</b> properties</span>
          <span className="sep" />
          <span className="it"><b>3,954</b> calls / mo</span>
          <span className="sep" />
          <span className="it"><b>240ms</b> response</span>
          <span className="sep" />
          <span className="it"><b>40+</b> languages</span>
        </div>
      </div>
    </header>
  );
}
