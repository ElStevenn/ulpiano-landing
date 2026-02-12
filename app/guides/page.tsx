import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  BookOpen,
  FileText,
  Video,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  Calculator,
  Users,
  FileCheck,
  Search,
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo de guías
const guides = [
  {
    id: 1,
    title: 'Guía completa del modelo 650',
    description:
      'Aprende paso a paso cómo presentar correctamente el modelo 650 del Impuesto de Sucesiones y Donaciones.',
    category: 'Fiscal',
    type: 'Guía',
    readTime: '15 min',
    level: 'Principiante',
    icon: FileText,
    color: 'blue',
    href: '/modelo-650',
  },
  {
    id: 2,
    title: 'Guía del modelo 651: Donaciones',
    description:
      'Todo lo que necesitas saber sobre la autoliquidación del Impuesto de Donaciones.',
    category: 'Fiscal',
    type: 'Guía',
    readTime: '12 min',
    level: 'Principiante',
    icon: FileText,
    color: 'purple',
    href: '/modelo-651',
  },
  {
    id: 3,
    title: 'Guía del modelo 652: Seguros de vida',
    description:
      'Cómo gestionar el Impuesto de Sucesiones por seguros de vida percibidos por fallecimiento.',
    category: 'Fiscal',
    type: 'Guía',
    readTime: '10 min',
    level: 'Intermedio',
    icon: FileText,
    color: 'green',
    href: '/modelo-652',
  },
  {
    id: 4,
    title: 'Guía del modelo 653: Transmisiones patrimoniales',
    description:
      'Aprende a presentar correctamente el modelo 653 para transmisiones patrimoniales.',
    category: 'Fiscal',
    type: 'Guía',
    readTime: '14 min',
    level: 'Intermedio',
    icon: FileText,
    color: 'orange',
    href: '/modelo-653',
  },
  {
    id: 5,
    title: 'Guía del modelo 660: Declaración de sucesiones',
    description:
      'Cómo formalizar la declaración patrimonial del fallecido de manera rápida y sencilla.',
    category: 'Fiscal',
    type: 'Guía',
    readTime: '18 min',
    level: 'Avanzado',
    icon: FileText,
    color: 'indigo',
    href: '/modelo-660',
  },
  {
    id: 6,
    title: 'Cómo crear un inventario de bienes digital',
    description:
      'Guía paso a paso para crear y gestionar un inventario completo de bienes usando Ulpiano.',
    category: 'Plataforma',
    type: 'Tutorial',
    readTime: '8 min',
    level: 'Principiante',
    icon: Calculator,
    color: 'cyan',
    href: '#',
  },
  {
    id: 7,
    title: 'Configuración del árbol familiar',
    description:
      'Aprende a configurar y visualizar el árbol familiar completo en Ulpiano.',
    category: 'Plataforma',
    type: 'Tutorial',
    readTime: '6 min',
    level: 'Principiante',
    icon: Users,
    color: 'pink',
    href: '#',
  },
  {
    id: 8,
    title: 'Simulación de escenarios sucesorios',
    description:
      'Cómo usar la herramienta de simulación para comparar diferentes estrategias sucesorias.',
    category: 'Plataforma',
    type: 'Tutorial',
    readTime: '10 min',
    level: 'Intermedio',
    icon: TrendingUp,
    color: 'blue',
    href: '#',
  },
  {
    id: 9,
    title: 'Seguridad y privacidad de datos',
    description:
      'Todo sobre cómo protegemos tus datos y qué medidas de seguridad implementamos.',
    category: 'Seguridad',
    type: 'Guía',
    readTime: '7 min',
    level: 'Principiante',
    icon: Shield,
    color: 'green',
    href: '#',
  },
];

const categories = [
  { name: 'Todas', count: guides.length, icon: BookOpen },
  { name: 'Fiscal', count: 5, icon: FileText },
  { name: 'Plataforma', count: 3, icon: Calculator },
  { name: 'Seguridad', count: 1, icon: Shield },
];

const colorClasses = {
  blue: 'bg-blue-500/10 text-blue-600',
  purple: 'bg-purple-500/10 text-purple-600',
  green: 'bg-green-500/10 text-green-600',
  orange: 'bg-orange-500/10 text-orange-600',
  indigo: 'bg-indigo-500/10 text-indigo-600',
  cyan: 'bg-cyan-500/10 text-cyan-600',
  pink: 'bg-pink-500/10 text-pink-600',
};

const levelColors = {
  Principiante: 'bg-green-100 text-green-700',
  Intermedio: 'bg-yellow-100 text-yellow-700',
  Avanzado: 'bg-red-100 text-red-700',
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero Section */}
      <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
          <div className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection className="fade-in-up delay-100">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Guías y tutoriales
                  </span>
                  <br />
                  <span className="text-white">Aprende a usar Ulpiano</span>
                  <br />
                  <span className="text-white">paso a paso</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Encuentra guías detalladas, tutoriales prácticos y recursos
                  para dominar todas las funcionalidades de Ulpiano y la
                  planificación sucesoria.
                </p>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-300">
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Busca en las guías..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category, index) => {
              const href =
                category.name === 'Todas'
                  ? '#guias-fiscales'
                  : category.name === 'Fiscal'
                  ? '#guias-fiscales'
                  : category.name === 'Plataforma'
                  ? '#tutoriales-plataforma'
                  : '#mas-recursos';
              return (
                <AnimatedSection
                  key={category.name}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <category.icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({category.count})
                    </span>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guías principales */}
      <section id="guias-fiscales" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Guías de modelos fiscales
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guías completas para presentar correctamente cada modelo del
                Impuesto de Sucesiones y Donaciones
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides
              .filter((guide) => guide.category === 'Fiscal')
              .map((guide, index) => (
                <AnimatedSection
                  key={guide.id}
                  className="fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Link href={guide.href}>
                    <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                      <div
                        className={`w-12 h-12 rounded-xl ${
                          colorClasses[guide.color as keyof typeof colorClasses]
                        } flex items-center justify-center mb-4`}
                      >
                        <guide.icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            colorClasses[
                              guide.color as keyof typeof colorClasses
                            ]
                          }`}
                        >
                          {guide.type}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            levelColors[guide.level as keyof typeof levelColors]
                          }`}
                        >
                          {guide.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 text-sm">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                          Ver guía
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* Tutoriales de plataforma */}
      <section
        id="tutoriales-plataforma"
        className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tutoriales de la plataforma
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aprende a usar todas las funcionalidades de Ulpiano
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides
              .filter((guide) => guide.category === 'Plataforma')
              .map((guide, index) => (
                <AnimatedSection
                  key={guide.id}
                  className="fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Link href={guide.href}>
                    <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                      <div
                        className={`w-12 h-12 rounded-xl ${
                          colorClasses[guide.color as keyof typeof colorClasses]
                        } flex items-center justify-center mb-4`}
                      >
                        <guide.icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            colorClasses[
                              guide.color as keyof typeof colorClasses
                            ]
                          }`}
                        >
                          {guide.type}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            levelColors[guide.level as keyof typeof levelColors]
                          }`}
                        >
                          {guide.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 text-sm">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                          Ver tutorial
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* Otras guías */}
      <section id="mas-recursos" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Más recursos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guías adicionales sobre seguridad y mejores prácticas
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides
              .filter(
                (guide) =>
                  guide.category !== 'Fiscal' && guide.category !== 'Plataforma'
              )
              .map((guide, index) => (
                <AnimatedSection
                  key={guide.id}
                  className="fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Link href={guide.href}>
                    <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                      <div
                        className={`w-12 h-12 rounded-xl ${
                          colorClasses[guide.color as keyof typeof colorClasses]
                        } flex items-center justify-center mb-4`}
                      >
                        <guide.icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            colorClasses[
                              guide.color as keyof typeof colorClasses
                            ]
                          }`}
                        >
                          {guide.type}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            levelColors[guide.level as keyof typeof levelColors]
                          }`}
                        >
                          {guide.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 text-sm">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                          Ver guía
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* HelpContact */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas ayuda con algo específico?"
        primaryLabel="Contactar soporte"
        secondaryLabel="Ver documentación"
        primaryHref="/contact"
        secondaryHref="/support"
      />
    </main>
  );
}
