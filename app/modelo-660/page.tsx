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

export default function Modelo660Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Es obligatorio el modelo 660 si ya presento el 650?',
      answer:
        'Sí, porque el 660 declara la composición del caudal relicto y el 650 (u otros) la autoliquidación del Impuesto de Sucesiones. Ambos pueden ser necesarios.',
    },
    {
      question:
        '¿Qué pasa si el valor declarado no coincide con el de Hacienda?',
      answer:
        'Pueden iniciar un expediente de comprobación de valores y, de ser distinto, se originaría una liquidación complementaria.',
    },
    {
      question: '¿Se pueden declarar bienes ubicados en otra comunidad o país?',
      answer:
        'Sí, se incluyen en el inventario global del fallecido. Luego, la norma estatal y convenios internacionales marcan si tributan o no.',
    },
    {
      question: '¿Puedo fraccionar el pago tras declarar el patrimonio?',
      answer:
        'La declaración 660 no lleva pago directo, pero sí se puede solicitar fraccionamiento en la autoliquidación de Sucesiones.',
    },
    {
      question: '¿Cómo añado bienes que aparecen tras presentar el 660?',
      answer:
        'Deberás presentar una declaración complementaria o informar a la Administración si aparecen bienes ocultos o no inventariados.',
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
                Modelo 660:{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Guía para Presentar la Declaración de Sucesiones
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Formaliza la Declaración Patrimonial del Fallecido de Manera
                Rápida y <span className="whitespace-nowrap">Sencilla</span>
              </p>
            </StaticSection>

            <StaticSection className="fade-in-up delay-200">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                  ¿Te corresponde declarar el patrimonio relicto de una persona
                  fallecida? Con esta guía, podrás hacerlo sin confusiones. O,
                  si lo prefieres, confía en ulpiano.es para agilizar todo el
                  proceso y ahorrarte el papeleo.
                </p>
                <p className="text-white font-semibold mb-6 text-center text-lg">
                  Tú eliges:
                </p>
                <ul className="space-y-4 text-left mb-6 max-w-2xl mx-auto">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-lg leading-relaxed">
                      Empieza ahora y presenta el modelo 660 en unos clics.
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
                  '¿Qué es el modelo 660?',
                  '¿Quién debe presentarlo?',
                  'Plazos de presentación y prórrogas',
                  'Fuera de plazo y sanciones',
                  '¿Cómo se presenta el modelo 660?',
                  'Instrucciones para rellenarlo',
                  'Ejemplo práctico con números',
                  'Forma de pago o liquidación',
                  'Presentar el modelo 660 con ulpiano.es',
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
                  ¿Qué es el modelo 660?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                El <strong>modelo 660</strong> se utiliza para la declaración de
                sucesiones, reflejando el inventario de bienes y derechos que
                conforman la herencia de un causante (persona fallecida). Es el
                documento que pone en conocimiento de la Administración el
                patrimonio relicto, previo al cálculo del Impuesto de
                Sucesiones.
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
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Por norma general:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Los herederos, legatarios o albaceas</strong>{' '}
                    encargados de gestionar la herencia.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    Cada comunidad autónoma puede designar a un representante
                    (por ejemplo, uno de los herederos) para realizar la
                    declaración 660 de todos los bienes, deudas y derechos
                    relictos.
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
                Al igual que el resto de sucesiones:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>6 meses</strong> desde la fecha del fallecimiento
                    para presentar la declaración.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Prórroga de 6 meses adicionales:</strong>{' '}
                    Solicitable antes de que transcurran 5 meses, si así lo
                    permite la normativa autonómica.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    Esto no exime de la liquidación del Impuesto de Sucesiones,
                    pero es un paso previo o simultáneo que justifica el
                    contenido de la herencia.
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
                No presentar el modelo 660 o hacerlo fuera de plazo puede
                acarrear:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Recargos:</strong> Cálculo progresivo según los
                    meses de retraso.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Sanciones:</strong> Si se recibe un requerimiento
                    oficial, la cuantía de los recargos y multas se
                    incrementará.
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
                  ¿Cómo se presenta el modelo 660?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Como en otras declaraciones sucesorias, puede presentarse:
              </p>
              <ol className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">1.</span>
                  <div>
                    <strong>De forma telemática:</strong> A través de la sede
                    electrónica del organismo autonómico o de la Agencia
                    Tributaria, requiriendo certificado digital, DNI electrónico
                    o Cl@ve PIN.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">2.</span>
                  <div>
                    <strong>Presencialmente:</strong> Rellenando el formulario
                    oficial y entregándolo en la oficina correspondiente.
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
                El modelo 660 suele exigir:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Datos del fallecido (causante):</strong>{' '}
                    Identificación, fecha de defunción, domicilio fiscal.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Datos de los herederos o legatarios:</strong>{' '}
                    Nombre, domicilio, grado de parentesco.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Relación de bienes y derechos del causante:</strong>{' '}
                    Inmuebles, cuentas bancarias, seguros, acciones, vehículos,
                    etc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Deudas y cargas deducibles:</strong> Hipotecas,
                    préstamos, gastos de sepelio, etc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Valoraciones:</strong> Cada bien debe consignarse
                    con su valoración fiscal o la admitida por la comunidad
                    autónoma.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Resumen o inventario final.</strong>
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
                Supongamos que el causante tenía:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ul className="space-y-2 text-lg text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Una vivienda valorada en <strong>150.000 €</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Una cuenta bancaria con <strong>20.000 €</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Un coche de <strong>5.000 €</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    Deudas pendientes de <strong>10.000 €</strong>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <p className="text-slate-700">
                    Al llenar el modelo 660, reflejas:
                  </p>
                  <ol className="space-y-2 text-lg text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>
                        <strong>Total de bienes:</strong> 175.000 €.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>
                        <strong>Deudas y cargas:</strong> 10.000 €.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>
                        <strong>Patrimonio neto:</strong>{' '}
                        <span className="text-green-600 font-bold">
                          165.000 €
                        </span>
                        .
                      </span>
                    </li>
                  </ol>
                  <p className="text-slate-700 mt-4">
                    Ese valor se usará como referencia en la posterior
                    liquidación de Sucesiones (modelo 650 u homólogos),
                    aplicando reducciones o exenciones.
                  </p>
                </div>
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
                  Forma de pago o liquidación
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                El modelo 660 es declarativo, no implica directamente el pago.
                Sin embargo:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    Debe acompañarse o conducir a la autoliquidación del
                    Impuesto de Sucesiones (modelos como 650, 651, etc.).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    Si no presentas este inventario, la Administración puede
                    desconocer el valor real de la herencia.
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
                  Presentar el modelo 660 con ulpiano.es
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 md:p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Con ulpiano.es, la declaración de bienes relictos es más
                sencilla:
              </p>
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Inventario Automatizado:</strong> Solo ingresa los
                    datos de inmuebles, cuentas y deudas. La plataforma
                    consolida la información y genera el borrador del 660.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Asistencia Personalizada:</strong> Expertos revisan
                    si tu valoración y documentación cumplen con las exigencias
                    de la comunidad autónoma.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Sin Errores y Contratiempos:</strong> El sistema te
                    avisa de posibles inconsistencias en las cifras, evitando
                    requerimientos de Hacienda.
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
                ¿Aún tienes dudas?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Solicita una llamada gratuita y habla con nuestros asesores
                sobre el modelo 660.
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
                El modelo 660 es fundamental para declarar el inventario de una
                herencia ante la Administración. Con ulpiano.es, simplificas el
                proceso, evitas errores de valoración y lo integras con la
                autoliquidación del Impuesto de Sucesiones.
              </p>
              <p className="text-xl font-semibold text-slate-900 mb-8 italic">
                &quot;Declara el Patrimonio del Fallecido sin Confusiones y con
                Asesoría Experta&quot;
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
        title="Simplifica la gestión de la Declaración de Sucesiones con Ulpiano"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
