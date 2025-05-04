export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: any[]) => void;

    wcs?: {
      inflow: () => void;
      do: () => void;
      trans: (conv: { type: string }) => void;
    };
    wcs_add?: Record<string, string>;
  }
}
