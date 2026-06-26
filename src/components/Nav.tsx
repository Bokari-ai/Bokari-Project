'use client';
import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import BrandLogo from './BrandLogo';
import { Button } from '@/components/ui/button';

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
        <a href="/" className="brand" aria-label="Bokari home">
          <BrandLogo height={32} />
        </a>
        <div className="nav-links">
          <a href="/#solutions">Solutions</a>
          <a href="/#demo">Product Demo</a>
          <a href="/#trust">Trust</a>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <a href="/login" className="nav-login">Login</a>
          <Button variant="gold" size="sm" asChild>
            <a href="/contact">Book a Demo</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
