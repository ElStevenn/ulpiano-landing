export type PlanKey = 'freemium' | 'basico' | 'esencial';

export type FeatureRow = {
  section?: string | null;
  featureName: string;
  freemium?: boolean | string | null;
  basico?: boolean | string | null;
  esencial?: boolean | string | null;
};

export type PricingTable = FeatureRow[];

type PlanConfig = {
  key: PlanKey;
  name: string;
  tagline: string;
  monthlyPrice: number; // sin IVA
  ctaType: 'free' | 'trial' | 'sales';
  isMostPopular?: boolean;
  notes?: string;
  features?: string[];
};

export type PricingConfig = {
  currency: string; // EUR, USD
  showVatNote: boolean; // mostrar "Precios sin IVA"
  annualDiscountPercent: number; // 10 => -10%
  whatsappUrl: string;
  contactSalesEndpoint: string; // /api/contact-sales
  logos: { src: string; alt: string }[];
  plans: Record<PlanKey, PlanConfig>;
  featuresJsonPath: string;
};

export const pricingConfig: PricingConfig = {
  currency: 'EUR',
  showVatNote: true,
  annualDiscountPercent: 0, // Sin descuento anual según los nuevos planes
  whatsappUrl: 'https://wa.me/34600000000?text=Hola%20Ulpiano',
  contactSalesEndpoint: '/api/contact-sales',
  logos: [
    { src: '/logo.svg', alt: 'Cliente 1' },
    { src: '/logo.svg', alt: 'Cliente 2' },
    { src: '/logo.svg', alt: 'Cliente 3' },
    { src: '/logo.svg', alt: 'Cliente 4' },
    { src: '/logo.svg', alt: 'Cliente 5' },
  ],
  plans: {
    freemium: {
      key: 'freemium',
      name: 'Freemium',
      tagline: 'Ideal para probar ulpiano.es sin compromiso.',
      monthlyPrice: 0,
      ctaType: 'free',
      notes: 'Gratis para siempre',
      features: [
        '1 usuario',
        '1 expediente al año',
        'Acceso limitado a funcionalidades clave',
        'Sin soporte técnico',
      ],
    },
    basico: {
      key: 'basico',
      name: 'Básico',
      tagline:
        'Pensado para pequeños despachos que gestionan expedientes esporádicos.',
      monthlyPrice: 99,
      ctaType: 'trial',
      isMostPopular: true,
      notes: '99 €/mes',
      features: [
        '2 usuarios',
        'Hasta 3 expedientes mensuales',
        '500 MB de almacenamiento',
        'Soporte por email y chat',
        'Acceso al módulo legal',
        'Marco legal incluido (1 jurisdicción)',
        'Plantillas legales básicas',
        'Generador de testamento y poderes',
      ],
    },
    esencial: {
      key: 'esencial',
      name: 'Esencial',
      tagline:
        'Para despachos con actividad recurrente en herencias y planificación patrimonial.',
      monthlyPrice: 149,
      ctaType: 'trial',
      notes: '149 €/mes',
      features: [
        '5 usuarios',
        'Hasta 10 expedientes mensuales',
        'Almacenamiento ampliado',
        'Soporte por email y chat',
        'Portal del cliente',
        'Marco legal ampliado (hasta 3 jurisdicciones)',
        'Acceso a Ulpiano AI (motor jurídico de IA básica)',
        'Comparación de escenarios sucesorios',
        'Creación de escenarios sucesorios en un clic',
        'Notificaciones de plazos',
        'Simulación del Impuesto de Sucesiones – Modelo 650',
        'Reducciones fiscales (actividades económicas, bonificaciones, herencias familiares)',
      ],
    },
  },
  featuresJsonPath: '/features_ulpiano.json',
};

export function formatPriceEUR(value: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function getMonthlyOrAnnualPrice(
  monthlyPrice: number,
  isAnnual: boolean,
  annualDiscountPercent: number
): { amount: number; suffix: string; rawMonthly: number } {
  if (isAnnual) {
    const discountedMonthly = Math.round(
      monthlyPrice * (1 - annualDiscountPercent / 100)
    );
    const annualTotal = discountedMonthly * 12;
    return {
      amount: annualTotal,
      suffix: '/año',
      rawMonthly: discountedMonthly,
    };
  }
  return { amount: monthlyPrice, suffix: '/mes', rawMonthly: monthlyPrice };
}
