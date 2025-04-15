// Section: CallToAction
import React from 'react';

interface CallToActionProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const CallToAction = ({ lang, t }: CallToActionProps) => (
  <section className="py-16 bg-cyan-600 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">{t(lang, 'ctaTitle')}</h2>
    <p className="mb-8">{t(lang, 'ctaDesc')}</p>
    <a href="#contato" className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition">{t(lang, 'ctaButton')}</a>
  </section>
);

export default CallToAction;
