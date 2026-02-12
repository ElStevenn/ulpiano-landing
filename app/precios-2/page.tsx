'use client';

import PlanFeaturesByPlan from '@/components/sections/PlanFeaturesByPlan';

export default function Precios2Page({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return <PlanFeaturesByPlan />;
}
