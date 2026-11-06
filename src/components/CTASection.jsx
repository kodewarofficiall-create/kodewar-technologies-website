import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

export default function CTASection({
  eyebrow = 'Start a project',
  title = 'Let’s build something worth remembering.',
  copy = 'Tell us what you’re working on. We’ll come back within one business day with a clear next step — no pitch decks, no pressure.',
  primaryLabel = 'Start a conversation',
  primaryTo = '/contact',
  secondaryLabel = 'View our work',
  secondaryTo = '/services',
  email,
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__orbit" aria-hidden="true" />
      <div className="container">
        <div className="cta__inner">
          <Reveal>
            <div className="eyebrow eyebrow--plain">{eyebrow}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="cta-title" className="h2 cta__title">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="cta__copy">{copy}</p>
          </Reveal>
          <Reveal delay={0.24} className="cta__actions">
            <Magnetic>
              <Link to={primaryTo} className="btn btn--primary btn--lg">
                {primaryLabel}
                <ArrowUpRight size={18} strokeWidth={2} />
              </Link>
            </Magnetic>
            {email ? (
              <a href={`mailto:${email}`} className="btn btn--ghost btn--lg">
                <Mail size={17} />
                {email}
              </a>
            ) : (
              <Link to={secondaryTo} className="btn btn--ghost btn--lg">
                {secondaryLabel}
              </Link>
            )}
          </Reveal>
          {/* <Reveal delay={0.3}>
            <p className="cta__micro">Based in Visakhapatnam, India — working worldwide.</p>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
