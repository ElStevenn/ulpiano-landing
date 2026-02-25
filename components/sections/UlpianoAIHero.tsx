'use client';

import React from 'react';
import * as framerMotion from 'framer-motion';
import Link from 'next/link';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import { ArrowRight, Play } from 'lucide-react';
import { HeroBackground } from '@/components/hero/HeroBackground';

export default function UlpianoAIHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = framerMotion.useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = framerMotion.useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = framerMotion.useTransform(scrollYProgress, [0, 0.4], ['0%', '20%']);
  const bgOpacity = framerMotion.useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[120vh]" style={{ background: '#030712' }}>
      <framerMotion.motion.div 
        style={{ opacity: bgOpacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden text-white"
      >
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full">
          <framerMotion.motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  El asistente jurídico
                </span>
                <br />
                <span className="text-white">
                  que conoce tu expediente
                </span>
              </h1>
            </div>

            <div>
              <p className="text-base md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto font-light mb-8">
                Ulpiano AI analiza, recuerda y razona sobre cada detalle de tus casos para ayudarte a tomar mejores decisiones, más rápido y con más seguridad.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-blue-300 font-medium">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Un chat inteligente entrenado con la información real de tu expediente.
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo">
                  <LuminaryButton
                    variant="primary"
                    size="lg"
                    className="px-8 py-4 font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      Solicitar demo
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </LuminaryButton>
                </Link>
                <Link href="#como-funciona">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-300/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Ver cómo funciona
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          
          </framerMotion.motion.div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #030712)',
          }}
        />
      </framerMotion.motion.div>
    </section>
  );
}
