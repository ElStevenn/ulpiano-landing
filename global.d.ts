// Extender Window para dataLayer de Google Tag Manager
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }

  interface WindowEventMap {
    activateTab: CustomEvent<string>;
  }
}

export {};
