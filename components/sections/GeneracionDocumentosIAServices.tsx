'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Zap,
  Scale,
  Users,
  FileText,
  CheckCircle,
  Settings,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Eficiencia y Velocidad',
    description:
      'Borradores en Minutos: Introduce los datos patrimoniales y ulpiano.es generará automáticamente los documentos base (testamentos, escrituras, pactos sucesorios) en cuestión de minutos. Reducción de Errores: Minimiza las equivocaciones propias de la transcripción manual, evitando costes y demoras.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: Scale,
    title: 'Personalización Legal y Ajuste a la Normativa Vigente',
    description:
      'Cláusulas Típicas del Ámbito Sucesorio: Sugerimos y personalizamos cláusulas como la sustitución vulgar, mejora, desheredación, legítimas, fideicomisos y otras figuras legales. Adaptación a la Legislación Española: Nuestra IA integra los principios de derecho sucesorio, contemplando legítimas, derecho foral y normativas autonómicas cuando corresponda.',
    color: '#7c3aed',
  },
  {
    icon: Users,
    title: 'Validación Rápida y Colaborativa',
    description:
      'Revisión por Abogados y Notarías: Permite que los profesionales realicen comentarios y ediciones en línea, acelerando la aprobación final. Historial de Cambios: Cada modificación queda registrada para garantizar la trazabilidad y el cumplimiento legal.',
    color: 'var(--color-luminary-success)',
  },
];

const howItWorks = [
  {
    icon: Settings,
    title: 'Configura Tus Escenarios de Planificación',
    description:
      'Selecciona Bienes y Beneficiarios: A partir de los datos que hayas introducido en ulpiano.es (activos, pasivos y figuras jurídicas). Define Cláusulas Específicas: Escoge cláusulas habituales (sustitución vulgar, desheredación, etc.) o personalízalas según tus necesidades.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: Sparkles,
    title: 'IA que Genera Borradores Personalizados',
    description:
      'Procesamiento de Datos: Nuestra tecnología analiza tu información patrimonial y las instituciones jurídicas elegidas (heredero universal, legados específicos, usufructo, etc.). Generación de Documentos: Recibe en pocos clics testamentos, escrituras de donación, pactos sucesorios y otros documentos, con las cláusulas pertinentes y los cálculos fiscales preliminares.',
    color: '#7c3aed',
  },
];

const documentTypes = [
  {
    title: 'Testamentos',
    items: [
      'Cláusula de sustitución vulgar',
      'Mejora',
      'Desheredación',
      'Legítima estricta',
      'Fideicomiso',
    ],
  },
  {
    title: 'Pactos Sucesorios',
    items: [
      'Capitulaciones matrimoniales con previsión sucesoria',
      'Pactos de renuncia a legítima',
      'Atribución de usufructos',
    ],
  },
  {
    title: 'Escrituras de Donación o Partición de Herencia',
    items: [
      'Reparto de bienes inmuebles y/o participaciones sociales',
      'Incluyendo valoración y ajustes fiscales preliminares',
    ],
  },
];

export default function GeneracionDocumentosIAServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              ¿Por Qué Usar IA para la Documentación Sucesoria?
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative rounded-xl border bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="grid size-12 place-items-center rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      className="size-6"
                      style={{ color: service.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-slate-900">
                      {index + 1}. {service.title}
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mb-12">
          <AnimatedSection className="fade-in-up delay-400">
            <h3
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Cómo Funciona
            </h3>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {howItWorks.map((item, index) => (
            <AnimatedSection
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="relative rounded-xl border bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="grid size-12 place-items-center rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon
                      className="size-6"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-slate-900">
                      {index + 1}. {item.title}
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mb-8">
          <AnimatedSection className="fade-in-up delay-600">
            <h3
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Ejemplo de Documentos y Cláusulas Típicas
            </h3>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {documentTypes.map((docType, index) => (
            <AnimatedSection
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${(index + 7) * 100}ms` }}
            >
              <div className="relative rounded-xl border bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold mb-4 text-slate-900">
                  {docType.title}:
                </h4>
                <ul className="space-y-2">
                  {docType.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
