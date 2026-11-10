import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import CommonSoon from './components/CommonSoon';

const Home = lazy(() => import('./pages/Home1'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Internships = lazy(() => import('./pages/Internships'));
const Faqs = lazy(() => import('./pages/Faqs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center' }}>
      <SEO
        title="Page not found"
        description="The page you are looking for does not exist. Return to KODEWAR Technologies or contact the studio."
      />
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow eyebrow--plain" style={{ justifyContent: 'center' }}>Error 404</div>
        <h1 className="h1" style={{ marginTop: 18 }}>This page took a wrong turn.</h1>
        <p className="lead" style={{ margin: '22px auto 0' }}>
          The route you’re looking for doesn’t exist — but the good work is still one click away.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
          <Link to="/" className="btn btn--primary">Back to home <ArrowUpRight size={17} /></Link>
          <Link to="/contact#contact-form" className="btn btn--ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-top ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const reduce = useReducedMotion();
  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      {loading && <Preloader onComplete={finishLoading} />}
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={null}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            id="main"
            key={location.pathname}
            className="page"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/CommonSoon" element={<CommonSoon />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <BackToTop />
    </>
  );
}
