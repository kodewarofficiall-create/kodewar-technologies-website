import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';
import Logo from './Logo';
import { contact, navLinks } from '../data/site';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav-shell ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
        initial={reduce ? false : { y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container nav">
          <Logo className="nav__brand" />

          <nav className="nav__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <Link to="/CommonSoon" className="btn btn--primary btn--sm nav__cta">
              <span className="nav__cta-full">Employee Login</span>
              <span className="nav__cta-short">Login</span>
              <ArrowUpRight size={15} />
            </Link>
            <button
              type="button"
              className="nav__burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <motion.span
          className="nav__progress"
          style={{ scaleX: reduce ? 0 : progress }}
          aria-hidden="true"
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="KODEWAR navigation"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__bg" aria-hidden="true" />

            <div className="container mobile-menu__inner">
              <div className="mobile-menu__top">
                <Logo className="mobile-menu__logo" />
                <button
                  ref={closeRef}
                  type="button"
                  className="mobile-menu__close"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-menu__main">
                <div className="mobile-menu__label">
                  <Sparkles size={14} />
                  Explore KODEWAR
                </div>
                <nav className="mobile-menu__links" aria-label="Mobile navigation">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={reduce ? false : { opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.05,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `mobile-menu__link ${isActive ? 'is-active' : ''}`
                        }
                      >
                        <span className="mobile-menu__index">0{i + 1}</span>
                        <span>{link.label}</span>
                        <ArrowUpRight size={20} className="mobile-menu__arrow" />
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mobile-menu__aside">
                <div className="mobile-menu__card">
                  <span className="mobile-menu__card-label">Start a conversation</span>
                  <a href={`mailto:${contact.email}`} className="mobile-menu__email">
                    {contact.email}
                  </a>
                  <a href={`tel:${contact.phoneHref}`} className="mobile-menu__phone">
                    {contact.phone}
                  </a>
                  <Link
                    to="/contact#contact-form"
                    className="btn btn--primary"
                    onClick={() => setOpen(false)}
                  >
                    Start a project
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
                <div className="mobile-menu__footer">
                  <p className="mobile-menu__meta">
                    <span className="mobile-menu__dot" />
                    Studio open · Mon–Fri, 9:30–18:30 IST
                  </p>
                  <div className="mobile-menu__socials">
                    {contact.socials.map((social) => (
                      <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                        {social.label}
                        <ArrowUpRight size={11} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
