import Headline from './Headline';
import Reveal from './Reveal';
import Breadcrumbs from './Breadcrumbs';

export default function PageHero({
  current,
  eyebrow,
  title,
  highlight,
  description,
  children,
  className = '',
}) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="page-hero__glow page-hero__glow--soft" aria-hidden="true" />
      <div className="container page-hero__inner">
        <Reveal y={14}>
          <Breadcrumbs current={current} />
        </Reveal>
        {eyebrow && (
          <Reveal y={14}>
            <div className="eyebrow">{eyebrow}</div>
          </Reveal>
        )}
        <Headline
          as="h1"
          text={title}
          highlight={highlight}
          className="h1 page-hero__title page-hero__title--wide"
          delay={0.2}
        />
        {description && (
          <Reveal delay={0.6}>
            <p className="lead page-hero__sub">{description}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
