// Section: Services
import React from 'react';

interface ServicesProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const services = (lang: string, t: (lang: string, key: string) => string) => [
  { icon: '🧠', title: t(lang, 'service1Title'), desc: t(lang, 'service1Desc') },
  { icon: '🔗', title: t(lang, 'service2Title'), desc: t(lang, 'service2Desc') },
  { icon: '⚙️', title: t(lang, 'service3Title'), desc: t(lang, 'service3Desc') },
];

const Services = ({ lang, t }: ServicesProps) => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">{t(lang, 'services')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services(lang, t).map((s, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <span className="text-5xl mb-4">{s.icon}</span>
            <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
