import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';
import ProcesamientoInteligenteHero from '@/components/sections/ProcesamientoInteligenteHero';
import ProcesamientoInteligenteServices from '@/components/sections/ProcesamientoInteligenteServices';
import ProcesamientoInteligenteBenefits from '@/components/sections/ProcesamientoInteligenteBenefits';

export default function ProcesamientoInteligenteDocumentosPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero */}
      <ProcesamientoInteligenteHero />

      {/* Servicios */}
      <ProcesamientoInteligenteServices />

      {/* Beneficios */}
      <ProcesamientoInteligenteBenefits />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="Optimiza la Gestión Documental de Tu Herencia con un Solo Clic"
        primaryLabel="Crear Cuenta Gratis"
        secondaryLabel="Reserva una Demo"
      />
    </main>
  );
}
