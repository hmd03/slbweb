import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point5Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
  <div
    className={`${
      deviceInfo.isSmallScreen || deviceInfo.isMobile
        ? 'w-full  pt-10'
        : 'w-[1300px] pt-20'
    } flex flex-col items-center`}
  >
    <Chip text='Point 5' type='black' />
    <SlideUpOnView>
      <div className='mt-6'>각 분야 10년 이상의 전문가가</div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Point-mo'
            : 'Slb-Point'
        } flex items-end leading-none mb-10`}
      >
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          } text-[#FF331F] leading-none`}
        >
          창업부터 운영까지 지원
        </p>
        하는 SLB
      </div>
    </SlideUpOnView>
    {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
      <div className='flex flex-col items-center'>
        <div className='Slb-Content-mo flex'>
          매장을 직접 운영 했던 경험 보유자부터 홀, 배달 등
        </div>
        <div className='Slb-Content-mo flex'>
          다양한 외식아이템을 경험한
          <p className='font-medium ml-2'>10년 이상의</p>
        </div>
        <div className='Slb-Content-mo flex'>
          <p className='font-medium'>
            각 분야 전문가들이 예비 가맹점주님의
          </p>
        </div>
        <div className='Slb-Content-mo mb-6 flex'>
          <p className='font-medium'>고충을 해결</p>해 드립니다
        </div>
      </div>
    ) : (
      <>
        <div className='Slb-Content flex'>
          매장을 직접 운영 했던 경험 보유자부터 홀, 배달 등
        </div>
        <div className='Slb-Content flex'>
          다양한 외식아이템을 경험한
          <p className='font-medium ml-2'>10년 이상의</p>
        </div>
        <div className='Slb-Content mb-[8rem] flex'>
          <p className='font-medium mr-2'>
            각 분야 전문가들이 예비 가맹점주님의 고충을 해결
          </p>
          해드립니다.
        </div>
      </>
    )}

    {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
      <div className='flex flex-col items-center gap-8 mx-8'>
        <div className=''>
          <img
            loading='lazy'
            className='w-full rounded-t'
            style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
            alt='메뉴 및 운영 노하우 교육'
            src={`${process.env.PUBLIC_URL}/main/point_5_mo_1.webp`}
          />
        </div>
        <div className=''>
          <img
            loading='lazy'
            className='w-full rounded-t'
            style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
            alt='오픈 운영 지원'
            src={`${process.env.PUBLIC_URL}/main/point_5_mo_2.webp`}
          />
        </div>
      </div>
    ) : (
      <>
        <div className='flex items-center gap-8'>
          <div className=''>
            <img
              loading='lazy'
              className='w-full rounded-t transition-opacity duration-500 opacity-0'
              style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
              onLoad={(e) =>
                e.currentTarget.classList.add('opacity-100')
              }
              alt='메뉴 및 운영 노하우 교육육'
              src={`${process.env.PUBLIC_URL}/main/point_5_1.webp`}
            />
          </div>
          <div className=''>
            <img
              loading='lazy'
              className='w-full rounded-t transition-opacity duration-500 opacity-0'
              style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
              onLoad={(e) =>
                e.currentTarget.classList.add('opacity-100')
              }
              alt='오픈 운영 지원'
              src={`${process.env.PUBLIC_URL}/main/point_5_2.webp`}
            />
          </div>
        </div>

        <div className='mb-[8rem]' />
      </>
    )}
  </div>
  );
}
      

export default Point5Section;