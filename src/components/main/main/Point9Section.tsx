import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point9Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <>
      <Chip text='Point 9' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo mt-4'
                : 'Slb-Title mt-6'
            }
          `}
          >
            누구나 쉽게 쉽게!
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo mb-6'
                : 'Slb-Title mb-10'
            } flex items-end leading-none`}
          >
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo mr-1'
                  : 'Slb-Point mr-2'
              } text-[#FF331F] leading-none`}
            >
              요리를 전혀 못해도
            </p>
            창업 가능
          </div>
        </SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo gap-1'
              : 'Slb-Content gap-2'
          } flex`}
        >
          <p className='font-medium'>키오스크와 원팩 시스템 도입</p>등 운영
          편의성을 높여
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo mb-8 gap-1'
              : 'Slb-Content mb-10 gap-2'
          } flex`}
        >
          다른 외식 아이템 대비
          <p className='font-medium'>낮은 인건비로 운영가능</p>
        </div>
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mb-8 px-8'
              : 'mb-40 '
          }`}
          alt='주문 시스템 운영 인력 최소화를 위해 키오스크로 편하게! 
          > 원팩 시스템 - 주로 사용되는 원부자재 원팩화로 준비시간 짧게! 
          > 간단 조리 시스템 - 어려운 조리 스킬 필요 없이 모든 메뉴 쉽게 가능!
          > 빠른 메뉴 완성 - 고객 테이블 or 배달 전달 끝!'
          src={`${process.env.PUBLIC_URL}/main/point_9${
            deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
          }.webp`}
        ></img>
    </>
  );
}
      

export default Point9Section;