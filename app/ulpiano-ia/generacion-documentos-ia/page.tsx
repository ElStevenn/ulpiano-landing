import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import GeneracionDocumentosIAHero from '@/components/sections/GeneracionDocumentosIAHero';
import GeneracionDocumentosIAServices from '@/components/sections/GeneracionDocumentosIAServices';
import GeneracionDocumentosIABenefits from '@/components/sections/GeneracionDocumentosIABenefits';

export default function GeneracionDocumentosIAPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero */}
      <GeneracionDocumentosIAHero />

      {/* Servicios */}
      <GeneracionDocumentosIAServices />

      {/* Beneficios */}
      <GeneracionDocumentosIABenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="Transforma la Forma de Crear Documentos Sucesorios"
        primaryLabel="Crea Tu Cuenta Gratis"
        secondaryLabel="Reserva una Demo"
      />
    </main>
  );
}
