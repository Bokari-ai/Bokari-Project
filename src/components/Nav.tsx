'use client';
import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav" id="nav">
      <div className="nav-in">
        <a href="#top" className="brand" aria-label="Bokari home">
          <img src="/logo.svg" alt="Bokari" height="32" style={{ height: 32, width: 'auto' }} />
        </a>
        <div className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#demo">Product Demo</a>
          <a href="#trust">Trust</a>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-login">Login</a>
          <a href="#cta" className="btn btn-gold btn-sm">Book a Demo</a>
        </div>
      </div>
    </nav>
  );
}
