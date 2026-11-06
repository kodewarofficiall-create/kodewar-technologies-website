import React from "react";
import { Link } from "react-router-dom";
import "../styles/kodewar-footer.css";
import logo from "../../public/assets/emblem.png";

// React Icons
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import {
  FaXTwitter,
} from "react-icons/fa6";

import {
  FiArrowUpRight,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/kodewar-technologies/",
    className: "linkedin",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/kodewarofficial/",
    className: "instagram",
  },
  {
    name: "X / Twitter",
    icon: <FaXTwitter />,
    url: "https://x.com/Kodewarofficial",
    className: "twitter",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=61595033158321",
    className: "facebook",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/917660886182",
    className: "whatsapp",
  },
];

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const resourceLinks = [
  { name: "Careers", path: "/careers" },
  { name: "Internships", path: "/internships" },
  { name: "FAQs", path: "/faqs" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="kw-footer" id="top">

      {/* Background Effects */}
      <div className="kw-footer__background">
        <div className="kw-footer__glow kw-footer__glow--one" />
        <div className="kw-footer__glow kw-footer__glow--two" />
        <div className="kw-footer__grid-pattern" />
      </div>

      <div className="kw-footer__container">

        {/* CTA SECTION */}
        <section className="kw-footer__cta">

          <div className="kw-footer__cta-content">

            <span className="kw-footer__eyebrow">
              <span className="kw-footer__eyebrow-dot" />
              LET'S BUILD SOMETHING
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it happen.</span>
            </h2>

            <p>
              From ambitious ideas to powerful digital experiences,
              let's create something meaningful together.
            </p>

            <Link to="/contact" className="kw-footer__cta-button">
              Start a Conversation

              <span className="kw-footer__button-icon">
                <FiArrowUpRight />
              </span>
            </Link>

          </div>

          {/* Decorative Orbit */}
          <div className="kw-footer__orbit">

            <div className="kw-footer__orbit-ring kw-footer__orbit-ring--one" />
            <div className="kw-footer__orbit-ring kw-footer__orbit-ring--two" />
            <div className="kw-footer__orbit-ring kw-footer__orbit-ring--three" />

            <div className="kw-footer__orbit-center">
              <span>
                <img
                  src={logo}
                  alt="KODEWAR Logo"
                  width="50"
                  height="50"
                />
              </span>
              <i />
            </div>

            <div className="kw-footer__orbit-dot kw-footer__orbit-dot--one" />
            <div className="kw-footer__orbit-dot kw-footer__orbit-dot--two" />
            <div className="kw-footer__orbit-dot kw-footer__orbit-dot--three" />

          </div>

        </section>

        {/* DIVIDER */}
        <div className="kw-footer__divider" />

        {/* MAIN FOOTER */}
        <section className="kw-footer__main">

          {/* BRAND */}
          <div className="kw-footer__brand">

            <Link to="/" className="kw-footer__logo">
              KODEWAR
            </Link>

            <p className="kw-footer__brand-description">
              Engineering digital experiences that move businesses forward.
              We combine creativity, technology, and strategy to build
              meaningful digital solutions.
            </p>

            <div className="kw-footer__social-heading">
              CONNECT WITH US
            </div>

            {/* SOCIAL ICONS */}
            <div className="kw-footer__socials">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`kw-footer__social-tile ${social.className}`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="kw-footer__social-short">
                    {social.icon}
                  </span>

                  <span className="kw-footer__social-arrow">
                    <FiArrowUpRight />
                  </span>
                </a>
              ))}

            </div>

          </div>

          {/* COMPANY LINKS */}
          <div className="kw-footer__column">

            <h3>Company</h3>

            <ul>
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    <span>{item.name}</span>
                    <FiArrowUpRight />
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* RESOURCES */}
          <div className="kw-footer__column">

            <h3>Explore</h3>

            <ul>
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    <span>{item.name}</span>
                    <FiArrowUpRight />
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* CONTACT */}
          <div className="kw-footer__column kw-footer__contact">

            <h3>Get in touch</h3>

            <p className="kw-footer__contact-label">
              HAVE A PROJECT IN MIND?
            </p>

            <a
              href="mailto:hr@kodewartechnologies.com"
              className="kw-footer__email"
            >
              hr@kodewartechnologies.com
              <FiArrowUpRight />
            </a>

            <div className="kw-footer__contact-item">

              <span className="kw-footer__contact-icon">
                <a href="https://maps.app.goo.gl/3qKnKNYtJGGZenSPA" target="_blank" rel="noopener noreferrer">
                  <FiMapPin />
                </a>
              </span>

              <p>
                4th Floor, Gupta Villa, 9-29-19/A, Balaji Nagar,
                <br />
                 Asilmetta,Visakhapatnam, Andhra Pradesh 530003, India.
              </p>

            </div>

            <a
              href="https://www.kodewartechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="kw-footer__website"
            >
              www.kodewartechnologies.com
              <FiArrowUpRight />
            </a>

          </div>

        </section>

        {/* LARGE BRAND WORDMARK */}
        <section className="kw-footer__wordmark">

          <span>KODEWAR</span>

          <div className="kw-footer__wordmark-dot" />

        </section>

        {/* BOTTOM BAR */}
        <div className="kw-footer__bottom">

          <p>
            © {currentYear} KODEWAR TECHNOLOGIES. All rights reserved.
          </p>

          <div className="kw-footer__bottom-links">
            <span>Designed with purpose.</span>
            <span className="kw-footer__bottom-dot" />
            <span>Built for the future.</span>
          </div>

          <a href="#top" className="kw-footer__back-top">

            BACK TO TOP

            <span>
              <FiArrowUp />
            </span>

          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
