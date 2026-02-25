'use client';

import React, { useEffect } from 'react';
import * as framerMotion from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { pricingConfig } from '@/pricing.config';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { trackCTA, trackSectionView } from '@/lib/tracking';
import { HeroBackground } from '@/components/hero/HeroBackground';

type Props = {
  isAnnual: boolean;
  onToggleBilling: () => void;
  onOpenSales?: () => void;
};

export default function PricingHero({
  isAnnual: _isAnnual,
  onToggleBilling: _onToggleBilling,
  onOpenSales,
}: Props) {
  useEffect(() => {
    trackSectionView('pricing_hero');
  }, []);

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
            
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Precios transparentes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-white mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Planes diseñados para profesionales
            </span>
            <span className="block text-white">de la sucesión</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Desde quienes comienzan a digitalizar su despacho hasta quienes
            gestionan herencias de forma continuada. ulpiano.es crece contigo.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 opacity-80">
            {pricingConfig.logos.map((logo, idx) => (
              <div key={idx} className="h-8 w-24 relative grayscale">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  onOpenSales?.();
                  trackCTA('solicitar_demo', 'pricing_hero');
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                aria-label="Solicita una demo personalizada"
                data-cta-name="solicitar_demo"
                data-cta-location="pricing_hero"
              >
                <span className="flex items-center gap-2">
                  Solicita una demo personalizada
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
              </button>

              <a
                href={pricingConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA('empezar_freemium', 'pricing_hero')}
              >
                <button
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-300 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  aria-label="Empieza ahora con el plan Freemium"
                  data-cta-name="empezar_freemium"
                  data-cta-location="pricing_hero"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Empieza ahora con el plan Freemium
                  </span>
                </button>
              </a>
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
