import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub4Section2: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-2'
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
          과하지 않은 맞춤 창업 비용
        </div>
      </SlideUpOnView>
      <div
        className={`w-[1px]  border border-black  ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'h-10 my-4'
            : 'h-20 my-6'
        }`}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-col items-center'
            : 'flex-col items-center gap-2 mb-40'
        } flex leading-none`}
      >
        SLB는 예비창업자님들의
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point ml-2'
            } flex items-end leading-none text-[#FF331F]`}
          >
            초기 창업 비용 낮춰 드리기 위해
          </p>
          노력합니다
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/313] mb-0'
            : 'aspect-[1904/2159] mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-end w-full h-fit`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_2_1.webp)`,
        }}
      >
        <div
          aria-label='초기 창업비용을 줄이기 위한 노력의 일환으로
                      인테리어 전문업체와 직접 거래하실 수 있도록
                      ‘인테리어 직거래 시스템’을 도입하였고,
                      직접 거래를 하시더라도 본사는 인테리어 전문 업체가
                      걱정없이 원활한 공사가 이루어지도록 관리 감독하는
                      ‘책임시공 시스템’을 운영하고 있습니다.'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content mb-10'
          } leading-none flex text-center`}
        >
          SLB는 오픈부터 운영까지 모든 것을 끝까지 책임지기 위해 노력합니다.
        </div>
        <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'Slb-Point-mo' : 'Slb-Point mb-20 gap-2'
            } flex flex-col items-center text-[#FF331F]`}
          >
            <p>"끝까지 함꼐 하는 한식X샐러드&포케</p>
            <p>프랜차이즈 SLB와 동행하세요."</p>
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? ''
            : 'mt-40'
        } flex`}
      >SLB 맞춤 창업 비용 안내내</div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center'
            : 'Slb-Content flex-col items-center mt-10 mb-20'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>SLB는 가장 최적의 비용으로 할 수 있는 인테리어 전문 업체와</p>
            <p>되어 있어 소개해 드리고 있습니다.</p>
            <p>인테리어 비용 지불은 본사가 아닌 인테리어 전문 업체와</p>
            <p>직접 거래하시면 됩니다</p>
          </>
        ) : (
          <>
            <p>SLB는 가장 최적의 비용으로 할 수 있는 인테리어 전문 업체와</p>
            <p>되어 있어 소개해 드리고 있습니다.</p>
            <p>인테리어 비용 지불은 본사가 아닌 인테리어 전문 업체와</p>
            <p>직접 거래하시면 됩니다</p>
          </>
        )}
      </div>
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-1 max-w-[250px] my-6'
            : 'aspect-[1067/844] mb-6 max-w-[1100px]'
        } w-full`}
        alt={`SLB 맞춤 창업 비용 안내`}
        src={`${process.env.PUBLIC_URL}/sub_4/sub_4_2_2.webp`}
      />
    </section>
  );
};

export default Sub4Section2;
