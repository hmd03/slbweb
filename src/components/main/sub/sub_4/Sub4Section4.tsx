import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub4Section4: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-4'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo'
          : 'Slb-Title'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
    >
      <div className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mt-10' : 'mt-40 aspect-[1904/1593]'
        }  bg-no-repeat bg-center w-full h-full flex flex-col items-center`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_4_1_background.webp`,
          backgroundSize: 'cover',
        }}
      >
        <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ' mt-10 mb-4'
              : 'mb-5 mt-20'
          }`}
        >
          일 잘하는 사람들의 운영 관리 시스템
        </div>
        </SlideUpOnView>
        <div
          className={`w-[1px]  border border-black  ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'h-10 my-4'
              : 'h-20 my-6'
          }`}
        />
        <div>가맹점주님의 고민을 줄여드리기 위해</div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col items-center Slb-Point-mo'
              : 'justify-center gap-2 mt-2 mb-40 Slb-Point'
          } flex leading-none`}
        >
          일 잘하는 SLB 식구들은
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? ' '
                  : ''
              } flex items-end leading-none text-[#FF331F]`}
            >
              항상 고민합니다
            </p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo gap-2 mt-8 mb-10'
              : 'Slb-Content gap-2 mb-20'
          } flex leading-none flex-col items-center`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <p className='mb-6'>SLB 개설 과정은?</p>
              <p>
                <span className='font-medium'>
                가맹 계약 후 매장 오픈 까지 총 소요 시간은 약 3주~5주 정도
                </span>
                입니다.
              </p>
              <p>
                매장 환경에 따라, 배달/홀 매장 형태에 따라 일정이 변동될 수 있습니다.
              </p>
            </>
          ) : (
            <>
              <p className='mb-6'>SLB 개설 과정은?</p>
              <p>
                <span className='font-medium'>
                가맹 계약 후 매장 오픈 까지 총 소요 시간은 약 3주~5주 정도
                </span>
                입니다.
              </p>
              <p>
                매장 환경에 따라, 배달/홀 매장 형태에 따라 일정이 변동될 수 있습니다.
              </p>
            </>
          )}
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ''
              : 'flex-col items-center gap-2 leading-none mb-40'
          } flex`}
        >
          <p>가맹점주님이 진심으로</p>
          <p>'가족'이라 부르실 수 있도록 노력하겠습니다!</p>
        </div>
        <div className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ''
              : 'max-w-[1100px]'
          } w-full h-full`}>
            <div className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo'
                  : 'ml-auto Slb-Point flex-1 flex-col justify-end h-full pb-20 gap-2 leading-none w-[50%]'
              } flex`}>
                <p>내 가족이 운영하는</p>
                <p>매장이라고 생각하면</p>
                <p>아무리 사소해도</p>
                <p>대충 할 수 있겠어요?</p>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? ''
                      : 'ml-auto mt-8'
                  }`}
                >
                  -SLB 대표
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Sub4Section4;
