import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';
import Headline from '../components/Headline';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { contact, faqs } from '../data/site';
import '../styles/contact.css';

const mapHref = `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`;

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '', company: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [reference, setReference] = useState('');

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'That email address doesn’t look right.';
    if (!values.subject.trim()) next.subject = 'Give your message a subject.';
    if (!values.message.trim()) next.message = 'Tell us a little about the project.';
    else if (values.message.trim().length < 12) next.message = 'A little more detail helps us respond properly.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus('sending');
    const ref = `KW-${Date.now().toString().slice(-6)}`;
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('kodewar-enquiries') || '[]');
        stored.push({ ...values, reference: ref, date: new Date().toISOString() });
        localStorage.setItem('kodewar-enquiries', JSON.stringify(stored));
      } catch {
        /* local storage is optional */
      }
      setReference(ref);
      setStatus('success');
    }, 1300);
  };

  const reset = () => {
    setValues({ name: '', email: '', subject: '', message: '', company: '' });
    setErrors({});
    setReference('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <motion.div
        className="contact-success"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="contact-success__icon"><CheckCircle2 size={30} /></div>
        <span className="section-index">Message received — {reference}</span>
        <h3 className="h3">Thank you, {values.name.split(' ')[0]}.</h3>
        <p>
          Your message is with our studio team. We reply to every enquiry within one business day,
          usually sooner. A copy has been saved to this device.
        </p>
        <div className="contact-success__actions">
          <a href={`mailto:${contact.email}`} className="btn btn--primary">
            Email us directly <ArrowUpRight size={16} />
          </a>
          <button type="button" className="btn btn--ghost" onClick={reset}>
            Send another message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form className="contact-form form-grid" onSubmit={submit} noValidate>
      <div className="contact-form__head field--full">
        <div>
          <span className="section-index">Project enquiry</span>
          <h3 className="h3">Tell us what you’re building.</h3>
        </div>
        <span className="contact-form__response"><span /> Replies within 1 business day</span>
      </div>

      <div className={`field ${errors.name ? 'has-error' : ''}`}>
        <label htmlFor="contact-name">Full name <span>*</span></label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={update('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        {errors.name && <span className="field__error" id="contact-name-error">{errors.name}</span>}
      </div>

      <div className={`field ${errors.email ? 'has-error' : ''}`}>
        <label htmlFor="contact-email">Email address <span>*</span></label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={update('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        {errors.email && <span className="field__error" id="contact-email-error">{errors.email}</span>}
      </div>

      <div className="field field--full">
        <label htmlFor="contact-company">Company / organisation</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Optional"
          value={values.company}
          onChange={update('company')}
        />
      </div>

      <div className={`field field--full ${errors.subject ? 'has-error' : ''}`}>
        <label htmlFor="contact-subject">Subject <span>*</span></label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="e.g. New product build, AI integration, redesign"
          value={values.subject}
          onChange={update('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
        />
        {errors.subject && <span className="field__error" id="contact-subject-error">{errors.subject}</span>}
      </div>

      <div className={`field field--full ${errors.message ? 'has-error' : ''}`}>
        <label htmlFor="contact-message">Message <span>*</span></label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="What are you trying to build, improve or launch? Share as much context as you can."
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && <span className="field__error" id="contact-message-error">{errors.message}</span>}
      </div>

      <div className="contact-form__footer field--full">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              Sending <Loader2 size={17} className="spin" />
            </>
          ) : (
            <>
              Send message <Send size={16} />
            </>
          )}
        </button>
        <p>
          By sending this form you agree to be contacted about your enquiry. No newsletters, no
          sharing your details.
        </p>
      </div>
    </form>
  );
}

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

            <Reveal delay={0.24} className="contact-socials">
              <span className="contact-socials__label">Follow the studio</span>
              <div>
                {contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-socials__link"
                  >
                    {social.label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </Reveal>
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
