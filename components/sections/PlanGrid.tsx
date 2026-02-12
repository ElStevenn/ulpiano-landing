'use client';

import PlanCard from './PlanCard';
import { PlanKey } from '@/pricing.config';

type Props = {
  isAnnual: boolean;
  onOpenSales: () => void;
  onToggleAnnual?: () => void;
};

const order: PlanKey[] = ['freemium', 'basico', 'esencial'];

export default function PlanGrid({
  isAnnual,
  onOpenSales,
  onToggleAnnual,
}: Props) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid unificado con alineación perfecta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 items-stretch">
          {order.map((key) => (
            <PlanCard
              key={key}
              planKey={key}
              isAnnual={isAnnual}
              onOpenSales={onOpenSales}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
