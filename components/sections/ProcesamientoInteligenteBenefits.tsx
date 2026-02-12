'use client';

import {
  Clock,
  ShieldCheck,
  Workflow,
  Lock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const benefits = [
  {
    icon: Clock,
    title: 'Ahorro de Tiempo y Costes',
    description:
      'Automatiza la revisión de decenas de documentos, reduciendo el trabajo manual y las posibles demoras.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: ShieldCheck,
    title: 'Menos Errores, Mayor Fiabilidad',
    description:
      'El sistema de IA minimiza los errores en la transcripción de datos, garantizando mayor exactitud en el proceso sucesorio.',
    color: 'var(--color-luminary-success)',
  },
  {
    icon: Workflow,
    title: 'Flujo de Trabajo Optimizado',
    description:
      'Integra los datos extraídos en un solo entorno digital, facilitando la colaboración entre abogados, notarios y demás profesionales.',
    color: '#ff6b35',
  },
  {
    icon: Lock,
    title: 'Cumplimiento Legal y Seguridad',
    description:
      'Mantenemos altos estándares de cifrado y protocolos de privacidad para cumplir con la normativa vigente (RGPD, LOPDGDD, etc.).',
    color: 'var(--color-luminary-navy)',
  },
];

export default function ProcesamientoInteligenteBenefits() {
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
              "Procesamiento Inteligente de Documentos: la clave para una
              herencia ágil y sin complicaciones."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
