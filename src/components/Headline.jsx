import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Headline({
  text,
  highlight,
  className = '',
  as = 'h1',
  delay = 0.15,
  stagger = 0.055,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(' ');
  const highlightWords = new Set((highlight || '').toLowerCase().replace(/[^^\w\s]/g, '').split(' '));

  if (reduce) {
    return (
      <Tag className={className} aria-label={text} {...rest}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={highlightWords.has(word.toLowerCase().replace(/[^\w]/g, '')) ? 'gradient-text' : undefined}
          >
            {word}{' '}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={text} {...rest}>
      {words.map((word, i) => {
        const clean = word.toLowerCase().replace(/[^\w]/g, '');
        const isHighlighted = highlightWords.has(clean);
        return (
          <Fragment key={`${word}-${i}`}>
            <span className="word-mask" aria-hidden="true">
              <motion.span
                className={isHighlighted ? 'gradient-text' : undefined}
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: delay + i * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
            {' '}
          </Fragment>
        );
      })}
    </Tag>
  );
}
