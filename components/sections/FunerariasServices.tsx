'use client';

import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Lock,
  Calculator,
  Database,
  Network,
  Users,
  Shield,
  TrendingUp,
  Eye,
  Heart,
  Clock,
  CheckCircle,
} from 'lucide-react';

const ACCENTS = {
  expansion: 'var(--color-luminary-blue)', // azul
  automation: '#7c3aed', // morado
  support: 'var(--color-luminary-success)', // verde
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

function ExpansionPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Heart className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Más Allá del Sepelio
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <TrendingUp className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Diferenciación en el Mercado
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Users className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Soporte Integral
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-blue-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <FileText className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Gestión Digital de Documentos
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <Eye className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Supervisión en Tiempo Real
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <Calculator className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Cálculo de Impuestos
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-purple-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Clock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Ahorro de Tiempo
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Eye className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Transparencia en Cada Paso
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Heart className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Enfoque en el Duelo
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-emerald-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FunerariasServices() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: 'var(--color-luminary-navy)' }}
        >
          Ofrece un Servicio Integral a las Familias: Desde el Fallecimiento
          hasta la Tramitación de la Herencia
        </h2>

        {/* 1. Ampliación del Servicio Tradicional */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.expansion} />
            <div
              className="flex items-center gap-2"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              <Heart className="size-5" style={{ color: ACCENTS.expansion }} />
              <span className="font-medium">
                1. Ampliación del Servicio Tradicional
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Más Allá del Sepelio
                </div>
                <p className="text-muted-foreground">
                  Integra la planificación y tramitación de herencias, brindando
                  tranquilidad a las familias en un momento delicado.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Diferenciación en el Mercado
                </div>
                <p className="text-muted-foreground">
                  Destaca frente a competidores ofreciendo un soporte que va
                  desde el fallecimiento hasta la gestión completa de los
                  trámites post mortem.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <ExpansionPanel />
          </div>
        </div>

        {/* 2. Automatización y Simplificación */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <AutomationPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.automation} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.automation }}
            >
              <FileText className="size-5" />
              <span className="font-medium">
                2. Automatización y Simplificación
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Gestión Digital de Documentos
                </div>
                <p className="text-muted-foreground">
                  Facilita la recopilación y digitalización de documentos
                  esenciales (certificados de defunción, testamentos, etc.).
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Supervisión en Tiempo Real
                </div>
                <p className="text-muted-foreground">
                  Explora la asignación de activos a través de diagramas
                  interactivos y elabora reportes completos para tus reuniones.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Cálculo de Impuestos
                </div>
                <p className="text-muted-foreground">
                  ulpiano.es simula la carga fiscal y genera informes para las
                  familias, simplificando la autoliquidación del Impuesto de
                  Sucesiones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Soporte Emocional y Práctico */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.support} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.support }}
            >
              <Heart className="size-5" />
              <span className="font-medium">
                3. Soporte Emocional y Práctico
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Ahorro de Tiempo para la Familia
                </div>
                <p className="text-muted-foreground">
                  Minimiza desplazamientos y trámites confusos, permitiendo que
                  las personas se centren en su duelo.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Transparencia en Cada Paso
                </div>
                <p className="text-muted-foreground">
                  Ofrece a las familias una visión clara de la distribución del
                  patrimonio y de sus obligaciones legales.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <SupportPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
