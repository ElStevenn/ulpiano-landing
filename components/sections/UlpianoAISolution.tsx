'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  MessageSquare,
  FileText,
  Brain,
  Scale,
  Search,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Conoce el detalle del expediente',
    description:
      'Tiene acceso a documentación subida (escrituras, notas, contratos), datos estructurados, historial de decisiones y contexto familiar/fiscal. No hay que explicar de nuevo el caso.',
    color: '#4f46e5', // Indigo
  },
  {
    icon: MessageSquare,
    title: 'Conversa de forma natural',
    description:
      'Pregunta sobre riesgos fiscales, resúmenes de estado o documentación faltante. Responde siempre en función de TU expediente, no en abstracto.',
    color: '#0891b2', // Cyan
  },
  {
    icon: FileText,
    title: 'Razona sobre documentos',
    description:
      'Cruza notas simples, escrituras y contratos. Detecta incoherencias, datos incompletos y señala impactos jurídicos relevantes.',
    color: '#7c3aed', // Purple
  },
  {
    icon: Scale,
    title: 'Pensado para juristas',
    description:
      'Usa lenguaje jurídico, respeta la lógica legal y fiscal, no inventa soluciones sin base y te asiste sin sustituir tu criterio profesional.',
    color: '#ea580c', // Orange
  },
];

export default function UlpianoAISolution() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4 border border-indigo-100">
              La Solución
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Chat Asistente Ulpiano AI
            </h2>
          </AnimatedSection>
          <AnimatedSection className="fade-in-up delay-200">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un chat conversacional con memoria jurídica del caso que razona sobre documentos reales.
              Habla con tu expediente como si hablaras con tu propio equipo.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative rounded-xl border bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="grid size-12 place-items-center rounded-lg flex-shrink-0 transition-colors group-hover:bg-white"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon
                      className="size-6"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-slate-900">
                      {feature.title}
                    </h4>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
