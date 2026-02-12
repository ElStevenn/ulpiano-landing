'use client';

import Image from 'next/image';
import { pricingConfig } from '@/pricing.config';
import { useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { trackCTA, trackSectionView } from '@/lib/tracking';

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

  return (
    <section className="relative w-full text-center overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background orbs to match home hero mood */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="py-24 md:py-28">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Precios transparentes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
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

          <AnimatedSection className="fade-in-up delay-200">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
