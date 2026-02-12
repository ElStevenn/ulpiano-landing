'use client';

import { StaticSection } from '@/components/ui/StaticSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import Link from 'next/link';
import { createScrollHandler } from '@/lib/scrollUtils';
import {
  FileText,
  Users,
  Clock,
  AlertCircle,
  Calculator,
  CreditCard,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

export default function Modelo653Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question:
        '¿Es obligatorio presentar el modelo 653 si ya tenía la nuda propiedad?',
      answer:
        'Sí. El hecho imponible es la extinción del usufructo que te hace pasar de nudo propietario a propietario pleno.',
    },
    {
      question: '¿Se puede consolidar dominio sin escritura pública?',
      answer:
        'En general, se recomienda formalizar en escritura la extinción del usufructo por fallecimiento o acuerdo. Y luego, se liquida con el modelo 653.',
    },
    {
      question:
        '¿Qué pasa si ya hice un pago previo al constituir el usufructo?',
      answer:
        'Se considera un acto distinto. La consolidación requiere tributar por la parte proporcional que se &quot;recupera&quot; ahora, salvo que existan exenciones específicas.',
    },
    {
      question: '¿Hay reducciones especiales para vivienda habitual?',
      answer:
        'Sí, muchas comunidades contemplan bonificaciones al heredar/recibir la vivienda habitual del usufructuario.',
    },
    {
      question:
        '¿Qué ocurre si la valoración que uso no coincide con la de Hacienda?',
      answer:
        'Podrías enfrentar una comprobación administrativa y, si difiere, tendrás que regularizar la diferencia con recargos o intereses.',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate w-full overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-8 md:pt-16 lg:pt-24 pb-12 md:pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <StaticSection className="fade-in-up delay-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Guía Completa</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Modelo 653:{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Guía para Presentar la Autoliquidación por Consolidación de
                  Dominio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Tramita tu Impuesto de Sucesiones de Forma Ágil y Sin
                Complicaciones
              </p>
            </StaticSection>

            <StaticSection className="fade-in-up delay-200">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                  ¿Necesitas declarar una consolidación de dominio tras el
                  fallecimiento o extinción de un usufructo? Con esta guía
                  aprenderás cómo hacerlo paso a paso. O, si lo prefieres,
                  puedes automatizarlo con ulpiano.es y evitar errores y
                  gestiones engorrosas.
                </p>
                <p className="text-white font-semibold mb-6 text-center text-lg">
                  La elección es tuya:
                </p>
                <ul className="space-y-4 text-left mb-6 max-w-2xl mx-auto">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-lg leading-relaxed">
                      Empieza ahora y presenta el modelo 653 con unos clics.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-lg leading-relaxed">
                      O bien, sigue leyendo para conocer cada detalle.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#empezar"
                    onClick={createScrollHandler('empezar', { offset: 40 })}
                    className="cursor-pointer"
                  >
                    <LuminaryButton
                      size="lg"
                      variant="primary"
                      className="px-8 py-4 font-semibold text-lg"
                    >
                      <span className="flex items-center gap-2">
                        Empieza Ahora
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </LuminaryButton>
                  </a>
                  <a
                    href="#contenido"
                    onClick={createScrollHandler('contenido', { offset: 40 })}
                    className="cursor-pointer"
                  >
                    <LuminaryButton
                      size="lg"
                      variant="secondary"
                      className="px-8 py-4 font-semibold text-lg"
                    >
                      Sigue Leyendo
                    </LuminaryButton>
                  </a>
                </div>
              </div>
            </StaticSection>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section
        id="contenido"
        className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <StaticSection className="fade-in-up">
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                Tabla de Contenidos
              </h2>
              <nav className="space-y-2">
                {[
                  '¿Qué es el modelo 653?',
                  '¿Quién debe presentarlo?',
                  'Plazos de presentación y prórrogas',
                  'Fuera de plazo y sanciones',
                  'Formas de presentar el modelo 653',
                  'Instrucciones para rellenarlo',
                  'Ejemplo práctico con números',
                  '¿Cómo se paga?',
                  'Presentar el modelo 653 con ulpiano.es',
                  'Preguntas frecuentes (FAQ)',
                ].map((item, index) => {
                  const sectionId = `seccion-${index + 1}`;
                  return (
                    <a
                      key={index}
                      href={`#${sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        createScrollHandler(sectionId, {
                          offset: index === 1 ? 50 : 40,
                        })(e);
                      }}
                      className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors py-2 group cursor-pointer"
                    >
                      <span className="text-blue-600 font-semibold w-8">
                        {index + 1}.
                      </span>
                      <span className="flex-1 group-hover:underline">
                        {item}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </nav>
            </div>
          </StaticSection>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Sección 1 */}
          <StaticSection
            id="seccion-1"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <FileText className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ¿Qué es el modelo 653?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                El <strong>modelo 653</strong> sirve para la autoliquidación del
                Impuesto de Sucesiones y Donaciones cuando se produce la
                consolidación de dominio. Es decir, cuando el usufructo y la
                nuda propiedad se unen en una sola persona tras la extinción del
                usufructo (por fallecimiento o finalización del plazo). De este
                modo, el titular pasa a tener la plena propiedad del bien.
              </p>
            </div>
          </StaticSection>

          {/* Sección 2 */}
          <StaticSection
            id="seccion-2"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-green-100 text-green-700 shrink-0">
                <Users className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ¿Quién debe presentarlo?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>El nudo propietario</strong> que, al fallecer el
                    usufructuario o al concluir la causa de usufructo, pasa a
                    ostentar la propiedad completa del bien.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Herederos</strong> que, en ciertos casos, reciben la
                    plena propiedad tras la extinción de un usufructo vitalicio.
                  </span>
                </li>
              </ul>
              <p className="text-lg text-slate-700 leading-relaxed mt-4">
                En ambos supuestos, el Impuesto de Sucesiones aplica a ese
                &quot;enriquecimiento&quot; que supone la consolidación de
                dominio.
              </p>
            </div>
          </StaticSection>

          {/* Sección 3 */}
          <StaticSection
            id="seccion-3"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-purple-100 text-purple-700 shrink-0">
                <Clock className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Plazos de presentación y prórrogas
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Normalmente, se dispone de <strong>6 meses</strong> desde la
                fecha de fallecimiento o extinción para presentar el modelo 653.
                No obstante:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Prórroga de 6 meses adicionales:</strong> Puede
                    solicitarse antes de que transcurra el quinto mes desde la
                    fecha de la extinción o fallecimiento, siempre atendiendo a
                    la normativa autonómica.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionamiento o aplazamiento:</strong> Dependiendo
                    de la comunidad autónoma, es posible pagar en varios plazos
                    si se cumplen los requisitos.
                  </span>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 4 */}
          <StaticSection
            id="seccion-4"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-red-100 text-red-700 shrink-0">
                <AlertCircle className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Fuera de plazo y sanciones
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Si presentas el modelo 653 fuera del plazo (o sin haber
                solicitado prórroga a tiempo):
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Recargos:</strong> Van en aumento según los meses de
                    retraso.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Sanciones:</strong> Si Hacienda o el organismo
                    tributario te notifica la falta, el importe adicional puede
                    crecer significativamente.
                  </span>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 5 */}
          <StaticSection
            id="seccion-5"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                <Sparkles className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Formas de presentar el modelo 653
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Existen dos vías principales:
              </p>
              <ol className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">1.</span>
                  <div>
                    <strong>Telemáticamente:</strong> A través de la sede
                    electrónica de la Agencia Tributaria o del ente autonómico
                    competente, requiriendo certificado digital, Cl@ve PIN o DNI
                    electrónico.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">2.</span>
                  <div>
                    <strong>De manera presencial:</strong> Rellenando el
                    formulario oficial en papel y llevándolo a la oficina de
                    Hacienda o al organismo autonómico.
                  </div>
                </li>
              </ol>
            </div>
          </StaticSection>

          {/* Sección 6 */}
          <StaticSection
            id="seccion-6"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-cyan-100 text-cyan-700 shrink-0">
                <FileText className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Instrucciones para rellenarlo
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Al completar el modelo 653, se requieren:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Datos identificativos:</strong> Tu información
                    personal (nudo propietario), la del usufructuario fallecido
                    o la causa de extinción.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Bien objeto de consolidación:</strong> Podría ser un
                    inmueble, participaciones sociales o cualquier bien sujeto a
                    usufructo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fecha y causa de la extinción:</strong> Si es por
                    fallecimiento, indica los datos del fallecido y la fecha de
                    deceso.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Base imponible:</strong> Se determina según el valor
                    del bien (o la parte objeto de usufructo) y las normas de
                    valoración autonómicas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Bonificaciones y reducciones:</strong> Dependiendo
                    del grado de parentesco y la normativa local, podrás aplicar
                    deducciones.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Resultado:</strong> Cuota a pagar tras aplicar tipos
                    impositivos y bonificaciones.
                  </span>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 7 */}
          <StaticSection
            id="seccion-7"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-orange-100 text-orange-700 shrink-0">
                <Calculator className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Ejemplo práctico con números
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Ejemplo: Un nudo propietario con una vivienda valorada en
                200.000 € sujeta a usufructo vitalicio de la madre, fallecida
                recientemente.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ol className="space-y-3 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>
                      <strong>Valor total del bien:</strong> 200.000 €.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>
                      <strong>Porcentaje de usufructo extinto:</strong>{' '}
                      Supongamos que el valor del usufructo representa el 40 %
                      (80.000 €), según tablas de Hacienda o la edad del
                      usufructuario en el momento de constituirse el derecho.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>
                      <strong>Base imponible:</strong> 80.000 €. Tras
                      reducciones autonómicas (por ejemplo, 95 % si es vivienda
                      habitual), puede quedar en{' '}
                      <span className="text-blue-600 font-bold">4.000 €</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">4.</span>
                    <span>
                      <strong>Tipo impositivo:</strong> 7 %.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">5.</span>
                    <span>
                      <strong>Cuota:</strong> 4.000 × 0,07 ={' '}
                      <span className="text-green-600 font-bold">280 €</span>.
                    </span>
                  </li>
                </ol>
                <p className="text-slate-700 mt-4">
                  Dependiendo de otras deducciones o bonificaciones, la cuota
                  puede variar o incluso ser 0.
                </p>
              </div>
            </div>
          </StaticSection>

          {/* Sección 8 */}
          <StaticSection
            id="seccion-8"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <CreditCard className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ¿Cómo se paga?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Pago único:</strong> Carga en cuenta, efectivo o
                    domiciliación, al presentar el modelo 653.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionamiento/Aplazamiento:</strong> Si la
                    normativa de tu comunidad lo permite, podrás abonar en
                    varios plazos (con intereses).
                  </span>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 9 */}
          <StaticSection
            id="seccion-9"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <Sparkles className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Presentar el modelo 653 con ulpiano.es
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 md:p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                En ulpiano.es, autoliquidar la consolidación de dominio resulta
                más sencillo:
              </p>
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Cálculo Personalizado:</strong> Basado en la fecha
                    de constitución del usufructo, la edad del usufructuario y
                    la normativa local, la plataforma determina el valor del
                    derecho y el porcentaje que se extingue.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Formulario Listo para Firmar:</strong> Genera un
                    borrador con todos los datos para telemática o papel.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Soporte Fiscal y Legal:</strong> Expertos revisan
                    las posibles bonificaciones y la documentación necesaria
                    para cada caso.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Evita Retrasos y Sanciones:</strong> Con
                    recordatorios de plazos y actualizaciones normativas,
                    minimizarás riesgos de presentación fuera de plazo.
                  </div>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 10 - FAQ */}
          <StaticSection
            id="seccion-10"
            className="fade-in-up mb-12 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="grid size-12 place-items-center rounded-xl bg-yellow-100 text-yellow-700 shrink-0">
                <HelpCircle className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Preguntas frecuentes (FAQ)
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </StaticSection>

          {/* CTA Section */}
          <StaticSection id="empezar" className="fade-in-up scroll-mt-24">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Tienes más dudas?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Solicita una llamada gratuita de asesoramiento y resuelve todo
                lo relacionado con el modelo 653.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo">
                  <LuminaryButton
                    size="lg"
                    variant="primary"
                    className="px-8 py-4 font-semibold text-lg"
                  >
                    Solicitar llamada
                  </LuminaryButton>
                </Link>
                <Link href="/contact">
                  <LuminaryButton
                    size="lg"
                    variant="secondary"
                    className="px-8 py-4 font-semibold text-lg"
                  >
                    Habla con un Experto
                  </LuminaryButton>
                </Link>
              </div>
            </div>
          </StaticSection>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <StaticSection className="fade-in-up">
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Conclusión
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                El modelo 653 es clave para formalizar la consolidación de
                dominio cuando un usufructo se extingue. Con ulpiano.es, el
                proceso se vuelve más rápido y confiable, evitando errores que
                pueden derivar en sanciones y pérdidas de tiempo.
              </p>
              <p className="text-xl font-semibold text-slate-900 mb-8 italic">
                &quot;Regulariza tu consolidación de dominio con la confianza de
                ulpiano.es&quot;
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo">
                  <LuminaryButton
                    size="lg"
                    variant="primary"
                    className="px-8 py-4 font-semibold text-lg"
                  >
                    Empieza Gratis
                  </LuminaryButton>
                </Link>
                <Link href="/contact">
                  <LuminaryButton
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 font-semibold text-lg"
                  >
                    Habla con un Experto
                  </LuminaryButton>
                </Link>
              </div>
            </div>
          </StaticSection>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTABanner
        title="Simplifica la gestión del Impuesto de Sucesiones por Consolidación de Dominio con Ulpiano"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
