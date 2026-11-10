import Reveal from './Reveal';

export default function LegalDocument({ intro, sections }) {
  return (
    <div className="legal-layout">
      <aside className="legal-toc" aria-label="On this page">
        <span className="legal-toc__label">On this page</span>
        <ol>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ol>
      </aside>

      <div className="legal-content">
        <Reveal className="legal-intro">{intro}</Reveal>

        {sections.map((section, index) => (
          <Reveal
            key={section.id}
            as="section"
            className="legal-section"
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            delay={0.02}
          >
            <h2 id={`${section.id}-title`}>
              <span className="legal-section__num">{String(index + 1).padStart(2, '0')}</span>
              {section.title}
            </h2>
            <div style={{ marginTop: 14 }}>{section.body}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
