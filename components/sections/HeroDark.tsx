'use client';

import React, { useState, useEffect } from "react";
import * as framerMotion from 'framer-motion';
import Link from "next/link";
import DashboardHeroImage from "@/components/marketing/DashboardHeroImage";
import { LuminaryButton } from "@/components/ui/LuminaryButton";
import HeroTitle from "@/app/(marketing)/_components/HeroTitle";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { HeroBackground } from '@/components/hero/HeroBackground';

export default function HeroDark() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = framerMotion.useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = framerMotion.useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = framerMotion.useTransform(scrollYProgress, [0, 0.4], ['0%', '20%']);
  const vizScale = framerMotion.useTransform(scrollYProgress, [0, 0.8], [1, 1.15]);
  const vizY = framerMotion.useTransform(scrollYProgress, [0, 0.8], ['0%', '10%']);
  const bgOpacity = framerMotion.useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh]" style={{ background: '#030712' }}>
      <framerMotion.motion.div 
        style={{ opacity: bgOpacity }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white pt-20"
      >
        <HeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <framerMotion.motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Software líder en gestión de herencias</span>
            </div>

            {/* Main title */}
            <div>
              <HeroTitle />
            </div>
            
            <div>
              <p className="mt-6 text-xl md:text-2xl text-white/60 leading-relaxed max-w-6xl mx-auto font-light">
                Inteligencia artificial, automatización de procesos y seguridad en trámites más ágiles, precisos y sin errores.
              </p>
            </div>

            <div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="#how">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2">
                      Solicita una demo personalizada
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  </button>
                </Link>
                
                <Link href="#demo">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-300 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Empieza tu prueba gratuita de 14 días
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </framerMotion.motion.div>

          {/* Product preview - centered below text */}
          <framerMotion.motion.div 
            style={{ scale: vizScale, y: vizY }}
            className="mt-20"
          >
            <div className="mx-auto max-w-[1600px]">
              <DashboardHeroImage />
            </div>
          </framerMotion.motion.div>
        </div>

        {/* Scroll indicator */}
        <framerMotion.motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </framerMotion.motion.div>

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
