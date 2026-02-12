import { AnimatedSection } from '@/components/ui/AnimatedSection';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  Shield,
  FileCheck,
  Lock,
  CheckCircle,
  AlertTriangle,
  Users,
  Building2,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export default function LegalPage() {
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
                    Cumplimiento Legal
                  </span>
                  <br />
                  <span className="text-white">y Normativo</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  En Ulpiano nos comprometemos con el cumplimiento de todas las
                  normativas aplicables y la protección de los datos de nuestros
                  clientes.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Información de la Empresa */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Información de la Empresa
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
                    <strong>Registro Mercantil:</strong> [Ciudad], Tomo XXXX,
                    Libro XXXX, Folio XX, Hoja X-XXXXX
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a
                        href="mailto:legal@ulpiano.com"
                        className="text-blue-600 hover:underline"
                      >
                        legal@ulpiano.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <a
                        href="tel:+34900123456"
                        className="text-blue-600 hover:underline"
                      >
                        +34 900 123 456
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cumplimiento Normativo */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-green-100 rounded-lg">
                <FileCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Cumplimiento Normativo
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Protección de Datos Personales
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Ulpiano cumple estrictamente con:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>
                            Reglamento General de Protección de Datos (GDPR)
                          </strong>{' '}
                          de la Unión Europea
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>
                            Ley Orgánica de Protección de Datos y Garantía de
                            los Derechos Digitales (LOPDGDD)
                          </strong>{' '}
                          de España
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Normativas Fiscales
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Nuestra plataforma cumple con todas las normativas
                      fiscales aplicables al sector de gestión de herencias:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Ley del Impuesto sobre Sucesiones y Donaciones
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Normativas autonómicas aplicables
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Cumplimiento de obligaciones tributarias
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Normativas del Sector
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Cumplimos con las normativas específicas del sector legal
                      y notarial:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Código Deontológico de la Abogacía
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Normativa del Colegio Notarial
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Secreto profesional y confidencialidad
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
                  Medidas de Seguridad y Certificaciones
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Protección de Datos
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Implementamos medidas técnicas y organizativas de alto
                      nivel:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Encriptación AES-256</strong> para datos en
                          reposo y en tránsito
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Certificados SSL/TLS</strong> para todas las
                          comunicaciones
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Controles de acceso</strong> basados en roles
                          y autenticación multifactor
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Auditorías periódicas</strong> de seguridad y
                          cumplimiento
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Copias de seguridad</strong> automáticas y
                          redundantes
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Certificaciones
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Estamos en proceso de obtención de las siguientes
                      certificaciones:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          ISO 27001 (Sistemas de Gestión de Seguridad de la
                          Información)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          ISO 9001 (Sistemas de Gestión de la Calidad)
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

      {/* Delegado de Protección de Datos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Delegado de Protección de Datos (DPO)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    En cumplimiento del GDPR y la LOPDGDD, Ulpiano ha designado
                    un Delegado de Protección de Datos (DPO) para garantizar el
                    cumplimiento de la normativa de protección de datos.
                  </p>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Datos de Contacto del DPO
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Email:</strong>{' '}
                        <a
                          href="mailto:dpo@ulpiano.com"
                          className="text-blue-600 hover:underline"
                        >
                          dpo@ulpiano.com
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
                  <div>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Ejercicio de Derechos
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Los usuarios pueden ejercer sus derechos de protección de
                      datos contactando con nuestro DPO:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Derecho de acceso a los datos personales
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Derecho de rectificación
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Derecho de supresión ("derecho al olvido")
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Derecho de limitación del tratamiento
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Derecho de portabilidad de datos
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Derecho de oposición
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

      {/* Procedimientos de Cumplimiento */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-luminary-navy)' }}
                >
                  Procedimientos de Cumplimiento
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Política de Confidencialidad
                    </h3>
                    <p className="text-gray-700">
                      Todos los datos procesados a través de nuestra plataforma
                      están sujetos a estrictas políticas de confidencialidad.
                      El secreto profesional y la protección de la información
                      sensible de nuestros clientes son nuestra máxima
                      prioridad.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Notificación de Brechas de Seguridad
                    </h3>
                    <p className="text-gray-700 mb-3">
                      En caso de detectar una violación de seguridad que pueda
                      afectar a los datos personales:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Notificaremos a la Agencia Española de Protección de
                          Datos (AEPD) en un plazo máximo de{' '}
                          <strong>72 horas</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Informaremos a los usuarios afectados sin dilación
                          indebida
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Implementaremos medidas correctivas inmediatas
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'var(--color-luminary-navy)' }}
                    >
                      Auditorías y Controles
                    </h3>
                    <p className="text-gray-700">
                      Realizamos auditorías periódicas internas y externas para
                      garantizar el cumplimiento continuo de todas las
                      normativas aplicables. Nuestros sistemas están sujetos a
                      revisiones regulares de seguridad y cumplimiento.
                    </p>
                  </div>
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
              Documentación Legal Relacionada
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

      {/* Información Regulatoria */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-center"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Información Regulatoria
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Licencias y Autorizaciones
                  </h3>
                  <p>
                    Ulpiano opera cumpliendo con todas las licencias y
                    autorizaciones necesarias para la prestación de servicios de
                    software en el sector legal y notarial en España.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Actualizaciones de Políticas
                  </h3>
                  <p>
                    Nos reservamos el derecho de actualizar nuestras políticas
                    de cumplimiento para adaptarnos a cambios normativos. Los
                    usuarios serán notificados de cualquier cambio significativo
                    a través de los canales habituales de comunicación.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    Jurisdicción Aplicable
                  </h3>
                  <p>
                    Estas políticas se rigen por la legislación española. Para
                    cualquier controversia, las partes se someten a los juzgados
                    y tribunales del domicilio de la empresa.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HelpContact */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Tienes preguntas sobre nuestro cumplimiento legal?"
        primaryLabel="Contacta con nosotros"
        secondaryLabel="Solicita información"
        primaryHref="/contact"
        secondaryHref="/contact"
      />
    </main>
  );
}
