// Language Switcher UI
import React from 'react';

interface Props {
  lang: string;
  onChange: (lang: string) => void;
}

const LanguageSwitcher: React.FC<Props> = ({ lang, onChange }) => (
  <div className="flex gap-2 items-center">
    <button
      className={`px-3 py-1 rounded ${lang === 'pt' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      onClick={() => onChange('pt')}
      aria-label="Português"
    >PT</button>
    <button
      className={`px-3 py-1 rounded ${lang === 'en' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      onClick={() => onChange('en')}
      aria-label="English"
    >EN</button>
  </div>
);

export default LanguageSwitcher;
