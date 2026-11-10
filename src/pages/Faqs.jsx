import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, HelpCircle, Search, X } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Accordion from '../components/Accordion';
import '../styles/pages.css';

const faqCategories = [
  {
    title: 'About KODEWAR TECHNOLOGIES',
    items: [
      {
        q: 'What does KODEWAR TECHNOLOGIES do?',
        a: 'KODEWAR TECHNOLOGIES is a technology studio based in Visakhapatnam, India. We work across web development, mobile applications, custom software, UI/UX design, AI and machine learning, cloud engineering and digital marketing.',
      },
      {
        q: 'Where is KODEWAR located?',
        a: 'Our studio is in Visakhapatnam, Andhra Pradesh. We collaborate with clients and team members across India and work with organisations in other regions depending on the engagement.',
      },
      {
        q: 'When was KODEWAR founded?',
        a: 'KODEWAR TECHNOLOGIES was established in 2022 with a focus on reliable, technology-driven digital solutions.',
      },
    ],
  },
  {
    title: 'Services',
    items: [
      {
        q: 'What services can I engage KODEWAR for?',
        a: 'We deliver website and web application development, mobile app development, custom software, UI/UX design, API and backend engineering, AI/ML solutions, cloud computing and digital marketing.',
      },
      {
        q: 'Do you work with startups as well as established businesses?',
        a: 'Yes. We work with early-stage teams, growing businesses and established organisations. The engagement model is shaped around the scope, stage and constraints of the work.',
      },
      {
        q: 'Can you improve an existing product rather than build a new one?',
        a: 'Yes. A significant part of our work involves auditing, modernising and extending existing products, including performance improvements, redesigns and new feature development.',
      },
    ],
  },
  {
    title: 'Internship opportunities',
    items: [
      {
        q: 'Does KODEWAR offer internships?',
        a: 'Yes. We run an internship programme across domains such as frontend development, full stack development, Python, Java, AI, machine learning, data science, UI/UX design and cloud computing.',
      },
      {
        q: 'Are internships remote or on-site?',
        a: 'Availability varies by domain and intake. Some tracks support remote or hybrid participation, while others are based at our Visakhapatnam studio. The mode is confirmed for each opening.',
      },
      {
        q: 'How do I apply for an internship?',
        a: 'Use the Apply Now button on the Internships page. It takes you to the contact form with “Internship Inquiry” preselected so your application reaches the right team.',
      },
    ],
  },
  {
    title: 'Application process',
    items: [
      {
        q: 'How long does it take to hear back after applying?',
        a: 'Response times depend on the role or programme and the volume of applications. We aim to communicate clearly with shortlisted candidates and appreciate your patience while applications are reviewed.',
      },
      {
        q: 'What information should I include in my application?',
        a: 'Include your area of interest, relevant skills, availability and links to work you are proud of — a portfolio, GitHub profile or project write-up. A CV is useful where relevant.',
      },
      {
        q: 'What happens after I submit the contact form?',
        a: 'Your submission is sent to the KODEWAR team. If there is a fit, we will reach out to discuss next steps. You can also email us directly using the contact details on this site.',
      },
    ],
  },
  {
    title: 'Career opportunities',
    items: [
      {
        q: 'What kinds of roles do you hire for?',
        a: 'We hire across engineering, design and growth, including frontend, backend, AI/ML, QA, product design and digital growth roles. Openings are listed on the Careers page.',
      },
      {
        q: 'Can I apply if there is no matching opening?',
        a: 'Yes. We welcome open applications from exceptional people. Use the contact form or write to the careers email listed on the Careers page.',
      },
    ],
  },
  {
    title: 'Training programs',
    items: [
      {
        q: 'Do you provide training beyond internships?',
        a: 'Our structured learning currently happens primarily through the internship programme and on-the-job mentorship. Any additional training format is announced only when it is actively available.',
      },
      {
        q: 'What is the focus of the learning experience?',
        a: 'The focus is practical: fundamentals, real project context, code or design review, communication and professional delivery habits.',
      },
    ],
  },
  {
    title: 'Project development',
    items: [
      {
        q: 'How does a project usually start?',
        a: 'Most engagements begin with a conversation about the problem, constraints and desired outcome. We then shape a scope and delivery plan before work begins.',
      },
      {
        q: 'How involved will my team be during development?',
        a: 'We work collaboratively. You will have regular visibility into progress, decisions and demos, with direct access to the people doing the work.',
      },
      {
        q: 'Who owns the work created for my project?',
        a: 'Ownership terms are defined in the project agreement. We do not make blanket legal promises here; the signed engagement documents govern intellectual property and handover.',
      },
    ],
  },
  {
    title: 'Contact information',
    items: [
      {
        q: 'How can I contact KODEWAR?',
        a: 'Use the contact form for project enquiries and internship applications, or email the address listed on our Contact page. Phone and office details are also available there.',
      },
      {
        q: 'What are your working hours?',
        a: 'Our usual working hours are Monday to Friday, 9:30 AM to 6:30 PM IST. Enquiries received outside these hours are reviewed on the next working day.',
      },
    ],
  },
];

export default function Faqs() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return faqCategories;
    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [query]);

  const total = filtered.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <>
      <SEO
        title="FAQs"
        description="Find answers about KODEWAR TECHNOLOGIES services, internships, careers, the application process, project development and contact details."
      />

      <PageHero
        current="FAQs"
        eyebrow="Help centre"
        title="Frequently Asked Questions."
        highlight="Questions."
        description="Clear answers about our studio, services, internships and how to work with KODEWAR. Search below or browse by topic."
        className="faq-hero"
      />

      <section className="section" aria-labelledby="faq-list-title">
        <div className="container">
          <Reveal className="faq-page__toolbar">
            <div className="faq-search">
              <Search size={17} aria-hidden="true" />
              <label className="sr-only" htmlFor="faq-search-input">Search frequently asked questions</label>
              <input
                id="faq-search-input"
                type="search"
                placeholder="Search questions…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-describedby="faq-result-count"
              />
              {query && (
                <button
                  type="button"
                  className="faq-search__clear"
                  aria-label="Clear search"
                  onClick={() => setQuery('')}
                >
                  <X size={15} />
                </button>
              )}
            </div>
            <span className="faq-result-count" id="faq-result-count" aria-live="polite">
              {total} {total === 1 ? 'answer' : 'answers'} {query ? 'found' : 'available'}
            </span>
          </Reveal>

          <h2 id="faq-list-title" className="sr-only">FAQ answers</h2>

          {filtered.length > 0 ? (
            <div className="faq-page__grid">
              {filtered.map((category, index) => (
                <Reveal key={category.title} delay={index * 0.04} className="faq-category">
                  <div className="faq-category__head">
                    <h2>{category.title}</h2>
                    <span>{String(category.items.length).padStart(2, '0')} questions</span>
                  </div>
                  <Accordion
                    key={`${category.title}-${query}`}
                    items={category.items}
                    defaultOpen={query ? category.items.map((_, i) => i) : []}
                    idPrefix={`faq-${index}`}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="faq-empty">
              <HelpCircle size={26} style={{ color: 'var(--orange)' }} />
              <h3>No answers matched “{query}”.</h3>
              <p>Try a different phrase, or send your question directly and we will reply.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
                <button type="button" className="btn btn--ghost" onClick={() => setQuery('')}>
                  Clear search
                </button>
                <Link to="/contact#contact-form" className="btn btn--primary">
                  Ask us directly <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section section-line" aria-labelledby="faq-cta-title">
        <div className="container">
          <Reveal className="faq-cta">
            <div className="faq-cta__inner">
              <div>
                <div className="eyebrow">Still curious?</div>
                <h2 id="faq-cta-title" style={{ marginTop: 14 }}>Still have questions? Let’s talk.</h2>
                <p>
                  Tell us what you are trying to build or learn. A real person from the studio will
                  reply with a considered answer.
                </p>
              </div>
              <Link to="/contact#contact-form" className="btn btn--primary btn--lg">
                Contact us <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
