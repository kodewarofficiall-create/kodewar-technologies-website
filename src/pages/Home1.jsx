import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cloud,
  Cpu,
  Globe2,
  Layers,
  PenTool,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import SEO from '../components/SEO';
import Headline from '../components/Headline';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import ParticleField from '../components/ParticleField';
import SectionHeading from '../components/SectionHeading';
import CountUp from '../components/CountUp';
import CTASection from '../components/CTASection';
import { clients, projects, services, stats, techStack, whyChooseUs } from '../data/site';
import '../styles/home.css';

const tickerItems = [
  { icon: Layers, label: 'Enterprise software' },
  { icon: BrainCircuit, label: 'AI & automation' },
  { icon: Cloud, label: 'Cloud architecture' },
  { icon: Cpu, label: 'Product engineering' },
  { icon: PenTool, label: 'UI / UX systems' },
  { icon: Globe2, label: 'Digital growth' },
];

const previewServices = services.slice(0, 4);

function HeroVisual() {
  return (
    <div className="hero__visual hero__visual--emblem" aria-label="KODEWAR emblem artwork">
      <div className="hero-emblem">
        <span className="hero-emblem__orbit hero-emblem__orbit--outer" />
        <span className="hero-emblem__orbit hero-emblem__orbit--inner" />
        <span className="hero-emblem__glow" />
        <img src="/assets/emblem.png" alt="KODEWAR Technologies emblem" width="320" height="314" />
      </div>
    </div>
  );
}

function HeroLandscape() {
  return (
    <div className="hero__landscape" aria-hidden="true">
      <svg viewBox="0 0 1440 280" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-mountain-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff6b0f" stopOpacity=".15" />
            <stop offset="48%" stopColor="#ff9b45" />
            <stop offset="100%" stopColor="#ff6b0f" stopOpacity=".25" />
          </linearGradient>
          <linearGradient id="hero-mountain-fill-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#292522" stopOpacity=".88" />
            <stop offset="100%" stopColor="#080808" stopOpacity=".98" />
          </linearGradient>
          <linearGradient id="hero-mountain-fill-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#171615" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
        </defs>
        {/* distant mountain ridge */}
        <path d="M0 205 95 174 160 188 258 143 330 165 430 112 505 151 600 103 690 151 790 91 875 132 980 76 1060 119 1160 65 1240 112 1340 57 1440 91V280H0Z" fill="url(#hero-mountain-fill-back)" />
        <path d="M0 205 95 174 160 188 258 143 330 165 430 112 505 151 600 103 690 151 790 91 875 132 980 76 1060 119 1160 65 1240 112 1340 57 1440 91" fill="none" stroke="url(#hero-mountain-edge)" strokeWidth="2" />
        {/* shadowed front ridge */}
        <path d="M0 230 125 195 220 213 340 169 430 195 555 151 655 187 770 137 875 174 1000 124 1110 164 1225 111 1335 143 1440 118V280H0Z" fill="url(#hero-mountain-fill-front)" />
        <path d="m0 230 125-35 95 18 120-44 90 26 125-44 100 36 115-50 105 37 125-50 110 40 115-53 110 32" fill="none" stroke="#51443a" strokeOpacity=".48" strokeWidth="1.4" />
        {/* fine illuminated ridgelines */}
        <path d="m80 222 115-29 78 13 92-33m175 14 96-39 85 24m110-38 90 26 94-41m80 15 80-33" fill="none" stroke="#a66a3d" strokeOpacity=".35" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Building the Future Through Technology"
        description="KODEWAR Technologies is a premium product engineering studio in Visakhapatnam building web, mobile, AI and cloud products for ambitious businesses."
      />

      <section className="hero" aria-labelledby="home-title">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__aurora hero__aurora--one" />
          <div className="hero__aurora hero__aurora--two" />
          <div className="hero__vignette" />
        </div>
        <ParticleField className="hero__particles" />

        <div className="container hero__inner">
          <div className="hero__copy">
            <motion.div
              className="hero__meta"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="hero__status">
                <span className="hero__status-dot" />
                Accepting new projects
              </span>
              <span className="hero__meta-line" />
              <span className="hero__meta-text">Technology · Innovation · Growth</span>
            </motion.div>

            <Headline
              text="Building the Future Through Technology."
              highlight="Technology"
              className="h1 hero__title"
              delay={0.35}
            />

            <Reveal delay={0.75} y={22}>
              <p className="hero__sub">
                We transform innovative ideas into powerful digital experiences through technology,
                creativity, and intelligent solutions.
              </p>
            </Reveal>

            <Reveal delay={0.9} y={22} className="hero__actions">
              <Magnetic>
                <Link to="/services" className="btn btn--primary btn--lg">
                  Explore services
                  <ArrowUpRight size={18} />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/contact" className="btn btn--ghost btn--lg">
                  Contact us
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>
            </Reveal>


          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>

        <HeroLandscape />

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll to explore</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        {[0, 1].map((dup) => (
          <div className="ticker__track" key={dup}>
            {tickerItems.map(({ icon: Icon, label }) => (
              <span className="ticker__item" key={`${dup}-${label}`}>
                <Icon size={13} />
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>

      <section className="section section--tight home-stats">
        <div className="container">
          <Reveal className="stats">
            {stats.map((stat, i) => (
              <div className="stat" key={stat.label}>
                <span className="stat__index">0{i + 1}</span>
                <div className="stat__value">
                  <CountUp end={stat.value} suffix="" />
                  <em>{stat.suffix}</em>
                </div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section services-preview" aria-labelledby="services-preview-title">
        <div className="container">
          <SectionHeading
            index="01 / Capabilities"
            eyebrow="What we build"
            title="Our Services"
            copy="End-to-end digital solutions to help businesses build, scale, and grow."
          >
            <Link to="/services" className="link-arrow">
              View all services <ArrowUpRight size={16} />
            </Link>
          </SectionHeading>

          <div className="service-grid service-grid--preview">
            {previewServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i * 0.08}>
                  <Link to={`/services#${service.slug}`} className="card service-card" data-cursor>
                    <div className="card__surface service-card__inner">
                      <div className="service-card__top">
                        <span className="service-card__icon"><Icon size={21} /></span>
                        <span className="service-card__number">{service.number}</span>
                      </div>
                      <h3 className="h3 service-card__title">{service.title}</h3>
                      <p className="service-card__text">{service.description}</p>
                      <span className="service-card__link">
                        Explore capability <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section home-intro section-line" aria-labelledby="studio-title">
        <div className="container home-intro__grid">
          <Reveal className="home-intro__visual" y={36}>
            <div className="image-frame image-frame--tall">
              <img
                src="/assets/images/office.jpg"
                alt="The KODEWAR studio floor in Visakhapatnam"
                loading="lazy"
                width="1500"
                height="1000"
              />
              <div className="image-frame__grade" aria-hidden="true" />
              <div className="image-frame__caption">
                <span>Studio 01</span>
                <span>Asilmetta, Visakhapatnam</span>
              </div>
              <div className="image-frame__badge">
                <Sparkles size={14} />
                Independent since 2022
              </div>
            </div>
          </Reveal>

          <div className="home-intro__copy">
            <Reveal>
              <div className="eyebrow">The studio</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="studio-title" className="h2 home-intro__title">
                Small senior teams.<br />
                <span className="gradient-text">Uncompromising</span> standards.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">
                KODEWAR is an independent product engineering studio. We work with founders and
                enterprise teams who treat software as a competitive advantage — not a cost centre.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="home-intro__body">
                Our designers, engineers and strategists sit in the same room, on the same problem.
                That closeness is deliberate: it removes translation loss, shortens feedback loops and
                keeps the quality of the final product in view from day one.
              </p>
            </Reveal>
            <Reveal delay={0.28} className="home-intro__checks">
              {[
                'Senior-only delivery teams',
                'Fixed cadence, transparent roadmaps',
                'Code and IP owned by you',
                'Documentation is part of the build',
              ].map((item) => (
                <span key={item} className="check-item">
                  <Check size={14} /> {item}
                </span>
              ))}
            </Reveal>
            <Reveal delay={0.34}>
              <Link to="/about" className="btn btn--ghost" style={{ marginTop: 28 }}>
                More about KODEWAR
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section why" aria-labelledby="why-title">
        <div className="container why__grid">
          <div className="why__intro">
            <Reveal>
              <div className="section-index">02 / Why KODEWAR</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="eyebrow" style={{ marginTop: 16 }}>The difference</div>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 id="why-title" className="h2 why__title">
                Built like a product team.<br />
                Accountable like a partner.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead">
                We’re not an agency that disappears after launch. We build with you, measure what
                matters and stay close while the product finds its market.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="why__signature">
              <img src="/assets/emblem.png" alt="" aria-hidden="true" width="208" height="204" />
              <div>
                <strong>Engineering with intent.</strong>
                <span>Every line of code is a decision.</span>
              </div>
            </Reveal>
          </div>

          <div className="why__cards">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08} className="card why-card">
                  <span className="why-card__icon"><Icon size={21} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="why-card__index">0{i + 1}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section work" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            index="03 / Selected work"
            eyebrow="Proof, not promises"
            title="Products we’ve helped bring to life."
            copy="A selection of engagements across commerce, education and hospitality — each one measured by the outcome it created."
          >
            <Link to="/services" className="link-arrow">
              Explore our capabilities <ArrowUpRight size={16} />
            </Link>
          </SectionHeading>

          <div className="work-grid">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.08} className="project-card">
                <article>
                  <div className="project-card__media">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      width="1200"
                      height="675"
                    />
                    <div className="project-card__grade" aria-hidden="true" />
                    <span className="project-card__year">{project.year}</span>
                    <span className="project-card__open"><ArrowUpRight size={18} /></span>
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span>{project.category}</span>
                      <div className="project-card__tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                    <h3 className="h3">{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="project-card__metrics">
                      {project.metrics.map((metric) => (
                        <span key={metric}>{metric}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section stack section-line" aria-labelledby="stack-title">
        <div className="container stack__grid">
          <div className="stack__copy">
            <Reveal>
              <div className="section-index">04 / Technology</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="eyebrow" style={{ marginTop: 16 }}>Our toolkit</div>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 id="stack-title" className="h2 stack__title">
                The stack behind<br />
                the standard.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead">
                Modern, battle-tested tools — chosen for longevity, not novelty. We’ll always pick the
                boring technology that keeps your product running.
              </p>
            </Reveal>
          </div>

          <div className="stack__grid-chips">
            {techStack.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 0.035} className="tech-chip">
                <span className="tech-chip__mono">{tech.name.slice(0, 2)}</span>
                <span className="tech-chip__name">{tech.name}</span>
                <span className="tech-chip__group">{tech.group}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section clients section-line" aria-labelledby="clients-title">
        <div className="container">
          <div className="clients__head">
            <Reveal>
              <div className="eyebrow">Trusted by</div>
              <h2 id="clients-title" className="h2 clients__title">
                Teams who expect more.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                50+ organisations — from genomics and fintech to hospitality and global manufacturing —
                building on KODEWAR.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="client-band" aria-label="Selected clients">
          {[0, 1].map((dup) => (
            <div className="client-band__track" key={dup}>
              {clients.map((client) => (
                <span key={`${dup}-${client}`} style={{ display: 'contents' }}>
                  <span className="client-band__item">{client}</span>
                  <span className="client-band__dot" aria-hidden="true" />
                </span>
              ))}
            </div> 
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
