# Guía Rápida - Sistema de Tracking GTM

## 🚀 Inicio Rápido (5 minutos)

### 1. Configurar GTM ID

Crea el archivo `.env.local` en la raíz del proyecto:

```bash
# Copia el ejemplo
cp .env.example .env.local

# Edita y agrega tu GTM ID
# .env.local
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 2. Verificar Instalación

```bash
npm run verify:tracking
```

Deberías ver:
```
✅ Sistema de tracking completamente configurado
```

### 3. Probar en Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 y la consola del navegador.

### 4. Verificar Eventos

Navega por la landing y verifica que veas logs como:

```javascript
[Tracking] page_view {
  event: 'page_view',
  page_path: '/',
  page_url: 'http://localhost:3000/',
  ts: 1707654321000
}
```

### 5. Acciones de Prueba

| Acción | Evento Esperado |
|--------|-----------------|
| Cargar página | `page_view` |
| Click en CTA del hero | `cta_click` |
| Scroll hasta 50% | `scroll_depth` con `percent: 50` |
| Ver sección de precios | `section_view` con `section: 'pricing'` |
| Click en plan | `plan_selected` |

## 🔍 Verificar dataLayer

En la consola del navegador:

```javascript
// Ver todos los eventos
window.dataLayer

// Ver último evento
window.dataLayer[window.dataLayer.length - 1]

// Filtrar eventos específicos
window.dataLayer.filter(e => e.event === 'cta_click')
```

## 📊 Configurar GTM (Producción)

### 1. Crear Variables en GTM

Variables → Nueva → Variable de Capa de Datos:

- `dlv - cta_name` → Nombre de variable: `cta_name`
- `dlv - plan_name` → Nombre de variable: `plan_name`
- `dlv - billing` → Nombre de variable: `billing`
- `dlv - percent` → Nombre de variable: `percent`
- `dlv - section` → Nombre de variable: `section`

### 2. Crear Triggers

Triggers → Nuevo → Evento personalizado:

- **CTA Click**: Nombre del evento = `cta_click`
- **Plan Selected**: Nombre del evento = `plan_selected`
- **Section View**: Nombre del evento = `section_view`
- **Scroll Depth**: Nombre del evento = `scroll_depth`
- **Page View**: Nombre del evento = `page_view`

### 3. Crear Tags (Ejemplo con GA4)

Tags → Nuevo → Google Analytics: GA4 Event:

**Tag: CTA Click**
- Tipo: Evento de GA4
- ID de medición: `G-XXXXXXXXXX`
- Nombre del evento: `cta_click`
- Parámetros del evento:
  - `cta_name`: `{{dlv - cta_name}}`
  - `location`: `{{dlv - location}}`
- Activador: `cta_click` (trigger creado antes)

Repite para otros eventos.

### 4. Probar en Preview

1. En GTM: Vista previa → Conectar
2. Navega por tu sitio
3. Verifica que los eventos se capturen correctamente
4. Publicar cambios

## 🎯 Eventos Principales

### page_view (Automático)
```javascript
{
  event: 'page_view',
  page_path: '/precios',
  ts: 1707654321000
}
```

### cta_click
```javascript
{
  event: 'cta_click',
  cta_name: 'solicitar_demo',
  location: 'hero',
  ts: 1707654321000
}
```

### plan_selected
```javascript
{
  event: 'plan_selected',
  plan_name: 'Esencial',
  price: 299,
  billing: 'anual',
  ts: 1707654321000
}
```

### scroll_depth (Automático)
```javascript
{
  event: 'scroll_depth',
  percent: 50,
  ts: 1707654321000
}
```

## 🛠️ Agregar Tracking a un Nuevo Componente

### Ejemplo: Botón CTA

```tsx
'use client';

import { trackCTA } from '@/lib/tracking';

export function MyButton() {
  return (
    <button
      onClick={() => trackCTA('mi_cta', 'mi_seccion')}
      data-cta-name="mi_cta"
      data-cta-location="mi_seccion"
    >
      Click Me
    </button>
  );
}
```

### Ejemplo: Selección de Plan

```tsx
'use client';

import { trackPlanSelected } from '@/lib/tracking';

export function PlanButton() {
  return (
    <button
      onClick={() => trackPlanSelected('Pro', 799, 'anual')}
      data-plan-name="Pro"
      data-plan-price={799}
      data-plan-billing="anual"
    >
      Seleccionar Pro
    </button>
  );
}
```

## 📈 Métricas Clave a Configurar en GA4

### Conversiones
1. **Lead Cualificado**
   - Evento: `plan_selected`
   - Condición: `cta_type = 'sales'`

2. **Demo Solicitada**
   - Evento: `cta_click`
   - Condición: `cta_name = 'solicitar_demo'`

### Engagement
1. **Usuario Comprometido**
   - Evento: `scroll_depth`
   - Condición: `percent >= 75`

2. **Interés en Precios**
   - Evento: `section_view`
   - Condición: `section = 'pricing'`

## 🐛 Troubleshooting

### No veo logs en consola

**Problema**: No aparecen logs `[Tracking]` en la consola.

**Solución**:
1. Verifica que estés en modo desarrollo: `npm run dev`
2. Verifica que `NEXT_PUBLIC_GTM_ID` esté configurado
3. Recarga la página con caché limpio (Cmd+Shift+R)

### window.dataLayer es undefined

**Problema**: `window.dataLayer` no existe.

**Solución**:
1. Verifica que `NEXT_PUBLIC_GTM_ID` esté en `.env.local`
2. Verifica que el GTM ID sea válido (formato: `GTM-XXXXXXX`)
3. Recarga la página

### Los eventos no llegan a GTM

**Problema**: Los eventos aparecen en consola pero no en GTM Preview.

**Solución**:
1. Verifica que el GTM ID sea correcto
2. Activa GTM Preview mode
3. Verifica que no haya bloqueadores de ads activos
4. Revisa la consola de errores del navegador

### Eventos duplicados

**Problema**: Los eventos se disparan múltiples veces.

**Solución**:
1. Verifica que no estés llamando a `track()` múltiples veces
2. Revisa que los componentes no se monten/desmonten repetidamente
3. Usa refs para prevenir duplicados (ver `useLandingTracking.ts`)

## 📚 Documentación Completa

- 📖 [Documentación Principal](./TRACKING.md)
- 💡 [Ejemplos de Implementación](./TRACKING_EXAMPLES.md)
- 📋 [Resumen Ejecutivo](./TRACKING_RESUMEN.md)

## 🆘 Soporte

Si tienes problemas:

1. Ejecuta `npm run verify:tracking` para verificar la instalación
2. Revisa la consola del navegador en busca de errores
3. Consulta la documentación completa en `docs/TRACKING.md`
4. Contacta al equipo de desarrollo

---

**¿Todo listo?** 🎉

Ahora puedes:
- ✅ Trackear interacciones de usuarios
- ✅ Medir conversiones
- ✅ Optimizar la landing basándote en datos
- ✅ Crear audiencias personalizadas
- ✅ Ejecutar campañas de remarketing

**¡Feliz tracking!** 📊
