import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

interface DeviceInfo {
  isMobile?: boolean;
  isTouchDevice?: boolean;
  isSmallScreen?: boolean;
}

// 디바운스 적용 여부 설정
const USE_DEBOUNCE = false;

const useDeviceInfo = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({});

  useEffect(() => {
    const checkDeviceInfo = () => {
      const userAgent =
        typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );
      const isTouchDevice = 'ontouchstart' in window;
      const isSmallScreen = window.innerWidth <= 1024;

      setDeviceInfo({
        isMobile,
        isTouchDevice,
        isSmallScreen,
      });
    };

    const handler = USE_DEBOUNCE
      ? debounce(checkDeviceInfo, 200)
      : checkDeviceInfo;

    checkDeviceInfo();
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
      if (USE_DEBOUNCE) {
        (handler as ReturnType<typeof debounce>).cancel();
      }
    };
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
