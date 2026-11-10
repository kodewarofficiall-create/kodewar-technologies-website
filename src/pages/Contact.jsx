import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';
import Headline from '../components/Headline';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import { contact, faqs } from '../data/site';
import '../styles/contact.css';

const mapHref = `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`;

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={faq.q}>
            <button
              type="button"
              className="faq__question"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="faq__index">0{i + 1}</span>
              <span>{faq.q}</span>
              <ChevronDown size={17} className="faq__chevron" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  className="faq__answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Start a conversation with KODEWAR Technologies. Tell us about your product, platform or growth challenge — we reply within one business day."
      />

      <section className="page-hero contact-hero" aria-labelledby="contact-title">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="page-hero__glow contact-hero__glow contact-hero__glow--one" aria-hidden="true" />
        <div className="page-hero__glow contact-hero__glow contact-hero__glow--two" aria-hidden="true" />
        <div className="container page-hero__inner contact-hero__grid">
          <div>
            <Reveal y={14}>
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Contact</span>
              </div>
            </Reveal>
            <Reveal y={14}>
              <div className="eyebrow">Start a conversation</div>
            </Reveal>
            <Headline
              as="h1"
              id="contact-title"
              text="Let’s Build Something Together."
              highlight="Together."
              className="h1 page-hero__title contact-hero__title"
              delay={0.25}
            />
            <Reveal delay={0.7}>
              <p className="lead page-hero__sub">
                Whether you have a fully-formed brief or a problem that needs shaping, we’d like to hear
                it. No pitch theatre — just a useful conversation with the people who’ll do the work.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.35} className="contact-hero__panel">
            <div className="contact-hero__panel-glow" aria-hidden="true" />
            <span className="contact-hero__panel-label"><Sparkles size={14} /> Studio availability</span>
            <div className="contact-hero__panel-value">2 project slots<br />open this quarter</div>
            <div className="contact-hero__panel-meta">
              <div>
                <span>Response time</span>
                <strong>Under 24 hours</strong>
              </div>
              <div>
                <span>Working hours</span>
                <strong>Mon–Fri, 9:30–18:30 IST</strong>
              </div>
            </div>
            <div className="contact-hero__panel-line" aria-hidden="true" />
            <p>Based in Visakhapatnam. Working with teams across India, the US, UK and UAE.</p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-main" aria-labelledby="contact-details-title">
        <div className="container contact-main__grid">
          <div className="contact-details">
            <Reveal>
              <div className="section-index">01 / Contact details</div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 id="contact-details-title" className="h2 contact-details__title">
                The studio door is open.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead contact-details__lead">
                Prefer email, a call or an in-person coffee at Asilmetta? All three work. Reach us
                directly using the details below.
              </p>
            </Reveal>

            <div className="contact-details__list">
              <Reveal delay={0.08} className="contact-detail">
                <span className="contact-detail__icon"><MapPin size={19} /></span>
                <div>
                  <span className="contact-detail__label">Office location</span>
                  <address>{contact.address}</address>
                  <a href={mapHref} target="_blank" rel="noreferrer" className="link-arrow">
                    Get directions <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="contact-detail">
                <span className="contact-detail__icon"><Mail size={19} /></span>
                <div>
                  <span className="contact-detail__label">Email address</span>
                  <a href={`mailto:${contact.email}`} className="contact-detail__value">{contact.email}</a>
                  <span className="contact-detail__note">For careers: {contact.careersEmail}</span>
                </div>
              </Reveal>

              <Reveal delay={0.16} className="contact-detail">
                <span className="contact-detail__icon"><Phone size={19} /></span>
                <div>
                  <span className="contact-detail__label">Phone number</span>
                  <a href={`tel:${contact.phoneHref}`} className="contact-detail__value">{contact.phone}</a>
                  <span className="contact-detail__note">Mon–Fri, 10:00–18:00 IST</span>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="contact-detail">
                <span className="contact-detail__icon"><Clock size={19} /></span>
                <div>
                  <span className="contact-detail__label">Working hours</span>
                  <span className="contact-detail__value">{contact.hours}</span>
                  <span className="contact-detail__note">Weekend enquiries answered Monday</span>
                </div>
              </Reveal>
            </div>


          </div>

          <Reveal delay={0.14} className="contact-panel">
            <div className="contact-panel__corner" aria-hidden="true" />
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section contact-visit section-line" aria-labelledby="visit-title">
        <div className="container">
          <div className="contact-visit__grid">
            <Reveal className="contact-map">
              <img
                src="/assets/images/campus.jpg"
                alt="Aerial view of the Asilmetta technology district in Visakhapatnam"
                loading="lazy"
                width="1600"
                height="900"
              />
              <div className="contact-map__grade" aria-hidden="true" />
              <div className="contact-map__pin">
                <span className="contact-map__pulse" />
                <MapPin size={16} />
                KODEWAR Studio
              </div>
              <a href={mapHref} target="_blank" rel="noreferrer" className="contact-map__link">
                Open in Maps <ArrowUpRight size={14} />
              </a>
              <div className="contact-map__grid" aria-hidden="true" />
            </Reveal>

            <div className="contact-visit__copy">
              <Reveal>
                <div className="section-index">02 / Visit</div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="eyebrow" style={{ marginTop: 16 }}>Come say hello</div>
              </Reveal>
              <Reveal delay={0.12}>
                <h2 id="visit-title" className="h2 contact-visit__title">
                  Asilmetta.<br />Visakhapatnam.
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="lead">
                  Our studio sits in the middle of Visakhapatnam’s technology corridor — a short walk from
                  the city’s best coffee and a long way from the usual agency theatre.
                </p>
              </Reveal>
              <Reveal delay={0.24} className="contact-visit__list">
                <span><CheckCircle2 size={15} /> Visitor parking available</span>
                <span><CheckCircle2 size={15} /> Accessible ground-floor studio</span>
                <span><CheckCircle2 size={15} /> Meetings by appointment</span>
              </Reveal>
              <Reveal delay={0.3}>
                <a href={mapHref} target="_blank" rel="noreferrer" className="btn btn--ghost" style={{ marginTop: 26 }}>
                  Plan a visit <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-faq section-line" aria-labelledby="faq-title">
        <div className="container contact-faq__grid">
          <div className="contact-faq__intro">
            <Reveal>
              <div className="section-index">03 / Questions</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="eyebrow" style={{ marginTop: 16 }}>Before you write</div>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 id="faq-title" className="h2 contact-faq__title">
                Quick answers,<br />honest ones.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead">
                Still unsure about something? Ask us directly — we would rather answer a question than
                have you guess.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <a href={`mailto:${contact.email}`} className="link-arrow" style={{ marginTop: 22 }}>
                Ask a question <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Faq />
          </Reveal>
        </div>
      </section>


    </>
  );
}
