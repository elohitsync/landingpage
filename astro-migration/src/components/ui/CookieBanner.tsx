// Cookie Consent Banner
import React from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

const CookieBanner = () => {
  const [consent, setConsent] = useCookieConsent();

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      <span className="mb-2 md:mb-0">Este site utiliza cookies para melhorar sua experiência. <a href="#privacidade" className="underline">Saiba mais</a>.</span>
      <button
        className="ml-4 px-6 py-2 bg-cyan-500 rounded hover:bg-cyan-600 font-semibold"
        onClick={() => setConsent(true)}
      >
        Aceitar
      </button>
    </div>
  );
};

export default CookieBanner;
