import UlpianoAIHero from '@/components/sections/UlpianoAIHero';
import UlpianoAIProblem from '@/components/sections/UlpianoAIProblem';
import UlpianoAISolution from '@/components/sections/UlpianoAISolution';
import UlpianoAIUseCases from '@/components/sections/UlpianoAIUseCases';
import UlpianoAIComparison from '@/components/sections/UlpianoAIComparison';
import HelpContact from '@/components/sections/HelpContact';
import CTABanner from '@/components/HeroCTA';

export default function UlpianoAIPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero */}
      <UlpianoAIHero />

      {/* El Problema */}
      <UlpianoAIProblem />

      {/* La Solución y Características */}
      <UlpianoAISolution />

      {/* Casos de Uso */}
      <UlpianoAIUseCases />

      {/* Comparativa */}
      <UlpianoAIComparison />

      {/* Contacto / Ayuda */}
      <HelpContact />

      {/* CTA Final */}
      <CTABanner
        title="Trabaja con un asistente que sí entiende tu caso"
        primaryLabel="Solicitar demo"
        secondaryLabel="Hablar con nosotros"
      />
    </main>
  );
}
