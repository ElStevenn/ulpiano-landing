import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  Users,
  Zap,
  Heart,
  Award,
  Coffee,
  Globe,
  Code,
  Briefcase,
  Rocket,
  CheckCircle,
  ArrowRight,
  Clock,
  Home,
  GraduationCap,
  DollarSign,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
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
                    Únete al equipo
                  </span>
                  <br />
                  <span className="text-white">
                    que está transformando la planificación sucesoria
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Buscamos personas apasionadas por la tecnología y el derecho
                  que quieran formar parte de una misión: hacer que la gestión
                  de herencias sea más accesible, transparente y eficiente para
                  todos.
                </p>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-300">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="#ofertas">
                    <LuminaryButton
                      size="lg"
                      variant="primary"
                      className="px-8 py-4 font-semibold text-lg"
                    >
                      Ver ofertas disponibles
                    </LuminaryButton>
                  </Link>
                  <Link href="/contact">
                    <LuminaryButton
                      size="lg"
                      variant="secondary"
                      className="px-8 py-4 font-semibold text-lg"
                    >
                      Envíanos tu CV
                    </LuminaryButton>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué trabajar en Ulpiano */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por qué trabajar en Ulpiano
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Formamos parte de un equipo que está cambiando la forma en que
                se gestionan las herencias en España
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Impacto real</h3>
                <p className="text-gray-600">
                  Tu trabajo ayudará a miles de familias y profesionales a
                  gestionar procesos complejos de forma más sencilla.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Tecnología de vanguardia
                </h3>
                <p className="text-gray-600">
                  Trabajamos con las últimas tecnologías: React, TypeScript,
                  Node.js, IA y más.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Equipo excepcional</h3>
                <p className="text-gray-600">
                  Colabora con profesionales apasionados y expertos en sus
                  respectivos campos.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-500">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Crecimiento continuo</h3>
                <p className="text-gray-600">
                  Invierte en tu desarrollo profesional con formación, mentoring
                  y oportunidades de crecimiento.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-600">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexibilidad</h3>
                <p className="text-gray-600">
                  Trabajo remoto, horarios flexibles y equilibrio entre vida
                  personal y profesional.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-700">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Participa en proyectos innovadores que están transformando un
                  sector tradicional.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Beneficios y compensación
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cuidamos de nuestro equipo con un paquete completo de beneficios
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Compensación</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Salario competitivo
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Remuneración acorde al mercado y tu experiencia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Participación en beneficios
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Forma parte del éxito de la empresa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Revisión salarial anual
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Evaluaciones regulares y ajustes según desempeño
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="bg-white rounded-xl border shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Bienestar</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Home className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Trabajo remoto</h4>
                      <p className="text-gray-600 text-sm">
                        Trabaja desde donde quieras, con flexibilidad horaria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Días libres ilimitados
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Confiamos en tu criterio para gestionar tus vacaciones
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Seguro médico privado
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Cobertura médica completa para ti y tu familia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Presupuesto para formación
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Invierte en cursos, conferencias y certificaciones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ofertas de trabajo */}
      <section id="ofertas" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ofertas disponibles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explora nuestras posiciones abiertas y encuentra tu próximo
                desafío
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">
                        Senior Full Stack Developer
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        Remoto
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Buscamos un desarrollador experimentado para liderar el
                      desarrollo de nuevas funcionalidades en nuestra
                      plataforma.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        React
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        TypeScript
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        5+ años
                      </span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <LuminaryButton
                      variant="primary"
                      className="whitespace-nowrap"
                    >
                      Aplicar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </LuminaryButton>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">Product Designer</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        Híbrido
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Diseñador de producto para crear experiencias intuitivas y
                      hermosas que simplifiquen procesos complejos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        UX/UI
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Figma
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Design Systems
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        3+ años
                      </span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <LuminaryButton
                      variant="primary"
                      className="whitespace-nowrap"
                    >
                      Aplicar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </LuminaryButton>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">
                        Abogado especialista en derecho sucesorio
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        Remoto
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Experto en derecho sucesorio para validar y mejorar
                      nuestros procesos y funcionalidades jurídicas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Derecho Civil
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Sucesiones
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Fiscal
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        5+ años
                      </span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <LuminaryButton
                      variant="primary"
                      className="whitespace-nowrap"
                    >
                      Aplicar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </LuminaryButton>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-500">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">
                        ¿No encuentras tu puesto ideal?
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Siempre estamos buscando talento excepcional. Si crees que
                      puedes aportar valor a Ulpiano, envíanos tu CV.
                    </p>
                  </div>
                  <Link href="/contact">
                    <LuminaryButton
                      variant="secondary"
                      className="whitespace-nowrap"
                    >
                      Enviar CV
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </LuminaryButton>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Proceso de selección */}
      <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestro proceso de selección
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Un proceso transparente y ágil diseñado para conocernos mejor
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="font-semibold mb-2">Aplicación</h3>
                <p className="text-sm text-gray-300">
                  Envía tu CV y carta de presentación
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="font-semibold mb-2">Revisión</h3>
                <p className="text-sm text-gray-300">
                  Revisamos tu perfil y experiencia
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="font-semibold mb-2">Entrevista</h3>
                <p className="text-sm text-gray-300">
                  Charla con el equipo para conocernos
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-500">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">4</span>
                </div>
                <h3 className="font-semibold mb-2">Oferta</h3>
                <p className="text-sm text-gray-300">
                  Si encajas, te hacemos una oferta
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Listo para formar parte del equipo?"
        primaryLabel="Ver ofertas disponibles"
        secondaryLabel="Envíanos tu CV"
        primaryHref="#ofertas"
        secondaryHref="/contact"
      />
    </main>
  );
}
