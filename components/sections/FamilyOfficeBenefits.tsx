'use client';

import {
  Globe,
  Shield,
  TrendingDown,
  Eye,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const benefits = [
  {
    icon: Globe,
    title: 'Enfoque Holístico para Grandes Patrimonios',
    description:
      'Simplifica la coordinación entre activos, jurisdicciones y beneficiarios múltiples.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: Shield,
    title: 'Máxima Confidencialidad',
    description:
      'Herramientas de seguridad robustas y acceso restringido para preservar la privacidad de tus clientes.',
    color: 'var(--color-luminary-success)',
  },
  {
    icon: TrendingDown,
    title: 'Reducción de Riesgos y Errores',
    description:
      'Minimiza contingencias legales o fiscales con actualizaciones normativas constantes.',
    color: '#ff6b35',
  },
  {
    icon: Eye,
    title: 'Transparencia y Colaboración',
    description:
      'Comparte informes y esquemas de forma selectiva con miembros de la familia, asesores legales o financieros.',
    color: 'var(--color-luminary-navy)',
  },
];

const features = [
  'Consolidación de activos multi-jurisdicción',
  'Planificación sucesoria avanzada',
  'Simulación y optimización fiscal',
  'Dashboard exclusivo con control de acceso',
  'Protección de datos de nivel bancario',
  'Visualización en tiempo real del patrimonio',
  'Reportes detallados para reuniones',
  'Adaptación continua a normativas',
];

export default function FamilyOfficeBenefits() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Beneficios Para Family Offices
            </h2>
          </AnimatedSection>
          <AnimatedSection className="fade-in-up delay-200">
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Potencia la gestión y continuidad del patrimonio familiar con
              herramientas diseñadas para grandes patrimonios.
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
                Todo lo que necesitas para gestionar grandes patrimonios
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
              Adopta la tecnología de ulpiano.es para planificar la sucesión de
              manera segura, optimizada y transparente para las futuras
              generaciones.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg">
              <span>
                Potencia la Gestión y Continuidad del Patrimonio Familiar
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
