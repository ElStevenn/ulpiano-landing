'use client';

import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import { CheckCircle, ArrowRight, Play } from 'lucide-react';

export default function ProcesamientoInteligenteHero() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedSection className="fade-in-up delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Digitaliza y Simplifica
                </span>
                <br />
                <span className="text-white">
                  la Gestión de Documentos Sucesorios
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-200">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Agiliza el proceso de herencia con tecnología de Inteligencia
                Artificial que extrae y organiza la información clave de cada
                documento, ahorrando tiempo y minimizando errores.
              </p>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo">
                  <LuminaryButton
                    variant="primary"
                    size="lg"
                    className="px-8 py-4 font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      Comienza Ahora
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </LuminaryButton>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-300 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Solicita una Demo
                    </span>
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
