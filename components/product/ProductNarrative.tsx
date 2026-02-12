'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  FileText,
  Users,
  PieChart,
  GitBranch,
  Calculator,
  TrendingUp,
  Brain,
  FileText as DocIcon,
  Shield,
} from 'lucide-react';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function Parallax({ speed = 0.15 }: { speed?: number }) {
  const progress = useScrollProgress();
  const translate = useMemo(
    () => `${Math.round(progress * speed * 200)}px`,
    [progress, speed]
  );
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        transform: `translateY(${translate})`,
        background:
          'radial-gradient(600px 300px at 20% 10%, rgba(66,192,245,0.08), transparent 70%), radial-gradient(500px 240px at 80% 40%, rgba(255,107,53,0.06), transparent 70%)',
      }}
    />
  );
}

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border bg-white shadow-lg p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full sm:w-[520px] bg-white shadow-2xl p-6 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h4
            className="text-xl font-semibold"
            style={{ color: 'var(--color-luminary-navy)' }}
          >
            {title}
          </h4>
          <button
            onClick={onClose}
            className="text-sm px-3 py-1 rounded border"
          >
            Cerrar
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ProductNarrative() {
  const [modal, setModal] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);
  const close = () => setModal(null);

  return (
    <section className="relative">
      <Parallax />

      {/* Línea de seguimiento del flujo */}
      <ScrollRail />

      {/* Bloque 1 */}
      <section id="b1" className="scroll-mt-20 py-16 relative">
        <AnimatedSection className="fade-in-up">
          <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
            <div className="rounded-2xl border p-8 bg-white/90 shadow-sm">
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Convierte la complejidad en claridad
              </h2>
              <p className="text-lg text-muted-foreground mt-3">
                Ulpiano te ofrece una visión 360º de documentos, herederos y
                patrimonio para entender el punto de partida.
              </p>
            </div>

            {/* Tarjetas secuenciales */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div
                className="cursor-pointer"
                onClick={() =>
                  setModal({
                    title: 'Abstracciones de documentos',
                    content: (
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Procesamiento inteligente
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Digitaliza escrituras, testamentos y contratos en
                          segundos. Ulpiano AI extrae automáticamente la
                          información clave, reduciendo errores y acelerando tu
                          trabajo.
                        </p>
                      </div>
                    ),
                  })
                }
              >
                <Card className="animate-in fade-in slide-in-from-bottom-2">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="size-5 text-sky-600" />
                    <div className="font-semibold">
                      Abstracciones de documentos
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Procesamiento inteligente
                  </div>
                </Card>
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  setModal({
                    title: 'Árbol familiar',
                    content: (
                      <p className="text-sm text-muted-foreground">
                        Un esquema claro: Familiares, legitimarios, herederos,
                        atribuciones y títulos sucesorios. Ideal para explicar
                        planes de sucesión de forma visual.
                      </p>
                    ),
                  })
                }
              >
                <Card className="animate-in fade-in slide-in-from-bottom-2 delay-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="size-5 text-emerald-600" />
                    <div className="font-semibold">Árbol familiar</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Visualización clara y profesional
                  </div>
                </Card>
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  setModal({
                    title: 'Creación de inventario de bienes',
                    content: (
                      <p className="text-sm text-muted-foreground">
                        Centraliza todo el patrimonio —inmuebles, cuentas,
                        activos digitales y más— en un único inventario digital
                        y visual. Una radiografía precisa para empezar a
                        planificar.
                      </p>
                    ),
                  })
                }
              >
                <Card className="animate-in fade-in slide-in-from-bottom-2 delay-200">
                  <div className="flex items-center gap-3 mb-2">
                    <PieChart className="size-5 text-violet-600" />
                    <div className="font-semibold">
                      Creación de inventario de bienes
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Inventario centralizado
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Bloque 2 */}
      <section id="b2" className="scroll-mt-20 py-24 relative">
        <AnimatedSection className="fade-in-up">
          <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
            <div className="sticky top-20 z-10 mb-8">
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Simula, compara y elige la mejor estrategia sucesoria
              </h2>
              <p className="text-lg text-muted-foreground mt-3">
                Escenarios claros, cálculos precisos y proyecciones dinámicas
                para tomar decisiones con confianza.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <div className="flex items-center gap-3 mb-2">
                  <GitBranch className="size-5 text-sky-600" />
                  <div className="font-semibold">Creación de escenarios</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Comparación de alternativas
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Diseña distintas alternativas (pactos sucesorios, donaciones,
                  testamentos) y visualiza sus efectos de manera inmediata.
                </p>
              </Card>
              <Card>
                <div className="flex items-center gap-3 mb-2">
                  <Calculator className="size-5 text-emerald-600" />
                  <div className="font-semibold">Calculador</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Cálculos automáticos
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Calcula automáticamente el impacto fiscal y patrimonial de
                  cada escenario, adaptado a la normativa española y autonómica.
                </p>
              </Card>
              <Card>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="size-5 text-violet-600" />
                  <div className="font-semibold">Proyecciones</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Análisis predictivo
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Anticipa el futuro con gráficos interactivos que muestran cómo
                  evolucionará el patrimonio y cómo se distribuirán los bienes
                  en distintos supuestos.
                </p>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Bloque 3 */}
      <section id="b3" className="scroll-mt-20 py-24 relative">
        <AnimatedSection className="fade-in-up">
          <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
            <h2
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              De la planificación a la ejecución, con tecnología inteligente
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ulpiano simplifica el trabajo diario, genera documentos y te
              conecta con tus clientes.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:rotate-[-2deg] hover:rotate-0">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="size-5 text-sky-600" />
                  <div className="font-semibold">Ulpiano AI</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Análisis inteligente
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Un copiloto experto en herencias y sucesiones. Analiza
                  documentos, detecta inconsistencias y propone mejoras para que
                  tomes decisiones con seguridad.
                </p>
              </Card>
              <Card className="md:rotate-[-2deg] hover:rotate-0 delay-100">
                <div className="flex items-center gap-3 mb-2">
                  <DocIcon className="size-5 text-emerald-600" />
                  <div className="font-semibold">Creación de documentos</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Generación automática
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Desde borradores de testamentos hasta escrituras de donación:
                  genera en minutos modelos listos para revisión,
                  personalización y validación jurídica.
                </p>
              </Card>
              <Card className="md:rotate-[-2deg] hover:rotate-0 delay-200">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="size-5 text-violet-600" />
                  <div className="font-semibold">Portal del cliente</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Acceso seguro
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Facilita la relación con clientes y herederos gracias a un
                  espacio digital seguro donde consultar expedientes, firmar
                  documentos y recibir actualizaciones.
                </p>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Modal open={!!modal} onClose={close} title={modal?.title ?? ''}>
        {modal?.content}
      </Modal>
    </section>
  );
}

function ScrollRail() {
  const progress = useScrollProgress();
  return (
    <div className="fixed left-2 top-24 hidden md:block" style={{ zIndex: 20 }}>
      <div className="w-1 h-[60vh] rounded-full bg-slate-200 overflow-hidden">
        <div
          className="w-1 bg-gradient-to-b from-sky-400 to-fuchsia-400"
          style={{ height: `${Math.max(6, progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
