import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub4Section3: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const item = [
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_9${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `개설 상담 예비 가맹점주님의 자금과
      현재 상황에 맞는 가장 적합한
      1:1 맞춤 창업상담을 통해
      SLB 창업비용, 매출, 수익성을
      검토하실 수 있도록 해드립니다.`,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_8${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `창업 컨설팅 빅데이터를 기반으로 한
      정확한 상권분석 및 입지분석을
      토대로 매장 후보지의 예상매출 추정,
      예상 손익 분석 등을 진행해 드립니다.`,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_7${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `매장 계약 및 가맹 계약 정확한 상권 분석을 통해 확정된
      매장 계약 후 인테리어 시설 집기 등
      개설 금액 협의 진행이 끝나면
      SLB와 가맹 계약을 체결하게 됩니다.`,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_2${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `인테리어 공사
      계약 매장에 최적화된 인테리어 도면과
      인테리어 디자인 등의 협의 진행 후
      공사를 진행합니다.
      공사 진행 시 책임시공 시스템을 통해
      본사가 직접 공사를 관리 감독합니다`,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_3${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `가맹점주 본사 교육
      매장 운영에 필요한 메뉴 조리 교육,
      설비 조작법 습득 교육, 고객 서비스
      응대 교육, 마케팅 교육까지 진행합니다
      추가 교육이 필요한 경우 심화교육 진행
      `,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_4${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `최종 점검
      지정 슈퍼바이저 파견을 통한
      입고 설비에 대한 설치 및 시운전, 원자재
      입고, 인테리어 마감 상태 등
      오픈을 위한 최종 점검을 진행합니다`,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_6${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `오픈
      가맹점주님 매장을 전담하게 될
      담당 슈퍼바이저를 파견해
      4일간 매장 운영, 관리 및 매출 향상을
      위한 판촉 활동을 지원해 드립니다.`,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_5${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `개설 상담 예비 가맹점주님의 자금과
      현재 상황에 맞는 가장 적합한
      1:1 맞춤 창업상담을 통해
      SLB 창업비용, 매출, 수익성을
      검토하실 수 있도록 해드립니다.`,
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_3_1_1${
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
      }.webp`,
      alt: `사후 관리 및 운영 지원
      오픈 이후 담당 슈퍼바이저의
      정기 방문을 통한 운영 지원 및
      매출에 대한 지속적인 관리가
      진행 됩니다.
      `,
    },
  ];
  return (
    <section
      id='section-3'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo mt-20'
          : 'Slb-Title mt-60'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
    >
      <Chip
        text='Point 5'
        type={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'black' : 'black'
        }`}
      />
      <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-SubTitle-mo mt-4 flex flex-col text-center'
              : 'mt-6'
          }`}
        >
          꼼꼼하고 체계적인 SLB 창업 절차
        </div>
      </SlideUpOnView>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'h-2'
            : 'h-20 my-6 w-[1px] border border-black'
        }`}
      />
      <div>SLB와 함께</div>
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo gap-2 mb-1'
                : 'Slb-Point gap-2 my-2'
            } flex items-end leading-none`}
          >
            나만의 평생직장의 꿈을
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ''
                : ' gap-2 mb-20'
            } flex items-end leading-none`}
          >
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo mr-1'
                  : ' '
              } flex items-end leading-none text-[#FF331F]`}
            >
              쉽고 체계적으로 진행
            </p>
            가능
          </div>
        </>
      ) : (
        <>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo gap-2 mb-1'
                : 'Slb-Point gap-2 my-2'
            } flex items-end leading-none`}
          >
            나만의 평생직장의 꿈을
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? ' ' : ' '
              } flex items-end leading-none text-[#FF331F]`}
            >
              쉽고
            </p>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo'
                : 'Slb-Point gap-2 mb-20'
            } flex items-end leading-none`}
          >
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? ' ' : ' '
              } flex items-end leading-none text-[#FF331F]`}
            >
              체계적으로 진행
            </p>
            가능
          </div>
        </>
      )}
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo gap-2 mt-8 mb-10'
            : 'Slb-Content gap-2 mb-20'
        } flex leading-none flex-col items-center`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p className='mb-6'>SLB 개설 과정은?</p>
            <p>
              <span className='font-medium'>
                가맹 계약 후 매장 오픈 까지 총 소요 시간은
              </span>
            </p>
            <p>
              <span className='font-medium'>약 3주~5주 정도</span>
              입니다.
            </p>
            <p>매장 환경에 따라, 배달/홀 매장 형태에</p>
            <p> 따라 일정이 변동될 수 있습니다.</p>
          </>
        ) : (
          <>
            <p className='mb-6'>SLB 개설 과정은?</p>
            <p>
              <span className='font-medium'>
                가맹 계약 후 매장 오픈 까지 총 소요 시간은 약 3주~5주 정도
              </span>
              입니다.
            </p>
            <p>
              매장 환경에 따라, 배달/홀 매장 형태에 따라 일정이 변동될 수
              있습니다.
            </p>
          </>
        )}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo grid grid-cols-1 gap-8 p-8'
            : 'Slb-Content mt-20 mb-60 w-[1100px] grid grid-cols-3 items-center justify-center gap-10'
        } `}
      >
        {item.map((v, idx) => (
          <img
            key={idx}
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'aspect-[531/504]'
                : 'aspect-[310/536]'
            } w-full`}
            alt={v.alt}
            src={v.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Sub4Section3;
