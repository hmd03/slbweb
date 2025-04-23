import React from "react";
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub3Section4: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
    id='section-4'
    className={`${
      deviceInfo.isSmallScreen || deviceInfo.isMobile
        ? 'w-full Slb-Title-mo pt-20'
        : 'Slb-Title pt-40'
    } flex flex-col items-center w-full`}
  >
    {/* 이미지 비율 조정 해야함함 */}
  <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'aspect-[431/173] mt-10'
          : 'aspect-[1904/1000] mt-40 mb-40'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit text-White`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_1.webp)`,
      }}
      // 이미지 분리 해야함
    >
      <div className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? ''
            : ''
        } flex leading-none flex-col items-center`}>
      <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ' mt-10'
              : 'mt-[8rem]'
          }`}
        >
          고객이 묻습니다. 카페인가요? 힙한 인테리어
        </div>
        
      </SlideUpOnView>
      <div
        className={`w-[1px]  border border-White  ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'h-10 my-4'
            : 'h-16 my-8'
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
          <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          } flex items-end leading-none`}
        >
          아시나요?
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point'
            } flex items-end leading-none`}
          >
            성공한 맞집=인테리어도 좋다
          </p>
        </div>
          </>
        ) : (
          <>
            <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'flex-col text-center gap-2'
          } flex leading-none`}
        >
          아시나요?
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point'
            } flex items-end leading-none`}
          >
             성공한 맞집=인테리어도 좋다
          </p>
        </div>
          </>
        )}
      </div>
      </div>
      <div className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? ''
            : 'mt-auto'
        } flex leading-none flex-col items-center`}>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo gap-2'
              : 'Slb-Content gap-2'
          } flex leading-none flex-col items-center`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <p>인테리어가 좋다는 것은 단순히 디자인만 좋다가 아닙니다.</p>
              <p>브랜드가 추구하는 컨셉을 얼마나 잘 녹여져있는지 고객의 5감을 만족시킬 수 있는</p>
              <p>인테리어 전략이 있어야만 높은 매출이 나오는 성공한 맛집이 됩니다.</p>
            </>
          ) : (
            <>
              <p>인테리어가 좋다는 것은 단순히 디자인만 좋다가 아닙니다.</p>
              <p>브랜드가 추구하는 컨셉을 얼마나 잘 녹여져있는지 고객의 5감을 만족시킬 수 있는</p>
              <p>인테리어 전략이 있어야만 높은 매출이 나오는 성공한 맛집이 됩니다.</p>
            </>
          )}
        </div>
        {/* 로고 변경 */}
        <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'py-6 px-16 mb-2'
                  : 'w-[30%] mt-6 mb-20'
              }`}
              alt={`SLB샐러드 점`}
              src={`${process.env.PUBLIC_URL}/adminLogo.png`}
            />
      </div>
    </div>
    {/* 통 이미지로 변경 예정 */}
    <Chip
        text='Point 7'
        type={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'black' : 'black'
        }`}
      />
      <SlideUpOnView>
        <div className='flex items-end leading-none mb-2'>
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mt-4'
                : 'Slb-Point mt-6'
            } text-[#FF331F] font-black leading-none`}
          >
            MZ
          </p>
          뿐만 아니라
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mt-4 ml-1'
                : 'Slb-Point mt-6 ml-2'
            } text-[#FF331F] font-black leading-none`}
          >
            모든 고객
          </p>
          을 사로잡는
        </div>
        <div className='flex items-end leading-none mb-10'>
          SLB만의
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mt-4 ml-1'
                : 'Slb-Point ml-2'
            } text-[#FF331F] font-black leading-none`}
          >
            독보적
          </p>
          이고
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mt-4 ml-1'
                : 'Slb-Point ml-2'
            } text-[#FF331F] font-black leading-none`}
          >
            감각적인 인테리어
          </p>
        </div>
      </SlideUpOnView>
      <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'flex-col aspect-[1/1] px-4'
          : ' mt-20 gap-10'
      } flex w-full`}
    >
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'flex-1'
        } w-full aspect-[904/1260]`}
        alt={`독보적이고 감각적인 인테리어`}
        src={`${process.env.PUBLIC_URL}/sub_3/sub_3_4_2${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
        }.webp`}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'flex-1 '
        } flex flex-col justify-center`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-SubTitle-mo items-center my-4'
              : 'Slb-SubTitle mb-12'
          } flex flex-col flex-wrap`}
        >
          <p>
            <span className='font-bold'>
              고객 동선 & 서비스 동선까지 고려한
            </span>
          </p>
          <p>
            <span className='font-bold'>인테리어의 과학적 설계</span>
          </p>
        </div>

        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo w-full items-center'
              : 'Slb-Content pr-6 gap-8'
          } break-keep whitespace-pre-wrap flex flex-col`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <p>보통의 외식브랜드가 단순히 ‘맛’을 위해</p>
              <p className='mb-4'>
                노력하고 있을 때, SLB는 다른 고민을 합니다.
              </p>
              <p>건강한 음식은 맛없다는 편견을 바꾸기 위해</p>
              <p>건강하지 못한 식습관을 개선하기 위한</p>
              <p>노력과 바쁨으로 요리하는 사람도 </p>
              <p>먹는 사람도 만족할 수 있도록 맛과 건강에</p>
              <p>특화된 한국의 ‘식(食)’ 문화를 기반으로</p>
              <p>SLB다운 ‘맛의 정의’를 개발해 샐러드&포케로</p>
              <p className='mb-4'>새로운 외식 문화를 만들어 갑니다.</p>
              <p>고객에게 사랑 받는 남다른</p>
              <p>특별한 ‘맛’으로 기억되는</p>
              <p>독보적인 한식X샐러드&포케 브랜드 SLB</p>
            </>
          ) : (
            <>
              <p>
                프리미엄 한식X샐러드&포케 전문 브랜드로서 고객 경험을 강화하기 위해 모던함에 한국의 전통적인 정신을 계승하기 위해 비움과 절제의 미학을 반영했고,
              </p>
              <p>
                우리 민족이 가장 좋아하고 숭상하는 빛, 순수함, 깨끗함을 뜻하는 흰색을 메인 컬러로 활용해 SLB만의 인테리어 디자인을 완성했습니다.
              </p>
              <p>
                또한, 요리 퍼포먼스와 청결함을 고객에게 확인시켜 줄 수 있는 오픈 키친으로 고객에게 좋은 인상을 남기고 있습니다.
              </p>
              <p>SLB는 단순한 유행을 따라가는 것이 아닌 SLB만의 '힙'함을 브랜드에 녹여내기 위해 오랜 시간 고민하고 수많은 디자인 트렌드 연구를 통해 현재의 인테리어 디자인을 개발 할 수 있었습니다.</p>
            </>
          )}
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-SubTitle-mo items-center'
              : 'Slb-SubTitle gap-2 mt-10'
          } flex flex-col flex-wrap`}
        >
          <p>
            시작부터 남다른 SLB의 고집이 만들어낸
          </p>
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo'
                : 'Slb-Point'
            } text-[#FF331F] font-black leading-none`}
          >
            수익형 인테리어의 완성
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Sub3Section4;