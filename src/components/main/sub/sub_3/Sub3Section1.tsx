import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub3Section1: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-1'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo'
          : 'Slb-Title'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
    >
      <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ' mt-10 mb-4'
              : 'mb-5 mt-40'
          }`}
        >
          SLB는 점주님과 끝까지 함께 합니다.
        </div>
        <div>우리는 가맹점을</div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col items-center'
              : 'items-end'
          } flex leading-none`}
        >
          <span className='flex items-end'>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? ' Slb-Point-mo'
                  : ' Slb-Point'
              } flex items-end leading-none text-[#FF331F]`}
            >
              '식구'
            </p>
            라고 쓰고
          </span>
          <span className='flex items-end'>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? ' Slb-Point-mo'
                  : ' Slb-Point ml-2'
              } flex items-end leading-none text-[#FF331F]`}
            >
              '가족'
            </p>
            이라고 부릅니다
          </span>
        </div>
      </SlideUpOnView>
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
            ? 'gap-2 mb-10'
            : 'gap-2 mb-40'
        } flex leading-none flex-col items-center`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>SLB의 식구가 되시겠습니까?</p>
          </>
        ) : (
          <>
            <p>SLB의 식구가 되시겠습니까?</p>
          </>
        )}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-10'
            : 'Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        <Chip text='Point 1' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-1 flex-col items-center mt-4'
                : 'mb-2 items-end mt-6'
            } flex leading-none`}
          >
            SLB가 가맹점 점주님을
          </div>
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                } flex items-end leading-none`}
              >
                <p className={`Slb-Point-mo mr-1 text-[#FF331F] leading-none`}>
                  '식구'
                </p>
                라 쓰는 이유?
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
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } text-[#FF331F] leading-none`}
                >
                  '식구'
                </p>
                라 쓰는 이유?
              </div>
            </>
          )}
        </SlideUpOnView>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'my-10 px-4'
            : 'my-10'
        } w-full flex justify-center`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[579/370]'
              : 'max-w-[1300px] aspect-[1139/594]'
          } w-full`}
          alt={`고객이 인정하는 샐러드 포케 맛집`}
          src={`${process.env.PUBLIC_URL}/sub_3/sub_3_1_1.webp`}
        />
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center gap-1 mb-20'
            : 'Slb-Content flex-col items-center mb-40'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>점주님도 SLB 본사가 없다면 존재할 수 없듯이</p>
            <p>본사는 점주님들이 없다면 존재할 수 없기 때문!</p>
            <p className='mt-2'>
              SLB는{' '}
              <span
                className='Slb-SubTitle text-[#FF331F] leading-none bg-no-repeat bg-bottom'
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_1_1_line.webp)`,
                  backgroundSize: 'contain',
                  textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
                }}
              >
                "남이 아닌 내 식구가
              </span>
            </p>
            <p>
              <span
                className='Slb-SubTitle text-[#FF331F] leading-none bg-no-repeat bg-bottom'
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_1_1_line.webp)`,
                  backgroundSize: 'contain',
                  textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
                }}
              >
                하는 매장이다"
              </span>
              라는 마음가짐으로
            </p>
            <p>지원하기 위해 최선을 다합니다.</p>
          </>
        ) : (
          <>
            <p>
              점주님도 SLB 본사가 없다면 존재할 수 없듯이 본사는 점주님들이
              없다면 존재할 수 없기 때문!
            </p>
            <p>
              SLB는{' '}
              <span
                className='Slb-SubTitle text-[#FF331F] leading-none bg-no-repeat bg-bottom pb-1'
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_1_1_line.webp)`,
                  backgroundSize: 'contain',
                  textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
                }}
              >
                "남이 아닌 내 식구가 하는 매장이다"
              </span>
              라는 마음가짐으로
            </p>
            <p>지원하기 위해 최선을 다합니다.</p>
          </>
        )}
      </div>
      <div className='bg-[#F6F6F6] w-full flex flex-col items-center'>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full Slb-Title-mo pt-10'
              : 'w-[1300px] Slb-Title pt-20 mb-20'
          } flex flex-col items-center bg-[#F6F6F6]`}
        >
          <Chip text='Point 2' type='black' />
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-col text-center mt-4'
                  : 'flex-col text-center mt-6'
              } flex`}
            >
              한식X샐러드&포케 전문
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mb-10'
                    : 'Slb-Point mb-20'
                } text-[#FF331F] leading-none`}
              >
                프랜차이즈 SLB 행복가치
              </div>
            </div>
          </SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo flex-col items-center'
                : 'Slb-Content flex-col items-center mb-10'
            } flex`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>SLB는 언제나 가맹점과 고객의 행복가치를</p>
                <p>최우선으로 고민하는 프랜차이즈 브랜드 입니다</p>
              </>
            ) : (
              <>
                <p>SLB는 언제나 가맹점과 고객의 행복가치를</p>
                <p>최우선으로 고민하는 프랜차이즈 브랜드 입니다</p>
              </>
            )}
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-10 px-4 '
                : 'my-10'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'aspect-[630/772]'
                  : 'max-w-[1000px] aspect-[942/423]'
              } w-full`}
              alt={`대한민국을 넘어 세계의 모든 고객들에게 사랑받을 수 있도록 가슴 따뜻한 요리에 마음을 담는다
                가맨점주 한 분 한 분 끝까지 책임질 줄 아는 진정한 프랜차이즈가 될 수 있도록 초심을 잃지 않는 브랜드로 성장한다
                누군가 알아주지 않아도 언제나 최선을 다하며 모든 결과에 책임을 더한다`}
              src={`${process.env.PUBLIC_URL}/sub_3/sub_3_1_2${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
              }.webp`}
            />
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'flex-col text-center gap-1' : 'gap-2'
            } flex`}
          >
            고객, 가맹점, 본사가
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo'
                  : 'Slb-Point'
              } text-[#FF331F] leading-none`}
            >
              함께 성장시켜 나가는 SLB
            </div>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-6'
                : 'mt-10'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'aspect-[165/83] max-w-[30%]'
                  : 'max-w-[243px] aspect-[243/122]'
              } w-full`}
              alt={`SLB`}
              src={`${process.env.PUBLIC_URL}/adminLoginLogo.png`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sub3Section1;
