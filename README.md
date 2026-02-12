## Desarrollo

1. Instalar dependencias: `npm install`
2. Configurar variables de entorno (ver [Configuración](#configuración))
3. Ejecutar en local: `npm run dev`

## Configuración

### Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```bash
# Google Tag Manager (Requerido para tracking)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Consulta `.env.example` para más detalles.

### Sistema de Tracking

El proyecto incluye un sistema completo de tracking con GTM y dataLayer. Para más información:

- 📖 [Documentación de Tracking](./docs/TRACKING.md)
- 💡 [Ejemplos de Implementación](./docs/TRACKING_EXAMPLES.md)
- 📋 [Resumen Ejecutivo](./docs/TRACKING_RESUMEN.md)

### Página de precios (ES)

- Ruta: `app/precios/page.tsx`
- Configuración principal: `pricing.config.ts`
  - `currency`, `annualDiscountPercent`, `showVatNote`
  - `whatsappUrl`, `contactSalesEndpoint`
  - `plans[planKey].monthlyPrice` (sin IVA), `tagline`, `isMostPopular`
- Componentes: `components/sections/`
  - `PricingHero`, `PlanGrid`, `ContactSalesModal`, `PricingFAQ`
- Endpoint placeholder: `app/api/contact-sales/route.ts`

Editar precios y descuento:

```ts
// pricing.config.ts
export const pricingConfig = {
  annualDiscountPercent: 10,
  plans: {
    essential: { monthlyPrice: 230, /* ... */ },
  }
}
```

