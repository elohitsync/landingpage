// Section: UseCases
import React from 'react';

interface UseCasesProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const useCases = (lang: string, t: (lang: string, key: string) => string) => [
  { title: t(lang, 'retail'), desc: t(lang, 'retailDesc') },
  { title: t(lang, 'finance'), desc: t(lang, 'financeDesc') },
  { title: t(lang, 'hr'), desc: t(lang, 'hrDesc') },
  { title: t(lang, 'health'), desc: t(lang, 'healthDesc') },
];

const UseCases = ({ lang, t }: UseCasesProps) => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">{t(lang, 'useCasesTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCases(lang, t).map((uc, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{uc.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{uc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
