/**
 * Tipos TypeScript para el sistema de tracking
 * Proporciona type-safety para eventos y parámetros
 */

// ============================================
// TIPOS BASE
// ============================================

export type BillingType = 'mensual' | 'anual';

export type CTALocation = 
  | 'hero'
  | 'pricing_hero'
  | 'cta_banner'
  | 'footer'
  | 'header'
  | 'pricing_cards_screenshot'
  | string; // Permitir valores custom

export type CTAType = 'free' | 'trial' | 'sales';

export type ScrollDepthPercent = 25 | 50 | 75 | 90;

// ============================================
// EVENTOS Y SUS PARÁMETROS
// ============================================

export interface PageViewParams {
  page_path: string;
  page_url?: string;
  ts?: number;
}

export interface CTAClickParams {
  cta_name: string;
  location: CTALocation;
  label?: string;
  variant?: string;
  campaign?: string;
  position?: string;
  [key: string]: unknown;
}

export interface PlanSelectedParams {
  plan_name: string;
  price: number;
  billing: BillingType;
  cta_type?: CTAType;
  location?: string;
  features_count?: number;
  previous_selection?: string;
  [key: string]: unknown;
}

export interface SectionViewParams {
  section: string;
  [key: string]: unknown;
}

export interface ScrollDepthParams {
  percent: ScrollDepthPercent;
}

export interface FormSubmitParams {
  form_type: string;
  location?: string;
  company_size?: string;
  role_type?: string;
  [key: string]: unknown;
}

export interface ModalParams {
  modal_type: string;
  source: string;
  action?: 'opened' | 'closed' | 'converted';
}

export interface VideoParams {
  video_id: string;
  video_title: string;
  percent_watched?: number;
  seconds_watched?: number;
  milestone?: number;
}

export interface FileDownloadParams {
  file_name: string;
  file_type: string;
  location?: string;
}

export interface SearchParams {
  query_length: number;
  location?: string;
  has_results?: boolean;
}

export interface TabChangeParams {
  section: string;
  from_tab: string;
  to_tab: string;
}

// ============================================
// UNION DE TODOS LOS EVENTOS
// ============================================

export type TrackingEvent =
  | { event: 'page_view'; params: PageViewParams }
  | { event: 'cta_click'; params: CTAClickParams }
  | { event: 'plan_selected'; params: PlanSelectedParams }
  | { event: 'section_view'; params: SectionViewParams }
  | { event: 'scroll_depth'; params: ScrollDepthParams }
  | { event: 'form_submit_start'; params: FormSubmitParams }
  | { event: 'form_submit_success'; params: FormSubmitParams }
  | { event: 'form_submit_error'; params: FormSubmitParams }
  | { event: 'modal_opened'; params: ModalParams }
  | { event: 'modal_closed'; params: ModalParams }
  | { event: 'modal_converted'; params: ModalParams }
  | { event: 'video_play'; params: VideoParams }
  | { event: 'video_pause'; params: VideoParams }
  | { event: 'video_progress'; params: VideoParams }
  | { event: 'video_completed'; params: VideoParams }
  | { event: 'file_download'; params: FileDownloadParams }
  | { event: 'search_performed'; params: SearchParams }
  | { event: 'tab_changed'; params: TabChangeParams };

// ============================================
// PAYLOAD COMPLETO DEL DATALAYER
// ============================================

export interface DataLayerPayload {
  event: string;
  ts: number;
  page_path: string;
  page_url: string;
  [key: string]: unknown;
}

// ============================================
// CONFIGURACIÓN DE TRACKING
// ============================================

export interface TrackingConfig {
  enabled: boolean;
  debug: boolean;
  gtmId?: string;
}
