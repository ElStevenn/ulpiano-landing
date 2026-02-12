# Checklist de Implementación - Sistema de Tracking GTM

## ✅ Pre-implementación

- [x] Sistema de tracking implementado en Next.js
- [x] TypeScript configurado con tipos
- [x] Documentación completa creada
- [x] Ejemplos de uso documentados
- [x] Script de verificación creado

## 🔧 Configuración Inicial

### Desarrollo

- [ ] Crear archivo `.env.local`
- [ ] Agregar `NEXT_PUBLIC_GTM_ID` con ID de desarrollo/staging
- [ ] Ejecutar `npm run verify:tracking`
- [ ] Verificar que todos los checks pasen ✅

### Testing Local

- [ ] Ejecutar `npm run dev`
- [ ] Abrir http://localhost:3000
- [ ] Abrir consola del navegador
- [ ] Verificar logs `[Tracking]` aparecen
- [ ] Verificar `window.dataLayer` existe
- [ ] Navegar por la landing y verificar eventos

## 📊 Configuración de GTM (Staging/Producción)

### Contenedor de GTM

- [ ] Crear cuenta de GTM (si no existe)
- [ ] Crear contenedor para el proyecto
- [ ] Obtener GTM ID (formato: `GTM-XXXXXXX`)
- [ ] Configurar permisos de equipo

### Variables de Capa de Datos

Crear las siguientes variables en GTM:

- [ ] `dlv - cta_name` (tipo: Variable de Capa de Datos)
- [ ] `dlv - cta_location` (tipo: Variable de Capa de Datos)
- [ ] `dlv - plan_name` (tipo: Variable de Capa de Datos)
- [ ] `dlv - price` (tipo: Variable de Capa de Datos)
- [ ] `dlv - billing` (tipo: Variable de Capa de Datos)
- [ ] `dlv - percent` (tipo: Variable de Capa de Datos)
- [ ] `dlv - section` (tipo: Variable de Capa de Datos)
- [ ] `dlv - page_path` (tipo: Variable de Capa de Datos)

### Triggers (Activadores)

Crear triggers de eventos personalizados:

- [ ] `trigger - page_view` (evento: `page_view`)
- [ ] `trigger - cta_click` (evento: `cta_click`)
- [ ] `trigger - plan_selected` (evento: `plan_selected`)
- [ ] `trigger - section_view` (evento: `section_view`)
- [ ] `trigger - scroll_depth` (evento: `scroll_depth`)

### Tags Básicos

#### Google Analytics 4 (si aplica)

- [ ] Tag: GA4 Configuration
  - ID de medición: `G-XXXXXXXXXX`
  - Activador: All Pages

- [ ] Tag: GA4 Event - Page View
  - Nombre del evento: `page_view`
  - Parámetros: `page_path`
  - Activador: `trigger - page_view`

- [ ] Tag: GA4 Event - CTA Click
  - Nombre del evento: `cta_click`
  - Parámetros: `cta_name`, `location`
  - Activador: `trigger - cta_click`

- [ ] Tag: GA4 Event - Plan Selected
  - Nombre del evento: `plan_selected`
  - Parámetros: `plan_name`, `price`, `billing`
  - Activador: `trigger - plan_selected`

- [ ] Tag: GA4 Event - Section View
  - Nombre del evento: `section_view`
  - Parámetros: `section`
  - Activador: `trigger - section_view`

- [ ] Tag: GA4 Event - Scroll Depth
  - Nombre del evento: `scroll_depth`
  - Parámetros: `percent`
  - Activador: `trigger - scroll_depth`

#### Facebook Pixel (si aplica)

- [ ] Tag: Facebook Pixel - Base Code
- [ ] Tag: Facebook Pixel - PageView
- [ ] Tag: Facebook Pixel - Lead (plan_selected con cta_type='sales')
- [ ] Tag: Facebook Pixel - InitiateCheckout (plan_selected)

#### LinkedIn Insight Tag (si aplica)

- [ ] Tag: LinkedIn Insight - Base Code
- [ ] Tag: LinkedIn Conversion - Lead (plan_selected)

### Testing en Preview

- [ ] Activar modo Preview en GTM
- [ ] Conectar con el sitio de staging
- [ ] Verificar que todos los tags se disparen correctamente
- [ ] Verificar que las variables capturen los valores correctos
- [ ] Probar todos los eventos principales:
  - [ ] page_view al cargar página
  - [ ] cta_click al hacer clic en CTA
  - [ ] plan_selected al seleccionar plan
  - [ ] section_view al ver sección de precios
  - [ ] scroll_depth al hacer scroll

### Publicación

- [ ] Revisar todos los cambios en GTM
- [ ] Crear versión con descripción clara
- [ ] Publicar contenedor
- [ ] Verificar en producción que todo funciona

## 🚀 Despliegue a Producción

### Variables de Entorno

- [ ] Configurar `NEXT_PUBLIC_GTM_ID` en Vercel/plataforma de hosting
- [ ] Verificar que el ID sea el de producción (no staging)
- [ ] Hacer deploy

### Verificación Post-Deploy

- [ ] Abrir sitio en producción
- [ ] Verificar que GTM se carga correctamente
- [ ] Abrir GTM Preview y conectar a producción
- [ ] Verificar que los eventos se disparen
- [ ] Verificar en GA4 Real-Time que los eventos llegan
- [ ] Esperar 24-48h y verificar en reportes de GA4

## 📈 Configuración de Analytics

### Google Analytics 4

#### Conversiones

Configurar las siguientes conversiones en GA4:

- [ ] **Lead Cualificado**
  - Evento: `plan_selected`
  - Condición: `cta_type` = `sales`

- [ ] **Demo Solicitada**
  - Evento: `cta_click`
  - Condición: `cta_name` = `solicitar_demo`

- [ ] **Plan Trial Iniciado**
  - Evento: `plan_selected`
  - Condición: `cta_type` = `trial`

#### Audiencias

Crear audiencias para remarketing:

- [ ] **Usuarios que vieron precios**
  - Condición: `section_view` con `section` = `pricing`
  - Duración: 30 días

- [ ] **Usuarios comprometidos**
  - Condición: `scroll_depth` con `percent` >= 75
  - Duración: 30 días

- [ ] **Usuarios que seleccionaron plan**
  - Condición: `plan_selected` (cualquier plan)
  - Duración: 90 días

- [ ] **Usuarios que no completaron**
  - Condición: `plan_selected` PERO NO completó formulario
  - Duración: 30 días

#### Informes Personalizados

- [ ] Crear informe de CTAs más efectivos
- [ ] Crear informe de planes más seleccionados
- [ ] Crear informe de funnel de conversión
- [ ] Crear informe de engagement por página

### Facebook Ads (si aplica)

- [ ] Verificar que el pixel se instale correctamente
- [ ] Crear audiencias personalizadas basadas en eventos
- [ ] Configurar conversiones en Business Manager
- [ ] Crear campañas de remarketing

### LinkedIn Ads (si aplica)

- [ ] Verificar instalación del Insight Tag
- [ ] Crear audiencias matched
- [ ] Configurar conversiones
- [ ] Crear campañas de remarketing

## 🧪 Testing y QA

### Testing Manual

- [ ] Probar en Chrome
- [ ] Probar en Firefox
- [ ] Probar en Safari
- [ ] Probar en Edge
- [ ] Probar en móvil (iOS)
- [ ] Probar en móvil (Android)

### Escenarios de Prueba

- [ ] **Flujo completo de conversión**
  1. Entrar a la landing
  2. Scroll hasta precios
  3. Seleccionar plan
  4. Verificar que todos los eventos se disparen

- [ ] **Navegación entre páginas**
  1. Home → Precios → Producto → Home
  2. Verificar `page_view` en cada cambio

- [ ] **CTAs en diferentes ubicaciones**
  1. Click en CTA del hero
  2. Click en CTA del pricing hero
  3. Click en CTA del footer
  4. Verificar que `location` sea correcto

- [ ] **Scroll depth**
  1. Hacer scroll lento hasta el final
  2. Verificar eventos en 25%, 50%, 75%, 90%

### Testing con Bloqueadores

- [ ] Probar con AdBlock activado
- [ ] Probar con Privacy Badger
- [ ] Probar con uBlock Origin
- [ ] Verificar comportamiento graceful (no errores en consola)

## 📊 Monitoreo y Mantenimiento

### Semana 1

- [ ] Revisar diariamente que los eventos se capturen
- [ ] Verificar volumen de eventos en GA4
- [ ] Revisar errores en GTM Debug
- [ ] Ajustar configuración si es necesario

### Mes 1

- [ ] Revisar semanalmente reportes de conversión
- [ ] Analizar qué CTAs funcionan mejor
- [ ] Analizar qué planes se seleccionan más
- [ ] Identificar puntos de abandono

### Trimestral

- [ ] Revisar y actualizar audiencias
- [ ] Optimizar tags y triggers
- [ ] Agregar nuevos eventos si es necesario
- [ ] Revisar documentación y actualizarla

## 📝 Documentación

### Documentación Interna

- [ ] Documentar el GTM ID usado
- [ ] Documentar estructura de eventos
- [ ] Documentar convenciones de nombres
- [ ] Crear guía para el equipo de marketing

### Documentación para Equipo

- [ ] Compartir `docs/TRACKING_QUICKSTART.md` con el equipo
- [ ] Capacitar al equipo en cómo agregar tracking
- [ ] Documentar proceso de QA de tracking
- [ ] Crear canal de comunicación para dudas

## 🎯 Objetivos y KPIs

### Definir Objetivos

- [ ] Definir objetivo de conversión principal
- [ ] Definir objetivos secundarios
- [ ] Establecer benchmarks iniciales
- [ ] Configurar alertas en GA4

### KPIs a Monitorear

- [ ] Tasa de conversión (plan_selected / page_view)
- [ ] CTR de CTAs principales
- [ ] Engagement rate (scroll_depth >= 75%)
- [ ] Tasa de rebote
- [ ] Tiempo promedio en página
- [ ] Flujo de navegación

## ✅ Sign-off Final

### Checklist de Aprobación

- [ ] Todos los eventos se disparan correctamente
- [ ] GTM está publicado en producción
- [ ] GA4 recibe datos correctamente
- [ ] No hay errores en consola
- [ ] Documentación está completa
- [ ] Equipo está capacitado
- [ ] Monitoreo está configurado

### Aprobaciones

- [ ] Aprobado por: Desarrollo
- [ ] Aprobado por: Marketing
- [ ] Aprobado por: Product Owner
- [ ] Fecha de go-live: ___________

---

## 📚 Referencias

- [Documentación Principal](./TRACKING.md)
- [Guía Rápida](./TRACKING_QUICKSTART.md)
- [Ejemplos de Implementación](./TRACKING_EXAMPLES.md)
- [Resumen Ejecutivo](./TRACKING_RESUMEN.md)

---

**Última actualización**: 11 de febrero de 2026
