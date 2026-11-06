import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  Compass,
  Flag,
  Globe2,
  Quote,
  Target,
  Users,
} from 'lucide-react';
import SEO from '../components/SEO';
import Headline from '../components/Headline';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CountUp from '../components/CountUp';
import CTASection from '../components/CTASection';
import { achievements, journey, values } from '../data/site';
import '../styles/about.css';

const facts = [
  { value: '2022', label: 'Founded in Visakhapatnam' },
  { value: '15+', label: 'Senior specialists' },
  { value: '03', label: 'Continents served' },
];

const principles = [
  'Senior people stay close to the work.',
  'Every architectural choice is written down.',
  'Design and engineering share one backlog.',
  'Launch is the midpoint, not the finish line.',
];

export default function About() {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const timelineListRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineListRef,
    offset: ['start 78%', 'end 82%'],
  });
  const lineScale = useSpring(timelineProgress, { stiffness: 90, damping: 26, mass: 0.3 });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <>
      <SEO
        title="About the studio"
        description="KODEWAR Technologies is an independent product engineering studio in Visakhapatnam — designers, engineers and strategists building future-ready digital products."
      />

      <section className="page-hero about-hero" ref={heroRef} aria-labelledby="about-title">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="page-hero__glow about-hero__glow about-hero__glow--one" aria-hidden="true" />
        <div className="page-hero__glow about-hero__glow about-hero__glow--two" aria-hidden="true" />

        <div className="container page-hero__inner about-hero__grid">
          <div>
            <Reveal y={14}>
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>About</span>
              </div>
            </Reveal>
            <Reveal y={14}>
              <div className="eyebrow">About KODEWAR</div>
            </Reveal>
            <Headline
              as="h1"
              id="about-title"
              text="Innovating Today, for a Smarter Tomorrow."
              highlight="Smarter Tomorrow."
              className="h1 page-hero__title about-hero__title"
              delay={0.25}
            />
            <Reveal delay={0.72}>
              <p className="lead page-hero__sub">
                We are an independent studio of designers, engineers and strategists who believe the
                best technology feels inevitable — considered, quiet and completely natural to use.
              </p>
            </Reveal>
            <Reveal delay={0.82} className="about-hero__facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.9} className="page-hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Work with us <ArrowUpRight size={17} />
              </Link>
              <Link to="/careers" className="btn btn--ghost">
                Join the team
              </Link>
            </Reveal>
          </div>

          <motion.div
            className="about-hero__visual"
            style={reduce ? undefined : { y: imageY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-hero__image">
              <img
                src="/assets/images/campus.jpg"
                alt="Aerial view of the technology campus district in Visakhapatnam"
                width="1600"
                height="900"
              />
              <div className="about-hero__image-grade" aria-hidden="true" />
              <div className="about-hero__image-label">
                <span>Visakhapatnam</span>
                <span>17.3850° N, 78.4867° E</span>
              </div>
            </div>
            <div className="about-hero__float">
              <img
                src="/assets/images/team.jpg"
                alt="The KODEWAR team"
                loading="lazy"
                width="1400"
                height="1050"
              />
              <div>
                <span className="about-hero__float-label">The people</span>
                <strong>15+ specialists, one room.</strong>
              </div>
            </div>
            <div className="about-hero__badge">
              <Award size={16} />
              <span>DIPP-recognised startup</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section about-manifesto" aria-labelledby="manifesto-title">
        <div className="container">
          <div className="about-manifesto__head">
            <Reveal>
              <div className="section-index">01 / Who we are</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="eyebrow" style={{ marginTop: 16 }}>The studio</div>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 id="manifesto-title" className="h2 about-manifesto__title">
                We make technology feel <span className="gradient-text">human</span> — and businesses
                feel unstoppable.
              </h2>
            </Reveal>
          </div>

          <div className="about-manifesto__body">
            <Reveal delay={0.1} className="about-manifesto__quote">
              <Quote size={26} />
              <p>
                “The best software doesn’t announce itself. It removes friction, earns trust and quietly
                becomes the way things are done.”
              </p>
              <span>— The KODEWAR operating belief</span>
            </Reveal>
            <div className="about-manifesto__copy">
              <Reveal delay={0.14}>
                <p>
                  KODEWAR began in 2022 with a simple frustration: too much software is built to satisfy a
                  brief, not to solve a problem. We started with three engineers and a shared standard —
                  build only what we would be proud to run ourselves.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Today we are a full-stack product studio working across commerce, education, healthcare,
                  genomics, fintech and industrial manufacturing. The work has grown, but the model hasn’t
                  changed: small, senior teams with direct access to the people making decisions.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p>
                  We stay curious, challenge comfortable assumptions and measure ourselves by what our
                  clients’ products achieve in the real world.
                </p>
              </Reveal>
              <Reveal delay={0.32} className="about-manifesto__principles">
                {principles.map((item, i) => (
                  <span key={item}>
                    <em>0{i + 1}</em>
                    {item}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section about-direction section-line" aria-labelledby="direction-title">
        <div className="container">
          <SectionHeading
            index="02 / Direction"
            eyebrow="Mission & vision"
            title="A clear point of view. A long-term horizon."
            copy="We are not trying to be the biggest studio. We are trying to be the one clients call when the problem genuinely matters."
          />

          <div className="direction-grid">
            <Reveal delay={0.05} className="direction-card direction-card--mission">
              <div className="direction-card__top">
                <span className="direction-card__icon"><Target size={22} /></span>
                <span className="section-index">01</span>
              </div>
              <h3 className="h3">Our mission</h3>
              <p>
                To help ambitious organisations turn complex ideas into dependable digital products —
                engineered with clarity, designed with care and built to create measurable advantage.
              </p>
              <ul>
                <li>Solve the real problem, not the stated one.</li>
                <li>Leave every codebase better than we found it.</li>
                <li>Make the complex feel obvious to the end user.</li>
              </ul>
            </Reveal>

            <Reveal delay={0.12} className="direction-card direction-card--vision">
              <div className="direction-card__top">
                <span className="direction-card__icon"><Compass size={22} /></span>
                <span className="section-index">02</span>
              </div>
              <h3 className="h3">Our vision</h3>
              <p>
                A world where Indian product engineering is synonymous with global craft — and where
                technology companies are judged by the human outcomes they create.
              </p>
              <ul>
                <li>Build products that outlive trends.</li>
                <li>Grow talent from within, relentlessly.</li>
                <li>Set a new bar for studio-grade engineering.</li>
              </ul>
            </Reveal>

            <Reveal delay={0.18} className="direction-aside">
              <Flag size={20} style={{ display: 'none' }} />
              <h3>How we operate</h3>
              <p>
                One shared backlog. Weekly demos. Written decisions. No account managers between you and
                the team doing the work.
              </p>
              <div className="direction-aside__meta">
                <span><Globe2 size={14} /> Global delivery</span>
                <span><Users size={14} /> Senior by default</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-values" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading
            index="03 / Culture"
            eyebrow="What we stand for"
            title="Values we actually use."
            copy="Not poster slogans. These are the filters we run decisions through — from architecture reviews to who we hire."
          />
          <div className="values-grid">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 0.06} className="card value-card">
                  <div className="card__surface">
                    <div className="value-card__top">
                      <span className="value-card__icon"><Icon size={20} /></span>
                      <span className="value-card__index">0{i + 1}</span>
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="section journey section-line" aria-labelledby="journey-title">
        <div className="container journey__grid">
          <div className="journey__intro">
            <Reveal>
              <div className="section-index">04 / Our journey</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="eyebrow" style={{ marginTop: 16 }}>From then to now</div>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 id="journey-title" className="h2 journey__title">
                Seven years of<br />building forward.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead">
                Every chapter added a capability, a client or a conviction. The through-line has never
                changed: do the work properly.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="journey__mini">
              <img src="/assets/emblem.png" alt="" aria-hidden="true" width="208" height="204" />
              <span>EST. 2022 — VSKP</span>
            </Reveal>
          </div>

          <div className="journey__list" ref={timelineListRef}>
            <div className="journey__line" aria-hidden="true">
              <motion.span
                className="journey__line-fill"
                style={{ scaleY: reduce ? 1 : lineScale }}
              />
            </div>
            {journey.map((item, i) => (
              <Reveal key={item.year} delay={0.05} className="journey__item" y={24}>
                <div className="journey__year">{item.year}</div>
                <div className="journey__node" aria-hidden="true">
                  <span />
                </div>
                <div className="journey__content">
                  <span className="journey__step">Chapter 0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-achievements section-line" aria-labelledby="achievements-title">
        <div className="container">
          <div className="achievements__head">
            <Reveal>
              <div className="eyebrow">Recognition</div>
              <h2 id="achievements-title" className="h2 achievements__title">
                Measured by outcomes,<br />not output.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Awards are a by-product. The numbers we care about are the ones our clients report after
                launch — conversion, retention, reliability and time saved.
              </p>
            </Reveal>
          </div>

          <Reveal className="achievements__stats">
            {achievements.map((item) => (
              <div className="achievement-stat" key={item.label}>
                <div className="achievement-stat__value">
                  <CountUp
                    end={item.value}
                    decimals={item.decimals || 0}
                    suffix=""
                    duration={1600}
                  />
                  <em>{item.suffix}</em>
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </Reveal>

          <div className="achievements__strip">
            {[
              'DIPP Startup India',
              'ISO-aligned process',
              'AWS certified team',
              'Visakhapatnam Tech Community',
            ].map((item) => (
              <Reveal key={item} className="achievements__badge">
                <Award size={15} />
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Build with us"
        title="The next chapter is yours to write."
        copy="Whether you’re starting with a blank page or untangling a platform that has outgrown its foundations — we should talk."
        primaryLabel="Start a conversation"
        secondaryLabel="Explore services"
        secondaryTo="/services"
      />
    </>
  );
}
