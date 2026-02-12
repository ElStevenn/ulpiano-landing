import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  Target,
  Lightbulb,
  Users,
  Shield,
  Zap,
  Heart,
  Award,
  TrendingUp,
  CheckCircle,
  Globe,
  Code,
  Scale,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
                    Transformando el futuro
                  </span>
                  <br />
                  <span className="text-white">
                    de la planificación sucesoria
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  En Ulpiano, creemos que la gestión de herencias debe ser
                  accesible, transparente y eficiente. Nuestra misión es
                  modernizar un sector tradicional con tecnología de vanguardia,
                  poniendo el poder de la planificación sucesoria al alcance de
                  todos.
                </p>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-300">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/demo">
                    <LuminaryButton
                      size="lg"
                      variant="primary"
                      className="px-8 py-4 font-semibold text-lg"
                    >
                      Prueba gratuita
                    </LuminaryButton>
                  </Link>
                  <Link href="/contact">
                    <LuminaryButton
                      size="lg"
                      variant="secondary"
                      className="px-8 py-4 font-semibold text-lg"
                    >
                      Contacta con nosotros
                    </LuminaryButton>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestra Historia
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ulpiano nació de la necesidad de modernizar un sector que,
                durante décadas, ha operado con procesos manuales y complejos.
                Nuestro equipo, formado por expertos en derecho sucesorio,
                tecnología y experiencia de usuario, identificó una oportunidad
                única: crear una plataforma que combinara el rigor jurídico con
                la innovación tecnológica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Desde nuestros inicios, hemos trabajado codo con codo con
                notarías, despachos de abogados y asesorías para entender sus
                necesidades reales. Esta colaboración nos ha permitido
                desarrollar una solución que no solo automatiza procesos, sino
                que mejora significativamente la experiencia tanto para los
                profesionales como para las familias que confían en ellos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoy, Ulpiano es la plataforma de referencia en España para la
                gestión integral de herencias, ayudando a miles de profesionales
                a ofrecer un servicio más ágil, transparente y eficiente.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <AnimatedSection className="fade-in-up delay-100">
              <div className="bg-white rounded-xl border shadow-lg p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Democratizar el acceso a la planificación sucesoria mediante
                  tecnología innovadora que simplifica procesos complejos,
                  garantiza la seguridad de los datos y ofrece transparencia
                  total en cada etapa del proceso.
                </p>
              </div>
            </AnimatedSection>

            {/* Visión */}
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser la plataforma líder en Europa para la gestión de
                  herencias, reconocida por su innovación, seguridad y
                  compromiso con la excelencia en el servicio a profesionales y
                  familias.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros Valores
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Los principios que guían cada decisión y cada línea de código
                que escribimos
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Seguridad</h3>
                <p className="text-gray-600">
                  Protegemos la información más sensible con los más altos
                  estándares de seguridad y cumplimiento normativo.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Aplicamos las últimas tecnologías para resolver problemas
                  complejos de forma simple y elegante.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparencia</h3>
                <p className="text-gray-600">
                  Creemos en la comunicación clara y honesta, tanto en nuestros
                  procesos como en nuestras relaciones.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-500">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excelencia</h3>
                <p className="text-gray-600">
                  Nos esforzamos por superar las expectativas en cada detalle,
                  desde el código hasta la atención al cliente.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-600">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Colaboración</h3>
                <p className="text-gray-600">
                  Trabajamos en equipo con nuestros clientes para entender sus
                  necesidades y desarrollar soluciones a medida.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-700">
              <div className="bg-white rounded-xl border shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mejora Continua</h3>
                <p className="text-gray-600">
                  Evolucionamos constantemente, escuchando feedback y
                  adaptándonos a las necesidades del mercado.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tecnología y Compromiso */}
      <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="fade-in-up delay-100">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tecnología al servicio del derecho
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Utilizamos inteligencia artificial, procesamiento de lenguaje
                  natural y análisis de datos para automatizar tareas complejas,
                  pero siempre bajo la supervisión y validación de profesionales
                  expertos en derecho sucesorio.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Cumplimiento normativo
                      </h3>
                      <p className="text-white/70 text-sm">
                        Nuestra plataforma se actualiza constantemente para
                        cumplir con la legislación española y autonómica
                        vigente.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Seguridad de datos
                      </h3>
                      <p className="text-white/70 text-sm">
                        Encriptación de extremo a extremo y almacenamiento
                        seguro conforme al RGPD.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Innovación constante
                      </h3>
                      <p className="text-white/70 text-sm">
                        Lanzamos nuevas funcionalidades regularmente basadas en
                        el feedback de nuestros usuarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      1000+
                    </div>
                    <div className="text-white/80 text-sm">
                      Profesionales confían en nosotros
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      50K+
                    </div>
                    <div className="text-white/80 text-sm">
                      Documentos procesados
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      99.9%
                    </div>
                    <div className="text-white/80 text-sm">
                      Uptime garantizado
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      24/7
                    </div>
                    <div className="text-white/80 text-sm">
                      Soporte disponible
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Listo para transformar tu forma de trabajar?"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
