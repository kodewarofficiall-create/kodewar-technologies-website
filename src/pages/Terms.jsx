import { Link } from 'react-router-dom';
import { CalendarDays, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import LegalDocument from '../components/LegalDocument';
import { contact } from '../data/site';
import '../styles/pages.css';

const intro =
  'These Terms & Conditions govern your use of the KODEWAR TECHNOLOGIES website. They do not replace any signed proposal, statement of work or service agreement. Where a signed agreement exists, that agreement governs the relevant engagement.';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <>
        <p>
          This website is operated by KODEWAR TECHNOLOGIES. It provides information about our studio,
          services, careers and internship programme, and allows you to submit enquiries.
        </p>
        <p>
          These terms apply to visitors and to anyone who submits information through the website.
        </p>
      </>
    ),
  },
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    body: (
      <>
        <p>
          By accessing or using this website, you agree to these Terms & Conditions and to our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>. If you do not agree, please discontinue use
          of the website.
        </p>
      </>
    ),
  },
  {
    id: 'website-usage',
    title: 'Website Usage',
    body: (
      <>
        <p>You agree to use the website lawfully and not to:</p>
        <ul>
          <li>Attempt to gain unauthorised access to the website, servers or related systems.</li>
          <li>Interfere with the availability, integrity or performance of the website.</li>
          <li>Submit false, misleading, abusive or unlawful content.</li>
          <li>Use automated means to scrape or overload the website without permission.</li>
          <li>Infringe the rights of KODEWAR or any third party.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: (
      <>
        <p>
          Unless otherwise stated, the website content — including text, layout, graphics, branding,
          code and visual design — is owned by or licensed to KODEWAR TECHNOLOGIES and is protected by
          applicable intellectual property laws.
        </p>
        <p>
          You may view and share links to public pages for personal or informational purposes. You may
          not reproduce, republish, distribute or create derivative works from website content without
          prior written permission.
        </p>
        <p>
          Ownership of project deliverables is governed by the applicable signed engagement documents,
          not by these website terms.
        </p>
      </>
    ),
  },
  {
    id: 'services-engagements',
    title: 'Services and Engagements',
    body: (
      <>
        <p>
          Information about services on this website is descriptive and does not constitute a binding
          offer. Any engagement begins only when both parties sign an appropriate proposal, statement of
          work or agreement.
        </p>
        <p>
          Scope, timelines, deliverables, fees and acceptance criteria are defined in that agreement.
          Nothing on this website should be read as a guarantee of a particular result.
        </p>
      </>
    ),
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    body: (
      <>
        <p>When submitting information through the website, you are responsible for ensuring that:</p>
        <ul>
          <li>The information you provide is accurate and not misleading.</li>
          <li>You have the right to share the information and any attached work samples.</li>
          <li>Your submission does not infringe third-party rights or contain malicious content.</li>
          <li>You do not submit sensitive personal, financial or confidential information.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'payments-refunds',
    title: 'Payments and Refunds',
    body: (
      <>
        <p>
          This website does not process payments. Any fees, invoicing schedule, cancellation terms or
          refund policy applicable to a project or programme will be set out in the relevant signed
          agreement or written offer.
        </p>
        <p>
          No payment or refund commitment should be inferred from information presented on this website.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    body: (
      <>
        <p>
          The website may contain links to external websites, including social media platforms and map
          services. Those links are provided for convenience only.
        </p>
        <p>
          KODEWAR does not control and is not responsible for the content, availability or practices of
          third-party websites. Accessing them is at your own discretion.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    body: (
      <>
        <p>
          The website is provided on an “as available” basis. To the extent permitted by applicable law,
          KODEWAR makes no warranty that the website will be uninterrupted, error-free or free of harmful
          components.
        </p>
        <p>
          To the extent permitted by applicable law, KODEWAR will not be liable for indirect, incidental
          or consequential loss arising from your use of, or inability to use, this website. Nothing in
          these terms excludes liability that cannot lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    body: (
      <>
        <p>
          We may update these Terms & Conditions from time to time. The revised version will be published
          on this page with an updated effective date. Continued use of the website after publication
          constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    body: (
      <>
        <p>Questions about these terms can be sent to:</p>
        <div className="legal-contact">
          <a href={`mailto:${contact.email}`}>
            <span>Email</span>
            {contact.email}
          </a>
          <div>
            <span>Studio</span>
            Visakhapatnam, Andhra Pradesh, India
          </div>
        </div>
        <div className="legal-note">
          <strong>Requires company verification</strong>
          <p>
            The legal entity name, registered office, governing law, jurisdiction and formal dispute
            resolution process must be confirmed by KODEWAR before these terms are finalised. This page
            does not create contractual commitments beyond the website itself.
          </p>
        </div>
        <p style={{ marginTop: 18 }}>
          For project enquiries, use our <Link to="/contact#contact-form">contact form</Link>.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the KODEWAR TECHNOLOGIES Terms & Conditions covering website use, intellectual property, services, payments, liability and contact details."
      />

      <PageHero
        current="Terms & Conditions"
        eyebrow="Legal"
        title="Terms & Conditions."
        highlight="Conditions"
        description="The ground rules for using this website, set out in clear language without unnecessary legal theatre."
      >
        <div className="legal-meta">
          <span><CalendarDays size={13} /> Effective date: 9 November 2026</span>
          <span><Mail size={13} /> {contact.email}</span>
        </div>
      </PageHero>

      <section className="section" aria-label="Terms and conditions document">
        <div className="container">
          <LegalDocument intro={intro} sections={sections} />
        </div>
      </section>
    </>
  );
}
