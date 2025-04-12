import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

interface DeviceInfo {
  isMobile?: boolean;
  isTouchDevice?: boolean;
  isSmallScreen?: boolean;
}

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

    const debouncedCheck = debounce(checkDeviceInfo, 200);

    checkDeviceInfo();
    window.addEventListener('resize', debouncedCheck);

    return () => {
      window.removeEventListener('resize', debouncedCheck);
      debouncedCheck.cancel();
    };
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
