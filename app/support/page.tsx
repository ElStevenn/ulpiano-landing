import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  HelpCircle,
  Book,
  MessageCircle,
  Video,
  FileText,
  Search,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Zap,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
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
                    Centro de ayuda
                  </span>
                  <br />
                  <span className="text-white">
                    Encuentra respuestas rápidas
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Busca en nuestra base de conocimientos, consulta las guías o
                  contacta con nuestro equipo de soporte.
                </p>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-300">
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Busca en la base de conocimientos..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de ayuda */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿En qué podemos ayudarte?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explora nuestras categorías de ayuda y encuentra la información
                que necesitas
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="fade-in-up delay-200">
              <Link href="#guias">
                <div className="bg-white rounded-xl border shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Book className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Guías y tutoriales</h3>
                  <p className="text-gray-600 mb-4">
                    Aprende a usar todas las funcionalidades de Ulpiano paso a
                    paso
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Ver guías
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <Link href="#faq">
                <div className="bg-white rounded-xl border shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <HelpCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Preguntas frecuentes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Respuestas rápidas a las preguntas más comunes sobre Ulpiano
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    Ver FAQ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <Link href="#videos">
                <div className="bg-white rounded-xl border shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Videos tutoriales</h3>
                  <p className="text-gray-600 mb-4">
                    Aprende visualmente con nuestros videos explicativos
                  </p>
                  <div className="flex items-center text-green-600 font-medium">
                    Ver videos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-500">
              <Link href="/contact">
                <div className="bg-white rounded-xl border shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Contactar soporte</h3>
                  <p className="text-gray-600 mb-4">
                    Habla directamente con nuestro equipo de soporte técnico
                  </p>
                  <div className="flex items-center text-orange-600 font-medium">
                    Contactar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-600">
              <Link href="#documentacion">
                <div className="bg-white rounded-xl border shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Documentación</h3>
                  <p className="text-gray-600 mb-4">
                    Documentación técnica completa para desarrolladores
                  </p>
                  <div className="flex items-center text-cyan-600 font-medium">
                    Ver docs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-700">
              <Link href="/contact">
                <div className="bg-white rounded-xl border shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Soporte prioritario
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Acceso a soporte prioritario para clientes premium
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium">
                    Más información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section
        id="faq"
        className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Respuestas rápidas a las dudas más comunes
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  ¿Cómo empiezo a usar Ulpiano?
                </h3>
                <p className="text-gray-600">
                  Puedes empezar con nuestra prueba gratuita de 14 días. Solo
                  necesitas registrarte, y tendrás acceso completo a todas las
                  funcionalidades. Nuestro equipo te ayudará con la
                  configuración inicial.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="bg-white rounded-xl border shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  ¿Es seguro almacenar información sensible en Ulpiano?
                </h3>
                <p className="text-gray-600">
                  Absolutamente. Utilizamos encriptación de extremo a extremo y
                  cumplimos con el RGPD. Todos los datos se almacenan en
                  servidores seguros ubicados en la UE, y realizamos auditorías
                  de seguridad regulares.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <div className="bg-white rounded-xl border shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  ¿Puedo integrar Ulpiano con otros sistemas?
                </h3>
                <p className="text-gray-600">
                  Sí, Ulpiano ofrece una API REST completa que permite integrar
                  con sistemas de gestión documental, CRM y otras herramientas
                  que uses en tu día a día. Consulta nuestra documentación
                  técnica para más detalles.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-500">
              <div className="bg-white rounded-xl border shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  ¿Qué tipo de soporte ofrecen?
                </h3>
                <p className="text-gray-600">
                  Ofrecemos soporte por email, chat en vivo y teléfono. Los
                  clientes premium tienen acceso a soporte prioritario 24/7.
                  También contamos con una extensa base de conocimientos y guías
                  paso a paso.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-600">
              <div className="bg-white rounded-xl border shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  ¿Cómo se calculan los precios?
                </h3>
                <p className="text-gray-600">
                  Nuestros precios se basan en el número de casos gestionados y
                  las funcionalidades que necesites. Ofrecemos planes flexibles
                  que se adaptan a tu volumen de trabajo. Puedes consultar
                  nuestros precios o solicitar una cotización personalizada.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Recursos adicionales */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recursos adicionales
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Más formas de aprender y obtener ayuda
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Horario de soporte</h3>
                <p className="text-gray-600 mb-4">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 10:00 - 14:00
                </p>
                <p className="text-sm text-gray-500">
                  Chat disponible 24/7 para clientes premium
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="bg-white rounded-xl border shadow-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tiempo de respuesta</h3>
                <p className="text-gray-600 mb-4">
                  Email: &lt; 24 horas
                  <br />
                  Chat: Inmediato
                  <br />
                  Premium: &lt; 1 hora
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <div className="bg-white rounded-xl border shadow-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Garantía de seguridad
                </h3>
                <p className="text-gray-600 mb-4">
                  Certificaciones ISO 27001 y cumplimiento RGPD garantizado
                </p>
                <p className="text-sm text-gray-500">
                  99.9% de uptime garantizado
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* HelpContact */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas ayuda adicional?"
        primaryLabel="Contactar soporte"
        secondaryLabel="Ver documentación"
        primaryHref="/contact"
        secondaryHref="#documentacion"
      />
    </main>
  );
}
