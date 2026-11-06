import Reveal from './Reveal';

export default function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
  children,
  className = '',
  titleClassName = '',
}) {
  return (
    <div className={`section-head ${className}`}>
      <div>
        {index && <div className="section-index">{index}</div>}
        {eyebrow && (
          <Reveal delay={0.05}>
            <div className="eyebrow" style={{ marginTop: index ? 14 : 0 }}>
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.12}>
          <h2 className={`h2 section-head__title ${titleClassName}`}>{title}</h2>
        </Reveal>
      </div>
      {(copy || children) && (
        <Reveal delay={0.2} className="section-head__copy">
          {copy && <p>{copy}</p>}
          {children}
        </Reveal>
      )}
    </div>
  );
}
