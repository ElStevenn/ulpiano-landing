'use client';

import {
  TrendingUp,
  Eye,
  Shield,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Eficiencia y Control de Costes',
    description:
      'Reduce el tiempo invertido en cálculos manuales y trámites repetitivos.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: Eye,
    title: 'Transparencia para el Cliente',
    description:
      'Muestra gráficamente la distribución de bienes y el impacto fiscal de forma clara y comprensible.',
    color: 'var(--color-luminary-success)',
  },
  {
    icon: Shield,
    title: 'Cumplimiento Integral',
    description:
      'Minimiza riesgos gracias a la actualización constante de la normativa en materia de sucesiones.',
    color: '#ff6b35',
  },
  {
    icon: Briefcase,
    title: 'Profesionalidad e Innovación',
    description:
      'Diferénciate como asesoría al ofrecer soluciones digitales y un servicio altamente personalizado.',
    color: 'var(--color-luminary-navy)',
  },
];

const features = [
  'Cálculo automatizado de impuestos sucesorios',
  'Visualización interactiva del patrimonio',
  'Generación automática de documentos legales',
  'Reportes de atribución detallados',
  'Simulaciones fiscales en tiempo real',
  'Panel de control cifrado',
  'Actualización normativa automática',
  'Seguimiento en tiempo real de expedientes',
];

export default function AsesoriasBenefits() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Beneficios Para tu Asesoría
            </h2>
          </AnimatedSection>
          <AnimatedSection className="fade-in-up delay-200">
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Transforma tu asesoría con herramientas digitales que optimizan
              cada proceso y mejoran la experiencia de tus clientes.
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
                Todo lo que necesitas para modernizar tu asesoría
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
              Descubre cómo ulpiano.es puede transformar tu gestión de herencias
              y acercarte a tus clientes con mayor transparencia y eficacia.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg">
              <span>
                Lleva Tu Asesoría al Siguiente Nivel en la Planificación
                Sucesoria
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
