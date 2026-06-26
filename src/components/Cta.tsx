import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@phosphor-icons/react';

export default function Cta() {
  return (
    <section id="cta" className="cta">
      <div className="cta-bg" aria-hidden="true" />
      <div className="cta-stars" aria-hidden="true" />
      <div className="container cta-in">
        <span className="eyebrow reveal"><span className="star">✦</span> Get started today</span>
        <h2 className="reveal" data-d="1">Let an AI answer <span className="serif gold">every</span> call.</h2>
        <p className="reveal" data-d="2">Run a paid pilot at 1–3 properties for 60 days. At the end: real call data from your own properties. Your overnight revenue, your number — not ours.</p>
        <div className="reveal" data-d="3" style={{ marginTop: 6 }}>
          <Button variant="gold" size="lg" asChild>
            <a href="/contact">Book a 30-min scoping call <span className="arrow"><ArrowRightIcon size={16} /></span></a>
          </Button>
        </div>
        <div className="cta-contact reveal" data-d="3">
          <a href="mailto:bokari@botnoigroup.com">bokari@botnoigroup.com</a>
          <span className="sep">·</span>
          <a href="https://botnoigroup.com" target="_blank" rel="noopener">botnoigroup.com</a>
        </div>
      </div>
    </section>
  );
}
