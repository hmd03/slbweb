import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import DividerWithLabel from '../../ui/label/DividerWithLabel';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point1Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'w-full Slb-Title-mo pt-20'
          : 'w-[1300px] Slb-Title pt-40'
      } flex flex-col items-center`}
    >
      <Chip text='Point 1' type='black' />
      <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mt-4' : 'mt-6'
          }  `}
        >
          샐러드 & 포케 창업 지금이 적기,
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mb-10'
              : 'mb-10'
          } flex items-end leading-none`}
        >
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo'
                : 'Slb-Point'
            } text-[#FF331F] leading-none`}
          >
            고민하지 말고 선점
          </p>
          하세요!
        </div>
      </SlideUpOnView>
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <div className='flex flex-col w-full h-full items-center'>
          <img
            loading='lazy'
            className='mb-10 px-10'
            alt='대한민국 국민 신체·정신 건강 우려도 1.8배 증가'
            src={`${process.env.PUBLIC_URL}/main/point_1_mo.webp`}
          ></img>
        </div>
      ) : (
        <img
          loading='lazy'
          className='mb-[12rem]'
          alt='대한민국 국민 신체·정신 건강 우려도 1.8배 증가'
          src={`${process.env.PUBLIC_URL}/main/point_1_img.webp`}
        ></img>
      )}
      <DividerWithLabel label='Q. 식사 메뉴를 정할 때 고객은?' />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title'
        } flex items-center leading-none  mt-8`}
      >
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Point-mo pb-2 px-2'
              : 'Slb-Point px-4 pt-2 pb-2'
          } 
            text-center text-[#FF331F] leading-none bg-no-repeat bg-bottom`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_1_line.webp)`,
            backgroundSize: 'contain',
            textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
          }}
        >
          맛은 기본
        </p>
        다음은
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo mb-4 mt-2'
            : 'Slb-Title mb-20 mt-5'
        } flex items-center leading-none`}
      >
        가격이 아닌
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Point-mo pb-3 pt-2 px-4'
              : 'Slb-Point px-4 pt-4 pb-4'
          } text-center text-[#FF331F] leading-none bg-no-repeat bg-center`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_1_circle.webp)`,
            backgroundSize: 'contain',
            textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
          }}
        >
          영양성분
        </p>
        이 더 중요!
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo'
            : 'Slb-Content'
        } flex`}
      >
        고객들의 외식 선택 요소의 변화로
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo'
            : 'Slb-Content'
        } flex`}
      >
        '샐러드&포케' 시장
        <p className='font-medium ml-1'>지속 성장 중!</p>
      </div>
    </section>
  );
}
      

export default Point1Section;