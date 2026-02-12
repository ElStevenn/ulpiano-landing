'use client';

import BillingToggle from '@/components/sections/BillingToggle';
import { cn } from '@/lib/utils';
import { trackPlanSelected } from '@/lib/tracking';

type Props = {
  isAnnual: boolean;
  onToggleBilling: () => void;
  onOpenSales: () => void;
};

type Plan = {
  key: string;
  name: string;
  description: string;
  priceAnnual: number | null; // Precio mensualizado al pagar anualmente
  cta: { label: string; type: 'primary' | 'secondary' | 'sales' };
  isMostPopular?: boolean;
  footerText: string;
};

const DISCOUNT_PERCENT = 10;

const plans: Plan[] = [
  {
    key: 'starter',
    name: 'Starter',
    description:
      'Para despachos que quieren a digitalizar la gestión sucesoria',
    priceAnnual: 149,
    cta: { label: 'Probar ahora', type: 'primary' },
    footerText:
      'Incluye 2 usuarios, usuarios adicionales a 18€/mes. 2 clientes/mes y 1 expediente por cliente.',
  },
  {
    key: 'essential',
    name: 'Essential',
    description:
      'Para equipos pequeños que necesitan seguridad y eficiencia en sucesiones',
    priceAnnual: 299,
    isMostPopular: true,
    cta: { label: 'Probar ahora', type: 'primary' },
    footerText:
      'Incluye 5 usuarios, usuarios adicionales a 18€/mes. 6 clientes/mes y 3 expedientes por cliente.',
  },
  {
    key: 'pro',
    name: 'Pro',
    description:
      'Para despachos que gestionan herencias complejas y necesitan herramientas avanzadas',
    priceAnnual: 799,
    cta: { label: 'Contacta con ventas', type: 'sales' },
    footerText:
      'Incluye 8 usuarios, usuarios adicionales a 23€/mes. 12 clientes/mes y 5 expedientes por cliente.',
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    description:
      'Para grandes firmas con alto volumen de herencias y operaciones sucesorias. Escalable y a medida',
    priceAnnual: null,
    cta: { label: 'Contacta con ventas', type: 'sales' },
    footerText:
      'Para obtener un presupuesto contacta con nuestro equipo de ventas',
  },
];

export default function PricingCardsScreenshot({
  isAnnual,
  onToggleBilling,
  onOpenSales,
}: Props) {
  return (
    <section id="pricing" className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-10">
          <BillingToggle
            isAnnual={isAnnual}
            onToggle={onToggleBilling}
            discountPercent={DISCOUNT_PERCENT}
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-red-50/30 overflow-hidden shadow-sm">
          {/* Ajuste de grid para 4 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {plans.map((plan) => {
              const isEnterprise = plan.key === 'enterprise';
              
              // Cálculo de precio a mostrar
              let displayPrice: number | null = null;
              if (plan.priceAnnual !== null) {
                if (isAnnual) {
                  displayPrice = plan.priceAnnual;
                } else {
                  // Si estamos en mensual, calculamos el precio base (reverso del descuento)
                  // PrecioAnual = PrecioMensual * (1 - 0.10)
                  // PrecioMensual = PrecioAnual / 0.9
                  displayPrice = Math.round(plan.priceAnnual / (1 - DISCOUNT_PERCENT / 100));
                }
              }

              return (
                <div
                  key={plan.key}
                  className={cn(
                    'flex flex-col p-6 sm:p-8 relative min-h-[500px]',
                    plan.key === 'essential' ? 'bg-red-50/50' : 'bg-white',
                    isEnterprise ? 'bg-slate-50/30' : ''
                  )}
                >
                  {plan.isMostPopular && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-white border border-slate-200 text-slate-800 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                        Más popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mt-4 mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed min-h-[60px] max-w-[220px] mx-auto">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    {displayPrice !== null ? (
                      <>
                        <div className="flex items-baseline justify-center gap-0.5">
                          <span className="text-4xl font-extrabold text-slate-900">
                            {displayPrice} €
                          </span>
                          <span className="text-lg font-medium text-slate-500">
                            /mes
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 max-w-[140px] mx-auto leading-tight">
                          Precio sin IVA · facturado {isAnnual ? 'anualmente' : 'mensualmente'}
                        </p>
                      </>
                    ) : (
                      <div className="h-[74px]" /> // Spacer to align with prices
                    )}
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => {
                        onOpenSales();
                        trackPlanSelected(
                          plan.name,
                          displayPrice || 0,
                          isAnnual ? 'anual' : 'mensual',
                          { 
                            cta_type: plan.cta.type,
                            location: 'pricing_cards_screenshot'
                          }
                        );
                      }}
                      className={cn(
                        "w-full rounded-full py-3 px-4 font-semibold text-sm transition-all shadow-sm mb-6",
                        plan.cta.type === 'primary' 
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white" 
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      )}
                      data-plan-name={plan.name}
                      data-plan-price={displayPrice || 0}
                      data-plan-billing={isAnnual ? 'anual' : 'mensual'}
                      data-cta-type={plan.cta.type}
                    >
                      {plan.cta.label}
                    </button>
                    
                    <p className="text-[11px] text-slate-500 text-center leading-relaxed px-1">
                      {plan.footerText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
