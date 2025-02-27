import { useEffect, useState } from "react";

interface DeviceInfo {
    isMobile: boolean;
    isTouchDevice: boolean;
    isSmallScreen: boolean;
}

const useDeviceInfo = (): DeviceInfo => {
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
        isMobile: false,
        isTouchDevice: false,
        isSmallScreen: false,
    });
  
    useEffect(() => {
        const checkDeviceInfo = () => {
            const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const isTouchDevice = 'ontouchstart' in window;
            const isSmallScreen = window.innerWidth <= 950;

            setDeviceInfo({
                isMobile: isMobile,
                isTouchDevice: isTouchDevice,
                isSmallScreen: isSmallScreen,
            });
        };
  
        checkDeviceInfo();
        window.addEventListener('resize', checkDeviceInfo);
        return () => window.removeEventListener('resize', checkDeviceInfo);
    }, []);
  
    return deviceInfo;
};

export default useDeviceInfo;
