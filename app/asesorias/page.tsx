import { Card } from '@/components/ui/card';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import AsesoriasHero from '@/components/sections/AsesoriasHero';
import AsesoriasServices from '@/components/sections/AsesoriasServices';
import AsesoriasBenefits from '@/components/sections/AsesoriasBenefits';

export default function AsesoriasPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero específico para asesorías */}
      <AsesoriasHero />

      {/* Servicios específicos para asesorías */}
      <AsesoriasServices />

      {/* Beneficios para asesorías */}
      <AsesoriasBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner - Justo antes del footer */}
      <CTABanner
        title="Lleva Tu Asesoría al Siguiente Nivel en la Planificación Sucesoria"
        primaryLabel="Reserva tu Demo"
        secondaryLabel="Descubre más"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
