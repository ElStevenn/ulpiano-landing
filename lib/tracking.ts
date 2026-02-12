/**
 * Sistema de tracking con GTM y dataLayer
 * Compatible con SSR/SSG de Next.js
 */

import type { BillingType, CTALocation } from './tracking.types';

/**
 * Inicializa window.dataLayer si no existe
 * Debe llamarse en el cliente antes de usar track()
 */
export function initDataLayer(): void {
  if (typeof window === 'undefined') return;
  
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
}

/**
 * Envía un evento al dataLayer de GTM
 * @param eventName - Nombre del evento (ej: "cta_click", "plan_selected")
 * @param params - Parámetros adicionales del evento
 */
export function track(
  eventName: string,
  params?: Record<string, unknown>
): void {
  // Guard SSR
  if (typeof window === 'undefined') return;
  
  // Asegurar que dataLayer existe
  if (!window.dataLayer) {
    console.warn('[Tracking] dataLayer no inicializado. Llamar initDataLayer() primero.');
    return;
  }

  // Construir payload
  const payload = {
    event: eventName,
    ...params,
    ts: Date.now(),
    page_path: window.location.pathname,
    page_url: window.location.href,
  };

  // Push al dataLayer
  window.dataLayer.push(payload);

  // Log en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.debug('[Tracking]', eventName, payload);
  }
}

/**
 * Helper para tracking de CTAs
 * @param ctaName - Identificador del CTA (ej: "solicitar_demo", "empezar_gratis")
 * @param location - Ubicación del CTA (ej: "hero", "pricing", "footer")
 * @param additionalParams - Parámetros adicionales opcionales
 */
export function trackCTA(
  ctaName: string,
  location: CTALocation,
  additionalParams?: Record<string, unknown>
): void {
  track('cta_click', {
    cta_name: ctaName,
    location,
    ...additionalParams,
  });
}

/**
 * Helper para tracking de selección de planes
 * @param planName - Nombre del plan (ej: "Esencial", "Profesional")
 * @param price - Precio del plan (numérico)
 * @param billing - Tipo de facturación ("mensual" | "anual")
 * @param additionalParams - Parámetros adicionales opcionales
 */
export function trackPlanSelected(
  planName: string,
  price: number,
  billing: BillingType,
  additionalParams?: Record<string, unknown>
): void {
  track('plan_selected', {
    plan_name: planName,
    price,
    billing,
    ...additionalParams,
  });
}

/**
 * Helper para tracking de vistas de sección
 * @param sectionName - Nombre de la sección (ej: "pricing", "features")
 * @param additionalParams - Parámetros adicionales opcionales
 */
export function trackSectionView(
  sectionName: string,
  additionalParams?: Record<string, unknown>
): void {
  track('section_view', {
    section: sectionName,
    ...additionalParams,
  });
}

/**
 * Helper para tracking de scroll depth
 * @param percent - Porcentaje de scroll (25, 50, 75, 90)
 */
export function trackScrollDepth(percent: number): void {
  track('scroll_depth', {
    percent,
  });
}
