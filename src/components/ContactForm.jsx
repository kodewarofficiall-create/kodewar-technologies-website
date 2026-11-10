import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Send,
} from 'lucide-react';
import { contact } from '../data/site';

/*
 * EmailJS configuration (Vite environment variables — create a .env file):
 *   VITE_EMAILJS_SERVICE_ID=
 *   VITE_EMAILJS_TEMPLATE_ID=
 *   VITE_EMAILJS_PUBLIC_KEY=
 *
 * These values must be configured before deployment. Only the public key belongs
 * in the browser bundle — never commit private EmailJS credentials.
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SERVICES = [
  'Website Development',
  'Web Application Development',
  'Mobile App Development',
  'Custom Software Development',
  'UI/UX Design',
  'Digital Marketing',
  'Internship Inquiry',
  'Other',
];

const BUDGETS = [
  'Not sure yet',
  'Under ₹50,000',
  '₹50,000 – ₹1,50,000',
  '₹1,50,000 – ₹5,00,000',
  '₹5,00,000+',
];

const TIMELINES = [
  'Flexible',
  'ASAP / within 1 month',
  '1–3 months',
  '3–6 months',
  '6+ months',
];

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
  website: '', // Honeypot — must stay empty.
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9][0-9\s()-]{6,18}$/;

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const [searchParams] = useSearchParams();
  const submitting = useRef(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    const service = searchParams.get('service');
    const message = searchParams.get('message');
    if (!service && !message) return;
    setValues((current) => ({
      ...current,
      service: SERVICES.includes(service) ? service : current.service,
      message: message && !current.message ? message : current.message,
    }));
  }, [searchParams]);

  const update = (field) => (event) => {
    const value = event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitError('');
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const next = {};

    if (!values.name.trim()) next.name = 'Please enter your full name.';
    else if (values.name.trim().length < 2) next.name = 'Please enter a valid name.';

    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!emailPattern.test(values.email.trim())) next.email = 'That email address doesn’t look right.';

    if (!values.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!phonePattern.test(values.phone.trim())) next.phone = 'Enter a valid phone number with country code if needed.';

    if (!values.service) next.service = 'Please select the service you need.';

    if (!values.message.trim()) next.message = 'Tell us a little about the project.';
    else if (values.message.trim().length < 15) next.message = 'A little more detail helps us respond properly.';

    return next;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (submitting.current || status === 'sending') return;

    // Honeypot: silently ignore bot submissions without exposing a result.
    if (values.website.trim()) return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const firstInvalid = ['name', 'email', 'phone', 'service', 'message'].find(
        (field) => nextErrors[field]
      );
      if (firstInvalid) {
        document.getElementById(`contact-${firstInvalid}`)?.focus();
      }
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      setSubmitError(
        'The contact form is not configured yet. Please add the EmailJS environment variables, or email us directly.'
      );
      return;
    }

    submitting.current = true;
    setStatus('sending');
    setSubmitError('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim() || 'Not provided',
          service: values.service,
          budget: values.budget || 'Not specified',
          timeline: values.timeline || 'Not specified',
          message: values.message.trim(),
          to_email: contact.email,
          page_url: typeof window !== 'undefined' ? window.location.href : '',
          sent_at: new Date().toLocaleString('en-IN'),
        },
        { publicKey: PUBLIC_KEY }
      );

      if (!mounted.current) return;
      setStatus('success');
      setValues(EMPTY);
      setErrors({});
    } catch (error) {
      if (!mounted.current) return;
      setStatus('error');
      setSubmitError(
        'We could not send your message right now. Please try again in a moment or email us directly at ' +
        contact.email +
        '.'
      );
    } finally {
      submitting.current = false;
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus('idle');
    setSubmitError('');
  };

  return (
    <div className="contact-form-wrap" id="contact-form">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            className="contact-success"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            role="status"
            aria-live="polite"
          >
            <div className="contact-success__icon"><CheckCircle2 size={30} /></div>
            <span className="section-index">Message submitted</span>
            <h3 className="h3">Thank you for contacting KODEWAR TECHNOLOGIES.</h3>
            <p>
              Your message has been submitted successfully. Our team will get back to you soon.
            </p>
            <div className="contact-success__actions">
              <a href={`mailto:${contact.email}`} className="btn btn--primary">
                Email us directly <ArrowUpRight size={16} />
              </a>
              <button type="button" className="btn btn--ghost" onClick={reset}>
                Send another message
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="contact-form form-grid"
            onSubmit={submit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact-form__head field--full">
              <div>
                <span className="section-index">Project enquiry</span>
                <h3 className="h3">Tell us what you’re building.</h3>
              </div>
              <span className="contact-form__response"><span /> Replies within 1 business day</span>
            </div>

            <div className={`field ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="contact-name">Full name <span>*</span></label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={values.name}
                onChange={update('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                required
              />
              {errors.name && <span className="field__error" id="contact-name-error">{errors.name}</span>}
            </div>

            <div className={`field ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="contact-email">Email address <span>*</span></label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={values.email}
                onChange={update('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                required
              />
              {errors.email && <span className="field__error" id="contact-email-error">{errors.email}</span>}
            </div>

            <div className={`field ${errors.phone ? 'has-error' : ''}`}>
              <label htmlFor="contact-phone">Phone number <span>*</span></label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 XXXXX XXXXX"
                value={values.phone}
                onChange={update('phone')}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                required
              />
              {errors.phone && <span className="field__error" id="contact-phone-error">{errors.phone}</span>}
            </div>

            <div className="field">
              <label htmlFor="contact-company">Company / organisation</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Optional"
                value={values.company}
                onChange={update('company')}
              />
            </div>

            <div className={`field ${errors.service ? 'has-error' : ''}`}>
              <label htmlFor="contact-service">Service required <span>*</span></label>
              <select
                id="contact-service"
                name="service"
                value={values.service}
                onChange={update('service')}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'contact-service-error' : undefined}
                required
              >
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option value={service} key={service}>{service}</option>
                ))}
              </select>
              {errors.service && <span className="field__error" id="contact-service-error">{errors.service}</span>}
            </div>

            <div className="field">
              <label htmlFor="contact-budget">Project budget</label>
              <select id="contact-budget" name="budget" value={values.budget} onChange={update('budget')}>
                <option value="">Optional</option>
                {BUDGETS.map((budget) => (
                  <option value={budget} key={budget}>{budget}</option>
                ))}
              </select>
            </div>

            <div className="field field--full">
              <label htmlFor="contact-timeline">Project timeline</label>
              <select id="contact-timeline" name="timeline" value={values.timeline} onChange={update('timeline')}>
                <option value="">Optional</option>
                {TIMELINES.map((timeline) => (
                  <option value={timeline} key={timeline}>{timeline}</option>
                ))}
              </select>
            </div>

            <div className={`field field--full ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="contact-message">Message / project description <span>*</span></label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="What are you trying to build, improve or launch? Share as much context as you can."
                value={values.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                required
              />
              {errors.message && <span className="field__error" id="contact-message-error">{errors.message}</span>}
            </div>

            {/* Honeypot — hidden from humans and assistive technology. */}
            <div className="contact-form__honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={update('website')}
              />
            </div>

            {submitError && (
              <div className="contact-form__error field--full" role="alert">
                <AlertCircle size={17} />
                <span>{submitError}</span>
              </div>
            )}

            <div className="contact-form__footer field--full">
              <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    Sending <Loader2 size={17} className="spin" />
                  </>
                ) : (
                  <>
                    Send message <Send size={16} />
                  </>
                )}
              </button>
              <p>
                By sending this form you agree to be contacted about your enquiry. No newsletters, no
                sharing your details. Read our{' '}
                <Link to="/privacy-policy" className="inline-link">Privacy Policy</Link>.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
