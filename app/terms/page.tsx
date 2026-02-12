import { AnimatedSection } from '@/components/ui/AnimatedSection';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  FileText,
  Scale,
  AlertCircle,
  CheckCircle,
  Shield,
  Lock,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-500/20 rounded-2xl backdrop-blur-sm border border-blue-400/30">
                    <Scale className="w-12 h-12 text-blue-300" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Términos y Condiciones
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Condiciones generales de uso de la plataforma Ulpiano. Por
                  favor, lee detenidamente estos términos antes de utilizar
                  nuestros servicios.
                </p>
                <p className="text-sm text-gray-400">
                  Última actualización:{' '}
                  {new Date().toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Información General
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Denominación social:</strong> Ulpiano Technologies
                    S.L.
                  </p>
                  <p>
                    <strong>NIF/CIF:</strong> B-XXXXXXXX
                  </p>
                  <p>
                    <strong>Domicilio social:</strong> [Dirección completa],
                    España
                  </p>
                  <p>
                    <strong>Email de contacto:</strong>{' '}
                    <a
                      href="mailto:legal@ulpiano.com"
                      className="text-blue-600 hover:underline"
                    >
                      legal@ulpiano.com
                    </a>
                  </p>
                  <p>
                    <strong>Teléfono:</strong>{' '}
                    <a
                      href="tel:+34900123456"
                      className="text-blue-600 hover:underline"
                    >
                      +34 900 123 456
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Aceptación de los Términos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Aceptación de los Términos
                </h2>
                <p className="text-gray-700 mb-4">
                  Al acceder y utilizar la plataforma Ulpiano, aceptas estos
                  términos y condiciones en su totalidad. Si no estás de acuerdo
                  con alguna parte de estos términos, no debes utilizar nuestros
                  servicios.
                </p>
                <p className="text-gray-700">
                  Nos reservamos el derecho de modificar estos términos en
                  cualquier momento. Las modificaciones entrarán en vigor desde
                  su publicación en esta página. Es tu responsabilidad revisar
                  periódicamente estos términos.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Descripción del Servicio
                </h2>
                <p className="text-gray-700 mb-4">
                  Ulpiano es una plataforma de software diseñada para
                  profesionales del sector legal y notarial que ofrece:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Gestión y digitalización de documentos relacionados con
                      herencias
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cálculo automatizado del Impuesto sobre Sucesiones y
                      Donaciones
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Creación de escenarios de planificación sucesoria
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Generación de documentación legal y fiscal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Herramientas de colaboración y portal del cliente
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Uso Aceptable */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Uso Aceptable
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Compromisos del Usuario
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Te comprometes a utilizar la plataforma de manera
                      responsable y conforme a la ley:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Proporcionar información veraz, precisa y actualizada
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Mantener la confidencialidad de tus credenciales de
                          acceso
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          No utilizar la plataforma para actividades ilegales o
                          fraudulentas
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Respetar los derechos de propiedad intelectual
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          No intentar acceder a áreas restringidas o vulnerar la
                          seguridad del sistema
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Usos Prohibidos
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Está expresamente prohibido:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Utilizar la plataforma de manera que pueda dañar,
                          deshabilitar o sobrecargar nuestros servidores
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Intentar obtener acceso no autorizado a la plataforma
                          o a datos de otros usuarios
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Realizar ingeniería inversa, descompilar o
                          desensamblar cualquier parte de la plataforma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Transmitir virus, malware o cualquier código malicioso
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cuentas y Suscripciones */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Cuentas y Suscripciones
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Creación de Cuenta
                    </h3>
                    <p className="text-gray-700">
                      Para utilizar nuestros servicios, debes crear una cuenta
                      proporcionando información precisa y completa. Eres
                      responsable de mantener la confidencialidad de tus
                      credenciales y de todas las actividades que ocurran bajo
                      tu cuenta.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Planes y Facturación
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Ofrecemos diferentes planes de suscripción. El pago se
                      realizará según el plan seleccionado y se renovará
                      automáticamente a menos que canceles tu suscripción.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Los precios pueden variar y se te notificará con
                          antelación cualquier cambio
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Puedes cancelar tu suscripción en cualquier momento
                          desde tu panel de control
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          No se realizarán reembolsos por períodos ya
                          facturados, salvo excepciones legales
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Propiedad Intelectual */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Propiedad Intelectual
                </h2>
                <p className="text-gray-700 mb-4">
                  Todos los derechos de propiedad intelectual sobre la
                  plataforma Ulpiano, incluyendo pero no limitándose a software,
                  diseño, logotipos, textos y gráficos, son propiedad de Ulpiano
                  Technologies S.L. o de sus licenciantes.
                </p>
                <p className="text-gray-700 mb-4">
                  Se te concede una licencia limitada, no exclusiva, no
                  transferible y revocable para utilizar la plataforma conforme
                  a estos términos. Esta licencia no incluye:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      El derecho de revender, redistribuir o sublicenciar la
                      plataforma
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      El derecho de realizar ingeniería inversa o descompilar el
                      software
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      El derecho de eliminar o alterar marcas de propiedad
                      intelectual
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Limitación de Responsabilidad */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Limitación de Responsabilidad
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Servicio "Tal Cual":</strong> La plataforma se
                    proporciona "tal cual" y "según disponibilidad". No
                    garantizamos que el servicio esté libre de errores,
                    interrupciones o defectos.
                  </p>
                  <p className="text-gray-700">
                    <strong>Responsabilidad Profesional:</strong> Ulpiano es una
                    herramienta de apoyo para profesionales. Los usuarios son
                    responsables de verificar la exactitud de los cálculos y
                    documentos generados. Ulpiano no sustituye el asesoramiento
                    legal o fiscal profesional.
                  </p>
                  <p className="text-gray-700">
                    <strong>Límites:</strong> En la máxima medida permitida por
                    la ley, Ulpiano no será responsable de daños indirectos,
                    incidentales, especiales o consecuentes derivados del uso o
                    la imposibilidad de usar la plataforma.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Confidencialidad */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Confidencialidad y Protección de Datos
                </h2>
                <p className="text-gray-700 mb-4">
                  El tratamiento de tus datos personales se rige por nuestra
                  Política de Privacidad, que forma parte integrante de estos
                  términos. Nos comprometemos a:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Mantener la máxima confidencialidad sobre todos los datos
                      procesados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Implementar medidas de seguridad técnicas y organizativas
                      apropiadas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cumplir con todas las normativas de protección de datos
                      aplicables
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      No compartir tus datos con terceros sin tu consentimiento,
                      salvo obligación legal
                    </span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Consulta nuestra Política de Privacidad completa →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resolución de Disputas */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-green-100 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Resolución de Disputas y Ley Aplicable
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Ley Aplicable
                    </h3>
                    <p className="text-gray-700">
                      Estos términos se rigen por la legislación española.
                      Cualquier disputa relacionada con estos términos o con el
                      uso de la plataforma estará sujeta a la jurisdicción
                      exclusiva de los tribunales españoles.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Resolución de Conflictos
                    </h3>
                    <p className="text-gray-700 mb-3">
                      En caso de disputa, las partes se comprometen a intentar
                      resolverla mediante negociación de buena fe. Si no se
                      alcanza un acuerdo, la disputa se resolverá mediante:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Mediación, si ambas partes están de acuerdo
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Arbitraje, según las reglas de la Corte de Arbitraje
                          correspondiente
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Jurisdicción de los tribunales competentes de España
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Modificaciones */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Modificaciones de los Términos
            </h2>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Las modificaciones entrarán en vigor desde su publicación
              en esta página.
            </p>
            <p className="text-gray-700">
              Te notificaremos sobre cambios significativos mediante email o
              mediante un aviso destacado en la plataforma. El uso continuado de
              nuestros servicios después de la publicación de cambios constituye
              tu aceptación de los nuevos términos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                ¿Tienes Preguntas?
              </h2>
              <p className="text-gray-700 mb-4">
                Si tienes alguna pregunta sobre estos términos y condiciones,
                puedes contactarnos:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a
                    href="mailto:legal@ulpiano.com"
                    className="text-blue-600 hover:underline"
                  >
                    legal@ulpiano.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a
                    href="tel:+34900123456"
                    className="text-blue-600 hover:underline"
                  >
                    +34 900 123 456
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enlaces Relacionados */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-center"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Documentación Relacionada
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/privacy"
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Política de Privacidad
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Información sobre cómo tratamos tus datos personales
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </Link>

              <Link
                href="/legal"
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Cumplimiento Legal
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Información sobre nuestro cumplimiento normativo
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HelpContact */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Tienes preguntas sobre nuestros términos y condiciones?"
        primaryLabel="Contacta con nosotros"
        secondaryLabel="Solicita información"
        primaryHref="/contact"
        secondaryHref="/contact"
      />
    </main>
  );
}
