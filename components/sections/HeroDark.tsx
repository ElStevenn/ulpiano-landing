'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import DashboardHeroImage from "@/components/marketing/DashboardHeroImage";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LuminaryButton } from "@/components/ui/LuminaryButton";
import HeroTitle from "@/app/(marketing)/_components/HeroTitle";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroDark() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Software líder en gestión de herencias</span>
          </div>

          {/* Main title */}
          <AnimatedSection className="fade-in-up delay-100">
            <HeroTitle />
          </AnimatedSection>
          
          <AnimatedSection className="fade-in-up delay-200">
            <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-6xl mx-auto">
              Inteligencia artificial, automatización de procesos y seguridad en trámites más ágiles, precisos y sin errores.
            </p>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-300">
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
          </AnimatedSection>


        </div>

        {/* Product preview - centered below text */}
        <AnimatedSection className="fade-in-up delay-400">
          <div className="mt-20">
            <div className="mx-auto max-w-[1600px]">
              <DashboardHeroImage />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}


