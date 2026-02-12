'use client';

import {
  Building2,
  Heart,
  Shield,
  TrendingDown,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const benefits = [
  {
    icon: Building2,
    title: 'Refuerzo de la Marca Empleadora',
    description:
      'Posiciona tu empresa como líder en el cuidado y el bienestar de los trabajadores, destacando una preocupación real por su seguridad familiar.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: Heart,
    title: 'Disminución del Estrés en el Personal',
    description:
      'Proporciona herramientas y asesoría para resolver trámites sucesorios, disminuyendo distracciones y preocupación en el lugar de trabajo.',
    color: 'var(--color-luminary-success)',
  },
  {
    icon: TrendingDown,
    title: 'Optimización de Recursos',
    description:
      'Al centralizar los procesos y digitalizar la documentación, se reduce la necesidad de permisos prolongados y gestiones presenciales.',
    color: '#ff6b35',
  },
  {
    icon: Shield,
    title: 'Compromiso con la Responsabilidad Social',
    description:
      'Facilita una planificación ordenada del legado, ayudando a tus empleados y sus familias a evitar conflictos futuros.',
    color: 'var(--color-luminary-navy)',
  },
];

const features = [
  'Plataforma de planificación sucesoria para empleados',
  'Generación automática de testamentos y documentos',
  'Simulaciones fiscales y visualizaciones claras',
  'Asesoría experta incluida',
  'Reducción de ausencias por trámites legales',
  'Cifrado y protección de datos personales',
  'Actualización normativa constante',
  'Soporte continuo y actualizaciones',
];

export default function BeneficiosCorporativosBenefits() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Beneficios Para tu Empresa
            </h2>
          </AnimatedSection>
          <AnimatedSection className="fade-in-up delay-200">
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Impulsa el bienestar financiero de tu plantilla con un plan de
              sucesión integral que diferencia tu marca empleadora.
            </p>
          </AnimatedSection>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={benefit.title}
              className="fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <Card className="p-8 h-full border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <benefit.icon
                      className="w-6 h-6"
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
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

        {/* Features List */}
        <AnimatedSection className="fade-in-up delay-500">
          <Card className="p-8 border-0 shadow-lg bg-white">
            <div className="text-center mb-8">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Características Principales
              </h3>
              <p className="text-muted-foreground">
                Todo lo que incluye el beneficio corporativo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="fade-in-up delay-600 mt-16">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Introduce ulpiano.es en tu empresa y brinda a tus trabajadores la
              tranquilidad de un proceso sucesorio claro y simplificado.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg">
              <span>
                Innova en Tu Plan de Beneficios y Protege el Futuro de Tus
                Empleados
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
