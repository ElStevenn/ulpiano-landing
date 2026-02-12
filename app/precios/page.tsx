'use client';

import { useState } from 'react';
import PricingHero from '@/components/sections/PricingHero';
import PricingCardsScreenshot from '@/components/sections/PricingCardsScreenshot';
import PlanFeaturesByPlan from '@/components/sections/PlanFeaturesByPlan';
import PricingFAQ from '@/components/sections/PricingFAQ';
import ContactSalesModal from '@/components/sections/ContactSalesModal';
import HelpBar from '@/components/sections/HelpBar';
import { useLandingTracking } from '@/lib/hooks/useLandingTracking';

export default function PreciosPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [open, setOpen] = useState(false);

  // Activar tracking de landing (pricing_view y scroll_depth)
  useLandingTracking();

  return (
    <>
      {/* PricingHero - full width */}
      <PricingHero
        isAnnual={isAnnual}
        onToggleBilling={() => setIsAnnual((v) => !v)}
        onOpenSales={() => setOpen(true)}
      />

      {/* Nueva Sección (4 columnas, precios ajustados) */}
      <PricingCardsScreenshot
        isAnnual={isAnnual}
        onOpenSales={() => setOpen(true)}
        onToggleBilling={() => setIsAnnual((v) => !v)}
      />

      {/* Tabla - Listado de funcionalidades por plan */}
      <PlanFeaturesByPlan />

      {/* HelpBar - full width */}
      <HelpBar />

      {/* PricingFAQ - full width */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-4">
          <PricingFAQ />
        </div>
      </section>

      <ContactSalesModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
