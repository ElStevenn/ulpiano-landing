import { Card } from '@/components/ui/card';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import AbogadosHero from '@/components/sections/AbogadosHero';
import AbogadosServices from '@/components/sections/AbogadosServices';
import AbogadosBenefits from '@/components/sections/AbogadosBenefits';

export default function AbogadosPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero específico para despachos de abogados */}
      <AbogadosHero />

      {/* Servicios específicos para despachos de abogados */}
      <AbogadosServices />

      {/* Beneficios para despachos de abogados */}
      <AbogadosBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner - Justo antes del footer */}
      <CTABanner
        title="Mejora la Experiencia de Tus Clientes y Digitaliza la Gestión Sucesoria"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
