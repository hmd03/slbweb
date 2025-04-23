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
          : 'aspect-[1904/1000] mt-40'
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

  </section>
  );
};

export default Sub3Section4;