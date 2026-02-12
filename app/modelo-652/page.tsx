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

export default function Modelo652Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question:
        'Si hay varios beneficiarios del seguro, ¿cada uno presenta su modelo 652?',
      answer:
        'Sí, cada beneficiario autoliquida la parte que le corresponda del capital asegurado.',
    },
    {
      question: '¿Qué pasa si la aseguradora retuvo una parte?',
      answer:
        'La aseguradora generalmente paga el 100 % del capital al beneficiario; es el beneficiario quien está obligado a presentar y pagar el impuesto correspondiente.',
    },
    {
      question:
        '¿Se puede ampliar el plazo más allá de los 12 meses de prórroga?',
      answer:
        'No. La prórroga máxima suele ser de 6 meses adicionales a los 6 iniciales (total 12).',
    },
    {
      question:
        '¿Cómo se calcula el valor en caso de un seguro con pagos mensuales?',
      answer:
        'Se declara el capital total reconocido al beneficiario tras el fallecimiento, no los pagos mensuales fraccionados.',
    },
    {
      question: '¿Y si el fallecido residía en otra comunidad o país?',
      answer:
        'Las reglas de competencia pueden variar. Confirma con ulpiano.es o con la administración local cuál es la normativa aplicable.',
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
                Modelo 652:{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Guía para Presentar la Autoliquidación de Seguros de Vida
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Gestiona tu Impuesto de Sucesiones por Seguros de Vida de Forma
                Ágil y <span className="whitespace-nowrap">sin Errores</span>
              </p>
            </StaticSection>

            <StaticSection className="fade-in-up delay-200">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                  ¿Te corresponde declarar un seguro de vida percibido por
                  fallecimiento? Con esta guía aprenderás a hacerlo sin
                  complicaciones. O, si lo prefieres, puedes automatizar el
                  proceso con ulpiano.es para ahorrar tiempo y reducir riesgos.
                </p>
                <p className="text-white font-semibold mb-6 text-center text-lg">
                  Elige tu camino:
                </p>
                <ul className="space-y-4 text-left mb-6 max-w-2xl mx-auto">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-lg leading-relaxed">
                      Empieza ahora y presenta el modelo 652 en unos clics.
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
                  '¿Qué es el modelo 652?',
                  '¿Quién debe presentarlo?',
                  'Plazos de presentación y prórrogas',
                  'Fuera de plazo y sanciones',
                  'Formas de presentar el modelo 652',
                  'Instrucciones para rellenarlo',
                  'Ejemplo práctico con números',
                  'Pago del modelo 652',
                  'Presentar el modelo 652 con ulpiano.es',
                  'FAQ - Preguntas frecuentes',
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
                  ¿Qué es el modelo 652?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                El <strong>modelo 652</strong> es la autoliquidación del
                Impuesto de Sucesiones y Donaciones para seguros de vida,
                generados tras el fallecimiento del titular asegurado. En otras
                palabras, si recibes un seguro de vida como beneficiario, debes
                declarar y, en su caso, pagar los impuestos correspondientes
                mediante este formulario.
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
                    <strong>Beneficiarios de un seguro de vida</strong> ligado
                    al fallecimiento del titular.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    Puede tratarse de familiares directos (cónyuge, hijos, etc.)
                    o de terceros designados en la póliza.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <span>
                    Cada beneficiario debe autoliquidar su parte proporcional,
                    incluso si es exenta o bonificada.
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
                El plazo habitual para presentar el modelo 652 es de{' '}
                <strong>6 meses</strong> desde la fecha de fallecimiento. No
                obstante:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Prórroga de 6 meses adicionales:</strong> Posible
                    solicitarla antes de que transcurran 5 meses del
                    fallecimiento, siempre que la normativa autonómica lo
                    permita.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionamiento o aplazamiento:</strong> Dependiendo
                    de la legislación aplicable, es factible pagar en plazos,
                    con intereses de demora si procede.
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
                Si no lo presentas dentro del plazo o la prórroga:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Recargos:</strong> Aumentan según el tiempo de
                    demora (1 % al mes, etc.).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Sanciones:</strong> Si Hacienda o la Administración
                    competente te requiere, el importe adicional será mayor, en
                    proporción a lo dejado de ingresar.
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
                  Formas de presentar el modelo 652
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Al igual que otras autoliquidaciones del Impuesto de Sucesiones:
              </p>
              <ol className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">1.</span>
                  <div>
                    <strong>Telemáticamente:</strong> Desde la sede electrónica
                    de la Agencia Tributaria o el organismo de tu comunidad
                    autónoma (según la localización de los bienes o la
                    residencia del fallecido).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">2.</span>
                  <div>
                    <strong>En papel:</strong> Rellenando el formulario oficial
                    y entregándolo en la oficina habilitada.
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
                En este modelo suelen pedirse:
              </p>
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Datos del fallecido (causante):</strong> Nombre,
                    NIF, fecha de defunción.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Datos del beneficiario:</strong> Tu información
                    personal, grado de parentesco con el fallecido.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Póliza de seguro de vida:</strong> Número de
                    contrato, compañía aseguradora y capital percibido.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Base imponible y bonificaciones:</strong> Se
                    determina según la cantidad recibida, menos posibles gastos
                    deducibles o deudas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Tipo de gravamen y resultado:</strong> Aplica
                    reducciones y bonificaciones autonómicas si proceden,
                    calculando la cuota final a pagar.
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
                Supongamos que:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ol className="space-y-3 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>
                      Recibes <strong>50.000 €</strong> de una póliza de seguro
                      de vida tras el fallecimiento de un familiar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>
                      Tu comunidad autónoma contempla una reducción del{' '}
                      <strong>99 %</strong> para descendientes en esta clase de
                      seguros (por ejemplo, si eres hijo/a).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>
                      <strong>Base imponible:</strong> 50.000 €. Aplicando la
                      reducción del 99 %, la base liquidable es de{' '}
                      <span className="text-blue-600 font-bold">500 €</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">4.</span>
                    <span>
                      <strong>Tipo impositivo general:</strong> 7 % (por
                      ejemplo).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600">5.</span>
                    <span>
                      <strong>Cuota a pagar:</strong> 500 € × 0,07 ={' '}
                      <span className="text-green-600 font-bold">35 €</span>.
                    </span>
                  </li>
                </ol>
                <p className="text-slate-700 mt-4">
                  Si la comunidad ofrece otros beneficios o exenciones, la cuota
                  podría ser 0. Cada caso depende de la normativa autonómica.
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
                  ¿Cómo se paga el modelo 652?
                </h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Pago único:</strong> Cargo en cuenta o domiciliación
                    al presentar la autoliquidación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fraccionado / Aplazado:</strong> Si tu comunidad lo
                    permite, podrás pagar en plazos con sus correspondientes
                    intereses.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Fuera de plazo:</strong> Recargos progresivos en
                    función de los meses de retraso.
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
                  Presentar el modelo 652 con ulpiano.es
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 md:p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                ulpiano.es agiliza tu declaración del seguro de vida:
              </p>
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Calculadora Inteligente:</strong> Introduce la fecha
                    de fallecimiento, el capital del seguro y tu grado de
                    parentesco; la plataforma genera la base imponible y aplica
                    bonificaciones vigentes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Formulario Listo para Presentar:</strong> Obtén un
                    borrador con datos consolidados, ya sea para presentarlo en
                    la web oficial o en la oficina correspondiente.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Soporte Personalizado:</strong> Un equipo de
                    expertos en derecho sucesorio y fiscalidad te asesorará
                    sobre reducciones y trámites.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Evita Errores y Multas:</strong> La plataforma se
                    mantiene actualizada con la normativa autonómica, reduciendo
                    las probabilidades de sanciones.
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
                  FAQ - Preguntas frecuentes
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
                lo relacionado con el modelo 652.
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
                El modelo 652 es esencial para tributar adecuadamente cuando
                recibes un seguro de vida por fallecimiento. Con ulpiano.es,
                simplificarás todo el proceso, desde la base imponible hasta la
                presentación y el pago, minimizando errores y posibles
                sanciones.
              </p>
              <p className="text-xl font-semibold text-slate-900 mb-8 italic">
                &quot;Declara tus Seguros de Vida sin complicaciones y con
                asesoría experta&quot;
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
        title="Simplifica la gestión del Impuesto de Sucesiones por Seguros de Vida con Ulpiano"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
