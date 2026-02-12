'use client';

import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Lock,
  Calculator,
  Users,
  Shield,
  TrendingUp,
  Eye,
  Heart,
  Clock,
  CheckCircle,
  Building2,
  Settings,
} from 'lucide-react';

const ACCENTS = {
  wellbeing: 'var(--color-luminary-blue)', // azul
  automation: '#7c3aed', // morado
  security: 'var(--color-luminary-success)', // verde
  howitworks: 'var(--color-luminary-navy)',
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

function WellbeingPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Heart className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Apoyo Familiar y Patrimonial
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <Users className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Salario Emocional Diferenciado
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-blue-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            <TrendingUp className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-blue-700 dark:text-blue-300">
              Estabilidad y Fidelización
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
              Visualizaciones y Simulaciones Fiscales
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-purple-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
            <Clock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-purple-700 dark:text-purple-300">
              Reducción de Ausencias
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-purple-300/30" />
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
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Lock className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Cifrado y Protección de Datos
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
              Actualización Permanente
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-emerald-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <CheckCircle className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-emerald-700 dark:text-emerald-300">
              Cumplimiento Normativo
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-emerald-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksPanel() {
  return (
    <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:bg-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Settings className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Activación del Beneficio
            </div>
            <div className="mt-2 h-2 w-3/4 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Users className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Perfil Personal y Simulaciones
            </div>
            <div className="mt-2 h-2 w-4/5 rounded bg-sky-300/30" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            <Shield className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-sky-700 dark:text-sky-300">
              Soporte y Actualizaciones
            </div>
            <div className="mt-2 h-2 w-5/6 rounded bg-sky-300/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeneficiosCorporativosServices() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: 'var(--color-luminary-navy)' }}
        >
          Refuerza el Bienestar Financiero de tu Plantilla y Ofrece un Plan
          Sucesorio Integral
        </h2>

        {/* 1. Bienestar y Retención de Talento */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.wellbeing} />
            <div
              className="flex items-center gap-2"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              <Heart className="size-5" style={{ color: ACCENTS.wellbeing }} />
              <span className="font-medium">
                1. Bienestar y Retención de Talento
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Apoyo Familiar y Patrimonial
                </div>
                <p className="text-muted-foreground">
                  Tus empleados cuentan con una plataforma para planificar su
                  herencia y optimizar sus impuestos sucesorios, sin estrés ni
                  trámites confusos.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Salario Emocional Diferenciado
                </div>
                <p className="text-muted-foreground">
                  Agrega un beneficio que va más allá de los seguros
                  tradicionales, fomentando la estabilidad y la fidelización de
                  tu personal.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <WellbeingPanel />
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
              <FileText className="size-5" />
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
                  Gestión Digital de Documentos
                </div>
                <p className="text-muted-foreground">
                  Genera testamentos, pactos sucesorios y escrituras, ahorrando
                  tiempo a tus empleados y reduciendo ausencias por trámites
                  legales.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Visualizaciones y Simulaciones Fiscales
                </div>
                <p className="text-muted-foreground">
                  ulpiano.es calcula la carga impositiva y presenta escenarios
                  de distribución en esquemas claros, facilitando la toma de
                  decisiones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Seguridad y Cumplimiento Normativo */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <AccentGlow color={ACCENTS.security} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.security }}
            >
              <Shield className="size-5" />
              <span className="font-medium">
                3. Seguridad y Cumplimiento Normativo
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Cifrado y Protección de Datos
                </div>
                <p className="text-muted-foreground">
                  Garantiza la confidencialidad de la información de cada
                  empleado, cumpliendo la normativa vigente.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Actualización Permanente
                </div>
                <p className="text-muted-foreground">
                  La plataforma se adapta a la legislación estatal y foral para
                  asegurar la validez de cada documento sucesorio.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-2">
            <SecurityPanel />
          </div>
        </div>

        {/* 4. ¿Cómo Funciona para Tu Empresa? */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-2">
            <HowItWorksPanel />
          </div>
          <div className="order-1 md:order-2 relative">
            <AccentGlow color={ACCENTS.howitworks} />
            <div
              className="flex items-center gap-2"
              style={{ color: ACCENTS.howitworks }}
            >
              <Settings className="size-5" />
              <span className="font-medium">
                4. ¿Cómo Funciona para Tu Empresa?
              </span>
            </div>
            <div className="mt-4 space-y-5">
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Activación del Beneficio
                </div>
                <p className="text-muted-foreground">
                  Integra ulpiano.es en tu catálogo de ventajas corporativas,
                  brindando acceso a quienes deseen planificar su legado.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Perfil Personal y Simulaciones
                </div>
                <p className="text-muted-foreground">
                  Cada trabajador crea su cuenta, registra su patrimonio y
                  visualiza la carga fiscal. Recibe asesoría experta y
                  documentación lista para validación.
                </p>
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Soporte y Actualizaciones
                </div>
                <p className="text-muted-foreground">
                  Ante cambios en la vida personal o en la normativa, el
                  servicio se mantiene vigente, garantizando la actualización
                  constante de los testamentos y su cumplimiento legal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
