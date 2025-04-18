// Section: Footer
import React from 'react';

interface FooterProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const Footer = ({ lang, t }: FooterProps) => (
  <footer className="py-10 bg-gray-900 text-gray-300">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h4 className="font-bold text-lg mb-2">ELOHIT SYNC</h4>
        <ul className="space-y-1">
          <li><a href="#servicos" className="hover:text-cyan-400">{t(lang, 'services')}</a></li>
          <li><a href="#cases" className="hover:text-cyan-400">{t(lang, 'testimonialsTitle')}</a></li>
          <li><a href="#contato" className="hover:text-cyan-400">{t(lang, 'cta')}</a></li>
        </ul>
      </div>
      <div className="flex gap-4">
        {/* Social icons podem ser importados do lucide-react */}
        <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-cyan-400">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener" className="hover:text-cyan-400">GitHub</a>
      </div>
      <div className="text-sm text-gray-400">
        © {new Date().getFullYear()} Elohit Sync. {t(lang, 'allRightsReserved')}<br />
        <a href="#privacidade" className="hover:text-cyan-400">{t(lang, 'privacyPolicy')}</a> · <a href="#termos" className="hover:text-cyan-400">{t(lang, 'termsOfUse')}</a>
      </div>
    </div>
  </footer>
);

export default Footer;
