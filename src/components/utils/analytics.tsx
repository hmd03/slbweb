declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }
  
  /** 페이지 진입 시 호출 */
  export function trackPageView(path: string, deviceType: 'mobile' | 'desktop') {
    window.gtag?.('event', 'page_view', {
      page_path: path,
      device_type: deviceType,
    });
  }
  
  /** 페이지 이탈(브라우저 닫거나 다른 URL로 이동) 시 호출 */
  export function trackExit(path: string, deviceType: 'mobile' | 'desktop', dwellMs: number) {
    window.gtag?.('event', 'page_exit', {
      page_path: path,
      device_type: deviceType,
      dwell_time_ms: dwellMs,
    });
  }
  
  /** 전환(Conversion) 시점에 호출 */
  export function trackConversion() {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-16905738850/hEE_CP7Y0sAaEOK0pP0-',
      value: 1.0,
      currency: 'KRW',
    });
  }
  