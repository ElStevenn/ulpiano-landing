'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Briefcase, Calculator, Building, ArrowRight } from 'lucide-react';

export default function UlpianoAIUseCases() {
  const cases = [
    {
      icon: Briefcase,
      title: 'Herencias y Sucesiones',
      points: [
        'Análisis de masa hereditaria.',
        'Tratamiento de deudas intrafamiliares.',
        'Colación, compensaciones y escenarios.',
        'Preparación de reuniones con clientes.',
      ],
      color: 'bg-amber-100 text-amber-700',
    },
    {
      icon: Calculator,
      title: 'Fiscalidad Patrimonial',
      points: [
        'Impacto fiscal de decisiones concretas.',
        'Comparación de alternativas.',
        'Identificación de riesgos.',
        'Simulación de escenarios tributarios.',
      ],
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      icon: Building,
      title: 'Gestión Interna del Despacho',
      points: [
        'Onboarding rápido de expedientes.',
        'Continuidad del caso aunque cambie el abogado.',
        'Ahorro de tiempo en consultas internas.',
        'Recuperación de contexto instantánea.',
      ],
      color: 'bg-sky-100 text-sky-700',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Casos de uso reales
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Descubre cómo Ulpiano AI se adapta a diferentes áreas de práctica legal y fiscal.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <AnimatedSection
              key={index}
              className="fade-in-up group"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${useCase.color}`}>
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <ArrowRight className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
