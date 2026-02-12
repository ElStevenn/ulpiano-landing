'use client';

import { Clock, Shield, TrendingDown, Layers, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const benefits = [
  {
    icon: Clock,
    title: 'Ahorro de Tiempo y Recursos',
    description:
      'Automatiza la generación de documentos para concentrarte en la estrategia legal y el asesoramiento al cliente.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: Shield,
    title: 'Seguridad Jurídica',
    description:
      'Nuestra IA está entrenada en derecho sucesorio, contemplando cláusulas típicas y respetando las legítimas y demás requisitos legales.',
    color: 'var(--color-luminary-success)',
  },
  {
    icon: TrendingDown,
    title: 'Reducción de Errores',
    description:
      'La automatización evita incongruencias en la redacción, nombres o referencias legales, disminuyendo riesgos en la ejecución.',
    color: '#ff6b35',
  },
  {
    icon: Layers,
    title: 'Escalabilidad',
    description:
      'Gestiona múltiples expedientes sucesorios de forma simultánea, optimizando el trabajo de tu despacho o asesoría.',
    color: 'var(--color-luminary-navy)',
  },
];

export default function GeneracionDocumentosIABenefits() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Beneficios Clave
            </h2>
          </AnimatedSection>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <Card className="p-8 h-full border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className="grid size-12 place-items-center rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <benefit.icon
                      className="size-6"
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Tagline Final */}
        <AnimatedSection className="fade-in-up delay-500">
          <div className="text-center">
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              "Con ulpiano.es, la redacción de documentos sucesorios se
              convierte en un proceso ágil, seguro y 100% personalizado."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
