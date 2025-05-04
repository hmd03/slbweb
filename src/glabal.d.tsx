export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: any[]) => void;

    wcs?: {
      inflow: () => void;
      trans: (conv: { type: string }) => void;
    };
    wcs_add?: Record<string, string>;
  }

  function wcs_do(): void;
}
