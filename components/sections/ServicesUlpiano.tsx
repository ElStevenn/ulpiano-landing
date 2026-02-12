'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Lock,
  Percent,
  Receipt,
  Sparkles,
  Home,
  Building2,
  CreditCard,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
} from 'lucide-react';

const ACCENTS = {
  planning: 'var(--color-luminary-blue)', // azul
  automation: '#7c3aed', // morado
  tax: 'var(--color-luminary-success)', // verde
  digital: 'var(--color-luminary-navy)',
};

function AccentGlow({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-8 -z-10 blur-3xl opacity-20"
      style={{
        background: `radial-gradient(600px 280px at 20% 20%, ${color}, transparent 60%)`,
      }}
    />
  );
}

function Panel360() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Bienes */}
        <div className="rounded-lg border bg-white/60 p-4 dark:bg-input/40">
          <div className="flex items-center gap-2 mb-3">
            <div className="grid size-8 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
              <Home className="size-4" />
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Bienes
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="grid size-6 place-items-center rounded bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Home className="size-3" />
              </div>
              <div className="text-xs text-muted-foreground">
                Valor inmueble: 330.000 €
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="grid size-6 place-items-center rounded bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Building2 className="size-3" />
              </div>
              <div className="text-xs text-muted-foreground">
                Cuenta bancaria: 231.055 €
              </div>
            </div>
          </div>
        </div>

        {/* Deudas */}
        <div className="rounded-lg border bg-white/60 p-4 dark:bg-input/40">
          <div className="flex items-center gap-2 mb-3">
            <div className="grid size-8 place-items-center rounded-lg bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300">
              <FileText className="size-4" />
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Deudas
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">
              Préstamos Hipotecario – 31.000 €
            </div>
            <div className="flex items-center gap-2">
              <div className="grid size-6 place-items-center rounded bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 flex-shrink-0">
                <CreditCard className="size-3" />
              </div>
              <div className="text-xs text-muted-foreground">
                Tarjeta de crédito - 1.090 €
              </div>
            </div>
          </div>
        </div>

        {/* Escenarios */}
        <div className="rounded-lg border bg-white/60 p-4 dark:bg-input/40">
          <div className="flex items-center gap-2 mb-3">
            <div className="grid size-8 place-items-center rounded-lg bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300">
              <TrendingUp className="size-4" />
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Escenarios
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            Simulación de reparto y planificación
          </div>
          <div className="mt-2 flex items-end justify-center gap-1">
            {[18, 26, 14, 30].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded bg-primary/30"
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
    <div className="relative rounded-xl border bg-white p-4 sm:p-6 shadow-sm dark:bg-secondary overflow-hidden">
      <div className="relative w-full h-auto overflow-hidden rounded-lg">
        <div className="transform scale-110 origin-center">
          <Image
            src="/imagen1.png"
            alt="Panel de documentación y perfil del causante"
            width={552}
            height={186}
            className="w-full h-auto"
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
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        {/* Modelo 650 */}
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Calculator className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Modelo 650 – Quota a pagar: 3.200 €
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
          <Percent className="size-5 text-emerald-500" />
        </div>

        {/* Modelo 660 */}
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <FileSpreadsheet className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Modelo 660 – Declaración de Inventario
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
          <Percent className="size-5 text-emerald-500" />
        </div>
      </div>
    </div>
  );
}

function DigitalAssets() {
  return (
    <div className="relative rounded-xl border bg-white p-4 shadow-sm dark:bg-secondary">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
          <Lock className="size-5" />
        </div>
        <div className="flex-1">
          <div className="h-3 w-2/3 rounded bg-sky-300/40" />
          <div className="mt-2 flex gap-2">
            <div className="h-8 w-16 rounded border bg-sky-50/40 dark:bg-sky-900/20" />
            <div className="h-8 w-16 rounded border bg-sky-50/40 dark:bg-sky-900/20" />
            <div className="h-8 w-16 rounded border bg-sky-50/40 dark:bg-sky-900/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesUlpiano() {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedSection className="fade-in-up delay-100">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-10"
            style={{ color: 'var(--color-luminary-navy)' }}
          >
            Funcionalidades de Ulpiano
          </h2>
        </AnimatedSection>

        {/* Planificación Integral */}
        <AnimatedSection className="fade-in-up delay-200">
          <div className="mt-8 md:mt-10 grid items-center gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
            <div className="relative">
              <AccentGlow color={ACCENTS.planning} />
              <div
                className="flex items-center gap-2"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                <LayoutDashboard
                  className="size-5"
                  style={{ color: 'var(--color-luminary-blue)' }}
                />
                <span className="font-medium">Planificación Integral</span>
              </div>
              <div className="mt-4 md:mt-5 space-y-4 md:space-y-5">
                <div>
                  <div
                    className="font-semibold text-lg md:text-xl mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Registro Completo
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Consolida bienes, derechos y deudas en un único panel para
                    obtener una visión 360° del patrimonio.
                  </p>
                </div>
                <div>
                  <div
                    className="font-semibold text-lg md:text-xl mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Simulación y Optimización
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Evalúa distintos escenarios sucesorios, adaptando la
                    distribución y aprovechando reducciones fiscales según la
                    normativa (legítimas, cuotas forzosas y figuras jurídicas).
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Panel360 />
            </div>
          </div>
        </AnimatedSection>

        {/* Automatización y Documentación */}
        <AnimatedSection className="fade-in-up delay-300">
          <div className="mt-12 md:mt-16 lg:mt-20 grid items-center gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <DocAuto />
            </div>
            <div className="order-1 md:order-2 relative">
              <AccentGlow color={ACCENTS.automation} />
              <div
                className="flex items-center gap-2"
                style={{ color: ACCENTS.automation }}
              >
                <FileText className="size-5" />
                <span className="font-medium">
                  Automatización y Documentación
                </span>
              </div>
              <div className="mt-4 md:mt-5 space-y-4 md:space-y-5">
                <div>
                  <div
                    className="font-semibold text-lg md:text-xl mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Documentos a Medida
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    La inteligencia artificial elabora borradores de
                    testamentos, pactos sucesorios y escrituras, personalizados
                    según las asignaciones configuradas.
                  </p>
                </div>
                <div>
                  <div
                    className="font-semibold text-lg md:text-xl mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Validación Colaborativa
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Permite la revisión y ajustes en tiempo real por parte de
                    abogados, notarías y asesores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gestión Fiscal y Normativa */}
        <AnimatedSection className="fade-in-up delay-400">
          <div className="mt-12 md:mt-16 lg:mt-20 grid items-center gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
            <div className="relative">
              <AccentGlow color={ACCENTS.tax} />
              <div
                className="flex items-center gap-2"
                style={{ color: ACCENTS.tax }}
              >
                <BarChart3 className="size-5" />
                <span className="font-medium">Gestión Fiscal y Normativa</span>
              </div>
              <div className="mt-4 md:mt-5 space-y-4 md:space-y-5">
                <div>
                  <div
                    className="font-semibold text-lg md:text-xl mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Cálculos y Reducciones
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Automatiza la preparación de modelos oficiales y la
                    liquidación de impuestos (650, 651, 652, 653, 660),
                    garantizando el cumplimiento normativo.
                  </p>
                </div>
                <div>
                  <div
                    className="font-semibold text-lg md:text-xl mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Control de Requisitos
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Verifica la continuidad de la actividad, la afectación real
                    de bienes y la aplicación de bonificaciones para asegurar la
                    reducción fiscal.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <TaxForm />
            </div>
          </div>
        </AnimatedSection>

        {/* (Opcional) Herencia digital */}
        {/*
        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <DigitalAssets />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.digital} />
            <div className="flex items-center gap-2 text-primary">
              <Lock className="size-5" />
              <span className="font-medium">Herencia digital</span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="font-semibold">Activos digitales</div>
                <p className="text-muted-foreground">
                  Protocolos de acceso seguro y beneficiarios específicos.
                </p>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
