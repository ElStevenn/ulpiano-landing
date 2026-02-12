'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Upload,
  Scan,
  FileText,
  CheckCircle,
  Shield,
  Zap,
  FileCheck,
} from 'lucide-react';

const services = [
  {
    icon: Upload,
    title: 'Carga de Documentos',
    description:
      'Sube archivos escaneados o en PDF (Certificado de Defunción, Testamento Original, DNI del Causante y Beneficiarios, Escrituras, etc.). El sistema acepta formatos múltiples y asegura la confidencialidad con cifrado avanzado.',
    color: 'var(--color-luminary-blue)',
  },
  {
    icon: Scan,
    title: 'Reconocimiento Óptico e IA',
    description:
      'Nuestra tecnología de OCR e Inteligencia Artificial detecta automáticamente campos clave: datos personales (nombre, DNI, fecha de nacimiento), información legal (títulos sucesorios, escrituras, referencias catastrales) y detalles financieros (saldos bancarios, pólizas de seguro, etc.).',
    color: '#7c3aed',
  },
  {
    icon: FileText,
    title: 'Clasificación y Extracción de Información',
    description:
      'Los documentos se etiquetan y clasifican según su tipo (Certificado de Defunción, Escritura de Propiedad, etc.). El sistema identifica y extrae la información relevante (cargos, títulos sucesorios, herederos, valor de referencia catastral, etc.) para su posterior uso en la plataforma.',
    color: 'var(--color-luminary-success)',
  },
  {
    icon: FileCheck,
    title: 'Integración y Validación',
    description:
      'Toda la información extraída se integra automáticamente en la planificación sucesoria y en el expediente digital de la herencia. Los despachos de abogados, notarías o asesores pueden validar y editar los datos antes de continuar con la tramitación.',
    color: 'var(--color-luminary-navy)',
  },
];

export default function ProcesamientoInteligenteServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-16">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Elimina la Complejidad en la Tramitación de Herencias
            </h2>
          </AnimatedSection>
          <AnimatedSection className="fade-in-up delay-200">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              En el proceso de herencia se requieren múltiples documentos:
              certificados de defunción, testamentos, escrituras, certificados
              de nacimiento, DNI de beneficiarios, títulos de propiedad y más.
              Con nuestro Procesamiento Inteligente de Documentos:
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Digitaliza y clasifica automáticamente cada archivo.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Extrae información clave (cargos, títulos sucesorios, datos
                  del causante, etc.).
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Evita errores humanos y reduce los plazos de gestión.
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mb-12">
          <AnimatedSection className="fade-in-up delay-300">
            <h3
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Cómo Funciona
            </h3>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
