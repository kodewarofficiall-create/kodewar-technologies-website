import { useEffect } from 'react';

const SITE_NAME = 'KODEWAR Technologies';
const SITE_URL = 'https://www.kodewartechnologies.com';
const DEFAULT_IMAGE = '/assets/logo-full.png';

function upsertTag(tag, selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement(tag);
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
}

function upsertMeta(selector, attributes) {
  upsertTag('meta', selector, attributes);
}

export default function SEO({ title, description, image = DEFAULT_IMAGE, type = 'website' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    const desc =
      description ||
      'KODEWAR Technologies — premium web, mobile, AI and cloud product engineering from Visakhapatnam, India.';
    const path =
      typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : '';
    const canonical = `${SITE_URL}${path || '/'}`;
    const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;

    upsertMeta(`meta[name="description"]`, { name: 'description', content: desc });
    upsertTag('link', `link[rel="canonical"]`, { rel: 'canonical', href: canonical });
    upsertMeta(`meta[property="og:title"]`, { property: 'og:title', content: fullTitle });
    upsertMeta(`meta[property="og:description"]`, { property: 'og:description', content: desc });
    upsertMeta(`meta[property="og:type"]`, { property: 'og:type', content: type });
    upsertMeta(`meta[property="og:url"]`, { property: 'og:url', content: canonical });
    upsertMeta(`meta[property="og:image"]`, { property: 'og:image', content: absoluteImage });
    upsertMeta(`meta[name="twitter:card"]`, { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta(`meta[name="twitter:title"]`, { name: 'twitter:title', content: fullTitle });
    upsertMeta(`meta[name="twitter:description"]`, { name: 'twitter:description', content: desc });
    upsertMeta(`meta[name="twitter:image"]`, { name: 'twitter:image', content: absoluteImage });
  }, [title, description, image, type]);

  return null;
}
