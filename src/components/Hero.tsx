'use client';
import dynamic from 'next/dynamic';
import HeroColumns from './HeroColumns';

const HeroShader = dynamic(() => import('./HeroShader'), { ssr: false });

export default function Hero() {

  return (
    <header className="hero" id="top">
      <HeroShader />
      <HeroColumns />
      <div className="container hero-in">
        <span className="eyebrow reveal in"><span className='star'>✦</span>AI Voicebot for Hospitality</span>
        <h1 className="reveal in" data-d="1">Never miss<br />a booking, <span className="serif gold">Ever.</span></h1>
        <p className="hero-sub reveal in" data-d="2">
          Bokari answers calls, replies to chats, and confirms reservations 24/7 in 40+ languages — so your team can focus on the guests in front of them.
        </p>
        <div className="hero-ctas reveal in" data-d="3">
          <a href="#cta" className="btn btn-gold">Book a Demo <span className="arrow">→</span></a>
          <a href="#demo" className="btn btn-ghost"><span className="play">▶</span> See it in action</a>
        </div>
       
      </div>
    </header>
  );
}
