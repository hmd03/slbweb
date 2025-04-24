import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub4Section1: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-1'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'w-full Slb-Title-mo pt-20'
          : 'Slb-Title'
      } flex flex-col items-center w-full`}
    >
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/313] mb-0'
            : 'aspect-[1904/1140] mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center w-full h-fit text-White`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_1_1.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ''
              : 'flex leading-none flex-col items-center'
          } `}
        >
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? ' mt-10'
                  : 'mt-[8rem]'
              }`}
            >
              어떤 상권에서도 안정적인 수익성!
            </div>
          </SlideUpOnView>
          <div
            className={`w-[1px]  border border-White  ${
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
                <div>
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                    } flex items-center leading-none`}
                  >
                    SLB는 어떤 상권에서도
                    <p
                      className={`
                        bg-[#FF331F] ml-2 py-2 px-1`}
                    >
                      매출걱정 NO
                    </p>
                  </div>
                  <div className='flex flex-col text-center gap-2 leading-none Slb-SubTitle mt-10'>
                    <span>매력적인 브랜드는 고객이 먼저 알아본다</span>
                    <span>고객에게 인정 받을 수 있는 이유는?</span>
                  </div>
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Title-mo flex-col text-center gap-1'
                        : 'Slb-Title mx-2 items-end mt-10'
                    } text-[#FF331F] leading-none flex`}
                  >
                    본사와 가맹점이{' '}
                    <span className='Slb-Point ml-2'>함께 노력</span>
                    했기 때문!
                  </p>
                  <div className='Slb-Content mt-20 text-center gap-2 flex flex-col'>
                    <p>본사만 노력한다고 해서 매출이 더 높아지지도</p>
                    <p>
                      점주님만 노력한다고 해서 매출이 더 높아지는 것은 아닙니다.
                    </p>
                    <p>본사와 가맹점이 함께 노력할 때</p>
                    <p>높은 매출과 안정적인 수익창출이 가능합니다.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/313] mb-0'
            : 'aspect-[1904/558] mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center w-full h-fit`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_1_2.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          }`}
        >
          SLB는 본사를 믿고 함께 해주시고 계신
        </div>
        <div>가맹점주님께 고개 숙여 감사 드립니다.</div>
        <div
          className={`w-[1px] border border-Black  ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'h-10 my-4'
              : 'h-16 my-10'
          }`}
        />
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content '
          } leading-none flex text-center`}
        >
          "함께 만들어 가는 가슴 따뜻한 동행이 시작됩니다"
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/313] mb-0'
            : 'aspect-[1904/238] pb-10 mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center w-full h-fit text-White`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_1_3.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content flex-col '
          } leading-none flex text-center`}
        >
          가맹점의 매출과 수익을 높이기 위한
          <span className='flex gap-2 justify-center mt-2'>
            <p className='font-medium'>SLB만의 노력</p>을 확인하세요
          </span>
        </div>
      </div>
    </section>
  );
};

export default Sub4Section1;
