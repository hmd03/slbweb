import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point6Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
  <div
    className={`${
      deviceInfo.isSmallScreen || deviceInfo.isMobile
        ? 'w-full Slb-SubTitle-mo'
        : 'w-[1300px] Slb-SubTitle'
    } flex flex-col items-center pt-20 `}
  >
    {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
      <div className='flex w-full items-center px-10'>
        <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
        <Chip text='Point 6' type='black' />
        <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
      </div>
    ) : (
      <Chip text='Point 6' type='black' />
    )}
    <SlideUpOnView>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo mt-4'
            : 'Slb-Title mt-6'
        }`}
      >
        SLB만의 슈퍼바이징 시스템으로
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo mb-10'
            : 'Slb-Point mb-20'
        } flex items-end leading-none`}
      >
        오픈 이후에도
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Point-mo'
              : ''
          } text-[#FF331F] leading-none ml-2`}
        >
          체계적으로 관리
        </p>
        합니다
      </div>
    </SlideUpOnView>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'flex-col px-8'
          : ''
      } flex items-center gap-8 mb-16`}
    >
      {[1, 2].map((idx) => (
        <div
          key={idx}
          className='aspect-[11/10] w-full rounded-t-[1rem] overflow-hidden'
          style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
        >
          <img
            loading='lazy'
            className='w-full h-full object-cover'
            alt={`point ${idx}`}
            src={`${process.env.PUBLIC_URL}/main/point_6_${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mo_'
                : ''
            }${idx}.webp`}
          />
        </div>
      ))}
    </div>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'flex-col px-8'
          : ''
      } flex items-center gap-8 mb-16`}
    >
      {[3, 4, 5].map((idx) => (
        <div
          key={idx}
          className='aspect-[11/10] w-full rounded-t-[1rem] overflow-hidden'
          style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
        >
          <img
            loading='lazy'
            className='w-full h-full object-cover'
            alt={`point ${idx}`}
            src={`${process.env.PUBLIC_URL}/main/point_6_${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mo_'
                : ''
            }${idx}.webp`}
          />
        </div>
      ))}
    </div>
    {deviceInfo.isMobile || deviceInfo.isSmallScreen || (
      <div className='mb-10' />
    )}
  </div>
  );
}
      

export default Point6Section;