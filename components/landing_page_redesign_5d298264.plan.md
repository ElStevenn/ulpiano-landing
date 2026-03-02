---
name: Landing Page Redesign
overview: Rediseñar la landing page principal de Ulpiano adoptando un estilo Apple con scroll-jacking, revelado progresivo y un hero híbrido (oscuro a claro) manteniendo los textos para SEO.
todos:
  - id: hero-animations
    content: Implementar scroll-linked animations en el Hero (transición oscuro a claro y revelado de dashboard)
    status: completed
  - id: services-sticky
    content: Rediseñar ServicesUlpiano para usar un layout sticky con revelado progresivo
    status: completed
  - id: segments-redesign
    content: Actualizar SegmentsProfessionals a tema claro con tabs estilo iOS
    status: completed
  - id: benefits-minimal
    content: Refactorizar KeyBenefits y UseCases con diseño minimalista y mucho espacio en blanco
    status: completed
  - id: css-tweaks
    content: Ajustar tipografía general y utilidades CSS para estilo Apple
    status: completed
isProject: false
---

# Plan de Rediseño de Landing Page (Estilo Apple / Híbrido)

## 1. Actualización del Hero (`app/page.tsx` y `components/hero/*`)

- **Estética Híbrida (Oscuro a Claro):** Mantener el hero inicial oscuro (`#030712`) pero implementar una transición basada en scroll hacia un tema claro para el resto de la página.
- **Efectos visuales:** Mejorar `HeroBackground.tsx` con animaciones más sutiles y pulidas.
- **Scroll-jacking y Parallax:** Utilizar Framer Motion (`useScroll`, `useTransform`) en el Hero para crear un efecto donde el dashboard se revela o hace zoom a medida que el usuario hace scroll hacia abajo.
- **Tipografía y Espaciado:** Aumentar el tamaño de la tipografía principal, usar tracking más ajustado (estilo Apple) y mayor espacio en blanco.

## 2. Rediseño de Secciones (`app/page.tsx` y `components/sections/*`)

- **Revelado Progresivo:** Envolver las secciones clave (`ServicesUlpiano`, `SegmentsProfessionals`, `KeyBenefits`, `UseCases`, `TimeSavingFeatures`) con componentes que usen `whileInView` de Framer Motion para que los elementos aparezcan suavemente al hacer scroll (fade in + translate Y).
- **ServicesUlpiano (`components/sections/ServicesUlpiano.tsx`):**
  - Cambiar el diseño actual de grid a un layout de "scroll pegajoso" (sticky scroll) donde el texto cambia en un lado mientras la imagen/visualización cambia en el otro.
  - Simplificar las tarjetas visualmente (menos bordes, más sombras suaves y desenfoque de fondo).
- **SegmentsProfessionals (`components/sections/SegmentsProfessionals.tsx`):**
  - Eliminar el fondo azul oscuro estático. Hacer que fluya naturalmente con el tema claro de la página.
  - Mejorar el componente de pestañas (Tabs) para que parezca un selector estilo iOS (píldora con fondo gris claro y selector animado).
- **KeyBenefits & UseCases (`app/page.tsx`):**
  - Convertir las tarjetas actuales en paneles grandes con mucho padding, iconos minimalistas y tipografía elegante.
  - Usar fondos sutiles (gris muy claro o blanco puro con sombra muy difusa).

## 3. Animaciones y Scroll (`lib/hooks/useScrollProgress.ts` o similar)

- Implementar hooks de Framer Motion para vincular la opacidad, escala y posición de los elementos directamente a la posición del scroll.
- Añadir efectos de "parallax" sutiles a las imágenes de producto.

## 4. CSS y Tailwind (`app/globals.css`, `tailwind.config.js`)

- Asegurar que las variables de color soporten la transición fluido de oscuro a claro.
- Añadir utilidades para desenfoque de fondo (backdrop-blur) más intensos estilo macOS/iOS.

## Resumen de Archivos a Modificar

- `app/page.tsx` (Estructura principal, Hero, KeyBenefits, UseCases)
- `components/hero/InheritanceVisualization.tsx` (Animaciones atadas al scroll)
- `components/hero/HeroBackground.tsx` (Ajustes de color/partículas)
- `components/sections/ServicesUlpiano.tsx` (Layout sticky)
- `components/sections/SegmentsProfessionals.tsx` (Estilo claro, tabs iOS)
- `app/globals.css` (Ajustes tipográficos y de transición de tema)

