declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackGooglePageView(path: string, deviceType: 'mobile' | 'desktop') {
  window.gtag?.('event', 'page_view', {
    page_path: path,
    device_type: deviceType,
  });
}

export function trackGoogleExit(
  path: string,
  deviceType: 'mobile' | 'desktop',
  dwellMs: number
) {
  window.gtag?.('event', 'page_exit', {
    page_path: path,
    device_type: deviceType,
    dwell_time_ms: dwellMs,
  });
}

export function trackGoogleConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: 'AW-16905738850/hEE_CP7Y0sAaEOK0pP0-',
    value: 1.0,
    currency: 'KRW',
  });
}

export function trackNaverPageView() {
  if (window.wcs && typeof window.wcs.inflow === 'function') {
    window.wcs.inflow();
  }
  if (typeof wcs_do === 'function') {
    wcs_do();
  }
}

export function trackNaverConversion() {
  if (window.wcs && typeof window.wcs.trans === 'function') {
    window.wcs.trans({ type: 'lead' });
  }
}
