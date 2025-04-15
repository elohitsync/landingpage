// Section: WhatWeDo
import React from 'react';

interface WhatWeDoProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const WhatWeDo = ({ lang, t }: WhatWeDoProps) => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-600">{t(lang, 'whatWeDoTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <span className="text-cyan-500 text-4xl mb-2">🤖</span>
          <h3 className="font-semibold text-lg">{t(lang, 'gptTitle')}</h3>
          <p className="text-gray-500 text-center">{t(lang, 'gptDesc')}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-cyan-500 text-4xl mb-2">🔗</span>
          <h3 className="font-semibold text-lg">{t(lang, 'apiTitle')}</h3>
          <p className="text-gray-500 text-center">{t(lang, 'apiDesc')}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-cyan-500 text-4xl mb-2">⚙️</span>
          <h3 className="font-semibold text-lg">{t(lang, 'rpaTitle')}</h3>
          <p className="text-gray-500 text-center">{t(lang, 'rpaDesc')}</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDo;
