import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point2Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mt-10' : 'mt-40'
      }  bg-no-repeat bg-center w-full flex flex-col items-center`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_2${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
        }_background.webp)`,
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full  pt-10'
            : 'w-[1300px]  pt-20'
        } flex flex-col items-center h-full font-semibold`}
      >
        <Chip text='Point 2' type='white' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'text-White Slb-Point-mo'
                : 'text-White Slb-Point'
            } flex items-end leading-none mt-6 mb-4`}
          >
            어떤 상권에도 매출 걱정 없는 SLB
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo  flex flex-col items-center gap-1'
                : 'Slb-Title  flex justify-center gap-2'
            } text-White leading-none`}
          >
            <p>매력적인 브랜드는 고객이</p> <p>찾아오게 만든다!</p>
          </div>
        </SlideUpOnView>
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <div
            className={`w-[95%] mt-6 mb-10 px-10 flex flex-col justify-around gap-5 items-center`}
          >
            <div className=''>
              <img
                loading='lazy'
                className='aspect-[455/220] w-full shadow-[4px_4px_12px_rgba(0,0,0,0.25),_-2px_-2px_6px_rgba(0,0,0,0.15)]'
                alt='평균매출 7,350만원 9천4백 최고매출'
                src={`${process.env.PUBLIC_URL}/main/point_2_mo_3.webp`}
              />
            </div>
            <div className=''>
              <img
                loading='lazy'
                className='aspect-[455/220] w-full shadow-[4px_4px_12px_rgba(0,0,0,0.25),_-2px_-2px_6px_rgba(0,0,0,0.15)]'
                alt='평균매출 4,700만원 8천9백 최고매출'
                src={`${process.env.PUBLIC_URL}/main/point_2_mo_2.webp`}
              />
            </div>
            <div className=''>
              <img
                loading='lazy'
                className='aspect-[455/220] w-full  shadow-[4px_4px_12px_rgba(0,0,0,0.25),_-2px_-2px_6px_rgba(0,0,0,0.15)]'
                alt='평균매출 7,960만원 7천9백 최고매출'
                src={`${process.env.PUBLIC_URL}/main/point_2_mo_1.webp`}
              />
            </div>
          </div>
        ) : (
          <div className={`w-[1000px] mt-20 mx-auto flex justify-around`}>
            <div className='w-[31%]'>
              <img
                loading='lazy'
                className='aspect-[320/423] w-[90%] shadow-[4px_4px_12px_rgba(0,0,0,0.25),_-2px_-2px_6px_rgba(0,0,0,0.15)]'
                alt='평균매출 7,350만원 9천4백 최고매출'
                src={`${process.env.PUBLIC_URL}/main/point_2_store_1.webp`}
              />
            </div>
            <div className='w-[31%]'>
              <img
                loading='lazy'
                className='aspect-[320/423] w-[90%] shadow-[4px_4px_12px_rgba(0,0,0,0.25),_-2px_-2px_6px_rgba(0,0,0,0.15)]'
                alt='평균매출 4,700만원 8천9백 최고매출'
                src={`${process.env.PUBLIC_URL}/main/point_2_store_2.webp`}
              />
            </div>
            <div className='w-[31%]'>
              <img
                loading='lazy'
                className='aspect-[320/423] w-[90%] shadow-[4px_4px_12px_rgba(0,0,0,0.25),_-2px_-2px_6px_rgba(0,0,0,0.15)]'
                alt='평균매출 7,960만원 7천9백 최고매출'
                src={`${process.env.PUBLIC_URL}/main/point_2_store_3.webp`}
              />
            </div>
          </div>
        )}
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <></>
        ) : (
          <a
            href='/sub_4/rateOfReturn'
            target='_blank'
            rel='noopener noreferrer'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'text-sub'
                : 'Slb-Content cursor-pointer'
            } rounded-[4rem] bg-Point text-White px-4 mt-10 mb-[8rem]`}
          >
            SLB 수익률 확인하기
          </a>
        )}
      </div>
    </section>
  );
}
      

export default Point2Section;