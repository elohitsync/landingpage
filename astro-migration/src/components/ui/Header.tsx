import React from 'react';
import FloatingLogos from './FloatingLogos';

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-6 bg-white dark:bg-gray-950 relative z-20 shadow-sm">
      <div className="flex flex-col items-center w-full max-w-5xl">
        {/* Logo ElohitSync oficial */}
        <img
          src="/logo-elohitsync.png"
          alt="ElohitSync Logo"
          className="h-24 sm:h-32 md:h-40 mb-2 drop-shadow-lg select-none"
          style={{ objectFit: 'contain', marginBottom: 16 }}
          draggable={false}
        />
        {/* Título do site (opcional, pode ser removido se não quiser texto) */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-700 tracking-tight text-center mb-2">
          Elohit Sync
        </h1>
        {/* Logos flutuantes */}
        <FloatingLogos />
      </div>
    </header>
  );
}
