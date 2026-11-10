import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Coffee,
  Compass,
  Database,
  Layers,
  LineChart,
  Palette,
  Send,
  Sparkles,
  Terminal,
  Users,
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import CTASection from '../components/CTASection';
import '../styles/pages.css';

const APPLY_LINK = '/contact?service=Internship%20Inquiry#contact-form';

const domains = [
  {
    icon: Code2,
    title: 'Frontend Development',
    text: 'Build responsive interfaces with HTML, CSS, JavaScript and modern React patterns.',
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    text: 'Connect interfaces, APIs and databases into complete, working applications.',
  },
  {
    icon: Terminal,
    title: 'Python Development',
    text: 'Practise clean Python, automation and backend scripting on guided tasks.',
  },
  {
    icon: Coffee,
    title: 'Java Development',
    text: 'Work through object-oriented fundamentals and structured Java application logic.',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    text: 'Explore applied AI concepts, prompt workflows and practical model integration.',
  },
  {
    icon: LineChart,
    title: 'Machine Learning',
    text: 'Understand datasets, model evaluation and the fundamentals of ML pipelines.',
  },
  {
    icon: Database,
    title: 'Data Science',
    text: 'Work with data preparation, analysis and visual storytelling using real datasets.',
  },
  {
    icon: Palette,
    title: 'UI / UX Design',
    text: 'Learn research, wireframing, interface design and design-system thinking.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    text: 'Get hands-on with cloud fundamentals, deployment workflows and basic DevOps.',
  },
];

const learning = [
  ['Real project exposure', 'Contribute to supervised tasks drawn from live product work.'],
  ['Code review culture', 'Receive structured feedback on readability, structure and quality.'],
  ['Modern tooling', 'Work with the same editors, version control and delivery tools as our team.'],
  ['Problem-solving', 'Learn to break down ambiguous requirements into shippable increments.'],
  ['Communication', 'Practise written updates, demos and clear technical explanations.'],
  ['Professional habits', 'Build reliability, documentation discipline and ownership from day one.'],
];

const benefits = [
  { icon: Users, title: 'Mentored learning', text: 'Work alongside engineers and designers who explain the why, not just the how.' },
  { icon: Compass, title: 'Structured guidance', text: 'Clear objectives, regular check-ins and a visible path through the programme.' },
  { icon: Sparkles, title: 'Portfolio-worthy work', text: 'Build evidence of your ability through practical, reviewable contributions.' },
  { icon: Code2, title: 'Engineering standards', text: 'Learn the review, testing and documentation habits used on real products.' },
  { icon: Cloud, title: 'Modern environment', text: 'Use contemporary frameworks, cloud tooling and collaborative workflows.' },
  { icon: CheckCircle2, title: 'Feedback loop', text: 'Get direct, constructive feedback designed to accelerate your growth.' },
];

const process = [
  { title: 'Apply', text: 'Share your profile, area of interest and links to any work you are proud of.' },
  { title: 'Review', text: 'Our team reviews applications against current programme availability.' },
  { title: 'Conversation', text: 'A short discussion about your goals, availability and learning direction.' },
  { title: 'Onboarding', text: 'Selected interns receive a structured plan, mentor and clear expectations.' },
];

const internshipFaqs = [
  {
    q: 'Who can apply for the KODEWAR internship programme?',
    a: 'Students, recent graduates and early-career learners who can demonstrate curiosity, consistency and a genuine interest in technology are welcome to apply. Requirements vary by domain.',
  },
  {
    q: 'How long does the internship programme run?',
    a: 'Durations vary by domain and current programme structure. The specific duration and schedule are confirmed with shortlisted candidates before any commitment is made.',
  },
  {
    q: 'Are internships available remotely?',
    a: 'Some domains support remote or hybrid participation, while others are based at our Visakhapatnam studio. The available mode is confirmed for each opening during the application process.',
  },
  {
    q: 'What should I include in my application?',
    a: 'Tell us your area of interest, current skills, availability and links to relevant work such as a portfolio, GitHub profile or project write-up. A CV is helpful but not mandatory for every domain.',
  },
  {
    q: 'Do I need prior professional experience?',
    a: 'No. We assess potential, fundamentals and willingness to learn. For more advanced domains, some prior project or coursework experience is expected.',
  },
  {
    q: 'How long does the selection process take?',
    a: 'Timelines depend on the volume of applications and current openings. Shortlisted candidates are contacted directly, and we aim to communicate clearly at every stage.',
  },
];

export default function Internships() {
  return (
    <>
      <SEO
        title="Internships"
        description="Explore KODEWAR Technologies internship opportunities across frontend, full stack, Python, Java, AI, machine learning, data science, UI/UX and cloud computing."
      />

      <PageHero
        current="Internships"
        eyebrow="Careers · Internships"
        title="Build Your Career With KODEWAR."
        highlight="KODEWAR."
        description="A learning-first internship programme where curiosity is put to work on real technology, with guidance from senior engineers and designers."
        className="intern-hero"
      >
        <Reveal delay={0.68} className="page-hero__actions page-hero__actions--spaced">
          <a href={APPLY_LINK} className="btn btn--primary">
            Apply now <ArrowUpRight size={17} />
          </a>
          <a href="#domains" className="btn btn--ghost">
            Explore domains <ArrowRight size={16} />
          </a>
        </Reveal>
        <Reveal delay={0.78} className="intern-hero__meta">
          <span><Users size={14} /> Mentored programme</span>
          <span><Code2 size={14} /> 9 technology domains</span>
          <span><Compass size={14} /> Visakhapatnam / Remote</span>
        </Reveal>
      </PageHero>

      <section className="section" aria-labelledby="intern-about-title">
        <div className="container intern-intro__grid">
          <div className="intern-intro__copy">
            <Reveal>
              <div className="section-index">01 / The programme</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="eyebrow" style={{ marginTop: 16 }}>Learn by building</div>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 id="intern-about-title" className="h2" style={{ marginTop: 16, maxWidth: '16ch' }}>
                A place to learn how real products are made.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead" style={{ marginTop: 22 }}>
                The KODEWAR internship programme is designed around guided practice. Interns work on
                structured tasks, receive regular review and learn how engineering, design and delivery
                fit together in a professional product team.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p>
                We value clarity over buzzwords. You will start with fundamentals, build toward
                supervised contributions and be expected to ask questions, document your thinking and
                improve with feedback. The programme is intentionally small so that mentorship remains
                personal.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="intern-intro__aside">
            <span className="intern-intro__aside-label">What to expect</span>
            <h3>Structure, feedback and real context.</h3>
            <ul>
              {[
                'A named mentor for your learning track',
                'Weekly goals and progress conversations',
                'Review of your code, design or analysis',
                'Exposure to live product constraints',
                'A culture of questions and written clarity',
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section-line" id="domains" aria-labelledby="domains-title">
        <div className="container">
          <SectionHeading
            index="02 / Domains"
            eyebrow="Choose your direction"
            title="Internship domains."
            copy="Apply to the area that best matches your current skills and the direction you want to grow in. Availability varies by intake."
          />
          <div className="intern-domains">
            {domains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <Reveal key={domain.title} delay={(index % 3) * 0.06} className="intern-domain">
                  <div className="intern-domain__top">
                    <span className="intern-domain__icon"><Icon size={19} /></span>
                    <span className="intern-domain__index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{domain.title}</h3>
                  <p>{domain.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="learn-title">
        <div className="container">
          <SectionHeading
            index="03 / Learning"
            eyebrow="What you will learn"
            title="Skills that transfer to real work."
            copy="The programme focuses on durable fundamentals and professional habits — not shortcuts."
          />
          <div className="intern-learn">
            {learning.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.05} className="intern-learn__item">
                <span><CheckCircle2 size={16} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-line" aria-labelledby="benefits-title">
        <div className="container">
          <SectionHeading
            index="04 / Benefits"
            eyebrow="Why KODEWAR"
            title="A programme built around growth."
            copy="We keep the promises specific: mentorship, feedback, practical exposure and a serious learning environment."
          />
          <div className="intern-benefits">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.05} className="intern-benefit">
                <span className="intern-benefit__icon"><Icon size={18} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            index="05 / Process"
            eyebrow="How it works"
            title="From application to onboarding."
            copy="A short, transparent process. You will know what stage you are in and what happens next."
          />
          <div className="intern-process">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07} className="intern-step">
                <span className="intern-step__num">Step {String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-line" aria-labelledby="intern-faq-title">
        <div className="container">
          <SectionHeading
            index="06 / Questions"
            eyebrow="Good to know"
            title="Internship FAQs."
            copy="Still unsure about something? Send us a note and we will answer directly."
          />
          <Reveal>
            <Accordion items={internshipFaqs} defaultOpen={[0]} idPrefix="internship-faq" />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="intern-cta-title">
        <div className="container">
          <Reveal className="faq-cta">
            <div className="faq-cta__inner">
              <div>
                <div className="eyebrow">Applications open</div>
                <h2 id="intern-cta-title" style={{ marginTop: 14 }}>Ready to start learning with us?</h2>
                <p>
                  Share your interests, availability and the work you are proud of. We review every
                  application against current programme availability.
                </p>
              </div>
              <Link to={APPLY_LINK} className="btn btn--primary btn--lg">
                Apply now <Send size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Careers at KODEWAR"
        title="Looking for a full-time role instead?"
        copy="Explore current openings across engineering, design and growth — or send an open application."
        primaryLabel="View careers"
        primaryTo="/careers"
        secondaryLabel="Talk to us"
        secondaryTo="/contact#contact-form"
      />
    </>
  );
}
