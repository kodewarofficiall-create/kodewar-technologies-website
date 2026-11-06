import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Layers,
  Rocket,
  Search,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';
import Headline from '../components/Headline';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';
import Modal from '../components/Modal';
import CTASection from '../components/CTASection';
import { services } from '../data/site';
import '../styles/services.css';

const process = [
  {
    icon: Search,
    step: 'Phase 01',
    title: 'Discover',
    text: 'We interrogate the problem, map constraints and align on what success actually looks like.',
  },
  {
    icon: Compass,
    step: 'Phase 02',
    title: 'Architect',
    text: 'Product direction, technical architecture and a delivery plan with no hidden assumptions.',
  },
  {
    icon: Code2,
    step: 'Phase 03',
    title: 'Build',
    text: 'Senior designers and engineers work in two-week cycles with a demo at the end of every one.',
  },
  {
    icon: Rocket,
    step: 'Phase 04',
    title: 'Launch',
    text: 'Zero-downtime release, observability, documentation and a roadmap for what comes next.',
  },
];

const engagements = [
  {
    title: 'Basic',
    tag: 'Starter',
    text: 'An ideal solution for startups and small businesses looking to establish a professional digital presence with essential features and reliable performance.',
    points: [
      'Requirement analysis',
      'Responsive design & development',
      'Essential features integration',
      'Deployment & launch support',
    ],
  },
  {
    title: 'Standard',
    tag: 'Professional',
    text: 'A comprehensive solution for growing businesses that need advanced functionality, modern design, and scalable digital experiences.',
    points: [
      'Detailed project planning',
      'Custom UI/UX design',
      'Advanced features & integrations',
      'Performance optimization',
      'Testing & deployment support',
    ],
    highlight: true,
  },
  {
    title: 'Premium',
    tag: 'Enterprise',
    text: 'A complete, tailored digital solution for businesses seeking enterprise-grade applications, advanced integrations, and long-term technical support.',
    points: [
      'End-to-end project consultation',
      'Premium custom UI/UX design',
      'Full-stack application development',
      'Third-party API integrations',
      'Security & performance optimization',
      'Priority technical support',
    ],
  },
]; 

export default function Services() {
  const [active, setActive] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  useEffect(() => {
    const slug = location.hash.replace('#', '');
    if (!slug) return;
    const service = services.find((item) => item.slug === slug);
    if (service) setActive(service);
  }, [location.hash]);

  const close = () => {
    setActive(null);
    if (location.hash) navigate('/services', { replace: true });
  };

  return (
    <>
      <SEO
        title="Services"
        description="Web development, mobile apps, custom software, UI/UX design, APIs, digital marketing, AI/ML and cloud engineering from KODEWAR Technologies."
      />

      <section className="page-hero services-hero" aria-labelledby="services-title">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="page-hero__glow services-hero__glow" aria-hidden="true" />
        <div className="container page-hero__inner services-hero__grid">
          <div>
            <Reveal y={14}>
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Services</span>
              </div>
            </Reveal>
            <Reveal y={14}>
              <div className="eyebrow">Capabilities</div>
            </Reveal>
            <Headline
              as="h1"
              id="services-title"
              text="Comprehensive Technology Solutions."
              highlight="Technology"
              className="h1 page-hero__title services-hero__title"
              delay={0.25}
            />
            <Reveal delay={0.7}>
              <p className="lead page-hero__sub">
                From first sketch to production scale — one senior team across strategy, design,
                engineering and growth. Choose a discipline or bring us the whole problem.
              </p>
            </Reveal>
            <Reveal delay={0.8} className="page-hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Discuss your project <ArrowUpRight size={17} />
              </Link>
              <a href="#all-services" className="btn btn--ghost">
                Browse services
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="service-hero__panel">
            <div className="service-hero__panel-head">
              <span>Capability index</span>
              <span>08 disciplines</span>
            </div>
            <div className="service-hero__list">
              {services.map((service) => (
                <button
                  type="button"
                  key={service.slug}
                  className="service-hero__row"
                  onClick={() => setActive(service)}
                >
                  <span className="service-hero__num">{service.number}</span>
                  <span className="service-hero__name">{service.title}</span>
                  <span className="service-hero__dot" />
                  <ArrowUpRight size={14} className="service-hero__arrow" />
                </button>
              ))}
            </div>
            <div className="service-hero__panel-foot">
              <span><Sparkles size={13} /> Senior-only delivery</span>
              <span>EST. 2022</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section services-all" id="all-services" aria-labelledby="all-services-title">
        <div className="container">
          <SectionHeading
            index="01 / Services"
            eyebrow="What we do"
            title="Eight disciplines. One standard."
            copy="Every capability is delivered by people who have shipped it before. Explore what each engagement includes."
          />

          <div className="services-grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(i % 4) * 0.07} className="service-tile-wrap">
                  <TiltCard className="service-tile-card" max={4} scale={1.005}>
                    <article className="card service-tile">
                      <div className="card__surface service-tile__inner">
                        <div className="service-tile__top">
                          <span className="service-tile__icon"><Icon size={22} /></span>
                          <span className="service-tile__number">{service.number}</span>
                        </div>
                        <h3>{service.title}</h3>
                        <span className="service-tile__tagline">{service.tagline}</span>
                        <p>{service.description}</p>
                        <button type="button" className="service-tile__btn" onClick={() => setActive(service)}>
                          Learn more
                          <span><ArrowUpRight size={14} /></span>
                        </button>
                      </div>
                    </article>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section process section-line" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            index="02 / Process"
            eyebrow="How we work"
            title="From brief to production, without the theatre."
            copy="A simple operating rhythm that keeps decisions close to the work and surprises to a minimum."
          />

          <div className="process-grid">
            <div className="process-line" aria-hidden="true" />
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.1} className="process-step">
                  <div className="process-step__marker">
                    <Icon size={19} />
                  </div>
                  <span className="process-step__phase">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <span className="process-step__number">0{i + 1}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section engagements" aria-labelledby="engagement-title">
        <div className="container">
          <SectionHeading
            index="03 / Engagement"
            eyebrow="Ways to work together"
            title="A model that fits the moment."
            copy="No one-size-fits-all retainers. We shape the engagement around the stage of your product and the size of the problem."
          />

          <div className="engagement-grid">
            {engagements.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className={`engagement-card ${item.highlight ? 'is-highlight' : ''}`}
              >
                <div className="engagement-card__top">
                  <span className="engagement-card__tag">{item.tag}</span>
                  {item.highlight && <span className="engagement-card__badge">Most popular</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}><Check size={14} /> {point}</li>
                  ))}
                </ul>
                <Link to="/contact" className="link-arrow">
                  Start a conversation <ArrowUpRight size={15} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-note section-line">
        <div className="container">
          <Reveal className="services-note__inner">
            <div>
              <span className="section-index">Not sure where to start?</span>
              <h2 className="h2 services-note__title">Bring us the problem, not the brief.</h2>
            </div>
            <p>
              A 30-minute working session with a senior engineer and designer is usually enough to find
              the right shape for the work. No sales deck required.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Book a working session <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Tell us what you’re building."
        copy="We’ll respond within one business day with a considered point of view — and an honest answer on whether we’re the right team."
        primaryLabel="Start a project"
        secondaryLabel="Meet the studio"
        secondaryTo="/about"
      />

      <Modal
        open={Boolean(active)}
        onClose={close}
        title={active ? `${active.number} — ${active.title}` : ''}
        footer={
          <div className="modal__actions">
            <Link to="/contact" className="btn btn--primary" onClick={close}>
              Discuss this service <ArrowUpRight size={16} />
            </Link>
            <button type="button" className="btn btn--ghost" onClick={close}>
              Close
            </button>
          </div>
        }
      >
        {active && (
          <div className="service-detail">
            <div className="service-detail__icon">
              <active.icon size={24} />
            </div>
            <p className="service-detail__tagline">{active.tagline}</p>
            <p>{active.detail}</p>
            <h4>What’s included</h4>
            <ul>
              {active.deliverables.map((item) => (
                <li key={item}><Check size={14} /> {item}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </>
  );
}
