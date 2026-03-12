// Extender Window para dataLayer y gtag de Google Tag Manager
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }

  interface WindowEventMap {
    activateTab: CustomEvent<string>;
  }
}

export {};
