import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';
import Chip from '../../../ui/chip/chip';

const Sub4Section2: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-2'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo mt-20'
          : 'Slb-Title mt-40'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
    >
      <SlideUpOnView>
        {/* 05/15 변경 -SH */}
        <Chip text='Point 2' type='black' />
        <div
          // className={`${
          //     deviceInfo.isSmallScreen || deviceInfo.isMobile
          //         ? ' mt-20 mb-4'
          //         : 'mb-5 mt-40'
          // }`}
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mt-4'
              : 'mt-6 mb-5'
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
              ? ' Slb-Point-mo flex-col text-center gap-1 mt-1 mb-1'
              : ' Slb-Point gap-2 ml-2 items-end'
          } flex leading-none text-[#FF331F]`}
        >
          <span>초기 창업 비용</span>
          <span>낮춰 드리기 위해</span>
        </p>
        노력합니다
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/1883] mb-0 mt-20'
            : 'aspect-[1904/2159] mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-end w-full h-fit`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_2_1${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp)`,
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
              ? 'Slb-Content-mo mb-6 flex-col gap-1'
              : 'Slb-Content mb-10 gap-2'
          } leading-none flex text-center`}
        >
          <p>SLB는 오픈부터 운영까지 모든 것을</p>
          <p>끝까지 책임지기 위해 노력합니다.</p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Title-mo mb-10 gap-1'
              : 'Slb-Point mb-20 gap-2'
          } flex flex-col items-center text-[#FF331F]`}
        >
          {/* 05/15 변경 -SH */}
          <p>"끝까지 함께 하는 한식X샐러드&포케</p>
          <p>프랜차이즈 SLB와 동행하세요."</p>
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mt-20' : 'mt-40'
        } flex`}
      >
        SLB 맞춤 창업 비용 안내
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center'
            : 'Slb-Content flex-col items-center mt-10 mb-20'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>SLB는 가장 최적의 비용으로 할 수 있는</p>
            <p>인테리어 전문 업체와 되어 있어</p>
            <p>소개해 드리고 있습니다.</p>
            <p className='mt-4'>인테리어 비용 지불은 본사가 아닌</p>
            <p>인테리어 전문 업체와 직접 거래하시면 됩니다</p>
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
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'px-8'
            : 'flex justify-center'
        } w-full`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[657/842] my-6'
              : 'aspect-[1067/844] mb-6 max-w-[1100px]'
          } w-full`}
          alt={`SLB 맞춤 창업 비용 안내`}
          src={`${process.env.PUBLIC_URL}/sub_4/sub_4_2_2${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        />
      </div>
    </section>
  );
};

export default Sub4Section2;
