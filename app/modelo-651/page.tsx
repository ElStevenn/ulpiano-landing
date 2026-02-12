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

export default function Modelo651Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Hay un mínimo exento para no presentar el 651?',
      answer:
        'Depende de la comunidad autónoma. En muchas, cualquier cantidad formalmente donada debe declararse, aunque luego resulte exento de pago.',
    },
    {
      question: '¿Se puede donar un inmueble sin formalizar en notaría?',
      answer:
        'Legalmente, las donaciones de inmuebles deben elevarse a escritura pública para ser válidas. Luego se tributa con el 651.',
    },
    {
      question: '¿Qué sucede si no se demuestra el origen de los fondos?',
      answer:
        'Podrías exponerte a sanciones o problemas de justificación. Es importante tener documentos que acrediten la procedencia y la intención de la donación.',
    },
    {
      question: '¿Qué ocurre si no presento el modelo 651 en los 30 días?',
      answer:
        'Se te aplicarán recargos y, eventualmente, sanciones si Hacienda requiere la declaración.',
    },
    {
      question: '¿La donación se puede fraccionar en varios pagos?',
      answer:
        'Mientras el acuerdo sea un único acto de donación, se declara todo en el modelo 651. Para fraccionar el impuesto, consulta las normas autonómicas sobre aplazamientos.',
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
                Modelo 651:{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Guía para Presentarlo sin Complicaciones
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Autoliquidación del Impuesto de Donaciones:
                <br />
                Facilita tus trámites y Ahorra Tiempo
              </p>
            </StaticSection>

            <StaticSection className="fade-in-up delay-200">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                  ¿Necesitas declarar una donación? Con esta guía aprenderás a
                  presentar el modelo 651 sin errores y en menos tiempo. O, si
                  lo prefieres, hacerlo todo de manera automatizada gracias a
                  ulpiano.es.
                </p>
                <p className="text-white font-semibold mb-6 text-center text-lg">
                  La elección es tuya:
                </p>
                <ul className="space-y-4 text-left mb-6 max-w-2xl mx-auto">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-lg leading-relaxed">
                      Comienza gratis y presenta el modelo 651 en unos clics.
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
                  '¿Qué es el modelo 651?',
                  '¿Quién tiene que presentar el modelo 651?',
                  'Plazos de presentación y prórrogas',
                  'Presentar el modelo 651 fuera de plazo',
                  '¿Cómo se presenta el modelo 651?',
                  'Instrucciones para rellenar el modelo 651',
                  'Ejemplo práctico con números',
                  '¿Cómo se paga el modelo 651?',
                  'Presentar el modelo 651 con ulpiano.es',
                  'Preguntas frecuentes',
                ].map((item, index) => {
                  const sectionId = `seccion-${index + 1}`;
                  return (
                    <a
                      key={index}
                      href={`#${sectionId}`}
                      onClick={createScrollHandler(sectionId, {
                        offset: index === 1 ? 50 : 40,
                      })}
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
                  ¿Qué es el modelo 651?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                El <strong>modelo 651</strong> es el documento usado para
                autoliquidar el Impuesto sobre Donaciones. Siempre que una
                persona reciba bienes o derechos a título gratuito (sin
                contraprestación económica), está obligada a declarar y pagar el
                correspondiente impuesto.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-4">
                Ejemplos de donaciones pueden ser:
              </p>
              <ul className="space-y-3 text-lg text-slate-700 mt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>Entrega de dinero de padres a hijos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    Donación de un inmueble entre familiares o amigos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    Transmisiones de participaciones sociales o derechos a
                    herederos en vida.
                  </span>
                </li>
              </ul>
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
                  ¿Quién tiene que presentar el modelo 651?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                En términos generales:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>El donatario</strong> (quien recibe la donación) es
                    quien debe presentar y pagar el impuesto.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    No importa si la donación es de dinero, acciones, joyas o
                    inmuebles; en todos los casos se aplica el 651 si se supera
                    la exención o si se está sujeto a tributación según la
                    comunidad autónoma.
                  </span>
                </li>
              </ul>
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
                Por norma, el plazo para presentar el modelo 651 suele ser de{' '}
                <strong>30 días hábiles</strong> contados desde la fecha de la
                donación. Sin embargo, cada comunidad puede tener matices.
                Además:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Posibilidad de prórroga:</strong> En algunas
                    comunidades, se puede solicitar una prórroga con
                    anterioridad a la finalización del plazo, pero siempre es
                    recomendable confirmar con la normativa autonómica.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionamiento o aplazamiento:</strong> Es
                    factible, en ciertos casos, pagar en plazos. Ten en cuenta
                    que podrían generarse intereses de demora.
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
                  Presentar el modelo 651 fuera de plazo
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Si no presentas la autoliquidación en el plazo establecido:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Recargos:</strong> Se aplican incrementos de la
                    deuda dependiendo del retraso (1 % adicional al mes, etc.).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Sanciones:</strong> Si la Administración te notifica
                    el incumplimiento, los importes adicionales pueden elevarse
                    en función del porcentaje dejado de ingresar.
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
                  ¿Cómo se presenta el modelo 651?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Tienes dos métodos para presentar el 651:
              </p>
              <ol className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">1.</span>
                  <div>
                    <strong>Vía telemática:</strong> A través de la sede
                    electrónica de la Agencia Tributaria o del organismo
                    tributario autonómico, según proceda. Se requiere
                    certificado digital, Cl@ve PIN o DNI electrónico.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">2.</span>
                  <div>
                    <strong>En papel:</strong> Rellenando el formulario
                    disponible en la web oficial y llevándolo a la oficina
                    autonómica o de Hacienda correspondiente.
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
                  Instrucciones para rellenar el modelo 651
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                En el formulario te pedirán:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Datos del donante y del donatario:</strong> NIF,
                    nombre, apellidos, domicilio.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fecha y naturaleza de la donación:</strong> Indicar
                    la fecha exacta del acto de donación y describir el bien
                    (ej. inmueble, dinero, vehículo).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Valor del bien:</strong> Hay que reflejar el valor
                    real o declarado, siguiendo las normas de valoración
                    autonómicas o estatales.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Base imponible:</strong> Se calcula restando
                    posibles cargas o deudas relacionadas con la donación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Bonificaciones o reducciones:</strong> Pueden
                    aplicarse, por ejemplo, si la donación es entre familiares
                    directos. Esto depende en gran parte de la comunidad
                    autónoma.
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
                Supongamos que un padre dona 40.000 € a su hijo para ayudarle a
                adquirir su primera vivienda.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ol className="space-y-3 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>
                      <strong>Valor donado:</strong> 40.000 €.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>
                      <strong>Relación de parentesco:</strong> Padre-hijo (suele
                      haber reducciones importantes en muchas comunidades).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>
                      <strong>Base imponible:</strong> 40.000 € (asumiendo que
                      no hay cargas ni deudas).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">4.</span>
                    <span>
                      <strong>Reducciones:</strong> Dependiendo de la comunidad,
                      se podría reducir la base o aplicar un tipo reducido.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">5.</span>
                    <span>
                      <strong>Tipo impositivo:</strong> Varía, pero imaginemos
                      un 7 %.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">6.</span>
                    <span>
                      <strong>Cuota:</strong> 40.000 € × 0,07 ={' '}
                      <span className="text-green-600 font-bold">2.800 €</span>.
                    </span>
                  </li>
                </ol>
                <p className="text-slate-700 mt-4">
                  Si la normativa autonómica contempla una reducción específica
                  (por ejemplo, 95 % para donaciones directas con ciertas
                  condiciones), ese importe podría bajar.
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
                  ¿Cómo se paga el modelo 651?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                El pago puede realizarse:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Cargo en cuenta o domiciliación:</strong> Al
                    presentar telemáticamente, se facilita el pago automático
                    desde el banco.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Ingreso en entidad colaboradora:</strong> Si
                    presentas en papel, puedes abonar en la oficina bancaria.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionado o aplazado:</strong> Dependiendo de la
                    normativa autonómica, es posible solicitarlo, aunque genere
                    intereses.
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
                  Presentar el modelo 651 con ulpiano.es
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 md:p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                En ulpiano.es, todo se vuelve más sencillo:
              </p>
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Cálculo Automático:</strong> Introduces la
                    información del donante, el bien y el parentesco, y el
                    sistema determina la base imponible y busca bonificaciones
                    autonómicas.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Generación del Formulario:</strong> El software
                    produce un borrador con los datos listos para presentar.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Asistencia Legal y Fiscal:</strong> Expertos en
                    sucesiones y donaciones te orientan si surgen dudas sobre
                    reducciones, plazos o requisitos formales.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Más Rápido y Sin Errores:</strong> Centraliza la
                    gestión de la donación, evitando recalcular cifras o
                    trámites manuales.
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
                ¿Tienes preguntas específicas sobre el modelo 651?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Solicita una llamada gratuita de asesoramiento y resuelve
                cualquier duda sobre la presentación.
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
                El modelo 651 es imprescindible al recibir una donación,
                reflejando tu obligación con el Impuesto de Donaciones. Con
                ulpiano.es, eliminas complejidades y evitas errores, presentando
                todo de forma rápida y confiable.
              </p>
              <p className="text-xl font-semibold text-slate-900 mb-8 italic">
                &quot;Declara tus donaciones sin complicaciones y con asesoría
                experta&quot;
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
        title="Simplifica la gestión del Impuesto de Donaciones con Ulpiano"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
