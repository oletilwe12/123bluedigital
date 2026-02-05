import { useEffect } from 'react';

const ensureMetaTag = (attribute, key) => {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  return tag;
};

export default function SEO({ title, description, url = 'https://123bluedigital.co.za', image = '/og-image.svg' }) {
  useEffect(() => {
    document.title = title;

    ensureMetaTag('name', 'description').setAttribute('content', description);
    ensureMetaTag('property', 'og:title').setAttribute('content', title);
    ensureMetaTag('property', 'og:description').setAttribute('content', description);
    ensureMetaTag('property', 'og:type').setAttribute('content', 'website');
    ensureMetaTag('property', 'og:url').setAttribute('content', url);
    ensureMetaTag('property', 'og:image').setAttribute('content', image);
  }, [title, description, url, image]);

  return null;
}
