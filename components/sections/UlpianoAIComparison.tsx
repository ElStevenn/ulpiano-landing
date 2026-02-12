'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Check, X, ShieldCheck, Lock } from 'lucide-react';

export default function UlpianoAIComparison() {
  const features = [
    { label: 'Respuestas', generic: 'Abstractas y generales', ulpiano: 'Basadas en tu expediente' },
    { label: 'Memoria', generic: 'Sin memoria real', ulpiano: 'Memoria jurídica del caso' },
    { label: 'Documentos', generic: 'No conoce documentos privados', ulpiano: 'Razona sobre documentos reales' },
    { label: 'Contexto', generic: 'No entiende relaciones', ulpiano: 'Entiende personas, bienes y relaciones' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              ¿Por qué Ulpiano AI es diferente?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              La diferencia entre una IA genérica y un asistente especializado en tu despacho.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection className="fade-in-up delay-200">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-6 text-sm font-semibold text-slate-500 tracking-wider uppercase">
              <div className="invisible md:visible">Característica</div>
              <div className="text-center text-slate-400">IA Genérica</div>
              <div className="text-center text-indigo-600">Ulpiano AI</div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {features.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-6 items-center hover:bg-slate-50/50 transition-colors">
                  <div className="font-medium text-slate-900 mb-2 md:mb-0 text-center md:text-left">
                    {item.label}
                  </div>
                  
                  <div className="text-center text-slate-500 flex flex-col items-center gap-2 mb-4 md:mb-0">
                    <span className="md:hidden text-xs uppercase tracking-wide text-slate-400 font-bold">IA Genérica</span>
                    <div className="flex items-center gap-2 justify-center">
                        <X className="w-5 h-5 text-red-400" />
                        <span>{item.generic}</span>
                    </div>
                  </div>
                  
                  <div className="text-center text-slate-800 font-medium flex flex-col items-center gap-2 bg-indigo-50/50 rounded-lg p-2 md:bg-transparent md:p-0">
                    <span className="md:hidden text-xs uppercase tracking-wide text-indigo-600 font-bold">Ulpiano AI</span>
                    <div className="flex items-center gap-2 justify-center">
                        <Check className="w-5 h-5 text-indigo-600" />
                        <span>{item.ulpiano}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Security Section */}
        <AnimatedSection className="fade-in-up delay-300">
          <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
             {/* Abstract grid */}
             <div className="absolute inset-0 opacity-10" 
                style={{backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px"}}>
             </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3 text-indigo-400 font-semibold mb-2">
                  <ShieldCheck className="w-6 h-6" />
                  <span>Seguridad y Control</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Tu información, siempre protegida</h3>
                <p className="text-slate-300 leading-relaxed">
                  Cada chat está aislado por expediente. La información es privada y controlada por el despacho.
                  Tú decides qué documentos y datos se usan. Cumplimos con estándares de confidencialidad profesional.
                </p>
              </div>
              <div className="shrink-0 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Lock className="w-12 h-12 text-indigo-300 mb-4 mx-auto" />
                <div className="text-center font-medium">Encriptación <br/>de extremo a extremo</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
