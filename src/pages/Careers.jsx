import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  CheckCircle2,
  Clock,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Loader2,
  MapPin,
  Rocket,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';
import SEO from '../components/SEO';
import Headline from '../components/Headline';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Modal from '../components/Modal';
import CTASection from '../components/CTASection';
import { contact, internships, jobs } from '../data/site';
import '../styles/careers.css';

const reasons = [
  {
    icon: Rocket,
    title: 'Real ownership',
    text: 'Your name is on the work. You present it, defend it and watch it go live — from week one.',
  },
  {
    icon: Users,
    title: 'Senior mentorship',
    text: 'Sit beside people who have shipped at scale. Feedback is direct, kind and constant.',
  },
  {
    icon: GraduationCap,
    title: 'A learning budget',
    text: 'Courses, certifications and conferences are part of the job — not a favour you have to ask for.',
  },
  {
    icon: Laptop,
    title: 'Flexible by design',
    text: 'Hybrid in Visakhapatnam, remote where the work allows. We care about output, not chair time.',
  },
];

const culture = [
  {
    index: '01',
    title: 'Real-world projects',
    text: 'No sandbox work. Interns and juniors contribute to live products used by real customers across three continents.',
    stats: '50+ products shipped',
  },
  {
    index: '02',
    title: 'Learn and grow',
    text: 'Weekly craft sessions, code reviews that teach and a clear path from associate to lead — built on evidence, not tenure.',
    stats: '2× yearly reviews',
  },
  {
    index: '03',
    title: 'Collaborative culture',
    text: 'Designers, engineers and strategists share one room and one backlog. Ego is the only thing we don’t ship.',
    stats: '15+ specialists',
  },
];

const hiringSteps = [
  { step: '01', title: 'Apply', text: 'Send your profile and a link to work you are proud of.' },
  { step: '02', title: 'Conversation', text: 'A 30-minute call about your experience and what you want next.' },
  { step: '03', title: 'Craft session', text: 'A practical, paid exercise based on real KODEWAR work.' },
  { step: '04', title: 'Offer', text: 'A clear offer, a 30-day plan and a named mentor from day one.' },
];

const departments = ['All roles', 'Engineering', 'Design', 'Growth'];

function ApplicationForm({ role, onSuccess }) {
  const [values, setValues] = useState({ name: '', email: '', portfolio: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setValues({ name: '', email: '', portfolio: '', message: '' });
    setErrors({});
    setStatus('idle');
  }, [role]);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((e2) => ({ ...e2, [field]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = 'Please tell us your name.';
    if (!values.email.trim()) next.email = 'An email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.';
    if (!values.message.trim()) next.message = 'A short note helps us understand you.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      onSuccess?.();
    }, 1100);
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <CheckCircle2 size={26} />
        <strong>Application received.</strong>
        <p>
          Thanks for putting your hand up for <span>{role.title}</span>. Our people team will review
          your profile and reply within 5 working days.
        </p>
        <a href={`mailto:${contact.careersEmail}`} className="link-arrow">
          Questions? {contact.careersEmail} <ArrowUpRight size={15} />
        </a>
      </div>
    );
  }

  return (
    <div className="apply">
      <div className="apply__role">
        <span>{role.type} · {role.location}</span>
        <strong>{role.title}</strong>
      </div>
      <form className="form-grid apply__form" onSubmit={submit} noValidate>
        <div className={`field ${errors.name ? 'has-error' : ''}`}>
          <label htmlFor="apply-name">Full name <span>*</span></label>
          <input
            id="apply-name"
            type="text"
            placeholder="Your name"
            value={values.name}
            onChange={update('name')}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'apply-name-error' : undefined}
          />
          {errors.name && <span className="field__error" id="apply-name-error">{errors.name}</span>}
        </div>
        <div className={`field ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="apply-email">Email <span>*</span></label>
          <input
            id="apply-email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={update('email')}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'apply-email-error' : undefined}
          />
          {errors.email && <span className="field__error" id="apply-email-error">{errors.email}</span>}
        </div>
        <div className="field field--full">
          <label htmlFor="apply-portfolio">Portfolio / LinkedIn / CV link</label>
          <input
            id="apply-portfolio"
            type="url"
            placeholder="https://"
            value={values.portfolio}
            onChange={update('portfolio')}
          />
        </div>
        <div className={`field field--full ${errors.message ? 'has-error' : ''}`}>
          <label htmlFor="apply-message">Why KODEWAR? <span>*</span></label>
          <textarea
            id="apply-message"
            placeholder="A short note about you and the work you want to do."
            rows={4}
            value={values.message}
            onChange={update('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'apply-message-error' : undefined}
          />
          {errors.message && <span className="field__error" id="apply-message-error">{errors.message}</span>}
        </div>
        <div className="field--full apply__submit">
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>
                Sending <Loader2 size={16} className="spin" />
              </>
            ) : (
              <>
                Submit application <Send size={15} />
              </>
            )}
          </button>
          <span>We reply to every applicant.</span>
        </div>
      </form>
    </div>
  );
}

export default function Careers() {
  const [filter, setFilter] = useState('All roles');
  const [role, setRole] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All roles' ? jobs : jobs.filter((job) => job.department === filter)),
    [filter]
  );

  return (
    <>
      <SEO
        title="Careers"
        description="Build your career with KODEWAR Technologies. Explore engineering, design and growth roles, plus paid internship opportunities in Visakhapatnam and remote."
      />

      <section className="page-hero careers-hero" aria-labelledby="careers-title">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="page-hero__glow careers-hero__glow" aria-hidden="true" />
        <div className="container page-hero__inner careers-hero__grid">
          <div>
            <Reveal y={14}>
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Careers</span>
              </div>
            </Reveal>
            <Reveal y={14}>
              <div className="eyebrow">Careers at KODEWAR</div>
            </Reveal>
            <Headline
              as="h1"
              id="careers-title"
              text="Build Your Career with KODEWAR."
              highlight="KODEWAR."
              className="h1 page-hero__title careers-hero__title"
              delay={0.25}
            />
            <Reveal delay={0.7}>
              <p className="lead page-hero__sub">
                Be part of a passionate team that builds impactful technology solutions. Senior
                mentorship, real ownership and work that ships.
              </p>
            </Reveal>
            <Reveal delay={0.8} className="page-hero__actions">
              <a href="#openings" className="btn btn--primary">
                View openings <ArrowRight size={17} />
              </a>
              <a href="#internships" className="btn btn--ghost">
                Internship program
              </a>
            </Reveal>
            <Reveal delay={0.9} className="careers-hero__meta">
              <span><Briefcase size={14} /> {jobs.length} open roles</span>
              <span><MapPin size={14} /> Visakhapatnam / Remote</span>
              <span><Sparkles size={14} /> Paid internships</span>
            </Reveal>
          </div>

          <Reveal delay={0.35} y={34} className="careers-hero__visual">
            <div className="careers-hero__image">
              <img
                src="/assets/images/team.jpg"
                alt="The KODEWAR team together in the Visakhapatnam studio"
                width="1400"
                height="1050"
              />
              <div className="careers-hero__grade" aria-hidden="true" />
              <span className="careers-hero__badge">We’re hiring</span>
              <div className="careers-hero__caption">
                <span>KODEWAR / PEOPLE</span>
                <span>Visakhapatnam, India</span>
              </div>
            </div>
            <div className="careers-hero__float">
              <div className="careers-hero__float-icon"><HeartHandshake size={18} /></div>
              <div>
                <strong>People first. Always.</strong>
                <span>15+ specialists, zero egos.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section why-join" aria-labelledby="why-join-title">
        <div className="container">
          <SectionHeading
            index="01 / Why join us"
            eyebrow="The deal"
            title="A place to do the best work of your career."
            copy="We are small on purpose. That means less process, more access and a direct line between your work and the people it affects."
          />
          <div className="reasons-grid">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={i * 0.07} className="card reason-card">
                  <div className="card__surface reason-card__inner">
                    <span className="reason-card__icon"><Icon size={21} /></span>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                    <span className="reason-card__index">0{i + 1}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section culture section-line" aria-labelledby="culture-title">
        <div className="container">
          <div className="culture__grid">
            <Reveal className="culture__visual">
              <div className="culture__image">
                <img
                  src="/assets/images/office.jpg"
                  alt="Designers and engineers working together at KODEWAR"
                  loading="lazy"
                  width="1500"
                  height="1000"
                />
                <div className="culture__image-grade" aria-hidden="true" />
                <span className="culture__image-label">Inside the studio</span>
              </div>
              <div className="culture__quote">
                <p>“You’re trusted with the problem, not just the ticket.”</p>
                <span>— A KODEWAR engineer</span>
              </div>
            </Reveal>

            <div className="culture__content">
              <Reveal>
                <div className="section-index">02 / Life here</div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="eyebrow" style={{ marginTop: 16 }}>The work</div>
              </Reveal>
              <Reveal delay={0.12}>
                <h2 id="culture-title" className="h2 culture__title">
                  Real projects.<br />Real mentorship.
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="lead culture__lead">
                  You will not be polishing someone else’s slide deck. From week one you are inside a
                  product team, shipping work that customers use.
                </p>
              </Reveal>
              <div className="culture__list">
                {culture.map((item, i) => (
                  <Reveal key={item.title} delay={0.1 + i * 0.07} className="culture-item">
                    <span className="culture-item__index">{item.index}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <span className="culture-item__stat">{item.stats}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section openings" id="openings" aria-labelledby="openings-title">
        <div className="container">
          <div className="openings__head">
            <div>
              <Reveal>
                <div className="section-index">03 / Openings</div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="eyebrow" style={{ marginTop: 16 }}>Current opportunities</div>
              </Reveal>
              <Reveal delay={0.12}>
                <h2 id="openings-title" className="h2 openings__title">
                  Come build with us.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.18}>
              <p className="lead openings__copy">
                Don’t see your exact role? We still want to hear from exceptional people. Write to{' '}
                <a href={`mailto:${contact.careersEmail}`} className="inline-link">{contact.careersEmail}</a>.
              </p>
            </Reveal>
          </div>

          <div className="openings__filters" role="tablist" aria-label="Filter roles by department">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                role="tab"
                aria-selected={filter === dept}
                className={`filter-btn ${filter === dept ? 'is-active' : ''}`}
                onClick={() => setFilter(dept)}
              >
                {dept}
                <span>
                  {dept === 'All roles' ? jobs.length : jobs.filter((j) => j.department === dept).length}
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className="jobs-list">
            <AnimatePresence mode="popLayout">
              {filtered.map((job) => (
                <motion.article
                  layout
                  key={job.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="job-row"
                >
                  <div className="job-row__main">
                    <div className="job-row__meta">
                      <span className="job-row__dept">{job.department}</span>
                      <span><Clock size={12} /> {job.type}</span>
                      <span><MapPin size={12} /> {job.location}</span>
                    </div>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <div className="job-row__skills">
                      {job.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </div>
                  <div className="job-row__side">
                    <span className="job-row__exp">{job.experience}</span>
                    <button type="button" className="job-row__apply" onClick={() => setRole(job)}>
                      Apply now
                      <span><ArrowUpRight size={15} /></span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section internships section-line" id="internships" aria-labelledby="internships-title">
        <div className="container">
          <SectionHeading
            index="04 / Internships"
            eyebrow="Start here"
            title="The internship that isn’t a coffee run."
            copy="Paid, mentored and genuinely hands-on. Our interns ship production work, present to clients and leave with a portfolio — not just a certificate."
          />
          <div className="intern-grid">
            {internships.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.07} className="intern-card">
                <div className="intern-card__top">
                  <span className="intern-card__icon"><GraduationCap size={19} /></span>
                  <span className="intern-card__duration">{item.duration}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="intern-card__foot">
                  <span><MapPin size={13} /> {item.location}</span>
                  <button type="button" className="intern-card__apply" onClick={() => setRole(item)}>
                    Apply <ArrowUpRight size={14} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section hiring section-line" aria-labelledby="hiring-title">
        <div className="container">
          <SectionHeading
            index="05 / Hiring process"
            eyebrow="What to expect"
            title="Four steps. No black boxes."
            copy="We keep the process short, human and transparent. You will always know where you stand and what happens next."
          />
          <div className="hiring-grid">
            {hiringSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.07} className="hiring-step">
                <span className="hiring-step__num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {i < hiringSteps.length - 1 && <ArrowRight size={16} className="hiring-step__arrow" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="No perfect role?"
        title="Exceptional people always have a place here."
        copy="Tell us what you’re brilliant at, and what you want to become. We’ll keep you close for the right opening."
        primaryLabel="Send an open application"
        primaryTo="/contact"
        email={contact.careersEmail}
      />

      <Modal
        open={Boolean(role)}
        onClose={() => setRole(null)}
        title={role?.type === 'Internship' ? 'Internship application' : 'Job application'}
      >
        {role && (
          <ApplicationForm
            role={role}
            onSuccess={() => {
              /* success state handles the rest */
            }}
          />
        )}
      </Modal>
    </>
  );
}
