// Section: Benefits
import React from 'react';

interface BenefitsProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const benefits = (lang: string, t: (lang: string, key: string) => string) => [
  {
    icon: '🚀',
    title: t(lang, 'benefit1Title'),
    desc: t(lang, 'benefit1Desc'),
  },
  {
    icon: '💡',
    title: t(lang, 'benefit2Title'),
    desc: t(lang, 'benefit2Desc'),
  },
  {
    icon: '🔒',
    title: t(lang, 'benefit3Title'),
    desc: t(lang, 'benefit3Desc'),
  },
];

const Benefits = ({ lang, t }: BenefitsProps) => (
  <section className="py-16 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">{t(lang, 'benefitsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits(lang, t).map((b, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <span className="text-5xl mb-4">{b.icon}</span>
            <h3 className="font-semibold text-xl mb-2">{b.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
