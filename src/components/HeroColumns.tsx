'use client';
import { useEffect, useState } from 'react';

export default function HeroColumns() {
  const [count, setCount] = useState(18);

  useEffect(() => {
    const update = () => setCount(window.innerWidth < 600 ? 8 : 18);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="hero-cols" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="hero-col" />
      ))}
    </div>
  );
}
