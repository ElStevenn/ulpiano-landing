'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { pricingConfig, formatPriceEUR, PlanKey } from '@/pricing.config';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { trackPlanSelected } from '@/lib/tracking';

type Props = {
  planKey: PlanKey;
  isAnnual: boolean;
  onOpenSales: () => void;
};

export default function PlanCard({ planKey, isAnnual, onOpenSales }: Props) {
  const plan = pricingConfig.plans[planKey];
  const isPopular = plan.isMostPopular;
  const isFreemium = planKey === 'freemium';

  const ctaLabel =
    plan.ctaType === 'free'
      ? 'Empieza ahora'
      : plan.ctaType === 'trial'
      ? 'Probar ahora'
      : 'Contacta con ventas';

  return (
    <div className="relative flex flex-col h-full">
      {/* Badge para plan popular - estilo tech pill */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
            Más popular
          </span>
        </div>
      )}

      {/* Card con capas y profundidad */}
      <Card
        className={cn(
          'relative flex flex-col h-full transition-all duration-300',
          'bg-white border',
          'rounded-xl',
          // Plan popular: mayor elevación y profundidad
          isPopular
            ? 'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)] border-indigo-200/60 md:scale-[1.02]'
            : 'shadow-[0_1px_2px_rgba(0,0,0,0.03)] border-gray-200/80 hover:shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-gray-300',
          // Altura mínima consistente
          'min-h-[580px]'
        )}
      >
        {/* Contenido */}
        <div className="relative flex flex-col h-full">
          <CardHeader
            className={cn('text-center pb-5 pt-8 px-6', isPopular && 'pt-10')}
          >
            <CardTitle className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
              {plan.name}
            </CardTitle>
            <CardDescription className="text-sm text-slate-600 max-w-[85%] mx-auto leading-relaxed">
              {plan.tagline}
            </CardDescription>

            {/* Precio - más prominente */}
            <div className="mt-7 mb-2">
              <div className="flex items-baseline justify-center gap-1.5">
                {plan.monthlyPrice === 0 ? (
                  <>
                    <span className="text-4xl font-bold text-slate-900 tracking-tight">
                      Gratis
                    </span>
                    <span className="text-sm font-medium text-slate-500 ml-1">
                      para siempre
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-bold text-slate-900 tracking-tight">
                      {formatPriceEUR(plan.monthlyPrice)}
                    </span>
                    <span className="text-base font-medium text-slate-500">
                      /mes
                    </span>
                  </>
                )}
              </div>
              {plan.monthlyPrice > 0 && (
                <p className="text-xs text-slate-500 mt-2.5 font-medium">
                  Precio sin IVA
                </p>
              )}
            </div>
          </CardHeader>

          {/* Lista de funcionalidades - más compacta y alineada */}
          <CardContent className="flex-1 px-6 pb-5">
            {plan.features && plan.features.length > 0 && (
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <div
                        className={cn(
                          'w-5 h-5 rounded flex items-center justify-center',
                          isPopular
                            ? 'bg-indigo-100'
                            : isFreemium
                            ? 'bg-slate-100'
                            : 'bg-blue-50'
                        )}
                      >
                        <Check
                          className={cn(
                            'w-3.5 h-3.5',
                            isPopular
                              ? 'text-indigo-600'
                              : isFreemium
                              ? 'text-slate-500'
                              : 'text-blue-600'
                          )}
                          strokeWidth={3}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed flex-1">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>

          {/* CTA - jerarquía clara */}
          <CardFooter className="flex-col gap-2 pt-6 pb-8 px-6 mt-auto">
            {plan.ctaType === 'sales' ? (
              <Button
                className={cn(
                  'w-full font-semibold transition-all duration-200',
                  'bg-slate-900 text-white',
                  'hover:bg-slate-800',
                  'border-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
                )}
                onClick={() => {
                  onOpenSales();
                  trackPlanSelected(
                    plan.name,
                    plan.monthlyPrice,
                    isAnnual ? 'anual' : 'mensual',
                    { cta_type: 'sales' }
                  );
                }}
                data-plan-name={plan.name}
                data-plan-price={plan.monthlyPrice}
                data-plan-billing={isAnnual ? 'anual' : 'mensual'}
                data-cta-type="sales"
                aria-label={`Contacta con ventas: ${plan.name}`}
              >
                {ctaLabel}
              </Button>
            ) : (
              <Button
                className={cn(
                  'w-full font-semibold transition-all duration-200',
                  isPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)]'
                    : 'bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-[0_1px_1px_rgba(0,0,0,0.04)]',
                  'py-2.5'
                )}
                aria-label={`${ctaLabel}: ${plan.name}`}
                onClick={() => {
                  trackPlanSelected(
                    plan.name,
                    plan.monthlyPrice,
                    isAnnual ? 'anual' : 'mensual',
                    { cta_type: plan.ctaType }
                  );
                }}
                data-plan-name={plan.name}
                data-plan-price={plan.monthlyPrice}
                data-plan-billing={isAnnual ? 'anual' : 'mensual'}
                data-cta-type={plan.ctaType}
              >
                {ctaLabel}
              </Button>
            )}
            {plan.notes && plan.monthlyPrice === 0 && (
              <p className="text-xs text-slate-500 text-center mt-2 font-medium">
                {plan.notes}
              </p>
            )}
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
