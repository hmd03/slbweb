import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import DividerWithLabel from '../../ui/label/DividerWithLabel';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';

const Point4Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
  <>
  <section
    className={`${
      deviceInfo.isSmallScreen || deviceInfo.isMobile
        ? 'w-full text-m_mainContent pt-20'
        : 'w-[1300px] Slb-Title pt-40'
    } flex flex-col items-center font-semibold`}
  >
    <Chip text='Point 4' type='black' />
    <SlideUpOnView>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo mt-4'
            : 'Slb-Title mt-6'
        }  `}
      >
        성공한 맛집 = 인테리어도 좋다!
      </div>
      <div
        className={`flex ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo flex-col items-center mb-10'
            : 'Slb-Title items-end mb-20'
        }  leading-none `}
      >
        고객이 트렌디하다고 말하는
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'text-title'
              : 'Slb-Point'
          } text-[#FF331F] leading-none ml-2`}
        >
          SLB 인테리어
        </p>
      </div>
    </SlideUpOnView>
  </section>
  <section
    className={`${
      deviceInfo.isSmallScreen || deviceInfo.isMobile
        ? 'w-full px-8'
        : 'w-[1300px]'
    }`}
  >
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'bg-contain bg-no-repeat bg-top flex flex-col min-h-[800px] items-center pt-10 text-third justify-between aspect-[10/15] mb-20'
          : 'Slb-SubTitle mb-40 bg-no-repeat bg-center bg-cover flex flex-col items-center h-[80vh]'
      } w-full`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_4_${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mo_' : ''
        }background.png)`,
      }}
    >
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <div className='invisible'>
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'p-2'
                : 'ml-[25%] py-2 px-20 '
            } bg-[#F1F2F2] w-fit break-keep`}
          >
            SLB의 경쟁력 고객이 먼저 알아봅니다.
          </div>
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'text-center p-2'
                : 'w-[35%] py-10 px-8 mt-auto mb-40 mr-[30%] text-right '
            } bg-[#F1F2F2] break-keep`}
          >
            SLB의 수익형 인테리어
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail mt-2'
                  : 'Slb-Content'
              } break-keep`}
            >
              오랜 기간 고객 동선과
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'Slb-Content'
              } break-keep`}
            >
              서비스 동선까지 고려한 과학적 설계와
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'Slb-Content'
              } break-keep`}
            >
              우리민족 고유의 절제와 비움에 미학을 반영한
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'Slb-Content'
              } break-keep`}
            >
              모던하고 감각적인 인테리어 디자인으로
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'Slb-Content'
              } break-keep`}
            >
              SLB만의 수익형 인테리어를 완성하였습니다.
            </p>
          </div>
        </div>
      ) : (
        // 이미지로 교체
        <div className='invisible'>
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'p-2'
                : 'ml-[25%] py-2 px-20 '
            } bg-[#F1F2F2] w-fit break-keep`}
          >
            SLB의 경쟁력 고객이 먼저 알아봅니다.
          </div>
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'text-center p-2'
                : 'Slb-SubTitle w-[35%] py-10 px-8 mt-auto mb-40 mr-[30%] text-right '
            } bg-[#F1F2F2] break-keep`}
          >
            SLB의 수익형 인테리어
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail mt-2'
                  : 'Slb-Content'
              } break-keep`}
            >
              오랜 기간 고객 동선과
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'Slb-Content'
              } break-keep`}
            >
              서비스 동선까지 고려한 과학적 설계와
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'Slb-Content'
              } break-keep`}
            >
              우리민족 고유의 절제와 비움에 미학을 반영한
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'Slb-Content'
              } break-keep`}
            >
              모던하고 감각적인 인테리어 디자인으로
            </p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-detail'
                  : 'tSlb-Content'
              } break-keep`}
            >
              SLB만의 수익형 인테리어를 완성하였습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  </section>
  <DividerWithLabel label='Q. 상권선점을 위해서는?' />
  <section
    className={`${
      deviceInfo.isSmallScreen || deviceInfo.isMobile
        ? 'Slb-SubTitle-mo mb-20'
        : 'Slb-SubTitle mb-40'
    } flex flex-col items-center leading-none mt-8 font-black`}
  >
    <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-SubTitle-mo'
          : 'Slb-Title'
      } mt-2 mb-2`}
    >
      좋은 상권은 기다려주지 않습니다. 놓치지 마세요!
    </div>
    <p
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Point-mo pb-2 px-2'
          : 'Slb-Point pb-5 px-4'
      } pt-2 text-center text-[#FF331F] leading-none bg-no-repeat bg-bottom`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_4_line.webp)`,
        backgroundSize: 'contain',
        textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
      }}
    >
      SLB를 선점할 수 있는 기회
    </p>
  </section>
  </>
  );
}
      

export default Point4Section;