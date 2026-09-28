const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Join Us", href: "#join" },
];

const domains = [
  {
    number: "01",
    title: "Technology",
    text: "Coding, development, AI/ML, cybersecurity, cloud systems, and real technical projects.",
  },
  {
    number: "02",
    title: "Management",
    text: "Leadership, operations, event management, coordination, and project execution.",
  },
  {
    number: "03",
    title: "Information & Research",
    text: "Knowledge sharing, industry analysis, tech trends, research discussions, and learning culture.",
  },
  {
    number: "04",
    title: "Media & Creative",
    text: "Design, social media, content creation, photography, videography, and storytelling.",
  },
  {
    number: "05",
    title: "PR & Networking",
    text: "Alumni outreach, industry interaction, guest sessions, partnerships, and student connections.",
  },
  {
    number: "06",
    title: "Marketing & Sponsorship",
    text: "Promotion, event outreach, sponsorship communication, and community engagement.",
  },
  {
    number: "07",
    title: "Entrepreneurship & Innovation",
    text: "Ideathons, startup thinking, innovation challenges, and problem-solving opportunities.",
  },
];

const philosophy = [
  { title: "Learn", text: "Gain practical knowledge and build confidence through action." },
  { title: "Connect", text: "Meet peers, mentors, alumni, and industry voices across disciplines." },
  { title: "Create", text: "Build projects, experiments, ideas, and experiences with real impact." },
  { title: "Lead", text: "Take responsibility, inspire teams, and turn ideas into progress." },
];

const eventCards = [
  {
    name: "MINT TechFest",
    meta: "Hackathons • Coding • Workshops",
    desc: "A flagship technology-driven experience bringing innovation, competition, and hands-on learning together.",
  },
  {
    name: "MINT Management Summit",
    meta: "Leadership • Business Cases • Team Building",
    desc: "A platform for strategic thinking, problem solving, leadership, and collaborative execution.",
  },
  {
    name: "MINT Innovation Challenge",
    meta: "Ideas • Prototypes • Solutions",
    desc: "Students identify real-world problems and develop practical, technology-focused solutions.",
  },
];

const teamMembers = [
  {
    role: "Founder",
    name: "Akshat Sakare",
    detail: "Shapes the vision, culture, strategic roadmap, and long-term direction of MINT.",
  },
  {
    role: "Co-Founder",
    name: "Mayank Deheriya",
    detail: "Supports club formation, student engagement, planning, and execution of key initiatives.",
  },
  {
    role: "President",
    name: "Student Leadership",
    detail: "Drives club direction, collaboration, and coordination across all teams and activities.",
  },
  {
    role: "Faculty Coordinator",
    name: "Academic Mentor",
    detail: "Guides major initiatives and helps maintain institutional alignment and support.",
  },
];

const reasons = [
  "Skills development",
  "Hands-on experience",
  "Leadership growth",
  "Professional networking",
  "Portfolio-building opportunities",
  "A stronger student community",
];

export default function Home() {
  return (
    <main className="mint-page" id="home">
      <div className="page-glow glow-one" />
      <div className="page-glow glow-two" />

      <header className="site-header">
        <div className="container nav-shell">
          <div className="brand-wrap">
            <img src="/logo.png" alt="MINT logo" className="brand-logo" />
            <div className="brand-mark">MINT</div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <a href="#join" className="nav-cta">
            Join MINT <span>→</span>
          </a>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">School of Information Technology • RGPV Bhopal</p>
          <h1>
            Connect.<br />
            Innovate.<br />
            Lead.
          </h1>
          <p className="hero-text">
            MINT is a student-driven community bringing together technology, management,
            innovation and networking to create opportunities beyond the classroom.
          </p>

          <div className="cta-row">
            <a href="#about" className="primary-btn">Explore MINT</a>
            <a href="#join" className="secondary-btn">Join the Community</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract network illustration">
          <div className="visual-core">
            <span className="dot dot-one" />
            <span className="dot dot-two" />
            <span className="dot dot-three" />
            <span className="dot dot-four" />
            <span className="ring ring-one" />
            <span className="ring ring-two" />
            <span className="line line-one" />
            <span className="line line-two" />
            <span className="line line-three" />
            <span className="line line-four" />
          </div>
          <div className="mini-panel">
            <span>Founded by</span>
            <strong>Akshat Sakare</strong>
            <small>with Mayank Deheriya</small>
          </div>
        </div>
      </section>

      <section className="statement container">
        <p>A community built for students who want to learn, create and lead.</p>
      </section>

      <section id="about" className="section container">
        <div className="section-label">01 — About</div>
        <div className="editorial-layout">
          <div className="section-title-wrap">
            <h2>What is MINT?</h2>
          </div>
          <div className="section-content">
            <p>
              MINT — Management &amp; Information Network Team — is a student-driven community under
              the School of Information Technology, RGPV Bhopal. The club connects students through
              technology, management, innovation, leadership and networking, creating a more active,
              practical and collaborative student experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section container philosophy-section">
        <div className="section-label">MINT Philosophy</div>
        <div className="philosophy-grid">
          {philosophy.map((item) => (
            <div key={item.title} className="philosophy-item">
              <span>{item.title}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="domains" className="section container">
        <div className="section-label">02 — Domains</div>
        <div className="section-headline-row">
          <h2>What We Do</h2>
          <p>Multiple disciplines. One community.</p>
        </div>

        <div className="domain-grid">
          {domains.map((domain) => (
            <article key={domain.number} className="domain-item">
              <div className="domain-index">{domain.number}</div>
              <h3>{domain.title}</h3>
              <p>{domain.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="section feature-band">
        <div className="container feature-layout">
          <div className="feature-copy">
            <div className="section-label light">Featured Event</div>
            <h2>
              MINT <br />
              TECHFEST
            </h2>
            <p>Technology • Innovation • Competition</p>
            <a href="#join" className="primary-btn light">Explore Event</a>
          </div>

          <div className="feature-visual" aria-hidden="true">
            <span className="f-line f-line-1" />
            <span className="f-line f-line-2" />
            <span className="f-line f-line-3" />
            <span className="f-node f-node-1" />
            <span className="f-node f-node-2" />
            <span className="f-node f-node-3" />
          </div>
        </div>
      </section>

      <section className="section container events-section">
        <div className="section-label">Experiences That Matter</div>
        <div className="event-list">
          {eventCards.map((event) => (
            <article key={event.name} className="event-card">
              <div className="event-meta">{event.meta}</div>
              <h3>{event.name}</h3>
              <p>{event.desc}</p>
              <a href="#join">View Event <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="section container team-section">
        <div className="section-label">04 — Team</div>
        <div className="section-headline-row team-head">
          <h2>The People Behind MINT</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card">
              <div className="avatar">{member.name.slice(0, 2).toUpperCase()}</div>
              <div className="team-role">{member.role}</div>
              <h3>{member.name}</h3>
              <p>{member.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container why-section">
        <div className="section-label">Why Join MINT?</div>
        <div className="why-header">
          <h2>
            Don’t Just Attend College.<br />
            Build Something.
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div key={reason} className="why-item">
              <span>0{index + 1}</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="section container join-section">
        <div className="join-box">
          <div>
            <div className="section-label light">Join MINT</div>
            <h2>Ready to be part of MINT?</h2>
          </div>

          <div className="join-actions">
            <a href="#" className="primary-btn light">Join MINT</a>
            <a href="#events" className="secondary-btn light">Explore Activities</a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-grid">
          <div>
            <div className="brand-wrap footer-brand">
              <img src="/logo.png" alt="MINT logo" className="brand-logo" />
              <div className="brand-mark small">MINT</div>
            </div>
            <p className="footer-copy">
              Management &amp; Information Network Team<br />
              School of Information Technology<br />
              RGPV, Bhopal
            </p>
          </div>

          <div>
            <div className="footer-title">Navigate</div>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#domains">Domains</a></li>
              <li><a href="#events">Events</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Connect</div>
            <ul>
              <li><a href="#team">Team</a></li>
              <li><a href="#join">Join Us</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 MINT — Management &amp; Information Network Team</p>
          <p className="footer-tag">Connect. Innovate. Lead.</p>
        </div>
      </footer>
    </main>
  );
}
