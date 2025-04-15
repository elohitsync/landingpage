// Simple tracking (Google Analytics example)
export function trackPageView() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view');
  }
}

export function injectGtag(trackingId: string) {
  if (typeof window !== 'undefined') {
    if (!document.getElementById('gtag-js')) {
      const script = document.createElement('script');
      script.id = 'gtag-js';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', trackingId);
    }
  }
}
