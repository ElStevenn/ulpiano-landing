'use client';

import { cn } from '@/lib/utils';
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
  Clock,
  Users,
  Shield,
  Zap,
  Scale,
  Eye,
  PenTool,
  Database,
  Network,
} from 'lucide-react';

const ACCENTS = {
  aggregation: 'var(--color-luminary-blue)', // azul
  attribution: '#7c3aed', // morado
  documents: 'var(--color-luminary-success)', // verde
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

function AggregationPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Database className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Recopilación de Datos
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Network className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Visualización de Relaciones
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
              Árbol Familiar
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-blue-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AttributionPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <BarChart3 className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Reportes de Atribución
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <Calculator className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Simulación de Impuestos
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <TrendingUp className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Escenarios de Ahorro
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-purple-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentsPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Sparkles className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Generación de Documentos
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <FileText className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Testamentos y Escrituras
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Shield className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Firma y Registro
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-emerald-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DigitalPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <LayoutDashboard className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Panel de Control
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Clock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Seguimiento en Tiempo Real
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Lock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Entorno Cifrado
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-sky-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AsesoriasServices() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: 'var(--color-luminary-navy)' }}
        >
          Automatiza la tramitación de la herencia, Visualiza la Distribución
          Sucesoria y Mejora Tu Eficiencia
        </h2>

        {/* 1. Gestión Fiscal y Ahorro de Horas Manuales */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.attribution} />
            <div
              className="flex items-center gap-2"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              <Calculator
                className="size-5"
                style={{ color: ACCENTS.attribution }}
              />
              <span className="font-medium">
                1. Gestión Fiscal y Ahorro de Horas Manuales
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Cálculo Automatizado de ISD
                </div>
                <p className="text-muted-foreground">
                  Evita errores y retrabajos al generar simulaciones que
                  contemplen reducciones y bonificaciones autonómicas.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Informes Profesionales
                </div>
                <p className="text-muted-foreground">
                  Facilita la presentación de autoliquidaciones y la
                  justificación legal con reportes de atribución claros para tus
                  clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <AttributionPanel />
          </div>
        </div>

        {/* 2. Visualización Patrimonial y Escenarios de Distribución */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <AggregationPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.aggregation} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.aggregation }}
            >
              <BarChart3 className="size-5" />
              <span className="font-medium">
                2. Visualización Patrimonial y Escenarios de Distribución
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Diagramas Interactivos
                </div>
                <p className="text-muted-foreground">
                  Muestra la repartición de activos (inmuebles, cuentas,
                  acciones, etc.) y el impacto fiscal de cada escenario
                  sucesorio.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Simulaciones en Tiempo Real
                </div>
                <p className="text-muted-foreground">
                  Ajusta parámetros (legítimas, préstamos, etc.) para ver al
                  instante cómo varía la carga tributaria y la distribución de
                  bienes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Optimización y Colaboración en Tu Asesoría */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.digital} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.digital }}
            >
              <LayoutDashboard className="size-5" />
              <span className="font-medium">
                3. Optimización y Colaboración en Tu Asesoría
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Flujo de Trabajo Digital
                </div>
                <p className="text-muted-foreground">
                  Registra la información patrimonial en un entorno
                  centralizado, minimizando idas y venidas de correos.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Actualización Normativa Constante
                </div>
                <p className="text-muted-foreground">
                  ulpiano.es se adapta a la legislación foral y estatal,
                  evitando sanciones y asegurando la validez de cada documento.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <DigitalPanel />
          </div>
        </div>

        {/* 4. Formalización y Seguimiento de Expedientes */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <DocumentsPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.documents} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.documents }}
            >
              <FileText className="size-5" />
              <span className="font-medium">
                4. Formalización y Seguimiento de Expedientes
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Documentación Automatizada
                </div>
                <p className="text-muted-foreground">
                  Genera borradores (testamentos, escrituras de herencia) listos
                  para validación, reduciendo el trabajo manual.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Control de Plazos y Vencimientos
                </div>
                <p className="text-muted-foreground">
                  Recibe alertas sobre autoliquidaciones, evitando recargos o
                  sanciones y garantizando la satisfacción del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
