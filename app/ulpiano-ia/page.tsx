import Link from 'next/link';
import { ArrowRight, Bot, FileText, ScanSearch } from 'lucide-react';

export default function UlpianoIAIndexPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Ulpiano IA
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8">
            Inteligencia artificial especializada en planificación sucesoria y gestión documental
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Asistente IA */}
          <Link
            href="/ulpiano-ia/asistente"
            className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute top-8 right-8 text-slate-300 group-hover:text-indigo-500 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Asistente IA
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Chat inteligente que comprende el contexto completo de cada expediente sucesorio
              </p>
            </div>
            <div className="text-sm text-indigo-600 font-medium group-hover:text-indigo-700">
              Conocer más →
            </div>
          </Link>

          {/* Generación de Documentos */}
          <Link
            href="/ulpiano-ia/generacion-documentos-ia"
            className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute top-8 right-8 text-slate-300 group-hover:text-indigo-500 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Generación de Documentos
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Crea testamentos, pactos sucesorios y escrituras en minutos con IA
              </p>
            </div>
            <div className="text-sm text-indigo-600 font-medium group-hover:text-indigo-700">
              Conocer más →
            </div>
          </Link>

          {/* Procesamiento de Documentos */}
          <Link
            href="/ulpiano-ia/procesamiento-inteligente-documentos"
            className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute top-8 right-8 text-slate-300 group-hover:text-indigo-500 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <ScanSearch className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Procesamiento de Documentos
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Digitaliza y simplifica la gestión de documentos sucesorios con IA
              </p>
            </div>
            <div className="text-sm text-indigo-600 font-medium group-hover:text-indigo-700">
              Conocer más →
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu práctica?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Descubre cómo Ulpiano IA puede ayudarte a trabajar de forma más eficiente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Solicitar demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-400 transition-colors"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
