# Sistema de Tracking con GTM y dataLayer

Este documento describe la implementación del sistema de tracking con Google Tag Manager (GTM) en la landing de Ulpiano.

## 📋 Tabla de Contenidos

- [Configuración](#configuración)
- [Arquitectura](#arquitectura)
- [Eventos Implementados](#eventos-implementados)
- [Uso](#uso)
- [Ejemplos](#ejemplos)
- [Testing](#testing)

## ⚙️ Configuración

### 1. Variable de Entorno

Agrega tu ID de GTM en el archivo `.env.local`:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 2. Verificación

El sistema está configurado para:
- ✅ Funcionar en SSR sin errores
- ✅ No duplicar eventos
- ✅ Loggear eventos en desarrollo (consola)
- ✅ Trackear automáticamente cambios de ruta

## 🏗️ Arquitectura

### Componentes Principales

```
├── app/layout.tsx                          # GTM Script + AnalyticsProvider
├── lib/tracking.ts                         # Funciones de tracking
├── lib/hooks/useLandingTracking.ts        # Hook para tracking automático
└── components/site/AnalyticsProvider.tsx  # Proveedor de analytics
```

### Flujo de Inicialización

1. **GTM Script** se carga en `app/layout.tsx` con `strategy="afterInteractive"`
2. **AnalyticsProvider** inicializa `window.dataLayer` al montar
3. **AnalyticsProvider** trackea `page_view` en cada cambio de ruta
4. **useLandingTracking** activa tracking automático de secciones y scroll

## 📊 Eventos Implementados

### 1. Page View (Automático)

Se dispara automáticamente en cada cambio de ruta.

```typescript
{
  event: 'page_view',
  page_path: '/precios',
  page_url: 'https://ulpiano.es/precios',
  ts: 1707654321000
}
```

### 2. CTA Click

Se dispara cuando el usuario hace clic en un CTA.

```typescript
{
  event: 'cta_click',
  cta_name: 'solicitar_demo',
  location: 'hero',
  page_path: '/',
  page_url: 'https://ulpiano.es/',
  ts: 1707654321000
}
```

**Ubicaciones implementadas:**
- `hero` - CTAs en hero principal
- `pricing_hero` - CTAs en hero de precios
- `cta_banner` - CTAs en banners de conversión
- `footer` - CTAs en footer

### 3. Plan Selected

Se dispara cuando el usuario selecciona un plan.

```typescript
{
  event: 'plan_selected',
  plan_name: 'Esencial',
  price: 299,
  billing: 'anual',
  cta_type: 'trial',
  location: 'pricing_cards_screenshot',
  page_path: '/precios',
  page_url: 'https://ulpiano.es/precios',
  ts: 1707654321000
}
```

### 4. Section View (Automático)

Se dispara cuando una sección entra en el viewport (30% visible).

```typescript
{
  event: 'section_view',
  section: 'pricing',
  page_path: '/precios',
  page_url: 'https://ulpiano.es/precios',
  ts: 1707654321000
}
```

**Secciones trackeadas:**
- `pricing` - Sección de precios
- `pricing_hero` - Hero de precios

### 5. Scroll Depth (Automático)

Se dispara cuando el usuario alcanza ciertos porcentajes de scroll.

```typescript
{
  event: 'scroll_depth',
  percent: 50,
  page_path: '/precios',
  page_url: 'https://ulpiano.es/precios',
  ts: 1707654321000
}
```

**Thresholds:** 25%, 50%, 75%, 90%

## 🔧 Uso

### Funciones Principales

#### `track(eventName, params)`

Función genérica para enviar eventos al dataLayer.

```typescript
import { track } from '@/lib/tracking';

track('custom_event', {
  custom_param: 'value',
  another_param: 123
});
```

#### `trackCTA(ctaName, location, additionalParams?)`

Helper para trackear clics en CTAs.

```typescript
import { trackCTA } from '@/lib/tracking';

<button onClick={() => trackCTA('solicitar_demo', 'hero')}>
  Solicitar Demo
</button>
```

#### `trackPlanSelected(planName, price, billing, additionalParams?)`

Helper para trackear selección de planes.

```typescript
import { trackPlanSelected } from '@/lib/tracking';

<button onClick={() => trackPlanSelected('Esencial', 299, 'anual')}>
  Seleccionar Plan
</button>
```

#### `trackSectionView(sectionName, additionalParams?)`

Helper para trackear vistas de secciones.

```typescript
import { trackSectionView } from '@/lib/tracking';

useEffect(() => {
  trackSectionView('features');
}, []);
```

#### `trackScrollDepth(percent)`

Helper para trackear profundidad de scroll.

```typescript
import { trackScrollDepth } from '@/lib/tracking';

// Normalmente se usa dentro de useLandingTracking
trackScrollDepth(50);
```

### Hook: useLandingTracking

Activa tracking automático de:
- Vista de sección de precios (IntersectionObserver)
- Profundidad de scroll (25%, 50%, 75%, 90%)

```typescript
import { useLandingTracking } from '@/lib/hooks/useLandingTracking';

export default function PreciosPage() {
  useLandingTracking(); // Activa tracking automático
  
  return (
    <div>
      <section id="pricing">
        {/* El IntersectionObserver detectará esta sección */}
      </section>
    </div>
  );
}
```

**⚠️ Importante:** La sección de precios debe tener `id="pricing"` para que el IntersectionObserver funcione.

## 💡 Ejemplos

### Ejemplo 1: Agregar Tracking a un Botón CTA

```tsx
import { trackCTA } from '@/lib/tracking';

<button
  onClick={() => trackCTA('contactar_ventas', 'footer')}
  data-cta-name="contactar_ventas"
  data-cta-location="footer"
>
  Contactar Ventas
</button>
```

### Ejemplo 2: Agregar Tracking a una Card de Plan

```tsx
import { trackPlanSelected } from '@/lib/tracking';

<button
  onClick={() => {
    trackPlanSelected('Pro', 799, 'anual', { 
      cta_type: 'sales',
      location: 'pricing_table' 
    });
  }}
  data-plan-name="Pro"
  data-plan-price={799}
  data-plan-billing="anual"
>
  Seleccionar Plan Pro
</button>
```

### Ejemplo 3: Trackear Vista de Sección Custom

```tsx
'use client';

import { useEffect } from 'react';
import { trackSectionView } from '@/lib/tracking';

export default function FeaturesSection() {
  useEffect(() => {
    trackSectionView('features', { 
      feature_count: 12 
    });
  }, []);

  return (
    <section id="features">
      {/* Contenido */}
    </section>
  );
}
```

### Ejemplo 4: Activar Tracking Automático en una Página

```tsx
'use client';

import { useLandingTracking } from '@/lib/hooks/useLandingTracking';

export default function HomePage() {
  // Activa tracking de scroll_depth y pricing_view
  useLandingTracking();

  return (
    <div>
      <section id="hero">Hero</section>
      <section id="pricing">Pricing</section>
    </div>
  );
}
```

## 🧪 Testing

### Verificar en Desarrollo

1. Abre la consola del navegador
2. Los eventos se loggean automáticamente en desarrollo:

```
[Tracking] cta_click {
  event: 'cta_click',
  cta_name: 'solicitar_demo',
  location: 'hero',
  ts: 1707654321000,
  page_path: '/',
  page_url: 'http://localhost:3000/'
}
```

### Verificar dataLayer

En la consola del navegador:

```javascript
// Ver todos los eventos
console.log(window.dataLayer);

// Ver último evento
console.log(window.dataLayer[window.dataLayer.length - 1]);
```

### Verificar GTM en Producción

1. Instala la extensión [Google Tag Assistant](https://tagassistant.google.com/)
2. Navega por tu sitio
3. Verifica que los eventos se disparen correctamente

## 🔒 Privacidad y Seguridad

### ✅ Buenas Prácticas Implementadas

- **No se trackean datos personales** (email, teléfono, nombre)
- **Guards SSR** en todas las funciones de tracking
- **No se duplican eventos** (refs y flags de control)
- **Throttling en scroll** (máximo cada 200ms)
- **Cleanup de observers** al desmontar componentes

### ⚠️ Datos que NO se deben trackear

```typescript
// ❌ MAL - No trackear datos personales
trackCTA('contacto', 'form', {
  email: 'usuario@ejemplo.com',  // ❌
  phone: '+34 600 000 000',      // ❌
  name: 'Juan Pérez'             // ❌
});

// ✅ BIEN - Solo metadata
trackCTA('contacto', 'form', {
  form_type: 'contact',
  source: 'landing'
});
```

## 📈 Métricas Recomendadas en GTM

### Eventos a Configurar en GTM

1. **Conversiones:**
   - `plan_selected` con `cta_type = 'sales'` → Lead cualificado
   - `cta_click` con `cta_name = 'solicitar_demo'` → Demo solicitada

2. **Engagement:**
   - `scroll_depth` con `percent >= 75` → Usuario comprometido
   - `section_view` con `section = 'pricing'` → Interés en precios

3. **Navegación:**
   - `page_view` → Páginas vistas
   - Tiempo en página (calculado entre page_views)

### Variables Personalizadas Sugeridas

- `{{dlv - cta_name}}` → Nombre del CTA
- `{{dlv - plan_name}}` → Nombre del plan
- `{{dlv - billing}}` → Tipo de facturación
- `{{dlv - percent}}` → Porcentaje de scroll

## 🚀 Próximos Pasos

Para extender el sistema de tracking:

1. **Agregar más eventos:**
   - Form submissions
   - Video plays
   - Download clicks

2. **Mejorar tracking de planes:**
   - Comparación de planes
   - Cambio de billing (mensual/anual)
   - Filtros aplicados

3. **A/B Testing:**
   - Variantes de CTAs
   - Diferentes copy de planes
   - Posicionamiento de elementos

## 📞 Soporte

Si tienes dudas sobre el sistema de tracking, contacta con el equipo de desarrollo.
