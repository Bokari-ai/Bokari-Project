const certs = [
  { img: '/badge-solutions-architect.svg', title: 'Solutions Architect', lvl: 'Associate' },
  { img: '/badge-ml-engineer.svg',         title: 'ML Engineer',          lvl: 'Associate' },
  { img: '/badge-ai-practitioner.svg',     title: 'AI Practitioner',      lvl: 'Foundational' },
  { img: '/badge-cloud-practitioner.svg',  title: 'Cloud Practitioner',   lvl: 'Foundational' },
];

const points = [
  { n: '01', h4: 'Understands your guests', p: 'Handles accents, background noise, and non-native speakers. Conversation flows naturally from the first word.' },
  { n: '02', h4: 'Outperforms generic AI', p: 'Speech recognition tuned on hotel booking calls significantly outperforms general-purpose voice engines.' },
  { n: '03', h4: 'High completion rate', p: 'When guests stay on the line, Bokari completes the interaction at high rates. Bookings confirmed — no dead ends.' },
  { n: '04', h4: 'AWS enterprise infrastructure', p: 'Deployed on AWS — regional data compliance, enterprise reliability, and instant scale.' },
];

export default function Trust() {
  return (
    <section id="trust" className="trust">
      <div className="container">
        <div className="sec-head center">
          <span className="eyebrow reveal"><span className="star">✦</span> Trust</span>
          <h2 className="section-title reveal" data-d="1">Production-proven. Enterprise-grade.<br /><span className="serif gold">Built for hospitality.</span></h2>
          <p className="lead reveal" data-d="2">Bokari is not a prototype. It&apos;s a live system handling thousands of real guest calls every month — deployed on AWS infrastructure.</p>
        </div>
        <div className="partner-strip">
          <div className="partner-card reveal" data-d="1">
            <img src="/aws-partner.svg" alt="AWS Partner Network" className="aws-partner-badge" />
            <span className="pc-cap">AWS Partner Network</span>
          </div>
          <div className="certs">
            {certs.map((cert, i) => (
              <div key={cert.title} className="cert reveal" data-d={String(i + 1)}>
                <span className="medal">
                  <img src={cert.img} alt={cert.title} />
                </span>
                <b>{cert.title}</b>
                <span className="lvl">{cert.lvl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="compliance reveal" data-d="2">
          <div className="iso-shield-box">
            <img src="/iso.svg" alt="ISO/IEC 29110 certified" className="iso-badge" />
          </div>
          <div className="comp-copy">
            <span className="ce">Certified to standard</span>
            <h3>ISO/IEC 29110 — Software Engineering Lifecycle</h3>
            <p>Bokari is built and operated to an internationally recognised software engineering standard — independently assessed and certified by ISEM, The Certification Body of Thailand.</p>
          </div>
        </div>
        <div className="points">
          {points.map((pt, i) => (
            <div key={pt.n} className="point reveal" data-d={String(i + 1)}>
              <span className="pn">{pt.n}</span>
              <h4>{pt.h4}</h4>
              <p>{pt.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
