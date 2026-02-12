import { Card } from '@/components/ui/card';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import BeneficiosCorporativosHero from '@/components/sections/BeneficiosCorporativosHero';
import BeneficiosCorporativosServices from '@/components/sections/BeneficiosCorporativosServices';
import BeneficiosCorporativosBenefits from '@/components/sections/BeneficiosCorporativosBenefits';

export default function BeneficiosCorporativosPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero específico para beneficios corporativos */}
      <BeneficiosCorporativosHero />

      {/* Servicios específicos para beneficios corporativos */}
      <BeneficiosCorporativosServices />

      {/* Beneficios para beneficios corporativos */}
      <BeneficiosCorporativosBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner - Justo antes del footer */}
      <CTABanner
        title="Innova en Tu Plan de Beneficios y Protege el Futuro de Tus Empleados"
        primaryLabel="Solicita una Demo"
        secondaryLabel="Contacta con Nosotros"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
