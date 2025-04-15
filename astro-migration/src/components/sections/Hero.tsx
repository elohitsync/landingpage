// Section: Hero
import React from 'react';

interface HeroProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const Hero = ({ lang, t }: HeroProps) => (
  <section className="hero-section py-20 text-center bg-gradient-to-b from-gray-900 to-gray-800">
    <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
      {t(lang, 'heroTitle')}
    </h1>
    <p className="text-xl text-gray-200 mb-8">
      {t(lang, 'heroSubtitle')}
    </p>
    <div className="flex justify-center gap-4">
      <a href="#contato" className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold shadow-md hover:bg-cyan-600 transition">{t(lang, 'cta')}</a>
      <a href="#servicos" className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition">{t(lang, 'services')}</a>
    </div>
    {/* Imagem/ilustração animada pode ser adicionada aqui */}
  </section>
);

export default Hero;
