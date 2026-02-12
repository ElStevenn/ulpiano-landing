import { Card } from '@/components/ui/card';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import AseguradorasHero from '@/components/sections/AseguradorasHero';
import AseguradorasServices from '@/components/sections/AseguradorasServices';
import AseguradorasBenefits from '@/components/sections/AseguradorasBenefits';

export default function AseguradorasPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero específico para aseguradoras */}
      <AseguradorasHero />

      {/* Servicios específicos para aseguradoras */}
      <AseguradorasServices />

      {/* Beneficios para aseguradoras */}
      <AseguradorasBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner - Justo antes del footer */}
      <CTABanner
        title="Destaca con un Servicio Sucesorio Integral"
        primaryLabel="Reserva tu Demo"
        secondaryLabel="Comienza Ahora"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
