'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Home,
  Building2,
  CreditCard,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Percent,
} from 'lucide-react';

const ACCENTS = {
  planning: 'var(--color-luminary-blue)', 
  automation: '#7c3aed', 
  tax: 'var(--color-luminary-success)', 
};

function AccentGlow({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-8 -z-10 blur-[80px] opacity-30"
      style={{
        background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
      }}
    />
  );
}

// Glassmorphism cards
function Panel360() {
  return (
    <div className="relative rounded-3xl border border-black/5 bg-white/60 backdrop-blur-2xl p-8 shadow-2xl shadow-black/[0.03] dark:border-white/10 dark:bg-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Bienes */}
        <div className="rounded-2xl border border-black/5 bg-white/50 p-5 dark:border-white/5 dark:bg-black/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid size-10 place-items-center rounded-full bg-blue-100/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Home className="size-5" />
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">
              Bienes
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Home className="size-4" />
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Valor inmueble: 330.000 €
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Building2 className="size-4" />
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Cuenta bancaria: 231.055 €
              </div>
            </div>
          </div>
        </div>

        {/* Deudas */}
        <div className="rounded-2xl border border-black/5 bg-white/50 p-5 dark:border-white/5 dark:bg-black/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid size-10 place-items-center rounded-full bg-red-100/50 text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <FileText className="size-5" />
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">
              Deudas
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Préstamo Hipotecario: 31.000 €
            </div>
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-xl bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 flex-shrink-0">
                <CreditCard className="size-4" />
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Tarjeta crédito: 1.090 €
              </div>
            </div>
          </div>
        </div>

        {/* Escenarios */}
        <div className="rounded-2xl border border-black/5 bg-white/50 p-5 dark:border-white/5 dark:bg-black/20 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid size-10 place-items-center rounded-full bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              <TrendingUp className="size-5" />
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">
              Escenarios
            </div>
          </div>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">
            Simulación de reparto
          </div>
          <div className="mt-auto flex items-end justify-center gap-2 h-16">
            {[24, 36, 18, 42].map((h, i) => (
              <div
                key={i}
                className="w-5 rounded-full bg-emerald-500/40"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DocAuto() {
  return (
    <div className="relative rounded-3xl border border-black/5 bg-white/60 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/[0.03] dark:border-white/10 dark:bg-white/5 overflow-hidden">
      <div className="relative w-full h-auto overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900">
        <div className="transform scale-[1.02] origin-center transition-transform duration-700 hover:scale-[1.05]">
          <Image
            src="/imagen1.png"
            alt="Panel de documentación y perfil del causante"
            width={552}
            height={186}
            className="w-full h-auto rounded-2xl shadow-sm"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function TaxForm() {
  return (
    <div className="relative rounded-3xl border border-black/5 bg-white/60 backdrop-blur-2xl p-8 shadow-2xl shadow-black/[0.03] dark:border-white/10 dark:bg-white/5">
      <div className="space-y-6">
        {/* Modelo 650 */}
        <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 shadow-sm">
          <div className="grid size-12 place-items-center rounded-full bg-emerald-100/60 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <Calculator className="size-6" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Modelo 650 – Quota: 3.200 €
            </div>
            <div className="h-2 w-full rounded-full bg-emerald-100 dark:bg-emerald-900/30 overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-emerald-500" />
            </div>
          </div>
          <Percent className="size-6 text-emerald-500/40" />
        </div>

        {/* Modelo 660 */}
        <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 shadow-sm">
          <div className="grid size-12 place-items-center rounded-full bg-indigo-100/60 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            <FileSpreadsheet className="size-6" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Modelo 660 – Inventario
            </div>
            <div className="h-2 w-full rounded-full bg-indigo-100 dark:bg-indigo-900/30 overflow-hidden">
              <div className="h-full w-full rounded-full bg-indigo-500" />
            </div>
          </div>
          <Percent className="size-6 text-indigo-500/40" />
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    id: 'planning',
    title: 'Planificación Integral',
    icon: <LayoutDashboard className="size-6 text-blue-500" />,
    color: ACCENTS.planning,
    items: [
      {
        title: 'Registro Completo',
        desc: 'Consolida bienes, derechos y deudas en un único panel para obtener una visión 360° del patrimonio.',
      },
      {
        title: 'Simulación y Optimización',
        desc: 'Evalúa distintos escenarios sucesorios, adaptando la distribución y aprovechando reducciones fiscales según la normativa.',
      },
    ],
    visual: <Panel360 />,
  },
  {
    id: 'automation',
    title: 'Automatización y Documentación',
    icon: <FileText className="size-6 text-violet-500" />,
    color: ACCENTS.automation,
    items: [
      {
        title: 'Documentos a Medida',
        desc: 'La IA elabora borradores de testamentos, pactos sucesorios y escrituras, personalizados según las asignaciones configuradas.',
      },
      {
        title: 'Validación Colaborativa',
        desc: 'Permite la revisión y ajustes en tiempo real por parte de abogados, notarías y asesores.',
      },
    ],
    visual: <DocAuto />,
  },
  {
    id: 'tax',
    title: 'Gestión Fiscal y Normativa',
    icon: <BarChart3 className="size-6 text-emerald-500" />,
    color: ACCENTS.tax,
    items: [
      {
        title: 'Cálculos y Reducciones',
        desc: 'Automatiza la preparación de modelos oficiales (650, 651, 652, 653, 660) y liquidación de impuestos, garantizando cumplimiento normativo.',
      },
      {
        title: 'Control de Requisitos',
        desc: 'Verifica la continuidad de actividad y afectación real de bienes para asegurar la reducción fiscal.',
      },
    ],
    visual: <TaxForm />,
  },
];

export default function ServicesUlpiano() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const threshold = 1 / features.length;
    let newIndex = Math.floor(latest / threshold);
    if (newIndex >= features.length) newIndex = features.length - 1;
    if (newIndex < 0) newIndex = 0;
    setActiveIndex(newIndex);
  });

  return (
    <section ref={containerRef} id="services" className="relative py-24 md:py-32 bg-[#fbfbfd]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-slate-900 leading-[1.1]">
            Funcionalidades de Ulpiano
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Todo lo que necesitas para gestionar herencias con precisión, desde el registro inicial hasta la liquidación de impuestos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start relative">
          {/* Scrolling Text Side */}
          <div className="space-y-32 py-10 lg:py-48 relative z-10">
            {features.map((feature, idx) => (
              <div 
                key={feature.id} 
                className={cn(
                  "relative transition-opacity duration-500",
                  activeIndex === idx ? "opacity-100" : "opacity-30 lg:opacity-30"
                )}
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="grid size-14 place-items-center rounded-2xl bg-white shadow-sm border border-black/5 text-slate-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="space-y-10">
                  {feature.items.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-lg text-slate-600 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mobile visual inline */}
                <div className="block lg:hidden mt-14 relative">
                  <AccentGlow color={feature.color} />
                  {feature.visual}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Visual Side (Desktop only) */}
          <div className="hidden lg:block sticky top-0 h-screen w-full py-32">
            <div className="relative w-full h-full flex items-center justify-center">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  initial={false}
                  animate={{
                    opacity: activeIndex === idx ? 1 : 0,
                    scale: activeIndex === idx ? 1 : 0.95,
                    y: activeIndex === idx ? 0 : 30,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-full max-w-2xl relative pointer-events-auto">
                    <AccentGlow color={feature.color} />
                    {feature.visual}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
