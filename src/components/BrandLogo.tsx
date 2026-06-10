'use client';
import { useEffect, useState } from 'react';

export default function BrandLogo({ height = 32 }: { height?: number }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const update = () => setDark(html.classList.contains('dark'));
    update();
    const obs = new MutationObserver(update);
    obs.observe(html, { attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return (
    <img
      src={dark ? '/logo.svg' : '/logo-light.svg'}
      alt="Bokari"
      suppressHydrationWarning
      style={{ height, width: 'auto' }}
    />
  );
}
