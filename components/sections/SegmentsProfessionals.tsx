'use client';

import { Fragment } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';
import { FamilySuccessionPlan } from './FamilySuccessionPlan';
import Image from 'next/image';

type Accent = 'blue' | 'green' | 'red' | 'yellow';

const accentToVar: Record<Accent, string> = {
  blue: 'var(--color-luminary-blue)',
  green: 'var(--color-luminary-success)',
  red: 'var(--color-luminary-alert)',
  yellow: 'var(--color-luminary-coral)',
};

function Glow({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -z-10 blur-[100px] opacity-10"
      style={{
        inset: '-10% -20% -10% -20%',
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)`,
      }}
    />
  );
}

function Surface({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur-2xl p-8 shadow-2xl shadow-black/[0.03]"
    >
      {children}
    </div>
  );
}

function DonutChart() {
  const legendItems = [
    {
      label: 'Optimización',
      percent: '52%',
      color: 'var(--color-luminary-success)',
      angle: 94,
    },
    {
      label: 'Escenarios',
      percent: '31%',
      color: 'var(--color-luminary-blue)',
      angle: 243,
    },
    {
      label: 'Impuestos',
      percent: '17%',
      color: 'var(--color-luminary-coral)',
      angle: 329,
    },
  ];

  return (
    <div className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/[0.03]">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-slate-900">
          Expedientes automatizados
        </h3>
      </div>

      {/* Donut Chart */}
      <div className="relative flex items-center justify-center mb-8 min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
        {/* SVG overlay para líneas de conexión - Responsive */}
        {/* Versión móvil */}
        <svg
          className="absolute inset-0 pointer-events-none w-full h-full sm:hidden"
          viewBox="0 0 320 320"
          preserveAspectRatio="xMidYMid meet"
        >
          {legendItems.map((item, index) => {
            const radian = ((item.angle - 90) * Math.PI) / 180;
            const centerX = 160;
            const centerY = 160;
            const circleRadius = 96;
            const lineEndRadius = 125;

            return (
              <line
                key={`mobile-${index}`}
                x1={centerX + Math.cos(radian) * circleRadius}
                y1={centerY + Math.sin(radian) * circleRadius}
                x2={centerX + Math.cos(radian) * lineEndRadius}
                y2={centerY + Math.sin(radian) * lineEndRadius}
                stroke={item.color}
                strokeWidth="2"
                strokeOpacity="0.2"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
        {/* Versión desktop */}
        <svg
          className="hidden sm:block absolute inset-0 pointer-events-none w-full h-full"
          viewBox="0 0 320 320"
          preserveAspectRatio="xMidYMid meet"
        >
          {legendItems.map((item, index) => {
            const radian = ((item.angle - 90) * Math.PI) / 180;
            const centerX = 160;
            const centerY = 160;
            const circleRadius = 112; 
            const lineEndRadius = 148; 

            return (
              <line
                key={`desktop-${index}`}
                x1={centerX + Math.cos(radian) * circleRadius}
                y1={centerY + Math.sin(radian) * circleRadius}
                x2={centerX + Math.cos(radian) * lineEndRadius}
                y2={centerY + Math.sin(radian) * lineEndRadius}
                stroke={item.color}
                strokeWidth="2"
                strokeOpacity="0.2"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* Donut */}
        <div
          className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full transition-transform duration-700 hover:scale-[1.03]"
          style={{
            background: `conic-gradient(var(--color-luminary-success) 0 52%, var(--color-luminary-blue) 52% 83%, var(--color-luminary-coral) 83% 100%)`,
          }}
        >
          {/* Círculo interior */}
          <div
            className="absolute inset-6 sm:inset-8 rounded-full flex items-center justify-center flex-col shadow-inner"
            style={{ background: '#fbfbfd' }}
          >
            <span className="text-3xl sm:text-4xl font-bold text-slate-800 tabular-nums tracking-tight">
              100%
            </span>
            <span className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Automatizados
            </span>
          </div>
        </div>

        {/* Porcentajes fuera del círculo - Responsive */}
        {legendItems.map((item, index) => {
          const radian = ((item.angle - 90) * Math.PI) / 180;

          const radiusMobile = index === 0 ? 146 : 140;
          const xMobile = Math.cos(radian) * radiusMobile;
          const yMobile = Math.sin(radian) * radiusMobile;

          const radiusDesktop = index === 0 ? 170 : 163;
          const xDesktop = Math.cos(radian) * radiusDesktop;
          const yDesktop = Math.sin(radian) * radiusDesktop;

          return (
            <Fragment key={index}>
              {/* Versión móvil */}
              <div
                className="absolute text-sm font-bold tabular-nums whitespace-nowrap z-10 sm:hidden"
                style={{
                  left: `calc(50% + ${xMobile}px)`,
                  top: `calc(50% + ${yMobile}px)`,
                  transform: 'translate(-50%, -50%)',
                  color: item.color,
                }}
              >
                {item.percent}
              </div>
              {/* Versión desktop */}
              <div
                className="hidden sm:block absolute text-lg font-bold tabular-nums whitespace-nowrap z-10"
                style={{
                  left: `calc(50% + ${xDesktop}px)`,
                  top: `calc(50% + ${yDesktop}px)`,
                  transform: 'translate(-50%, -50%)',
                  color: item.color,
                }}
              >
                {item.percent}
              </div>
            </Fragment>
          );
        })}
      </div>

      {/* Leyenda mejorada */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {legendItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors border border-black/[0.03]"
          >
            <span
              className="h-3 w-3 rounded-full shrink-0 shadow-sm"
              style={{ background: item.color }}
            />
            <span className="text-sm font-semibold text-slate-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur-2xl shadow-2xl shadow-black/[0.03] overflow-hidden">
      <div className="relative w-full h-96 sm:h-[450px] md:h-[500px] lg:h-[550px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/imagen2.png?v=2"
            alt="Panel de métricas y estadísticas"
            width={1600}
            height={1200}
            className="object-contain w-full h-full rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function AsesoriasChart() {
  const kpis = [
    { label: 'Tramitación', value: '85%', color: 'var(--color-luminary-blue)' },
    {
      label: 'Cumplimiento',
      value: '92%',
      color: 'var(--color-luminary-success)',
    },
    {
      label: 'Automatización',
      value: '78%',
      color: 'var(--color-luminary-coral)',
    },
  ];

  return (
    <Surface>
      <div className="space-y-8">
        {kpis.map((kpi, i) => (
          <div
            key={kpi.label}
            className="animate-in fade-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${300 + i * 150}ms` }}
          >
            <div className="flex justify-between items-end mb-3">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {kpi.label}
              </div>
              <div
                className="text-2xl font-bold tabular-nums"
                style={{ color: kpi.color }}
              >
                {kpi.value}
              </div>
            </div>
            <div
              className="w-full h-3 rounded-full bg-slate-100 overflow-hidden"
            >
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  background: kpi.color,
                  width: kpi.value,
                  animationDelay: `${i * 150}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Surface>
  );
}

function FeatureList({ items, accent }: { items: string[]; accent: Accent }) {
  return (
    <ul className="space-y-4 md:space-y-5">
      {items.map((t) => (
        <li
          key={t}
          className="flex items-start gap-4"
        >
          <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5 opacity-80" style={{ color: accentToVar[accent] }} />
          <span
            className="leading-relaxed text-lg text-slate-700 font-medium"
          >
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

function LeftCopy({
  headline,
  description,
  accent,
  bullets,
}: {
  headline: string;
  description: string;
  accent: Accent;
  bullets: string[];
}) {
  return (
    <div className="relative space-y-8">
      <Glow color={accentToVar[accent]} />
      <h3
        className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1]"
      >
        {headline}
      </h3>
      <p
        className="text-xl leading-relaxed text-slate-500 font-light"
      >
        {description}
      </p>
      <FeatureList items={bullets} accent={accent} />
      <div className="pt-6 flex flex-wrap gap-4">
        <a href="#demo">
          <button className="group relative px-8 py-4 bg-slate-900 text-white font-medium rounded-2xl shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-300">
            <span className="flex items-center gap-2 text-[15px]">
              Solicitar una demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </a>

        <a href="#info">
          <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-2xl shadow-sm hover:bg-slate-50 transition-all duration-300">
            <span className="flex items-center gap-2 text-[15px]">
              <Play className="w-4 h-4 fill-slate-700" />
              Más información
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export function SegmentsProfessionals() {
  return (
    <section
      id="segments"
      className="relative full-bleed min-h-screen flex items-center py-24 md:py-32 lg:py-40 bg-[#fbfbfd]"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        <AnimatedSection className="fade-in-up delay-100">
          <h2 className="text-center text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-12 md:mb-16 text-slate-900">
            Pensado para{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h2>
        </AnimatedSection>
        <AnimatedSection className="fade-in-up delay-200">
          <Tabs
            defaultValue="notarias"
            className="mt-8 md:mt-12 flex flex-col items-center w-full"
          >
            <TabsList
              className="grid grid-cols-2 md:flex md:justify-center gap-1.5 h-auto p-1.5 rounded-2xl md:rounded-full bg-slate-200/50 w-full md:w-fit"
            >
              <TabsTrigger
                value="notarias"
                className="relative px-5 md:px-8 py-2.5 rounded-xl md:rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-500 font-semibold text-[15px] transition-all"
              >
                Notarías
              </TabsTrigger>
              <TabsTrigger
                value="despachos"
                className="relative px-5 md:px-8 py-2.5 rounded-xl md:rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-500 font-semibold text-[15px] transition-all"
              >
                Despachos
              </TabsTrigger>
              <TabsTrigger
                value="asesorias"
                className="relative px-5 md:px-8 py-2.5 rounded-xl md:rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-500 font-semibold text-[15px] transition-all"
              >
                Asesorías
              </TabsTrigger>
              <TabsTrigger
                value="asesores"
                className="relative px-5 md:px-8 py-2.5 rounded-xl md:rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-500 font-semibold text-[15px] transition-all"
              >
                Asesores
              </TabsTrigger>
            </TabsList>

            {/* NOTARÍAS */}
            <TabsContent
              value="notarias"
              className="mt-16 md:mt-24 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-4 w-full outline-none"
            >
              <div className="grid items-center gap-12 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-[1.1fr_1fr]">
                <LeftCopy
                  headline="Digitaliza la gestión de herencias en tu notaría sin fricciones."
                  description="Para notarías que buscan digitalizar y optimizar la gestión de herencias, reduciendo picos de trabajo y mejorando la fidelización de clientes."
                  accent="green"
                  bullets={[
                    'Expedientes 100% digitalizados',
                    'Generación de documentación automatizada',
                    'Gestión de picos de trabajo',
                    'Reducción de tiempos: de 12h a 6h por expediente',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                  <DonutChart />
                </div>
              </div>
            </TabsContent>

            {/* DESPACHOS */}
            <TabsContent
              value="despachos"
              className="mt-16 md:mt-24 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-4 w-full outline-none"
            >
              <div className="grid items-center gap-12 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-[1.1fr_1fr]">
                <LeftCopy
                  headline="Gestión sucesoria eficiente, con la seguridad que tus clientes esperan."
                  description="Para despachos de abogados que quieren ofrecer a sus clientes un servicio más eficiente en la tramitación de herencias, agilizando los procesos."
                  accent="red"
                  bullets={[
                    'Plantillas — Escenarios de planificación',
                    'Comunicación — Portal de cliente',
                    'Automatización — −37% en horas por expediente',
                    'Resolución de conflictos documentada',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                  <CardGrid />
                </div>
              </div>
            </TabsContent>

            {/* ASESORÍAS */}
            <TabsContent
              value="asesorias"
              className="mt-16 md:mt-24 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-4 w-full outline-none"
            >
              <div className="grid items-center gap-12 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-[1.1fr_1fr]">
                <LeftCopy
                  headline="Centraliza toda la sucesión en un solo lugar."
                  description="Para asesorías que requieren una herramienta integral para centralizar y automatizar la tramitación sucesoria y la liquidación de impuestos."
                  accent="blue"
                  bullets={[
                    'Tramitación ágil',
                    'Cumplimiento normativo estricto',
                    'Informes automáticos',
                    'Visualización dinámica de activos',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                  <AsesoriasChart />
                </div>
              </div>
            </TabsContent>

            {/* ASESORES FINANCIEROS */}
            <TabsContent
              value="asesores"
              className="mt-16 md:mt-24 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-4 w-full outline-none"
            >
              <div className="grid items-center gap-12 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-[1.1fr_1fr]">
                <LeftCopy
                  headline="Planifica hoy y protege el legado de mañana de tus clientes."
                  description="Para asesores financieros que desean ofrecer a sus clientes un plan innovador y seguro para la planificación patrimonial de herencias."
                  accent="yellow"
                  bullets={[
                    'Apertura del testamento guiada',
                    'Escenarios de planificación sucesoria',
                    'Optimización fiscal detallada',
                    'Transmisión segura del patrimonio',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                  <FamilySuccessionPlan />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}
