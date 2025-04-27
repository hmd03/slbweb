import React from "react";
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub2Section3: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const qnaItem = [
    `회사만 다녔는데 운영 할 수 있을까요?`,
    `집안일만 하던 주부인데도 창업 가능할까요?`,
    `메뉴가 적지 않은데 손이 많이 가지 않나요?`,
    `나이가 좀 있는데 제가 할 수 있을까요?`,
    `부모님이 해주신 음식 말고 라면 정도만 끓여봤는데 가능할까요?`,
  ];

  return (
    <section
        id='section-3'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mt-10 pb-5'
              : 'mt-40 pb-20'
          } flex flex-col items-center w-full h-fit`}
        >
          <Chip text='Point 6' type='black' />
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mt-4'
                  : 'mt-6'
              }  `}
            >
              음식점 일이
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
              } flex items-end leading-none`}
            >
              이렇게
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo ml-1'
                    : 'Slb-Point ml-2'
                } text-[#FF331F] leading-none`}
              >
                쉬워도 되나요?
              </p>
            </div>
          </SlideUpOnView>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'font-normal text-[10px] gap-4 px-4'
              : 'max-w-[800px] Slb-Content gap-10'
          } flex flex-col w-full`}
        >
          {qnaItem.map((q, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'self-start' : 'self-end'
              } bg-[#E0E0E0] rounded-full px-4 py-2 text-black w-fit whitespace-nowrap`}
            >
              Q. {q}
            </div>
          ))}
        </div>
        <div
          className={`w-[1px]  border border-black  ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'h-10 my-4'
              : 'h-40 my-10'
          }`}
        />
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo gap-2 mb-10'
              : 'Slb-Content gap-2 mb-40'
          } flex leading-none flex-col items-center`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <p>외식 프랜차이즈가</p>
              <p>가장 많이 듣는 질문 중 하나입니다.</p>
              <p>걱정 하지 마세요! SLB는 메뉴</p>
              <p>
                개발 과정부터{' '}
                <span className='font-medium'>조리 편의성은 물론</span>
              </p>
              <p className='font-medium'>
                고객의 만족도를 높일 수 있도록 개발됩니다.
              </p>
            </>
          ) : (
            <>
              <p>외식 프랜차이즈가 가장 많이 듣는 질문 중 하나입니다.</p>
              <p>
                걱정 하지 마세요! SLB는 메뉴 개발 과정부터
                <span className='font-medium'>조리 편의성</span>은 물론
              </p>
              <p>
                <span className='font-medium'>
                  고객의 만족도를 높일 수 있도록 개발
                </span>
                됩니다.
              </p>
            </>
          )}
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full Slb-Title-mo pt-10'
              : 'Slb-Title pt-20 mb-20'
          } flex flex-col items-center bg-[#F6F6F6] w-full`}
        >
          <Chip text='Point 7' type='black' />
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Title-mo mt-4'
                  : 'Slb-Title mt-6'
              }
        `}
            >
              SLB의 강점
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
                누구나 쉽게 쉽게!
              </p>
            </div>
          </SlideUpOnView>
          <img
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-8 px-8'
                : 'mb-40 mt-10 aspect-[975/201] max-w-[1300px]'
            } w-full`}
            alt='주문 시스템 운영 인력 최소화를 위해 키오스크로 편하게! 
        > 원팩 시스템 - 주로 사용되는 원부자재 원팩화로 준비시간 짧게! 
        > 간단 조리 시스템 - 어려운 조리 스킬 필요 없이 모든 메뉴 쉽게 가능!
        > 빠른 메뉴 완성 - 고객 테이블 or 배달 전달 끝!'
            src={`${process.env.PUBLIC_URL}/main/point_9${
              deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
            }.webp`}
          ></img>
        </div>
      </section>  
  )
}

export default Sub2Section3;