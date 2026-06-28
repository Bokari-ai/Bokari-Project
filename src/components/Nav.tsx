'use client';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import BrandLogo from './BrandLogo';
import { Button } from '@/components/ui/button';
import { ListIcon, XIcon } from '@phosphor-icons/react';

const NAV_LINKS = [
  { label: 'Solutions',    href: '/#solutions' },
  { label: 'Product Demo', href: '/#demo' },
  { label: 'Trust',        href: '/#trust' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 880) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-in">
          <a href="/" className="brand" aria-label="Bokari home" onClick={close}>
            <BrandLogo height={32} />
          </a>

          <div className="nav-links">
            {NAV_LINKS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>

          <div className="nav-right">
            <ThemeToggle />
            <a href="/login" className="nav-login">Login</a>
            <Button variant="gold" asChild className="max-[880px]:hidden">
              <a href="/contact">Book a Demo</a>
            </Button>
            <button
              className="nav-hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
            >
              {menuOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className="nav-drawer-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <div className="nav-drawer-actions">
          <a href="/login" className="nav-drawer-login" onClick={close}>Login</a>
          <Button variant="gold" className="w-full" asChild>
            <a href="/contact" onClick={close}>Book a Demo</a>
          </Button>
        </div>
      </div>
    </>
  );
}
