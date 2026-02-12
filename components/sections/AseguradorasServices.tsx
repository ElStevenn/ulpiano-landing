'use client';

import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Lock,
  Calculator,
  Database,
  Users,
  Shield,
  TrendingUp,
  Eye,
  Heart,
  Clock,
  CheckCircle,
  Building2,
} from 'lucide-react';

const ACCENTS = {
  complement: 'var(--color-luminary-blue)', // azul
  automation: '#7c3aed', // morado
  loyalty: 'var(--color-luminary-success)', // verde
  security: 'var(--color-luminary-navy)',
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

function ComplementPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Heart className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Servicio Post-Fallecimiento
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
              Propuesta de Valor Diferenciada
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <FileText className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Paquete Integral
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
            <Database className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Gestión Digital de Expedientes
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
              Control en Vivo
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
              Simulaciones de Impuestos
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-purple-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoyaltyPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Eye className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Visibilidad Completa del Proceso
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Heart className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Menor Estrés en Momentos Delicados
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Users className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Servicio Ágil
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-emerald-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Shield className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Actualización Normativa
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Lock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Encriptación Avanzada
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <CheckCircle className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Confidencialidad Garantizada
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-sky-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AseguradorasServices() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: 'var(--color-luminary-navy)' }}
        >
          Ofrece un Servicio Integral que Complemente tus Pólizas de Vida y
          Decesos
        </h2>

        {/* 1. Complemento Ideal a Pólizas de Vida y Decesos */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.complement} />
            <div
              className="flex items-center gap-2"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              <Heart className="size-5" style={{ color: ACCENTS.complement }} />
              <span className="font-medium">
                1. Complemento Ideal a Pólizas de Vida y Decesos
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Servicio Post-Fallecimiento
                </div>
                <p className="text-muted-foreground">
                  Facilita los trámites de herencia y liquidación del Impuesto
                  de Sucesiones y Donaciones, reduciendo la carga para las
                  familias.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Propuesta de Valor Diferenciada
                </div>
                <p className="text-muted-foreground">
                  Destaca frente a la competencia ofreciendo un paquete integral
                  que cubra desde la contratación de la póliza hasta la
                  distribución de la herencia.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <ComplementPanel />
          </div>
        </div>

        {/* 2. Automatización y Eficiencia */}
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
              <Database className="size-5" />
              <span className="font-medium">
                2. Automatización y Eficiencia
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Gestión Digital de Expedientes
                </div>
                <p className="text-muted-foreground">
                  Integra los datos de los asegurados y vincula los herederos o
                  beneficiarios, generando informes automatizados.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Control en Vivo
                </div>
                <p className="text-muted-foreground">
                  Revisa la asignación de bienes en representaciones gráficas
                  dinámicas y obtén informes completos para tus reuniones.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Simulaciones de Impuestos
                </div>
                <p className="text-muted-foreground">
                  Ofrece a tus clientes un cálculo estimado de la carga fiscal
                  que implicaría el cobro de la póliza tras el fallecimiento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Fidelización y Satisfacción del Cliente */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.loyalty} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.loyalty }}
            >
              <Users className="size-5" />
              <span className="font-medium">
                3. Fidelización y Satisfacción del Cliente
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Visibilidad Completa del Proceso
                </div>
                <p className="text-muted-foreground">
                  ulpiano.es muestra los pasos sucesorios y la situación de la
                  póliza, aportando transparencia al cliente.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Menor Estrés en Momentos Delicados
                </div>
                <p className="text-muted-foreground">
                  Apoya a los asegurados y sus familias con un servicio ágil que
                  simplifica los trámites post mortem.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <LoyaltyPanel />
          </div>
        </div>

        {/* 4. Seguridad y Cumplimiento Legal */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <SecurityPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.security} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.security }}
            >
              <Shield className="size-5" />
              <span className="font-medium">
                4. Seguridad y Cumplimiento Legal
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Actualización Normativa
                </div>
                <p className="text-muted-foreground">
                  La plataforma se mantiene al día con la legislación española y
                  autonómica, asegurando la validez de cada documento.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Encriptación Avanzada
                </div>
                <p className="text-muted-foreground">
                  Protege la información de los asegurados y de sus herederos,
                  evitando filtraciones y garantizando la confidencialidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
