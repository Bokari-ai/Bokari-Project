import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="brand" aria-label="Bokari home">
              <BrandLogo height={28} />
            </a>
            <p>AI Voicebot for Hospitality — by Botnoi Group. Answering every call, in every language, around the clock.</p>
          </div>
          <div className="foot-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#solutions">Meet Bokari</a></li>
              <li><a href="#demo">Product demo</a></li>
              <li><a href="#trust">Why trust Bokari</a></li>
              <li><a href="#cta">Book a demo</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:bokari@botnoigroup.com">bokari@botnoigroup.com</a></li>
              <li><a href="https://botnoigroup.com" target="_blank" rel="noopener">botnoigroup.com</a></li>
              <li><a href="#cta">Book a scoping call</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Bokari · All rights reserved.</span>
          <span>A Botnoi Group product.</span>
        </div>
      </div>
    </footer>
  );
}
