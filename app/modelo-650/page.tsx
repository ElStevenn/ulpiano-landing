'use client';

import { StaticSection } from '@/components/ui/StaticSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import Link from 'next/link';
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

export default function Modelo650Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Puedo solicitar una prórroga más allá de los 12 meses?',
      answer:
        'No. La prórroga solo extiende el plazo inicial de 6 a 12 meses. Más allá de eso, se considera presentación fuera de plazo.',
    },
    {
      question: '¿Qué pasa si no tengo dinero para pagar el modelo 650?',
      answer:
        'Puedes solicitar fraccionamiento o aplazamiento dentro de los márgenes que permita la normativa. Se generarán intereses de demora.',
    },
    {
      question: '¿Cómo se valora un inmueble para el modelo 650?',
      answer:
        'Suele utilizarse el valor declarado, catastral o el que establece la comunidad autónoma. Verifica la normativa local para evitar discrepancias en caso de comprobación administrativa.',
    },
    {
      question: '¿Se pueden deducir los gastos del funeral?',
      answer:
        'En la mayoría de comunidades, sí. Se admite la deducción de los gastos de sepelio (aunque con límites). Consulta la normativa de tu autonomía.',
    },
    {
      question: '¿Y si somos varios herederos?',
      answer:
        'Cada heredero debe presentar su propia autoliquidación o nombrar un gestor en común. Ulpiano facilita la coordinación y evita duplicidades.',
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
                Modelo 650:{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Guía para Presentarlo con Facilidad
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Autoliquidación del Impuesto de Sucesiones: Sin Errores ni
                Estrés y{' '}
                <span className="whitespace-nowrap">
                  Todo Desde Un Solo Lugar
                </span>
              </p>
            </StaticSection>

            <StaticSection className="fade-in-up delay-200">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                  ¿Toca enfrentarte al modelo 650? Con esta guía podrás aprender
                  a presentarlo sin complicaciones o, si lo prefieres, hacerlo
                  todo de manera automatizada y sin sobresaltos gracias a
                  ulpiano.es.
                </p>
                <p className="text-white font-semibold mb-6 text-center text-lg">
                  La elección es tuya:
                </p>
                <ul className="space-y-4 text-left mb-6 max-w-2xl mx-auto">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-lg leading-relaxed">
                      Empieza gratis y presenta el modelo 650 en unos clics.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-lg leading-relaxed">
                      O sigue leyendo para conocer cada detalle.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="#empezar">
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
                  </Link>
                  <Link href="#contenido">
                    <LuminaryButton
                      size="lg"
                      variant="secondary"
                      className="px-8 py-4 font-semibold text-lg"
                    >
                      Sigue Leyendo
                    </LuminaryButton>
                  </Link>
                </div>
              </div>
            </StaticSection>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section
        id="contenido"
        className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <StaticSection className="fade-in-up">
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                Tabla de Contenidos
              </h2>
              <nav className="space-y-2">
                {[
                  '¿Qué es el modelo 650?',
                  '¿Quién tiene que presentar el modelo 650?',
                  'Plazos de presentación y prórrogas',
                  'Presentar el modelo 650 fuera de plazo',
                  '¿Cómo se presenta el modelo 650?',
                  'Instrucciones para rellenar el modelo 650',
                  'Ejemplo práctico con números',
                  '¿Cómo se paga el modelo 650?',
                  'Presentar el modelo 650 con ulpiano.es',
                  'Preguntas frecuentes',
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#seccion-${index + 1}`}
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors py-2 group"
                  >
                    <span className="text-blue-600 font-semibold w-8">
                      {index + 1}.
                    </span>
                    <span className="flex-1 group-hover:underline">{item}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </nav>
            </div>
          </StaticSection>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Sección 1 */}
          <StaticSection id="seccion-1" className="fade-in-up mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <FileText className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ¿Qué es el modelo 650?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                El <strong>modelo 650</strong> es el documento utilizado para la
                autoliquidación del Impuesto de Sucesiones derivado de
                adquisiciones &quot;mortis causa&quot; (cuando existe un
                fallecimiento). En otras palabras, si has heredado bienes
                (dinero, inmuebles, acciones…) tras el fallecimiento de una
                persona, deberás presentar este modelo para regularizar tu
                situación fiscal y abonar el importe del Impuesto de Sucesiones.
              </p>
            </div>
          </StaticSection>

          {/* Sección 2 */}
          <StaticSection id="seccion-2" className="fade-in-up mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-green-100 text-green-700 shrink-0">
                <Users className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ¿Quién tiene que presentar el modelo 650?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                En general, cualquier heredero o legatario que reciba bienes por
                causa de muerte. Más concretamente:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Herederos universales</strong> designados en
                    testamento.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Legatarios</strong> que reciban bienes específicos
                    (inmuebles, participaciones, etc.).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    Personas <strong>beneficiarias de un seguro de vida</strong>{' '}
                    integrado en la masa hereditaria (si no se gestiona con otro
                    modelo).
                  </span>
                </li>
              </ul>
              <p className="text-lg text-slate-700 leading-relaxed mt-4">
                No importa si la cuantía es reducida o muy alta: si existe un
                derecho sucesorio por fallecimiento, el modelo 650 resulta
                obligatorio.
              </p>
            </div>
          </StaticSection>

          {/* Sección 3 */}
          <StaticSection id="seccion-3" className="fade-in-up mb-12">
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
                El plazo general para presentar el modelo 650 suele ser de{' '}
                <strong>6 meses</strong> contados desde la fecha de
                fallecimiento. Sin embargo:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Prórroga de 6 meses adicionales:</strong> Puede
                    solicitarse antes de que transcurran los 5 primeros meses.
                    Esto te otorgaría un plazo total de hasta 12 meses.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionamiento del pago:</strong> Según la
                    normativa autonómica y estatal, es posible abonar el
                    impuesto en varios plazos, siempre y cuando se cumplan los
                    requisitos exigidos.
                  </span>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 4 */}
          <StaticSection id="seccion-4" className="fade-in-up mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-red-100 text-red-700 shrink-0">
                <AlertCircle className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Presentar el modelo 650 fuera de plazo
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Si olvidas presentarlo antes del vencimiento (y no has
                solicitado prórroga), te expones a:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Recargos:</strong> Aumentan con el tiempo de retraso
                    (1 % adicional por mes, etc.).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Posibles sanciones:</strong> Si la Administración te
                    requiere, el importe adicional puede subir notablemente.
                  </span>
                </li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-blue-900">
                  <strong>La buena noticia</strong> es que si eres tú quien se
                  adelanta antes de un requerimiento oficial, la sanción puede
                  atenuarse o limitarse a recargos.
                </p>
              </div>
            </div>
          </StaticSection>

          {/* Sección 5 */}
          <StaticSection id="seccion-5" className="fade-in-up mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                <Sparkles className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ¿Cómo se presenta el modelo 650?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Existen dos vías de presentación:
              </p>
              <ol className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">1.</span>
                  <div>
                    <strong>Telemática:</strong> A través de la sede electrónica
                    de la comunidad autónoma correspondiente o de la Agencia
                    Tributaria (según el territorio). Necesitarás certificado
                    digital, Cl@ve PIN o DNI electrónico.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">2.</span>
                  <div>
                    <strong>En papel:</strong> Rellenando el formulario
                    disponible en la web oficial y presentándolo en la oficina
                    correspondiente. Dependerá de tu comunidad.
                  </div>
                </li>
              </ol>
            </div>
          </StaticSection>

          {/* Sección 6 */}
          <StaticSection id="seccion-6" className="fade-in-up mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-cyan-100 text-cyan-700 shrink-0">
                <FileText className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Instrucciones para rellenar el modelo 650
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Generalmente, se te pedirá:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Datos del fallecido</strong> (causante) y fecha de
                    defunción.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Tus datos personales</strong> (heredero o
                    legatario).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Relación de bienes y deudas</strong> incluidas en la
                    herencia: inmuebles, cuentas bancarias, acciones, seguros,
                    etc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Base imponible:</strong> suma de los bienes menos
                    las deudas y gastos deducibles.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Tipo de gravamen y bonificaciones:</strong>{' '}
                    aplicables según la comunidad.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Resultado:</strong> a pagar o a bonificar, según
                    reducciones autonómicas y estatales.
                  </span>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 7 */}
          <StaticSection id="seccion-7" className="fade-in-up mb-12">
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
                Imagina que heredas:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ul className="space-y-2 text-lg text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Un inmueble valorado en <strong>100.000 €</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Una cuenta bancaria con <strong>20.000 €</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    Deudas pendientes del fallecido por <strong>5.000 €</strong>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <p className="text-slate-700">
                    <strong>Base imponible:</strong> 100.000 + 20.000 = 120.000
                    € (bienes) – 5.000 € (deudas) ={' '}
                    <span className="text-blue-600 font-bold">115.000 €</span>.
                  </p>
                  <p className="text-slate-700">
                    Ahora, aplicas reducciones o bonificaciones autonómicas (por
                    ejemplo, si eres descendiente directo y la comunidad ofrece
                    un 95 % de reducción para la vivienda habitual, etc.).
                    Supongamos que la base liquidable te queda en{' '}
                    <span className="text-blue-600 font-bold">35.000 €</span>.
                  </p>
                  <p className="text-slate-700">
                    El tipo impositivo, según la tarifa legal, puede oscilar
                    entre el 7 y el 34 %, dependiendo del grado de parentesco y
                    las normativas autonómicas. Pongamos un{' '}
                    <strong>15 %</strong> por simplicidad:
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-slate-700">
                      <strong>Cuota:</strong> 35.000 € × 0,15 ={' '}
                      <span className="text-green-600 font-bold text-xl">
                        5.250 €
                      </span>
                      .
                    </p>
                  </div>
                  <p className="text-slate-700 mt-4">
                    Si existen deducciones adicionales (por ejemplo, minusvalía,
                    convivencias prolongadas, seguros, etc.), las restas al
                    final. El resultado es el importe a pagar en el momento de
                    la presentación (o fraccionado si se autoriza).
                  </p>
                </div>
              </div>
            </div>
          </StaticSection>

          {/* Sección 8 */}
          <StaticSection id="seccion-8" className="fade-in-up mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <CreditCard className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ¿Cómo se paga el modelo 650?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Pago único:</strong> mediante cargo en cuenta,
                    efectivo o domiciliación bancaria al presentar la
                    autoliquidación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionado:</strong> si la normativa autonómica lo
                    permite, podrás dividir el pago en varios plazos. También es
                    posible solicitar aplazamiento o prórroga, con sus
                    respectivos intereses y condiciones.
                  </span>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 9 */}
          <StaticSection id="seccion-9" className="fade-in-up mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="grid size-12 place-items-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <Sparkles className="size-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Presentar el modelo 650 con ulpiano.es
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 md:p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Con ulpiano.es, no tendrás que preocuparte por equivocaciones:
              </p>
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Cálculo Automático:</strong> Basado en los datos que
                    ingreses (bienes, deudas, parentesco), la plataforma elabora
                    la base imponible y la liquidable, ajustándose a tu
                    comunidad autónoma.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Generación de Formularios:</strong> Se extraen los
                    datos para el modelo 650, listos para presentar
                    telemáticamente.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Asistencia Legal:</strong> Un equipo experto en
                    sucesiones y fiscalidad está disponible si surgen dudas
                    sobre bonificaciones, reducciones o plazos.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Ahorro de Tiempo y Errores:</strong> Actualiza tu
                    contabilidad y tu patrimonio en un solo lugar. Olvídate de
                    reconciliar datos manualmente.
                  </div>
                </li>
              </ul>
            </div>
          </StaticSection>

          {/* Sección 10 - FAQ */}
          <StaticSection id="seccion-10" className="fade-in-up mb-12">
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
          <StaticSection id="empezar" className="fade-in-up">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Tienes más dudas?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Solicita una llamada gratuita de asesoramiento y resuelve todo
                lo relacionado con el modelo 650.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo">
                  <LuminaryButton
                    size="lg"
                    variant="primary"
                    className="px-8 py-4 font-semibold text-lg"
                  >
                    Solicitar Llamada
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
                Con ulpiano.es, presentar el modelo 650 deja de ser un dolor de
                cabeza. La plataforma automatiza el cálculo, genera el
                formulario y evita sanciones por despistes, todo desde un solo
                lugar.
              </p>
              <p className="text-xl font-semibold text-slate-900 mb-8 italic">
                &quot;Sencillez, eficacia y seguridad para tu autoliquidación de
                Sucesiones&quot;
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
        title="Simplifica la gestión del Impuesto de Sucesiones con Ulpiano"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
