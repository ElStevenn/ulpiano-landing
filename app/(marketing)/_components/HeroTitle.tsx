'use client';

export default function HeroTitle() {
  return (
    <h1 
      className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] text-white"
      aria-live="polite"
      aria-label="Potencia tu negocio con el software líder en gestión de herencias"
    >
      <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Potencia tu negocio
      </span>
      <br className="hidden md:block" />
      <span className="text-white">con el software líder en gestión de herencias</span>
    </h1>
  );
}

