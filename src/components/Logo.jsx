import { Link } from 'react-router-dom';

export default function Logo({ variant = 'horizontal', link = true, className = '' }) {
  const content =
    variant === 'stacked' ? (
      <img
        src="/assets/logo-full.png"
        alt="KODEWAR Technologies"
        className={`brand__stacked ${className}`}
        width="326"
        height="272"
      />
    ) : (
      <>
        <img
          src="/assets/emblem.png"
          alt=""
          aria-hidden="true"
          className="brand__emblem"
          width="208"
          height="204"
        />
        <img
          src="/assets/wordmark.png"
          alt="KODEWAR Technologies"
          className="brand__word"
          width="326"
          height="68"
        />
      </>
    );

  if (!link) {
    return <div className={`brand ${className}`}>{content}</div>;
  }

  return (
    <Link to="/" className={`brand ${className}`} aria-label="KODEWAR Technologies — home">
      {content}
    </Link>
  );
}
