import React, { useEffect, useRef } from 'react';

const logos = [
  { src: '/logo-facebook.png', alt: 'Logo Facebook' },
  { src: '/logo-instagram.png', alt: 'Logo Instagram' },
  { src: '/logo-whatsapp.png', alt: 'Logo WhatsApp' },
  { src: '/logo-supabase.png', alt: 'Logo Supabase' },
  { src: '/logo-cursor.png', alt: 'Logo Cursor' },
  { src: '/logo-claude.png', alt: 'Logo Claude' },
  { src: '/logo-gemini.png', alt: 'Logo Gemini' },
  { src: '/logo-openai.png', alt: 'Logo OpenAI' },
  { src: '/logo-branch.png', alt: 'Logo Branch' },
];

// Tamanho padrão das logos flutuantes (altura de botão simples)
const LOGO_SIZE = 48; // px

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

export default function FloatingLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const logoEls = Array.from(container.children) as HTMLElement[];
    logoEls.forEach((el, i) => {
      el.style.position = 'absolute';
      el.style.transition = 'transform 2.5s cubic-bezier(.4,2,.6,1)';
      const move = () => {
        const top = getRandom(0, 40); // porcentagem do topo
        const left = getRandom(5, 85); // porcentagem da largura
        el.style.transform = `translate(${left}vw, ${top}px)`;
      };
      move();
      setInterval(move, getRandom(2000, 5000));
    });
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', height: LOGO_SIZE + 30, minHeight: LOGO_SIZE + 30 }}>
      {logos.map((logo, i) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          style={{ height: LOGO_SIZE, width: 'auto', aspectRatio: '1/1', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.10))', background: 'transparent' }}
          draggable={false}
          tabIndex={-1}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
