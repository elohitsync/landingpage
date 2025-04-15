// Section: Testimonials
import React from 'react';

interface TestimonialsProps {
  lang: string;
  t: (lang: string, key: string) => string;
}

const testimonials = (lang: string, t: (lang: string, key: string) => string) => [
  {
    name: t(lang, 'testimonial1Name'),
    text: t(lang, 'testimonial1Text'),
  },
  {
    name: t(lang, 'testimonial2Name'),
    text: t(lang, 'testimonial2Text'),
  },
];

const Testimonials = ({ lang, t }: TestimonialsProps) => (
  <section className="py-16 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">{t(lang, 'testimonialsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials(lang, t).map((tst, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col">
            <p className="text-gray-700 dark:text-gray-200 italic mb-4">“{tst.text}”</p>
            <span className="font-semibold text-cyan-600">{tst.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
