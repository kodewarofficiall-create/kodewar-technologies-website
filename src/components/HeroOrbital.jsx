import { BrainCircuit, Cloud, Code2, Palette } from 'lucide-react';

const chips = [
  { label: 'Frontend', icon: Code2, className: 'hero-orb__chip--one' },
  { label: 'AI / ML', icon: BrainCircuit, className: 'hero-orb__chip--two' },
  { label: 'Cloud', icon: Cloud, className: 'hero-orb__chip--three' },
  { label: 'UI / UX', icon: Palette, className: 'hero-orb__chip--four' },
];

const particles = Array.from({ length: 10 }, (_, i) => `hero-orb__spark--${i + 1}`);

export default function HeroOrbital() {
  return (
    <div className="hero-orb" aria-label="KODEWAR orbital technology visual">
      <div className="hero-orb__grid" aria-hidden="true" />
      <div className="hero-orb__glow" aria-hidden="true" />

      <div className="hero-orb__ring hero-orb__ring--outer" aria-hidden="true">
        <span className="hero-orb__node hero-orb__node--one" />
      </div>
      <div className="hero-orb__ring hero-orb__ring--mid" aria-hidden="true">
        <span className="hero-orb__node hero-orb__node--two" />
        <span className="hero-orb__node hero-orb__node--three" />
      </div>
      <div className="hero-orb__ring hero-orb__ring--inner" aria-hidden="true" />

      <svg className="hero-orb__trails" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <linearGradient id="orb-trail-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5c00" stopOpacity="0" />
            <stop offset="52%" stopColor="#ff9d42" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ff5c00" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orb-trail-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffd1a3" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff5c00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="hero-orb__trail hero-orb__trail--a">
          <circle cx="200" cy="200" r="172" pathLength="100" fill="none" stroke="url(#orb-trail-a)" strokeWidth="1.6" strokeDasharray="16 84" strokeLinecap="round" />
        </g>
        <g className="hero-orb__trail hero-orb__trail--b">
          <circle cx="200" cy="200" r="126" pathLength="100" fill="none" stroke="url(#orb-trail-b)" strokeWidth="1.2" strokeDasharray="9 91" strokeLinecap="round" />
        </g>
      </svg>

      <div className="hero-orb__sweep" aria-hidden="true" />

      <div className="hero-orb__core">
        <span className="hero-orb__pulse" aria-hidden="true" />
        <div className="hero-orb__core-inner">
          <img src="/assets/emblem.png" alt="KODEWAR Technologies" width="208" height="204" />
          <span className="hero-orb__wordmark">KODEWAR</span>
        </div>
      </div>

      {chips.map(({ label, icon: Icon, className }) => (
        <span className={`hero-orb__chip ${className}`} key={label}>
          <Icon size={14} />
          {label}
        </span>
      ))}

      <div className="hero-orb__sparks" aria-hidden="true">
        {particles.map((className) => (
          <span key={className} className={`hero-orb__spark ${className}`} />
        ))}
      </div>
    </div>
  );
}
