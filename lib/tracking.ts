/**
 * Tracking system using GTM dataLayer and Google Consent Mode v2.
 * Compatible with Next.js SSR/SSG.
 */

import type { BillingType, CTALocation } from './tracking.types';

const CONSENT_STORAGE_KEY = 'ulpiano-cookie-consent';

/**
 * Returns true only if the user has explicitly accepted all cookies.
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted';
  } catch {
    return false;
  }
}

/**
 * Updates Google Consent Mode v2 to fully granted.
 * Call this when the user accepts all cookies.
 */
export function updateConsentGranted(): void {
  if (typeof window === 'undefined') return;
  window.gtag?.('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
}

/**
 * Updates Google Consent Mode v2 to fully denied.
 * Call this when the user rejects non-essential cookies.
 */
export function updateConsentDenied(): void {
  if (typeof window === 'undefined') return;
  window.gtag?.('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

/**
 * Initializes window.dataLayer if it does not already exist.
 * Must be called on the client before using track().
 */
export function initDataLayer(): void {
  if (typeof window === 'undefined') return;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }
}

/**
 * Pushes an event to the GTM dataLayer.
 * Events are silently dropped if the user has not given analytics consent.
 * @param eventName - Event name (e.g. "cta_click", "plan_selected")
 * @param params - Additional event parameters
 */
export function track(
  eventName: string,
  params?: Record<string, unknown>
): void {
  // Guard SSR
  if (typeof window === 'undefined') return;

  // Block all tracking until the user has given explicit consent
  if (!hasAnalyticsConsent()) return;

  // Ensure dataLayer exists
  if (!window.dataLayer) {
    console.warn('[Tracking] dataLayer not initialized. Call initDataLayer() first.');
    return;
  }

  const payload = {
    event: eventName,
    ...params,
    ts: Date.now(),
    page_path: window.location.pathname,
    page_url: window.location.href,
  };

  window.dataLayer.push(payload);

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
