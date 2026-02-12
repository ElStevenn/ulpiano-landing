import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { BarChart3, ChevronDown, ChevronRight, FileText, Upload } from 'lucide-react';

export function DiscoverHowItWorks() {
  const items = [
    {
      title: 'Digitalización',
      subtitle: 'Sube documentos y obtén datos estructurados automáticamente',
      icon: <Upload className="size-5" />,
    },
    {
      title: 'Visualización',
      subtitle:
        'Árboles familiares y diagramas interactivos claros y profesionales',
      icon: <BarChart3 className="size-5" />,
    },
    {
      title: 'Generación',
      subtitle:
        'Documentos legales automáticos con plantillas validadas jurídicamente',
      icon: <FileText className="size-5" />,
    },
  ];

  return (
    <section className="relative isolate w-full py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Background accents (mismo lenguaje del hero) */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Descubre cómo funciona
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Una experiencia intuitiva que transforma la gestión de herencias en
            algo simple y eficiente
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left list */}
          <div className="space-y-4">
            {items.map((item, idx) => {
              const isActive = idx === 0;
              return (
                <AnimatedSection
                  key={item.title}
                  className={`fade-in-up ${idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'}`}
                >
                  <div
                    className={[
                      'flex items-center gap-4 rounded-2xl border p-5 md:p-6 backdrop-blur-sm transition-colors',
                      isActive
                        ? 'bg-white/10 border-blue-400/30 shadow-[0_12px_40px_rgba(0,0,0,0.25)]'
                        : 'bg-white/5 border-white/10 hover:bg-white/7',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'grid size-12 place-items-center rounded-2xl',
                        isActive
                          ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                          : 'bg-white/10 text-white/80',
                      ].join(' ')}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-white truncate">
                          {item.title}
                        </h3>
                        <div className="text-white/50 shrink-0">
                          {isActive ? (
                            <ChevronDown className="size-5" />
                          ) : (
                            <ChevronRight className="size-5" />
                          )}
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-white/65">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Right detail card */}
          <AnimatedSection className="fade-in-up delay-200">
            <div className="h-full rounded-2xl border border-blue-400/20 bg-blue-500/10 backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20">
                  <Upload className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white">
                    Procesamiento en tiempo real
                  </div>
                  <div className="text-sm text-white/65">
                    Analizando documento…
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between gap-4">
                  <span className="text-sm text-white/70">Fideicomisario:</span>
                  <span className="text-sm text-white">
                    Juan Barragán Domínguez
                  </span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between gap-4">
                  <span className="text-sm text-white/70">Valor total:</span>
                  <span className="text-sm font-semibold text-emerald-300">
                    755.000 €
                  </span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between gap-4">
                  <span className="text-sm text-white/70">Estado:</span>
                  <span className="text-sm text-cyan-300">✓ Procesado</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

