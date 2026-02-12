'use client';

import { useEffect, useRef, useState } from 'react';

function Particles() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.4 + 0.05,
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            background: p.id % 3 === 0
              ? 'rgba(139, 92, 246, 0.6)'
              : p.id % 3 === 1
                ? 'rgba(59, 130, 246, 0.5)'
                : 'rgba(6, 182, 212, 0.4)',
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="0.6" fill="white" />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dot-grid)" mask="url(#grid-mask)" />
      </svg>
    </div>
  );
}

function SpotlightEffect() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(59, 130, 246, 0.07), transparent 50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="absolute inset-0 pointer-events-none transition-[background] duration-500"
    />
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ultra-deep base — near black */}
      <div className="absolute inset-0" style={{ background: '#030712' }} />

      {/* Multi-layered radial gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_70%_at_50%_-30%,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_85%_40%,rgba(139,92,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_70%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_70%_20%,rgba(168,85,247,0.06),transparent_50%)]" />

      {/* Animated gradient orbs — larger, more layered */}
      <div className="absolute top-[15%] left-[20%] w-[600px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[150px] float-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] bg-violet-500/[0.05] rounded-full blur-[130px] float-medium" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/[0.03] rounded-full blur-[160px] float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-indigo-500/[0.05] rounded-full blur-[120px] float-gentle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-purple-500/[0.04] rounded-full blur-[100px] float-medium" style={{ animationDelay: '3s' }} />

      {/* Light cone from top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(59, 130, 246, 0.04) 45%, rgba(139, 92, 246, 0.06) 50%, rgba(59, 130, 246, 0.04) 55%, transparent 60%)',
        }}
      />

      {/* Dot grid pattern */}
      <DotGrid />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Particles */}
      <Particles />

      {/* Mouse spotlight */}
      <SpotlightEffect />

      {/* Top edge glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </div>
  );
}
