export const GA_TRACKING_ID = 'AW-16905738850';

export function sendConversionEvent() {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'conversion', {
    send_to: `${GA_TRACKING_ID}/hEE_CP7Y0sAaEOK0pP0-`,
    value: 1.0,
    currency: 'KRW',
  });
}
