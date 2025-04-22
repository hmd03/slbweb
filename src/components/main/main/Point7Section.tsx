import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point7Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <><Chip text='Point 7' type='black' />
    <SlideUpOnView>
      <div className='mt-6'>창업 및 운영 비용은 DOWN</div>
      <div className='flex items-end leading-none'>
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Point-mo'
              : 'Slb-Point'
          } text-[#FF331F] leading-none`}
        >
          수익률은 UP 시키는 SLB의 노력!
        </p>
      </div>
    </SlideUpOnView>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Content-mo mt-10'
          : 'Slb-Content mt-20'
      } flex`}
    >
      예비 창업자들의 최대 고민? 창업 비용!
    </div>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Content-mo mb-4'
          : 'Slb-Content flex mb-20'
      } `}
    >
      SLB는 초기 창업 비용을 줄이기 위해
      <p className='font-medium ml-2'>'인테리어 직거래 시스템' 도입</p>
    </div>
    <img
      loading='lazy'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-20' : 'mb-60'
      }`}
      alt='초기 인테리어 비용 최대 35% 이상 감소'
      src={`${process.env.PUBLIC_URL}/main/point_7${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`}
    ></img></>
  );
}
      

export default Point7Section;