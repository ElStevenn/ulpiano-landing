import { Card } from '@/components/ui/card';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import NotariasHero from '@/components/sections/NotariasHero';
import NotariasServices from '@/components/sections/NotariasServices';
import NotariasBenefits from '@/components/sections/NotariasBenefits';

export default function NotariasPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero específico para notarías */}
      <NotariasHero />

      {/* Servicios específicos para notarías */}
      <NotariasServices />

      {/* Beneficios para notarías */}
      <NotariasBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner - Justo antes del footer */}
      <CTABanner
        title="Actualiza tu Notaría al Mundo Digital"
        primaryLabel="Reserva tu Demo"
        secondaryLabel="Quiero Saber Más"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
