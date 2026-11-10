import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const behavior = reduce ? 'auto' : 'smooth';

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }

    const id = decodeURIComponent(hash.replace('#', ''));
    let cancelled = false;
    let frame = 0;
    let attempts = 0;

    // Lazy routes mount after the route change, so retry briefly until the
    // target element exists before giving up and returning to the top.
    const scrollToTarget = () => {
      if (cancelled) return;
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' });
        return;
      }
      if (attempts < 150) {
        attempts += 1;
        frame = requestAnimationFrame(scrollToTarget);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    frame = requestAnimationFrame(scrollToTarget);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  return null;
}
