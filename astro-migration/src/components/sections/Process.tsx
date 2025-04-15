// Section: Process
import React from 'react';

interface ProcessProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const steps = (lang: string, t: (lang: string, key: string) => string) => [
  { title: t(lang, 'step1Title'), desc: t(lang, 'step1Desc') },
  { title: t(lang, 'step2Title'), desc: t(lang, 'step2Desc') },
  { title: t(lang, 'step3Title'), desc: t(lang, 'step3Desc') },
];

const Process = ({ lang, t }: ProcessProps) => (
  <section className="py-16 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">{t(lang, 'processTitle')}</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {steps(lang, t).map((step, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex-1 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
