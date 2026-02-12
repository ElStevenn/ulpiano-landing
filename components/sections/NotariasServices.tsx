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
} from 'lucide-react';

const ACCENTS = {
  automation: 'var(--color-luminary-blue)', // azul
  fiscal: '#7c3aed', // morado
  visualization: 'var(--color-luminary-success)', // verde
  workflow: 'var(--color-luminary-navy)',
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

function AutomationPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Zap className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Automatización de Herencias
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <FileText className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Distribución de Bienes
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Sparkles className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Documentos Automatizados
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-blue-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FiscalPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      {/* Modelo 660 Header */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
              <Calculator className="size-5" />
            </div>
            <div>
              <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
                Cálculo Automatizado de ISD
              </div>
              <div className="text-xs text-gray-500">Modelos 650, 651, 660</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">660</div>
            <div className="text-xs text-gray-500">Generalitat</div>
          </div>
        </div>
      </div>

      {/* Form Simulation */}
      <div className="space-y-3">
        {/* Form Header */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">
                Agència Tributària de Catalunya
              </span>
            </div>
            <div className="text-xs text-gray-600">
              Impuesto sobre sucesiones y donaciones
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-2">
          {/* Causante Section */}
          <div className="bg-gray-50 rounded p-2">
            <div className="text-xs font-medium text-gray-700 mb-2">
              Causante
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-gray-500">NIF:</span>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Fecha defunción:</span>
                <div className="h-3 bg-gray-200 rounded w-12"></div>
              </div>
            </div>
          </div>

          {/* Document Data Section */}
          <div className="bg-gray-50 rounded p-2">
            <div className="text-xs font-medium text-gray-700 mb-2">
              Datos del documento
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Tipo:</span>
                <div className="h-3 bg-gray-200 rounded w-8"></div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Notario:</span>
                <div className="h-3 bg-gray-200 rounded w-12"></div>
              </div>
            </div>
          </div>

          {/* Presentador Section */}
          <div className="bg-gray-50 rounded p-2">
            <div className="text-xs font-medium text-gray-700 mb-2">
              Presentador/a
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-gray-500">NIF:</span>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Teléfono:</span>
                <div className="h-3 bg-gray-200 rounded w-12"></div>
              </div>
            </div>
          </div>

          {/* Interested Parties Section */}
          <div className="bg-gray-50 rounded p-2">
            <div className="text-xs font-medium text-gray-700 mb-2">
              Relación de personas interesadas
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <span className="text-gray-500">-</span>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <span className="text-gray-500">Grupo:</span>
                <div className="h-3 bg-gray-200 rounded w-6"></div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <span className="text-gray-500">-</span>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <span className="text-gray-500">Grupo:</span>
                <div className="h-3 bg-gray-200 rounded w-6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Completado</span>
          </div>
          <div className="text-xs text-gray-500">Auto-rellenado</div>
        </div>
      </div>
    </div>
  );
}

function VisualizationPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <BarChart3 className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Diagramas Interactivos
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <TrendingUp className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Simulaciones en Tiempo Real
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
              Repartición de Activos
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-emerald-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <LayoutDashboard className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Flujo de Trabajo Digital
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
              Control de Plazos
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

export default function NotariasServices() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: 'var(--color-luminary-navy)' }}
        >
          Automatiza herencias, muestra la distribución de bienes y acelera la
          creación de documentos
        </h2>

        {/* 1. Agregación del Patrimonio y Árbol Familiar */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.automation} />
            <div
              className="flex items-center gap-2"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              <Home className="size-5" style={{ color: ACCENTS.automation }} />
              <span className="font-medium">
                1. Agregación del Patrimonio y Árbol Familiar
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Recopilación de Datos
                </div>
                <p className="text-muted-foreground">
                  Registra bienes, deudas y legitimarios para cada caso
                  sucesorio.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Visualización de Relaciones
                </div>
                <p className="text-muted-foreground">
                  Traza el árbol familiar y asegura que las cuotas forzosas y
                  legítimas se respeten sin complicaciones.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <AutomationPanel />
          </div>
        </div>

        {/* 2. Atribuciones y Visualización Fiscal */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <FiscalPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.fiscal} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.fiscal }}
            >
              <Calculator className="size-5" />
              <span className="font-medium">
                2. Atribuciones y Visualización Fiscal
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Reportes de Atribución
                </div>
                <p className="text-muted-foreground">
                  Muestra de forma clara quién hereda qué bienes, en qué
                  porcentaje, y facilita la explicación a tus clientes.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Simulación de Impuestos
                </div>
                <p className="text-muted-foreground">
                  Calcula al instante la carga fiscal (Impuesto de Sucesiones)
                  según los títulos y derechos atribuidos, ofreciendo escenarios
                  de ahorro o reducciones y bonificaciones aplicables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Creación de documentos Automatizada con IA */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.visualization} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.visualization }}
            >
              <Sparkles className="size-5" />
              <span className="font-medium">
                3. Creación de Documentos Automatizada con IA
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Generación de Documentos
                </div>
                <p className="text-muted-foreground">
                  Obtén testamentos, escrituras de aceptación y otros borradores
                  listos para la validación fina mediante la IA.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Firma y Registro
                </div>
                <p className="text-muted-foreground">
                  Agiliza la formalización en sala, con documentos prácticamente
                  definitivos y un panel de control cifrado para seguir el
                  progreso en tiempo real.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <VisualizationPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
