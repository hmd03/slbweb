import React, { useEffect, useRef } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

declare global {
  interface Window {
    naver: any;
  }
}

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
    const deviceInfo = useDeviceInfo();
    
    let mapHeight = deviceInfo.isMobile || deviceInfo.isSmallScreen ? 200 : 600;

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.naver && window.naver.maps && mapRef.current) {
        const location = new window.naver.maps.LatLng(
          37.5198182599585,
          126.790036823242
        );

        const map = new window.naver.maps.Map(mapRef.current, {
          center: location,
          zoom: 17,
        });

        const marker = new window.naver.maps.Marker({
          position: location,
          map,
        });

        window.naver.maps.Event.addListener(marker, 'click', () => {
          const url = `https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%20%EB%B6%80%EC%B2%9C%EC%8B%9C%20%EC%9B%90%EB%AF%B8%EA%B5%AC%20%EC%82%BC%EC%9E%91%EB%A1%9C256%EB%B2%88%EA%B8%B8%209%202F/address/14114202.5791393,4511812.7804425,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EB%B6%80%EC%B2%9C%EC%8B%9C%20%EC%9B%90%EB%AF%B8%EA%B5%AC%20%EC%82%BC%EC%9E%91%EB%A1%9C256%EB%B2%88%EA%B8%B8%209,new?c=15.00,0,0,0,dh&isCorrectAnswer=true`;
          window.open(url, '_blank');
        });

        clearInterval(timer);
      }
    }, 300);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className='w-full flex justify-center px-4 py-8 bg-white'>
      <div className='w-full max-w-[1300px]'>
        <div
          className={`${
            deviceInfo.isMobile || deviceInfo.isSmallScreen
              ? 'Slb-Title-mo mb-6'
              : 'Slb-Title mb-20'
          } flex flex-col items-center justify-center`}
        >
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Title-mo'
                : 'Slb-Title'
            }`}
          >
            찾아오시는 길
          </p>
          <div
            className={`w-[1px] border-r border-black ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-5 my-2'
                : 'h-10 my-5'
            }`}
          />
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Title-mo'
                : 'Slb-Title'
            } text-center`}
          >
            <span
              className={`${
                deviceInfo.isMobile || deviceInfo.isSmallScreen
                  ? 'Slb-Point-mo'
                  : 'Slb-Point'
              } text-Point`}
            >
              SLB는 고객님의 방문을 언제나 환영합니다.
            </span>
          </p>
        </div>

        {/* 네이버 지도 */}
        <div className='flex justify-center mb-6'>
          <div
            ref={mapRef}
            style={{ width: '100%', height: mapHeight }}
            className='rounded-md shadow-md'
          />
        </div>

        {/* 주소 및 연락처 */}
        <div className='flex flex-col items-center w-full'>
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'flex-col text-[12px] gap-4'
                : 'justify-between mb-60'
            }  flex w-full`}
          >
            <div className='flex flex-col mr-auto'>
              <p
                className={`${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'text-[14px]'
                    : 'text-[20px]'
                } font-semibold `}
              >
                ㈜시크릿케이 SLB
              </p>
              <p className={``}>
                우. 14481 | 경기 부천시 원미구 삼작로256번길 9 2F
              </p>
            </div>

            <p className='text-Point font-semibold ml-auto'>
              📞 대표번호 1533-0516
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
