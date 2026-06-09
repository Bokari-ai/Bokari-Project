'use client';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Demo from '@/components/Demo';
import Trust from '@/components/Trust';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function BokariLanding() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).classList.add('in');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Solutions />
      <Demo />
      <Trust />
      <Cta />
      <Footer />
    </>
  );
}
