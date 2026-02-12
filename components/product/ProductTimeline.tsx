'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Calculator, FileText, GitBranch } from "lucide-react";

export function ProductTimeline() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl">
        {/* Línea de tiempo */}
        <div className="relative mb-10">
          <div className="h-1 w-full rounded-full" style={{ background: "linear-gradient(90deg, var(--color-luminary-blue), var(--color-luminary-coral))" }} />
          <div className="absolute -top-2 left-0 size-4 rounded-full border-2 border-white" style={{ background: "var(--color-luminary-blue)" }} />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full border-2 border-white" style={{ background: "var(--color-luminary-success)" }} />
          <div className="absolute -top-2 right-0 size-4 rounded-full border-2 border-white" style={{ background: "var(--color-luminary-coral)" }} />
        </div>

        {/* Tabs por bloques */}
        <Tabs defaultValue="b1" className="w-full">
          <TabsList className="flex justify-center gap-2 mb-8">
            <TabsTrigger value="b1">Análisis</TabsTrigger>
            <TabsTrigger value="b2">Simulación</TabsTrigger>
            <TabsTrigger value="b3">Ejecución</TabsTrigger>
          </TabsList>

          {/* Bloque 1 */}
          <TabsContent value="b1" className="data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2">
            <AnimatedSection className="fade-in-up">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--color-luminary-navy)' }}>Convierte la complejidad en claridad</h2>
                  <p className="text-lg text-muted-foreground mt-3">Ulpiano te ofrece una visión 360º de documentos, herederos y patrimonio para entender el punto de partida.</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="font-semibold flex items-center gap-2"><FileText className="size-4" /> Abstracciones de documentos</div>
                      <div className="text-sm text-muted-foreground">Procesamiento inteligente</div>
                      <p className="text-sm text-muted-foreground mt-2">Digitaliza escrituras, testamentos y contratos en segundos. Ulpiano AI extrae automáticamente la información clave, reduciendo errores y acelerando tu trabajo.</p>
                    </div>
                    <div>
                      <div className="font-semibold">Árbol familiar</div>
                      <div className="text-sm text-muted-foreground">Visualización clara y profesional</div>
                      <p className="text-sm text-muted-foreground mt-2">Un esquema claro: Familiares, legitimarios, herederos, atribuciones y títulos sucesorios. Ideal para explicar planes de sucesión de forma visual.</p>
                    </div>
                    <div>
                      <div className="font-semibold">Creación de inventario de bienes</div>
                      <div className="text-sm text-muted-foreground">Inventario centralizado</div>
                      <p className="text-sm text-muted-foreground mt-2">Centraliza todo el patrimonio —inmuebles, cuentas, activos digitales y más— en un único inventario digital y visual. Una radiografía precisa para empezar a planificar.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border p-6 shadow-sm bg-white">
                  <div className="text-sm text-muted-foreground mb-2">Demo interactiva</div>
                  <div className="h-64 rounded-lg bg-gradient-to-br from-slate-50 to-blue-50" />
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Bloque 2 */}
          <TabsContent value="b2" className="data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2">
            <AnimatedSection className="fade-in-up">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--color-luminary-navy)' }}>Simula, compara y elige la mejor estrategia sucesoria</h2>
                  <p className="text-lg text-muted-foreground mt-3">Escenarios claros, cálculos precisos y proyecciones dinámicas para tomar decisiones con confianza.</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="font-semibold flex items-center gap-2"><GitBranch className="size-4" /> Creación de escenarios</div>
                      <div className="text-sm text-muted-foreground">Comparación de alternativas</div>
                      <p className="text-sm text-muted-foreground mt-2">Diseña distintas alternativas (pactos sucesorios, donaciones, testamentos) y visualiza sus efectos de manera inmediata.</p>
                    </div>
                    <div>
                      <div className="font-semibold flex items-center gap-2"><Calculator className="size-4" /> Calculador</div>
                      <div className="text-sm text-muted-foreground">Cálculos automáticos</div>
                      <p className="text-sm text-muted-foreground mt-2">Calcula automáticamente el impacto fiscal y patrimonial de cada escenario, adaptado a la normativa española y autonómica.</p>
                    </div>
                    <div>
                      <div className="font-semibold">Proyecciones</div>
                      <div className="text-sm text-muted-foreground">Análisis predictivo</div>
                      <p className="text-sm text-muted-foreground mt-2">Anticipa el futuro con gráficos interactivos que muestran cómo evolucionará el patrimonio y cómo se distribuirán los bienes en distintos supuestos.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border p-6 shadow-sm bg-white">
                  <div className="text-sm text-muted-foreground mb-2">Simulador</div>
                  <div className="h-64 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50" />
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Bloque 3 */}
          <TabsContent value="b3" className="data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2">
            <AnimatedSection className="fade-in-up">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--color-luminary-navy)' }}>De la planificación a la ejecución, con tecnología inteligente</h2>
                  <p className="text-lg text-muted-foreground mt-3">Ulpiano simplifica el trabajo diario, genera documentos y te conecta con tus clientes.</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="font-semibold">Ulpiano AI</div>
                      <div className="text-sm text-muted-foreground">Análisis inteligente</div>
                      <p className="text-sm text-muted-foreground mt-2">Un copiloto experto en herencias y sucesiones. Analiza documentos, detecta inconsistencias y propone mejoras para que tomes decisiones con seguridad.</p>
                    </div>
                    <div>
                      <div className="font-semibold">Creación de documentos</div>
                      <div className="text-sm text-muted-foreground">Generación automática</div>
                      <p className="text-sm text-muted-foreground mt-2">Desde borradores de testamentos hasta escrituras de donación: genera en minutos modelos listos para revisión, personalización y validación jurídica.</p>
                    </div>
                    <div>
                      <div className="font-semibold">Portal del cliente</div>
                      <div className="text-sm text-muted-foreground">Acceso seguro</div>
                      <p className="text-sm text-muted-foreground mt-2">Facilita la relación con clientes y herederos gracias a un espacio digital seguro donde consultar expedientes, firmar documentos y recibir actualizaciones.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border p-6 shadow-sm bg-white">
                  <div className="text-sm text-muted-foreground mb-2">Ejecución</div>
                  <div className="h-64 rounded-lg bg-gradient-to-br from-orange-50 to-rose-50" />
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
