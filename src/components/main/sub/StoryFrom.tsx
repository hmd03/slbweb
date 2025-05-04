import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';
const StoryFrom = () => {
  const deviceInfo = useDeviceInfo();

  const itemData = [
    {
      image: `${process.env.PUBLIC_URL}/story/sub_story_4.webp`,
      alt: `Salad`,
      desc: `우리나라 국기의 상징 중 하나인 ‘태극 문양’과 Salad의 ‘S’를 결합해
대한민국을 대표하는 샐러드&포케 브랜드로 성장하겠다는 의지를 표현`,
    },
    {
      image: `${process.env.PUBLIC_URL}/story/sub_story_5.webp`,
      alt: `Life`,
      desc: `모든 고객들의 건강한 삶을 위해 먹는 즐거움으로 행복을 만끽할 수 있도록
노력하겠다는 의미를 담기 위해 ‘노리개’의 문양과 Life의 ‘L’을 합성하여 표현`,
    },
    {
      image: `${process.env.PUBLIC_URL}/story/sub_story_6.webp`,
      alt: `Balance`,
      desc: `균형 잡힌 한끼를 제대로 대접해 드시는 고객들의 정신적, 육체적 균형까지도
지켜드리는 브랜드가 되겠다는 의지를 ‘사람’과 Balance의 ‘B’를 합성하여 표현`,
    },
  ];

  return (
    <section
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'w-full Slb-Title-mo'
          : 'Slb-Title'
      } flex flex-col items-center w-full`}
    >
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/532] mb-0'
            : 'aspect-[1904/1246] mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-end w-full h-fit`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/story/sub_story_1${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'hidden' : ''
          } flex leading-none flex-col items-center`}
        >
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
              }`}
            >
              브랜드 스토리
            </div>
          </SlideUpOnView>
          <div
            className={`w-[1px]  border border-Black  ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-10 my-4'
                : 'h-16 my-10'
            }`}
          />
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'gap-2'
                : 'gap-2'
            } flex leading-none flex-col items-center`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <></>
            ) : (
              <>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'mb-4'
                      : 'mb-10 flex-col gap-4'
                  } flex justify-center leading-none`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo mr-1'
                        : 'Slb-Point mr-2'
                    } text-[#FF331F] font-black leading-none `}
                  >
                    더 나은 삶, 더 맛있는 경험
                  </p>
                  한식X샐러드&포케전문점 SLB
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'hidden'
        } flex leading-none flex-col items-center`}
      >
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
            }`}
          >
            브랜드 스토리
          </div>
        </SlideUpOnView>
        <div
          className={`w-[1px]  border border-Black  ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'h-10 my-4'
              : 'h-16 my-10'
          }`}
        />
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'gap-2' : 'gap-2'
          } flex leading-none flex-col items-center`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-4 flex-col gap-2 items-center'
                    : 'mb-10 flex-col gap-4'
                } flex justify-center leading-none`}
              >
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo mr-1'
                      : 'Slb-Point mr-2'
                  } text-[#FF331F] font-black leading-none `}
                >
                  더 나은 삶, 더 맛있는 경험
                </p>
                한식X샐러드&포케전문점 SLB
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo flex-col mt-4'
            : 'Slb-Title mb-4 flex-col mt-8'
        } flex items-center`}
      >
        <p>공기처럼 우리 옆에 있어 익숙하지만</p>
        <p>살아가는데 기본이면서 전부이기도 한</p>
        {/**
         * 05/04 변경 -SH
         * 바꾸긴 했는데 3배 늘려달라는건 좀...
         * Slb-Title-mo -> Slb-Title-mo-3x
         * Slb-Point -> Slb-Point-3x
         */}
        <span
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Title-mo-3x mt-6'
              : 'Slb-Point-3x mt-10'
          } text-[#FF331F] leading-none bg-no-repeat bg-bottom pb-2`}
          // style={{
          //   backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_1_1_line.webp)`,
          //   backgroundSize: 'contain',
          //   textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
          // }}
        >
          음식 [飮食]
        </span>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center mt-10 mb-20'
            : 'Slb-Content flex-col items-center mt-20 mb-40'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>한식을 기반으로 식재료 선택부터 재료의 궁합,</p>
            <p>최적의 조리 방법까지 고민합니다. 더 나은 음식의</p>
            <p> ‘맛’을 내기 위해 SLB는 현재에 만족하지 않습니다.</p>
            <p>고객의 삶 속에서 발생하는 건강에 대한 고민을</p>
            <p>음식으로 도움을 드리고 삶의 균형을 찾길 원하는</p>
            <p>마음으로 진심을 담아 먹거리를 개발하고 있습니다.</p>
          </>
        ) : (
          <>
            <p>한식을 기반으로 식재료 선택부터 재료의 궁합, 최적의 </p>
            <p>조리 방법까지 고민합니다. 더 나은 음식의 ‘맛’을 내기 </p>
            <p>위해 SLB는 현재에 만족하지 않습니다.</p>
            <p>고객의 삶 속에서 발생하는 건강에 대한 고민을 음식으로</p>
            <p>도움을 드리고 삶의 균형을 찾길 원하는 마음으로 진심을</p>
            <p>담아 먹거리를 개발하고 있습니다.</p>
          </>
        )}
      </div>
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/431] my-6'
            : 'aspect-[1904/618]'
        } w-full`}
        alt={`친환경 무농약 채소만을 사용
          고객의 삶이 더 윤택해지도록
          신체적, 정신적으로 균형을 찾다`}
        src={`${process.env.PUBLIC_URL}/story/sub_story_2${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
        }.webp`}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-10'
            : 'Slb-Title pt-40 mb-40'
        } flex flex-col items-center bg-[#F6F6F6] w-full`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          }  `}
        >
          브랜드 슬로건
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          } flex items-end leading-none`}
        >
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mt-2 mb-2'
                : 'Slb-Point mt-6 mb-4'
            } text-[#FF331F] leading-none`}
          >
            [ Just Eat It! ]
          </p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content'
          } flex leading-none flex-col items-center`}
        >
          먹어봐!
        </div>
        <div
          className={`w-[1px]  border border-Black  ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'h-10 my-4'
              : 'h-16 my-10'
          }`}
        />
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo gap-2 mb-20'
              : 'Slb-Content gap-2 mb-40'
          } flex leading-none flex-col items-center`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <p>신체적, 정신적 건강 고민만 하고</p>
              <p>실천은 쉽지 않은 우리!</p>
              <p>SLB는 일상을 살아가기 위해</p>
              <p>가장 많이 하고 있는 [식食] 행위를 통해</p>
              <p>고객에게 더 나은 삶의 방향과, 균형을</p>
              <p>찾아 드리고 싶은 의지를 담아 강한 의지의 표현</p>
              <p>
                <span className='text-[#FF331F] '>‘Just Eat It’</span>을 브랜드
                슬로건으로 표현했습니다
              </p>
              <p className='mt-10'>샐러드&포케에 익숙한 한식을 더해</p>
              <p>누구나 쉽게 접할 수 있고</p>
              <p>건강한 삶의 균형을</p>
              <p>찾을 수 있도록 도전을 멈추지 않는</p>
              <p className='font-medium mb-10'>
                한식X샐러드&포케전문 브랜드 SLB
              </p>
              <p className='Slb-Title-mo'>고객을 위한 도전은 계속 됩니다!</p>
            </>
          ) : (
            <>
              <p>신체적, 정신적 건강 고민만 하고 실천은 쉽지 않은 우리!</p>
              <p>
                SLB는 일상을 살아가기 위해 가장 많이 하고 있는 [식食] 행위를
                통해
              </p>
              <p>
                고객에게 더 나은 삶의 방향과, 균형을 찾아 드리고 싶은 의지를
                담아
              </p>
              <p>
                강한 의지의 표현{' '}
                <span className='text-[#FF331F] '>‘Just Eat It’</span>을 브랜드
                슬로건으로 표현했습니다
              </p>
              <p className='mt-10'>
                샐러드&포케에 익숙한 한식을 더해 누구나 쉽게 접할 수 있고
              </p>
              <p>건강한 삶의 균형을 찾을 수 있도록 도전을 멈추지 않는</p>
              <p className='font-medium mb-10'>
                한식X샐러드&포케전문 브랜드 SLB
              </p>
              <p className='Slb-Title'>고객을 위한 도전은 계속 됩니다!</p>
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
        }`}
      >
        SLB BI 소개
      </div>
      <div
        className={`w-[1px]  border border-Black  ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'h-10 my-4'
            : 'h-16 my-10'
        }`}
      />
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[441/222] max-w-[50%] my-6'
            : 'aspect-[441/222] max-w-[20%] mb-20'
        } w-full`}
        alt={`SLB 한식X샐러드&포케`}
        src={`${process.env.PUBLIC_URL}/story/sub_story_3.webp`}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-col items-center max-w-[80%]'
            : ' flex-col items-center max-w-[1300px] mb-60'
        } w-full border-y-[1px] border-Black flex `}
      >
        {itemData.map((item, idx) => (
          <div
            key={idx}
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? `flex-col items-center py-6 gap-4 ${
                    idx === 0 ? '' : 'border-dashed border-t-[1px]'
                  } border-DeepGray`
                : ' items-center justify-between gap-20 p-10'
            } flex`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? ' ' : ' '
              } w-full aspect-[525/191] flex-1`}
              alt={item.alt}
              src={item.image}
            />
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo text-center break-keep'
                  : 'Slb-Content'
              } flex w-full`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryFrom;
