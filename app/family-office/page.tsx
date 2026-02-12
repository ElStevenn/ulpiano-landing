import { Card } from '@/components/ui/card';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import FamilyOfficeHero from '@/components/sections/FamilyOfficeHero';
import FamilyOfficeServices from '@/components/sections/FamilyOfficeServices';
import FamilyOfficeBenefits from '@/components/sections/FamilyOfficeBenefits';

export default function FamilyOfficePage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero específico para Family Office */}
      <FamilyOfficeHero />

      {/* Servicios específicos para Family Office */}
      <FamilyOfficeServices />

      {/* Beneficios para Family Office */}
      <FamilyOfficeBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner - Justo antes del footer */}
      <CTABanner
        title="Potencia la Gestión y Continuidad del Patrimonio Familiar"
        primaryLabel="Reserva tu Demo"
        secondaryLabel="Descubre más"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
