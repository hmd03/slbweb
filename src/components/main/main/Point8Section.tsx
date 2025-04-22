import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point8Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <>
      {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
          <div className='flex w-full items-center px-10'>
            <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
            <Chip text='Point 8' type='black' />
            <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
          </div>
        ) : (
          <Chip text='Point 8' type='black' />
        )}
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4 Slb-SubTitle-mo'
                : 'mt-6 Slb-SubTitle'
            }`}
          >
            물가상승으로 힘들어 하는
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-SubTitle-mo'
                : 'Slb-SubTitle'
            }`}
          >
            가맹점주님들을 위해 매년 물류 비용
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mb-10'
                : 'Slb-Point mb-10'
            } flex items-end leading-none`}
          >
            {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
              <div className='flex flex-col items-center text-[28px]'>
                <p className='text-[#FF331F] leading-none'>
                  유지 또는 낮추기 위해
                </p>
                <p className='flex items-end mt-2'>
                  <span className='text-[#FF331F] leading-none'>
                    SLB는 노력
                  </span>
                  <span className='leading-none text-main'>합니다!</span>
                </p>
              </div>
            ) : (
              <>
                <p className='text-[#FF331F] leading-none mt-2'>
                  유지 또는 낮추기 위해 SLB는 노력
                </p>
                합니다!
              </>
            )}
          </div>
        </SlideUpOnView>
        {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
          <img
            loading='lazy'
            className='mb-6 px-8'
            alt='주6회 배송은 기본! 친환경 무농약 인증 받은 농장과 계약 재배로 사시사철 균일한 가격으로 제공해드립니다.'
            src={`${process.env.PUBLIC_URL}/main/point_8_mo_1.webp`}
          ></img>
        ) : (
          <></>
        )}
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'text-detail'
              : 'Slb-Content'
          } flex`}
        >
          채소의 안정된 공급과 수익률을 높이기 위해
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'text-detail mb-8'
              : 'Slb-Content mb-20'
          } flex`}
        >
          지속적인
          <p className='font-medium ml-2'>무농약 인증 신규 농가 발굴</p>
        </div>
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mb-20 px-8'
              : 'mb-60'
          }`}
          alt='주6회 배송은 기본! 친환경 무농약 인증 받은 농장과 계약 재배로 사시사철 균일한 가격으로 제공해드립니다.'
          src={`${process.env.PUBLIC_URL}/main/point_8${
            deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo_2' : ''
          }.webp`}
        ></img>
    </>
  );
}
      

export default Point8Section;