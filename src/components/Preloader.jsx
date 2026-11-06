import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const duration = reduce ? 350 : 1850;
    const start = performance.now();
    let raf = 0;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 420);
        }, 180);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete, reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Loading KODEWAR Technologies"
          role="status"
        >
          <div className="preloader__glow" />
          <motion.div
            className="preloader__inner"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="preloader__ring" />
            <img className="preloader__logo" src="/assets/emblem.png" alt="KODEWAR Technologies" />
            <div className="preloader__bar" aria-hidden="true">
              <motion.span style={{ width: `${progress}%` }} />
            </div>
            <span className="preloader__label">
              {progress < 100 ? `Initialising experience — ${progress}%` : 'Welcome to KODEWAR'}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
