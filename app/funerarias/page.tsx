import { Card } from '@/components/ui/card';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import FunerariasHero from '@/components/sections/FunerariasHero';
import FunerariasServices from '@/components/sections/FunerariasServices';
import FunerariasBenefits from '@/components/sections/FunerariasBenefits';

export default function FunerariasPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero específico para funerarias */}
      <FunerariasHero />

      {/* Servicios específicos para funerarias */}
      <FunerariasServices />

      {/* Beneficios para funerarias */}
      <FunerariasBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner - Justo antes del footer */}
      <CTABanner
        title="Integra la Tramitación Sucesoria y Mejora la Experiencia de las Familias"
        primaryLabel="Reserva tu Demo"
        secondaryLabel="Comienza Ahora"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </main>
  );
}
