'use client';

import React from 'react';
import * as framerMotion from 'framer-motion';
import { Card } from '@/components/ui/card';
import CTABanner from '@/components/HeroCTA';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import {
  CheckCircle,
  Clock,
  Shield,
  BarChart3,
  Users,
  FileText,
  Calculator,
  Sparkles,
  Building2,
  Scale,
  TrendingUp,
  Zap,
  ArrowRight,
  Target,
  Layers,
  Play,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesUlpiano from '@/components/sections/ServicesUlpiano';
import { SegmentsProfessionals } from '@/components/sections/SegmentsProfessionals';
import { trackCTA } from '@/lib/tracking';
import { useLandingTracking } from '@/lib/hooks/useLandingTracking';
import { HeroBackground } from '@/components/hero/HeroBackground';
import { AnimatedBadge } from '@/components/hero/AnimatedBadge';
import { InheritanceVisualization } from '@/components/hero/InheritanceVisualization';

// Componente Hero específico para producto — Rediseño inmersivo premium
function ProductHero() {
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
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden text-white"
      >
        {/* Premium animated background */}
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* ===== LEFT COLUMN — Message ===== */}
            <framerMotion.motion.div 
              style={{ opacity: textOpacity, y: textY }}
              className="relative flex flex-col items-start max-w-[580px]"
            >
              <AnimatedBadge text="Plataforma de Inteligencia Sucesoria" />

              {/* Decorative glow behind h1 */}
              <div className="absolute top-16 -left-10 sm:-left-20 w-[280px] sm:w-[400px] h-[200px] bg-blue-500/[0.08] rounded-full blur-[100px] pointer-events-none" />

              <framerMotion.motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                className="relative text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-6"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                  Control total
                </span>
                <br />
                <span className="text-white/90">
                  sobre cada expediente{' '}
                </span>
                <span className="text-white/90">
                  sucesorio.
                </span>
              </framerMotion.motion.h1>

              <framerMotion.motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="text-base md:text-xl text-white/60 leading-relaxed max-w-[500px] mb-8 font-light"
              >
                Automatiza la gestión de herencias con inteligencia artificial.
                La plataforma que eligen abogados, notarías y asesorías para
                planificar, calcular y ejecutar sucesiones.
              </framerMotion.motion.p>

              <framerMotion.motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <Link
                  href="/demo"
                  onClick={() => trackCTA('solicitar_demo', 'hero')}
                >
                  <LuminaryButton
                    size="lg"
                    variant="glow"
                    className="px-8 py-4 font-semibold text-base"
                    data-cta-name="solicitar_demo"
                    data-cta-location="hero"
                  >
                    Solicitar demo
                  </LuminaryButton>
                </Link>
                <Link
                  href="#demo"
                  onClick={() => trackCTA('ver_como_funciona', 'hero')}
                  className="group flex items-center gap-2.5 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/[0.05] group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                    <Play className="w-4 h-4 ml-0.5" />
                  </span>
                  <span className="text-sm font-medium">Ver cómo funciona</span>
                </Link>
              </framerMotion.motion.div>

              {/* Floating mini stat badges for visual weight */}
              <framerMotion.motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-3 mb-8"
              >
                {[
                  { text: '18 CCAA', sub: 'cubiertas' },
                  { text: '+2.500', sub: 'expedientes' },
                  { text: 'IA', sub: 'integrada' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
                  >
                    <span className="text-sm font-semibold text-white/85">{stat.text}</span>
                    <span className="text-xs text-white/40">{stat.sub}</span>
                  </div>
                ))}
              </framerMotion.motion.div>
            </framerMotion.motion.div>

            {/* ===== RIGHT COLUMN — Interactive Visualization ===== */}
            <framerMotion.motion.div
              style={{ scale: vizScale, y: vizY }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="hidden lg:block"
            >
              <InheritanceVisualization />
            </framerMotion.motion.div>

            {/* Mobile: show static dashboard image instead of interactive viz */}
            <framerMotion.motion.div
              style={{ scale: vizScale, y: vizY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="lg:hidden mb-4"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src="/ulpiano-backoffice.png"
                    alt="Vista del panel de control de Ulpiano"
                    fill
                    className="object-cover object-[center_70%]"
                    priority
                    sizes="(max-width: 768px) 95vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 to-transparent pointer-events-none" />
                </div>
              </div>
            </framerMotion.motion.div>
          </div>
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

// Sección de beneficios clave
function KeyBenefits() {
  const benefits = [
    {
      icon: <Clock className="size-6" />,
      metric: 'De 12h a 6h',
      description: 'por expediente',
    },
    {
      icon: <Shield className="size-6" />,
      metric: 'Seguridad jurídica',
      description: 'en cada paso',
    },
    {
      icon: <BarChart3 className="size-6" />,
      metric: 'Visualizaciones',
      description: 'y reporting para clientes',
    },
    {
      icon: <Users className="size-6" />,
      metric: 'Fidelización',
      description: 'y mejor experiencia para herederos',
    },
  ];

  return (
    <section className="relative isolate full-bleed overflow-x-hidden py-24 bg-white">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Resultados que transforman tu práctica
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
            Métricas reales que demuestran el impacto de Ulpiano en la gestión
            de herencias
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            return (
              <AnimatedSection
                key={index}
                className={`fade-in-up ${delays[index]} h-full`}
              >
                <div className="bg-slate-50/50 rounded-3xl p-8 text-center h-full flex flex-col border border-black/[0.03] hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    <div className="grid size-14 place-items-center rounded-2xl bg-white shadow-sm border border-black/5 text-slate-700">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 tracking-tight">
                    {benefit.metric}
                  </div>
                  <p className="text-slate-500 flex-grow font-medium text-lg">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sección de casos de uso
function UseCases() {
  const cases = [
    {
      icon: <Building2 className="size-8" />,
      title: 'Notarías',
      description: 'Digitaliza expedientes y reduce picos de trabajo',
      features: [
        'Gestión centralizada',
        'Reducción de errores',
        'Mejor organización',
      ],
    },
    {
      icon: <Scale className="size-8" />,
      title: 'Abogados',
      description: 'Ofrece tramitaciones más rápidas y con mejor comunicación',
      features: [
        'Automatización documental',
        'Comunicación mejorada',
        'Eficiencia operativa',
      ],
    },
    {
      icon: <Calculator className="size-8" />,
      title: 'Asesorías',
      description: 'Centraliza la gestión patrimonial en una sola herramienta',
      features: [
        'Gestión fiscal',
        'Planificación patrimonial',
        'Cumplimiento normativo',
      ],
    },
    {
      icon: <TrendingUp className="size-8" />,
      title: 'Asesores Financieros',
      description: 'Planifica con escenarios claros y valor añadido',
      features: [
        'Simulaciones fiscales',
        'Visualizaciones claras',
        'Valor añadido',
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-[#fbfbfd]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Adaptado a cada profesional
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
            Soluciones específicas para las necesidades de cada tipo de profesional
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((useCase, index) => {
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            return (
              <AnimatedSection
                key={index}
                className={`fade-in-up ${delays[index]}`}
              >
                <div className="p-8 h-full bg-white rounded-3xl border border-black/5 shadow-xl shadow-black/[0.02] hover:shadow-2xl hover:shadow-black/[0.04] transition-all duration-500 hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    <div className="grid size-16 place-items-center rounded-2xl bg-slate-50 border border-black/5 text-slate-700">
                      {useCase.icon}
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4 text-center text-slate-900 tracking-tight"
                  >
                    {useCase.title}
                  </h3>
                  <p className="text-slate-500 text-center mb-8 font-light leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-[15px]"
                      >
                        <CheckCircle className="size-5 text-slate-400 shrink-0" />
                        <span className="text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Componente: Plataforma integral
function PlatformOverview() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]"
          >
            La plataforma integral que revoluciona la gestión de herencias con
            tecnología de vanguardia
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection className="fade-in-up">
            <div className="bg-slate-50/50 rounded-3xl border border-black/[0.03] p-10 h-full hover:bg-slate-50 transition-colors">
              <div className="flex justify-center mb-6">
                <div className="grid size-16 place-items-center rounded-2xl bg-white shadow-sm border border-black/5 text-blue-600">
                  <Scale className="size-8" />
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-center text-slate-900 tracking-tight"
              >
                Centralización completa
              </h3>
              <p className="text-slate-500 text-center font-light leading-relaxed text-lg">
                Centraliza todos los procesos de sucesiones en un solo entorno
                digital.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-100">
            <div className="bg-slate-50/50 rounded-3xl border border-black/[0.03] p-10 h-full hover:bg-slate-50 transition-colors">
              <div className="flex justify-center mb-6">
                <div className="grid size-16 place-items-center rounded-2xl bg-white shadow-sm border border-black/5 text-violet-600">
                  <Zap className="size-8" />
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-center text-slate-900 tracking-tight"
              >
                Reducción de errores
              </h3>
              <p className="text-slate-500 text-center font-light leading-relaxed text-lg">
                Reduce tiempos y errores con inteligencia documental y flujos
                automatizados.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-slate-50/50 rounded-3xl border border-black/[0.03] p-10 h-full hover:bg-slate-50 transition-colors">
              <div className="flex justify-center mb-6">
                <div className="grid size-16 place-items-center rounded-2xl bg-white shadow-sm border border-black/5 text-emerald-600">
                  <Shield className="size-8" />
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-4 text-center text-slate-900 tracking-tight"
              >
                Seguridad jurídica
              </h3>
              <p className="text-slate-500 text-center font-light leading-relaxed text-lg">
                Gana seguridad jurídica, eficiencia y mejor comunicación con
                clientes y herederos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Componente: Ahorra tiempo, involucra clientes
function TimeSavingFeatures() {
  return (
    <section className="relative isolate full-bleed overflow-x-hidden py-24 bg-[#fbfbfd]">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Ahorra tiempo, involucra clientes, entrega más
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Las visualizaciones de planificación sucesoria de Ulpiano ayudan a
            los asesores a simplificar conversaciones sobre estructuras de
            planificación sucesoria sofisticadas.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatedSection className="fade-in-up">
            <div className="bg-white rounded-3xl border border-black/5 shadow-xl shadow-black/[0.02] p-10 h-full hover:-translate-y-1 transition-transform duration-500">
              <div className="flex justify-center mb-6">
                <div className="grid size-16 place-items-center rounded-2xl bg-slate-50 border border-black/5 text-slate-700">
                  <Target className="size-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 tracking-tight">
                Ver el panorama completo
              </h3>
              <p className="text-slate-500 text-center font-light leading-relaxed">
                Da a los clientes una visión clara del impacto de su plan
                sucesorio. Compara cambios hipotéticos en la planificación
                sucesoria con unos clics. Muestra exactamente quién recibe qué y
                cuándo.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-100">
            <div className="bg-white rounded-3xl border border-black/5 shadow-xl shadow-black/[0.02] p-10 h-full hover:-translate-y-1 transition-transform duration-500">
              <div className="flex justify-center mb-6">
                <div className="grid size-16 place-items-center rounded-2xl bg-slate-50 border border-black/5 text-slate-700">
                  <Layers className="size-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 tracking-tight">
                Simplifica la complejidad
              </h3>
              <p className="text-slate-500 text-center font-light leading-relaxed">
                Comprende rápidamente la estructura y estrategia detrás de
                cualquier fideicomiso con diagramas de una sola página y vistas
                de resumen. Claridad que antes tomaba horas, ahora toma minutos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-white rounded-3xl border border-black/5 shadow-xl shadow-black/[0.02] p-10 h-full hover:-translate-y-1 transition-transform duration-500">
              <div className="flex justify-center mb-6">
                <div className="grid size-16 place-items-center rounded-2xl bg-slate-50 border border-black/5 text-slate-700">
                  <Target className="size-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 tracking-tight">
                Eleva tus materiales
              </h3>
              <p className="text-slate-500 text-center font-light leading-relaxed">
                Haz que las conversaciones de estrategia sean simples, sin
                perder profundidad. Construimos el generador de presentaciones
                de Ulpiano para que personalices materiales para cada cliente
                con solo unos clics.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function Home({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  // Activar tracking de landing (scroll_depth)
  useLandingTracking();

  return (
    <>
      {/* Hero específico para producto - full width */}
      <ProductHero />

      {/* Funcionalidades de Ulpiano - full width */}
      <ServicesUlpiano />

      {/* Pensado para Profesionales - full width */}
      <SegmentsProfessionals />

      {/* Plataforma integral - full width */}
      <PlatformOverview />

      {/* Beneficios clave - full width */}
      <KeyBenefits />

      {/* Casos de uso - full width */}
      <UseCases />

      {/* Ahorra tiempo, involucra clientes - full width */}
      <TimeSavingFeatures />

      {/* CTA Banner Final - full width */}
      <CTABanner
        title="Empieza a usar la herramienta del mañana en la gestión de herencias"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </>
  );
}
