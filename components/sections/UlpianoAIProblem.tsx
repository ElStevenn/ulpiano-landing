'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Clock, FileSearch, Repeat, BrainCircuit, XCircle } from 'lucide-react';

export default function UlpianoAIProblem() {
  const problems = [
    {
      icon: FileSearch,
      text: 'La información está dispersa en documentos, notas, emails y llamadas.',
    },
    {
      icon: Clock,
      text: 'Volver a entender un expediente complejo lleva demasiado tiempo.',
    },
    {
      icon: Repeat,
      text: 'Las consultas internas se repiten innecesariamente.',
    },
    {
      icon: BrainCircuit,
      text: 'El conocimiento queda en la cabeza del abogado… o se pierde.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="fade-in-up delay-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Tus expedientes son complejos. <br />
              <span className="text-indigo-600">Tu tiempo, limitado.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              En un despacho, la gestión del conocimiento es el cuello de botella.
              La IA genérica no entiende tu caso, pero Ulpiano sí.
            </p>
            
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="p-2 bg-red-50 text-red-500 rounded-lg shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-slate-700 font-medium pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-300">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg rotate-3 z-10">
                El problema actual
              </div>
              <div className="space-y-6 opacity-70 blur-[0.5px]">
                {/* Mockup de búsqueda fallida o caos */}
                <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse"></div>
                <div className="p-4 bg-slate-50 rounded border border-dashed border-slate-300 flex items-center justify-center text-slate-400 gap-2">
                  <XCircle className="w-5 h-5" />
                  <span>Sin contexto del expediente</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="text-lg font-semibold text-slate-800">
                  ¿Cuántas horas pierdes buscando lo que ya deberías saber?
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
