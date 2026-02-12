import { AnimatedSection } from '@/components/ui/AnimatedSection';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
                    <Shield className="w-12 h-12 text-blue-300" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Política de Privacidad
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Tu privacidad es importante para nosotros. Esta política
                  explica cómo recopilamos, utilizamos y protegemos tu
                  información personal.
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

      {/* Responsable del Tratamiento */}
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
                  Responsable del Tratamiento
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
                      href="mailto:privacidad@ulpiano.com"
                      className="text-blue-600 hover:underline"
                    >
                      privacidad@ulpiano.com
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

      {/* Datos que Recopilamos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-green-100 rounded-lg">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Datos que Recopilamos
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Datos de Identificación
                    </h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Nombre y apellidos
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Dirección de correo electrónico
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Número de teléfono
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Datos de la empresa (si aplica)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Datos de Uso
                    </h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Información sobre cómo utilizas nuestra plataforma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Datos de navegación y preferencias
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Dirección IP y datos de dispositivo
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Datos Sensibles
                    </h3>
                    <p className="text-gray-700 mb-3">
                      En el contexto de la gestión de herencias, podemos
                      procesar datos especialmente protegidos:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Datos familiares y de relaciones de parentesco
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Información patrimonial y fiscal
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Documentos legales y testamentarios
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-4 text-sm italic">
                      Estos datos se procesan con el máximo nivel de seguridad y
                      confidencialidad, cumpliendo estrictamente con la
                      normativa de protección de datos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Finalidades del Tratamiento */}
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
                  Finalidades del Tratamiento
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    Utilizamos tus datos personales para las siguientes
                    finalidades:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Prestación del servicio:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Gestión de herencias, cálculo de impuestos y
                          generación de documentación legal
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Comunicación:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Responder a tus consultas y mantenerte informado sobre
                          el servicio
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Mejora del servicio:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Análisis de uso para mejorar nuestras funcionalidades
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Cumplimiento legal:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Cumplir con obligaciones legales y fiscales
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Seguridad:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Prevenir fraudes y garantizar la seguridad de la
                          plataforma
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Base Legal */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Base Legal del Tratamiento
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    El tratamiento de tus datos personales se basa en las
                    siguientes bases legales:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Ejecución de contrato:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Para la prestación del servicio solicitado
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Consentimiento:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Para el envío de comunicaciones comerciales (puedes
                          retirarlo en cualquier momento)
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Obligación legal:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Para cumplir con normativas fiscales y legales
                          aplicables
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          Interés legítimo:
                        </span>
                        <span className="text-gray-700">
                          {' '}
                          Para la mejora del servicio y prevención de fraudes
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Derechos del Usuario */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-green-100 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Tus Derechos
                </h2>
                <p className="text-gray-700 mb-6">
                  Tienes derecho a ejercer los siguientes derechos sobre tus
                  datos personales:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Derecho de Acceso
                    </h3>
                    <p className="text-sm text-gray-700">
                      Obtener información sobre qué datos personales tratamos
                      sobre ti
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Derecho de Rectificación
                    </h3>
                    <p className="text-sm text-gray-700">
                      Solicitar la corrección de datos inexactos o incompletos
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Derecho de Supresión
                    </h3>
                    <p className="text-sm text-gray-700">
                      Solicitar la eliminación de tus datos cuando ya no sean
                      necesarios
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Derecho de Limitación
                    </h3>
                    <p className="text-sm text-gray-700">
                      Solicitar la limitación del tratamiento en determinadas
                      circunstancias
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Derecho de Portabilidad
                    </h3>
                    <p className="text-sm text-gray-700">
                      Recibir tus datos en formato estructurado y de uso común
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Derecho de Oposición
                    </h3>
                    <p className="text-sm text-gray-700">
                      Oponerte al tratamiento de tus datos en determinadas
                      situaciones
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <p className="text-gray-700 mb-3">
                    <strong>Para ejercer tus derechos:</strong>
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <a
                        href="mailto:privacidad@ulpiano.com"
                        className="text-blue-600 hover:underline"
                      >
                        privacidad@ulpiano.com
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
                  <p className="text-sm text-gray-600 mt-4">
                    También puedes presentar una reclamación ante la Agencia
                    Española de Protección de Datos (AEPD) si consideras que el
                    tratamiento de tus datos no se ajusta a la normativa
                    vigente.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conservación de Datos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Conservación de los Datos
            </h2>
            <p className="text-gray-700 mb-4">
              Conservaremos tus datos personales durante el tiempo necesario
              para cumplir con las finalidades para las que fueron recopilados,
              y en cualquier caso:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Mientras mantengas una cuenta activa en nuestra plataforma
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Durante los plazos establecidos por la legislación fiscal y
                  legal aplicable
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Hasta que solicites su supresión, salvo que exista una
                  obligación legal de conservación
                </span>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Medidas de Seguridad */}
      <section className="py-16 md:py-24">
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
                  Medidas de Seguridad
                </h2>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas técnicas y organizativas apropiadas para
                  proteger tus datos personales:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Encriptación de datos en reposo y en tránsito
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Controles de acceso estrictos y autenticación multifactor
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Auditorías periódicas de seguridad
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Copias de seguridad regulares
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Formación continua del personal en protección de datos
                    </span>
                  </li>
                </ul>
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

              <Link
                href="/terms"
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Términos y Condiciones
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Condiciones de uso de la plataforma
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </Link>

              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Agencia Española de Protección de Datos
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Autoridad de control en materia de protección de datos
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HelpContact */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Tienes preguntas sobre nuestra política de privacidad?"
        primaryLabel="Contacta con nosotros"
        secondaryLabel="Ejercer mis derechos"
        primaryHref="/contact"
        secondaryHref="/contact"
      />
    </main>
  );
}
