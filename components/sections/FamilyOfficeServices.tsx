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
  Globe,
  Building2,
  CheckCircle,
} from 'lucide-react';

const ACCENTS = {
  patrimonial: 'var(--color-luminary-blue)', // azul
  planning: '#7c3aed', // morado
  control: 'var(--color-luminary-success)', // verde
  legacy: 'var(--color-luminary-navy)',
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

function PatrimonialPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Database className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Consolidación de Activos
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <BarChart3 className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Análisis y Reportes Detallados
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Globe className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Múltiples Jurisdicciones
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-blue-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanningPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <Users className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Beneficiarios y Herederos
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
              Simulación y Optimización Fiscal
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <CheckCircle className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Checklist de Cumplimiento
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-purple-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <LayoutDashboard className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Dashboard Exclusivo
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Shield className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Protección de Datos Sensibles
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Lock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Cifrado de Nivel Bancario
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-emerald-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LegacyPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Eye className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Visualización en Tiempo Real
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <TrendingUp className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Adaptaciones Continuas
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Building2 className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Visión a Largo Plazo
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-sky-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FamilyOfficeServices() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: 'var(--color-luminary-navy)' }}
        >
          Simplifica la Planificación y Transmisión de Grandes Patrimonios
        </h2>

        {/* 1. Gestión Patrimonial Integral */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.patrimonial} />
            <div
              className="flex items-center gap-2"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              <Database
                className="size-5"
                style={{ color: ACCENTS.patrimonial }}
              />
              <span className="font-medium">
                1. Gestión Patrimonial Integral
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Consolidación de Activos
                </div>
                <p className="text-muted-foreground">
                  Registra inmuebles, inversiones financieras, activos digitales
                  y estructuras societarias en un solo entorno.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Análisis y Reportes Detallados
                </div>
                <p className="text-muted-foreground">
                  Genera informes de atribución, simulaciones de impuestos y
                  diagramas sucesorios para múltiples herederos y
                  jurisdicciones.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <PatrimonialPanel />
          </div>
        </div>

        {/* 2. Planificación Sucesoria */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <PlanningPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.planning} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.planning }}
            >
              <Users className="size-5" />
              <span className="font-medium">2. Planificación Sucesoria</span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Introducción de Beneficiarios y Herederos
                </div>
                <p className="text-muted-foreground">
                  Establece las relaciones familiares y las cuotas forzosas en
                  función de la normativa aplicable.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Simulación y Optimización de Impuestos
                </div>
                <p className="text-muted-foreground">
                  Evalúa escenarios para minimizar la carga fiscal y cumplir con
                  las exigencias legales.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Checklist de Actividades Económicas
                </div>
                <p className="text-muted-foreground">
                  Verifica el cumplimiento de los requisitos para que empresas y
                  sociedades patrimoniales se aseguren de aplicación de la
                  reducción.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Control, Transparencia y Confidencialidad */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.control} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.control }}
            >
              <Shield className="size-5" />
              <span className="font-medium">
                3. Control, Transparencia y Confidencialidad
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Dashboard Exclusivo
                </div>
                <p className="text-muted-foreground">
                  Visualiza el estado de cada estructura patrimonial en tiempo
                  real, con opciones de acceso limitado según roles y
                  necesidades.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Protección de Datos Sensibles
                </div>
                <p className="text-muted-foreground">
                  Utiliza cifrado y protocolos de seguridad de nivel bancario,
                  respetando la confidencialidad que exige un Family Office.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <ControlPanel />
          </div>
        </div>

        {/* 4. Soporte para el Legado Familiar */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <LegacyPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.legacy} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.legacy }}
            >
              <Building2 className="size-5" />
              <span className="font-medium">
                4. Soporte para el Legado Familiar
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Visualización en Tiempo Real
                </div>
                <p className="text-muted-foreground">
                  Observa la distribución de activos en esquemas dinámicos y
                  genera informes detallados para reuniones.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Adaptaciones Continuas
                </div>
                <p className="text-muted-foreground">
                  Actualiza la información conforme cambien las circunstancias
                  patrimoniales o las normativas.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Visión a Largo Plazo
                </div>
                <p className="text-muted-foreground">
                  Garantiza la continuidad de los negocios familiares y la
                  salvaguarda de los activos para las futuras generaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
