import React from "react";
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';
import RollingCard from "../../../ui/RollingBanner/RollingCard";

const Sub2Section2: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const imageList = [
    `${process.env.PUBLIC_URL}/main/rolling/review1.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review2.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review3.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review4.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review5.jpg`,
  ];

  return (
    <section
    id='section-2'
    className={`${
      deviceInfo.isSmallScreen || deviceInfo.isMobile
        ? 'Slb-Title-mo'
        : 'Slb-Title'
    } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
  >
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'w-full Slb-Title-mo pt-10'
          : 'Slb-Title pt-40'
      } flex flex-col items-center`}
    >
      <Chip text='Point 4' type='black' />
      <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mt-4 Slb-SubTitle-mo flex-col items-center'
              : 'mt-6 mb-6 Slb-SubTitle gap-2'
          }  flex`}
        >
          <p>고객이 인정하는 샐러드&포케 맛집</p> <p></p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mb-1 flex-col items-center mt-4'
              : 'mb-2 items-end'
          } flex leading-none`}
        >
          <span
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-1 flex-col text-center'
                : 'items-end'
            } flex `}
          >
            <span>
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mb-1'
                    : 'Slb-Point mx-2'
                } text-[#FF331F] leading-none`}
              >
                SLB는 다르다!
              </p>
            </span>
            <span className='flex items-end'>
              SLB의
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mx-1'
                    : 'Slb-Point mx-2'
                } text-[#FF331F] leading-none`}
              >
                경쟁력은 메뉴!
              </p>
            </span>
          </span>
        </div>
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mb-1 flex-col'
                  : ''
              } flex items-end leading-none`}
            >
              한번이라도 SLB를 경험한
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mr-1'
                    : 'Slb-Point mr-2'
                } text-[#FF331F] leading-none`}
              >
                고객 재방문율 86%
              </p>
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? ''
                  : 'mb-10'
              } flex items-end leading-none`}
            >
              함께합니다!
            </div>
          </>
        ) : (
          <>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mb-10'
                  : 'mb-10'
              } flex items-end leading-none`}
            >
              한번이라도 SLB를 경험한
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo ml-1'
                    : 'Slb-Point ml-2'
                } text-[#FF331F] leading-none`}
              >
                고객 재방문율 86%
              </p>
            </div>
          </>
        )}
      </SlideUpOnView>
    </div>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'h-10 my-4 w-[1px]  border border-black  '
          : ''
      }`}
    />
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Content-mo flex-col items-center'
          : 'Slb-Content flex-col items-center'
      } flex`}
    >
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          <p>고객들의 입맛은 냉정하다!</p>

          <p>아무리 건강해도 ‘맛’이 없다면 소비하지 않습니다.</p>
          <p>SLB는 외식 프랜차이즈로서 ‘맛’과 ‘건강’모두</p>
          <p>높이기 위해 익숙한 한식을 샐러드&포케와 접목한</p>
          <p> 메뉴를 개발해 고객 재방문을 높였습니다.</p>
          <p>샐러드&포케와 접목한 메뉴를 개발해</p>
          <p> 고객 재방문을 높였습니다.</p>
        </>
      ) : (
        <>
          <p>
            고객들의 입맛은 냉정하다! 아무리 건강해도 ‘맛’이 없다면
            소비하지 않습니다.
          </p>
          <p>
            SLB는 외식 프랜차이즈로서 ‘맛’과 ‘건강’모두 높이기 위해 익숙한
            한식을
          </p>
          <p>
            샐러드&포케와 접목한 메뉴를 개발해 고객 재방문을 높였습니다.
          </p>
        </>
      )}
    </div>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'my-10'
          : 'my-40'
      } w-full flex justify-center`}
    >
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'px-4'
            : 'max-w-[1300px] aspect-[1139/594]'
        } w-full`}
        alt={`고객이 인정하는 샐러드 포케 맛집`}
        src={`${process.env.PUBLIC_URL}/sub_2/sub_2_2_1.webp`}
      />
    </div>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo'
          : 'Slb-Title'
      } flex flex-col items-center w-full font-semibold bg-[#F6F6F6]`}
    >
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-10'
            : ' Slb-Title pt-20'
        } flex flex-col items-center`}
      >
        <Chip text='Point 5' type='black' />
        <SlideUpOnView>
          <div className='flex items-end leading-none'>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo mt-4'
                  : 'Slb-Point mt-6'
              } text-[#FF331F] font-black leading-none`}
            >
              고객들의 후기
            </p>
            가
          </div>
          <div className=' mb-10'>SLB를 증명합니다!</div>
        </SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo flex-col items-center'
              : 'Slb-Content gap-2'
          } flex`}
        >
          특별히 광고하지 않아도 고객이 인정한
          <p>‘맛집’이기에 매출이 높을 수 밖에 없습니다.</p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo flex-col items-center'
              : 'Slb-Content mb-[8rem] gap-2'
          } flex`}
        >
          예비창업자님들의 창업문의가<p>끊이지 않는 이유이기도 합니다.</p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'px-12 overflow-hidden w-full'
              : 'mb-[16rem] w-[1100px]'
          }`}
        >
          <RollingCard images={imageList} />
        </div>
      </div>
    </div>
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'aspect-[431/173]'
          : 'aspect-[1904/540]'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/sub_2/sub_2_3_1.webp)`,
      }}
    />
  </section>
  )
}

export default Sub2Section2;