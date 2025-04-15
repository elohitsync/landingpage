// Simple cookie consent hook
import { useEffect, useState } from 'react';

export function useCookieConsent() {
  const [consent, setConsent] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookie_consent') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (consent) {
      localStorage.setItem('cookie_consent', 'true');
    }
  }, [consent]);

  return [consent, setConsent] as const;
}
