'use client';

import { Fragment } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
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
      className="pointer-events-none absolute -z-10 blur-3xl opacity-40"
      style={{
        inset: '-10% -20% -10% -20%',
        background: `radial-gradient(600px 300px at 20% 20%, ${color}, transparent 70%), radial-gradient(600px 300px at 80% 60%, ${color}, transparent 70%)`,
      }}
    />
  );
}

function Surface({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border p-6 shadow-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        color: '#1a2332',
      }}
    >
      {children}
    </div>
  );
}

function DonutChart() {
  // Datos de las secciones
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
    <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm p-5 sm:p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Expedientes automatizados
        </h3>
      </div>

      {/* Donut Chart */}
      <div className="relative flex items-center justify-center mb-6 min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
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
            const lineEndRadius = 125; // Misma distancia para todos

            return (
              <line
                key={`mobile-${index}`}
                x1={centerX + Math.cos(radian) * circleRadius}
                y1={centerY + Math.sin(radian) * circleRadius}
                x2={centerX + Math.cos(radian) * lineEndRadius}
                y2={centerY + Math.sin(radian) * lineEndRadius}
                stroke={item.color}
                strokeWidth="1.5"
                strokeOpacity="0.35"
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
            const circleRadius = 112; // Escalado para desktop
            const lineEndRadius = 148; // Misma distancia para todos en desktop

            return (
              <line
                key={`desktop-${index}`}
                x1={centerX + Math.cos(radian) * circleRadius}
                y1={centerY + Math.sin(radian) * circleRadius}
                x2={centerX + Math.cos(radian) * lineEndRadius}
                y2={centerY + Math.sin(radian) * lineEndRadius}
                stroke={item.color}
                strokeWidth="1.75"
                strokeOpacity="0.35"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* Donut */}
        <div
          className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full transition-transform hover:scale-105"
          style={{
            background: `conic-gradient(var(--color-luminary-success) 0 52%, var(--color-luminary-blue) 52% 83%, var(--color-luminary-coral) 83% 100%)`,
          }}
        >
          {/* Círculo interior */}
          <div
            className="absolute inset-6 sm:inset-8 rounded-full flex items-center justify-center flex-col"
            style={{ background: 'var(--color-luminary-navy)' }}
          >
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              100%
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">
              Automatizados
            </span>
          </div>
        </div>

        {/* Porcentajes fuera del círculo - Responsive */}
        {legendItems.map((item, index) => {
          const radian = ((item.angle - 90) * Math.PI) / 180;

          // Radios para móvil (h-48 = 192px, radio círculo = 96px)
          // El 52% necesita un poco más de separación de su línea
          const radiusMobile = index === 0 ? 146 : 140;
          const xMobile = Math.cos(radian) * radiusMobile;
          const yMobile = Math.sin(radian) * radiusMobile;

          // Radios para desktop (h-56 = 224px, radio círculo = 112px)
          // El 52% necesita un poco más de separación de su línea
          const radiusDesktop = index === 0 ? 170 : 163;
          const xDesktop = Math.cos(radian) * radiusDesktop;
          const yDesktop = Math.sin(radian) * radiusDesktop;

          return (
            <Fragment key={index}>
              {/* Versión móvil */}
              <div
                className="absolute text-xs font-semibold tabular-nums whitespace-nowrap z-10 sm:hidden"
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
                className="hidden sm:block absolute text-sm font-semibold tabular-nums whitespace-nowrap z-10"
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
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <span
              className="h-3 w-3 rounded-full shrink-0"
              style={{ background: item.color }}
            />
            <span className="text-sm font-medium text-slate-900">
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
    <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm overflow-hidden">
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
      <div className="space-y-6">
        {kpis.map((kpi, i) => (
          <div
            key={kpi.label}
            className="animate-in fade-in slide-in-from-left-2 duration-300"
            style={{ animationDelay: `${300 + i * 100}ms` }}
          >
            <div
              className="text-xl font-bold mb-1"
              style={{ color: kpi.color }}
            >
              {kpi.value}
            </div>
            <div className="text-xs font-medium mb-2" style={{ color: '#666' }}>
              {kpi.label}
            </div>
            <div
              className="w-full h-1 rounded-full"
              style={{ background: 'rgba(0,0,0,0.1)' }}
            >
              <div
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  background: kpi.color,
                  width: kpi.value,
                  animationDelay: `${i * 100}ms`,
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
    <ul className="space-y-3 md:space-y-4">
      {items.map((t) => (
        <li
          key={t}
          className="flex items-start gap-3 md:gap-4"
          style={{ color: 'white' }}
        >
          <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 shrink-0 text-blue-400 mt-0.5" />
          <span
            className="leading-relaxed text-base md:text-lg"
            style={{ color: 'rgba(255,255,255,0.9)' }}
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
    <div className="relative space-y-6">
      <Glow color={accentToVar[accent]} />
      <h3
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
        style={{ color: 'white' }}
      >
        {headline}
      </h3>
      <p
        className="text-lg md:text-xl leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.8)' }}
      >
        {description}
      </p>
      <FeatureList items={bullets} accent={accent} />
      <div className="pt-4 flex flex-wrap gap-4">
        <a href="#demo">
          <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Solicitar una demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
          </button>
        </a>

        <a href="#info">
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-blue-300 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
            <span className="flex items-center gap-2">
              <Play className="w-4 h-4" />
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
      className={cn(
        'relative full-bleed min-h-screen flex items-center py-16 md:py-24 lg:py-32'
      )}
      style={{
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
      }}
    >
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

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        <AnimatedSection className="fade-in-up delay-100">
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tight mb-12 md:mb-16 text-white">
            Pensado para{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
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
              className="grid grid-cols-2 md:flex md:justify-center gap-2 h-auto p-1.5 rounded-2xl md:rounded-full backdrop-blur w-full md:w-fit"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <TabsTrigger
                value="notarias"
                className="relative px-3 md:px-4 py-2 rounded-xl md:rounded-full data-[state=active]:text-white font-semibold text-sm"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Notarías
              </TabsTrigger>
              <TabsTrigger
                value="despachos"
                className="relative px-3 md:px-4 py-2 rounded-xl md:rounded-full data-[state=active]:text-white font-semibold text-sm"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Despachos
              </TabsTrigger>
              <TabsTrigger
                value="asesorias"
                className="relative px-3 md:px-4 py-2 rounded-xl md:rounded-full data-[state=active]:text-white font-semibold text-sm"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Asesorías
              </TabsTrigger>
              <TabsTrigger
                value="asesores"
                className="relative px-3 md:px-4 py-2 rounded-xl md:rounded-full data-[state=active]:text-white font-semibold text-sm"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Asesores
              </TabsTrigger>
            </TabsList>

            {/* NOTARÍAS */}
            <TabsContent
              value="notarias"
              className="mt-12 md:mt-16 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2 w-full"
            >
              <div className="grid items-center gap-8 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-2">
                <LeftCopy
                  headline="Digitaliza la gestión de herencias en tu notaría sin fricciones."
                  description="Para notarias que buscan digitalizar y optimizar la gestión de herencias, reduciendo picos de trabajo y mejorando la fidelización de clientes."
                  accent="green"
                  bullets={[
                    'Expedientes 100% digitalizados',
                    'Generación de documentación automatizada',
                    'Gestión de picos de trabajo',
                    'Reducción de tiempos: de 12h a 6h por expediente',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <DonutChart />
                </div>
              </div>
            </TabsContent>

            {/* DESPACHOS */}
            <TabsContent
              value="despachos"
              className="mt-12 md:mt-16 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2 w-full"
            >
              <div className="grid items-center gap-8 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-2">
                <LeftCopy
                  headline="Gestión sucesoria eficiente, con la seguridad que tus clientes esperan"
                  description="Para despachos de abogados que quieren ofrecer a sus clientes un servicio más eficiente en la tramitación de herencias, agilizando los procesos y mejorando la comunicación con el cliente"
                  accent="red"
                  bullets={[
                    'Plantillas — Escenarios de planificación sucesoria',
                    'Comunicación — Portal de cliente',
                    'Automatización — −37% en horas por expediente',
                    'Resolución de conflictos',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <CardGrid />
                </div>
              </div>
            </TabsContent>

            {/* ASESORÍAS */}
            <TabsContent
              value="asesorias"
              className="mt-12 md:mt-16 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2 w-full"
            >
              <div className="grid items-center gap-8 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-2">
                <LeftCopy
                  headline="Centraliza toda la sucesión en un sólo lugar"
                  description="Para asesorías que requieren una herramienta integral para centralizar y automatizar la tramitación sucesoria."
                  accent="blue"
                  bullets={[
                    'Tramitación ágil',
                    'Cumplimiento normativo',
                    'Informes automáticos',
                    'Visualización dinámica',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <AsesoriasChart />
                </div>
              </div>
            </TabsContent>

            {/* ASESORES FINANCIEROS */}
            <TabsContent
              value="asesores"
              className="mt-12 md:mt-16 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2 w-full"
            >
              <div className="grid items-center gap-8 md:gap-16 lg:gap-24 xl:gap-32 md:grid-cols-2">
                <LeftCopy
                  headline="Planificar hoy y protege el legado de mañana de tus clientes."
                  description="Para asesores financieros que desean ofrecer a sus clientes un plan innovador y seguro para la planificación de herencias."
                  accent="yellow"
                  bullets={[
                    'Apertura del testamento',
                    'Escenarios de planificación sucesoria',
                    'Optimización fiscal',
                    'Transmisión segura',
                  ]}
                />
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
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
