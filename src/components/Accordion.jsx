import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({
  items = [],
  allowMultiple = true,
  defaultOpen = [],
  idPrefix = 'accordion',
  className = '',
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const uid = useId().replace(/[:]/g, '');

  const toggle = (index) => {
    setOpen((current) => {
      if (current.includes(index)) return current.filter((item) => item !== index);
      return allowMultiple ? [...current, index] : [index];
    });
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        const buttonId = `${idPrefix}-${uid}-button-${index}`;
        const panelId = `${idPrefix}-${uid}-panel-${index}`;

        return (
          <div className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
            <h3 className="accordion__heading">
              <button
                id={buttonId}
                type="button"
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className="accordion__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="accordion__question">{item.q}</span>
                <span className="accordion__icon" aria-hidden="true">
                  <ChevronDown size={18} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="accordion__panel"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="accordion__answer">
                    <p>{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
