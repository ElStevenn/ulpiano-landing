'use client';

import { cn } from "@/lib/utils";
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
  PenTool
} from "lucide-react";

const ACCENTS = {
  workflow: "var(--color-luminary-blue)", // azul
  attribution: "#7c3aed", // morado
  documents: "var(--color-luminary-success)", // verde
  digital: "var(--color-luminary-navy)",
};

function AccentGlow({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-8 -z-10 blur-3xl opacity-20"
      style={{ background: `radial-gradient(600px 280px at 20% 20%, ${color}, transparent 60%)` }}
    />
  );
}

function WorkflowPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Scale className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">Paso a Paso Digital</div>
            <div className="mt-2 h-2 w-3/4 rounded bg-blue-300/30" />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Users className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">Parámetros Legales</div>
            <div className="mt-2 h-2 w-4/5 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Eye className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">Diagramas Interactivos</div>
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
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">Reportes de Atribución</div>
            <div className="mt-2 h-2 w-3/4 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <Calculator className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">Simulaciones de Impuestos</div>
            <div className="mt-2 h-2 w-4/5 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <TrendingUp className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">Distribución de Bienes</div>
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
            <PenTool className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">Automatización de Documentos</div>
            <div className="mt-2 h-2 w-3/4 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <FileText className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">Testamentos y Pactos</div>
            <div className="mt-2 h-2 w-4/5 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Shield className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">Firma y Registro</div>
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
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">Gestión Digital Completa</div>
            <div className="mt-2 h-2 w-3/4 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Clock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">Seguimiento en Tiempo Real</div>
            <div className="mt-2 h-2 w-4/5 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Lock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">Seguridad y Confidencialidad</div>
            <div className="mt-2 h-2 w-5/6 rounded bg-sky-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AbogadosServices() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--color-luminary-navy)' }}>
          ¿Por Qué Ulpiano para Abogados?
        </h2>

        {/* Gestión Digital de Expedientes y Esquemas Sucesorios */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.workflow} />
            <div className="flex items-center gap-2" style={{ color: 'var(--color-luminary-navy)' }}>
              <Scale className="size-5" style={{ color: ACCENTS.workflow }} />
              <span className="font-medium">Gestión Digital de Expedientes y Esquemas Sucesorios</span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="font-semibold" style={{ color: 'var(--color-luminary-navy)' }}>Paso a Paso Digital</div>
                <p className="text-muted-foreground">
                  Define parámetros legales (legítimas, régimen foral) y añade datos de herederos y bienes.
                </p>
              </div>
              <div>
                <div className="font-semibold" style={{ color: 'var(--color-luminary-navy)' }}>Diagramas Interactivos</div>
                <p className="text-muted-foreground">
                  Muestra el árbol familiar y la estructura patrimonial, facilitando la explicación al cliente y sorprendiendo con una experiencia clara y atractiva.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <WorkflowPanel />
          </div>
        </div>

        {/* Atribución de Bienes y Control Fiscal */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <AttributionPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.attribution} />
            <div className="flex items-center gap-2" style={{ color: ACCENTS.attribution }}>
              <BarChart3 className="size-5" />
              <span className="font-medium">Atribución de Bienes y Control Fiscal</span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="font-semibold" style={{ color: 'var(--color-luminary-navy)' }}>Reportes de Atribución</div>
                <p className="text-muted-foreground">
                  Presenta un desglose detallado sobre la distribución de bienes y la obligación tributaria de cada beneficiario. Muestra la estructura del patrimonio y los herederos en un esquema claro y atractivo.
                </p>
              </div>
              <div>
                <div className="font-semibold" style={{ color: 'var(--color-luminary-navy)' }}>Simulaciones de Impuestos</div>
                <p className="text-muted-foreground">
                  Calcula en segundos cuánto pagará cada heredero, considerando reducciones y bonificaciones autonómicas. Ajusta distribuciones en tiempo real para mostrar posibles variaciones en la carga fiscal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Creación de Documentos y Firma */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.documents} />
            <div className="flex items-center gap-2" style={{ color: ACCENTS.documents }}>
              <PenTool className="size-5" />
              <span className="font-medium">Creación de Documentos y Firma</span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div className="font-semibold" style={{ color: 'var(--color-luminary-navy)' }}>Automatización de Documentos</div>
                <p className="text-muted-foreground">
                  Genera testamentos, pactos sucesorios y escrituras adaptadas a la normativa vigente, reduciendo tareas manuales.
                </p>
              </div>
              <div>
                <div className="font-semibold" style={{ color: 'var(--color-luminary-navy)' }}>Firma y Registro</div>
                <p className="text-muted-foreground">
                  Acelera la formalización con documentos prácticamente definitivos, evitando correcciones de última hora.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <DocumentsPanel />
          </div>
        </div>
      </div>
    </section>
  );
}


