import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';
import Chip from '../../../ui/chip/chip';
import DividerWithLabel from '../../../ui/label/DividerWithLabel';

const Sub4Section1: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const desc = [
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_1_8.webp`,
      alt: 'SLB는 QSC(가맹점의 메뉴 매뉴얼, 고객 서비스, 매장 청결)를 전담 슈퍼바이저를 통해 주기적으로 점검해 고객에게 최상의 메뉴와 서비스를 제공 할 수 있도록 지원하고 있습니다',
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_1_9.webp`,
      alt: 'SLB는 SNS채널을 통해 SLB의 브랜드 및 가맹점 정보를 알리고 고객과 소통하며 고객에게 사랑 받을 수 있는 브랜드가 되도록 노력하고 있습니다.',
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_1_10.webp`,
      alt: 'SLB는 체험단 운영을 통해 각 가맹점을 홍보할 수 있도록 지원하고 있으며, 검색 포털 지도 검색 등 추가 홍보수단을 본사가 통합 관리해 가맹점 매출을 높이는 노력을 진행 중입니다.',
    },
    {
      img: `${process.env.PUBLIC_URL}/sub_4/sub_4_1_11.webp`,
      alt: 'SLB는 각 매장 별 전담 슈퍼바이저를 통해 주변 상권분석, 경쟁사 분석, 고객 동선 분석 등을 통해 가장 적합한 매장 홍보 방안을 제안해 가맹점 매출과 수익을 높일 수 있도록 지원하고 있습니다.',
    },
  ];

  return (
    <section
      id='section-1'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'w-full Slb-Title-mo'
          : 'Slb-Title'
      } flex flex-col items-center w-full`}
    >
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/1024] mb-0'
            : 'aspect-[1904/1140] mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center w-full h-fit text-White`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_1_1${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          } flex leading-none flex-col items-center`}
        >
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? ''
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
              <>
                <div className='flex flex-col items-center'>
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-4'
                        : ''
                    } flex items-center leading-none`}
                  >
                    SLB는 어떤 상권에서도
                    <p
                      className={`
                        bg-[#FF331F] py-2 px-1`}
                    >
                      매출 걱정 NO
                    </p>
                  </div>
                  <div className='flex flex-col text-center gap-2 leading-none Slb-Content-mo mb-4'>
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
                    본사와 가맹점이
                    <span className='Slb-Point-mo ml-2 mb-6'>
                      함께 노력했기 때문!
                    </span>
                  </p>
                  <div className='Slb-Content-mo text-center py-4 gap-2 flex flex-col border-y-[1px] border-White mx-8'>
                    <p>본사만 노력한다고 해서 매출이 더 </p>
                    <p>높아지지도</p>
                    <p>점주님만 노력한다고 해서 매출이</p>
                    <p>더 높아지는 것은 아닙니다.</p>
                    <p>본사와 가맹점이 함께 노력할 때 높은 매출과</p>
                    <p>안정적인 수익창출이 가능합니다.</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'text-White'
                        : ''
                    } flex items-center leading-none`}
                  >
                    SLB는 어떤 상권에서도
                    <p
                      className={`
                        bg-[#FF331F] ml-2 py-2 px-1`}
                    >
                      매출 걱정 NO
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
            ? 'aspect-[720/308] mb-0 Slb-SubTitle-mo'
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
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'h-4'
              : 'h-16 my-10 w-[1px] border border-Black '
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
            ? 'aspect-[720/153] pb-[5%] mb-0'
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
              : 'Slb-Content'
          } leading-none flex text-center flex-col`}
        >
          가맹점의 매출과 수익을 높이기 위한
          <span className='flex gap-2 justify-center mt-2'>
            <p className='font-medium'>SLB만의 노력</p>을 확인하세요
          </span>
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        <Chip text='Point 1' type='black' />
        <SlideUpOnView>
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-4 Slb-Content-mo mb-1'
                    : 'mt-6 mb-4'
                } flex items-end leading-none`}
              >
                매출을 높일 수 있는 전문가의 상권 분석으로
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1 flex-col items-center gap-1'
                    : 'mb-20 items-end'
                } flex leading-none`}
              >
                <span
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Title-mo'
                      : 'Slb-Point'
                  } flex items-end`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo'
                        : ''
                    } text-[#FF331F] leading-none`}
                  >
                    최적의 매장 입지
                  </p>
                  를
                </span>
                <span
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Title-mo'
                      : 'Slb-Point'
                  } flex items-end`}
                >
                  선정할 수 있도록 지원!
                </span>
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ''
                    : 'mt-6 mb-4'
                } flex items-end leading-none`}
              >
                매출을 높일 수 있는 전문가의 상권 분석으로
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1 flex-col items-center'
                    : 'mb-20 items-end'
                } flex leading-none`}
              >
                <span
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } flex items-end`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                    } text-[#FF331F] leading-none`}
                  >
                    최적의 매장 입지
                  </p>
                  를 선정할 수 있도록 지원!
                </span>
              </div>
            </>
          )}
        </SlideUpOnView>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center'
            : 'Slb-Content flex-col items-center mb-6'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>빅데이터 분석을 통한 전문적인 상권분석으로</p>
            <p>최적의 매장 입지를 선정할 수 있도록</p>
            <p>10년 이상의 상권분석 노하우를 가진 전문가를</p>
            <p>지원하고 있습니다</p>
          </>
        ) : (
          <>
            <p>
              빅데이터 분석을 통한 전문적인 상권분석으로 최적의 매장 입지를
              선정할 수 있도록
            </p>
            <p>10년 이상의 상권분석 노하우를 가진 전문가를 지원하고 있습니다</p>
          </>
        )}
      </div>
      {/**
       * 05/04 변경 -SH
       * - 빅데이터 분석 이미지
       *  ㆍPC : w-full -> max-w-[1100px]
       *  ㆍMobile : w-[280px] max-w-full mx-auto 추가
       * - 상권 분석 이미지
       *  ㆍ이미지 통합, div background서 분리
       *  ㆍDividerWithLabel 높이 조절 불가로 수정
       */}
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'px-8'
            : 'max-w-[1100px]'
        } w-full`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-[280px] max-w-full mx-auto aspect-[623/1200] my-20'
              : 'w-full aspect-[1904/427] my-40'
          }`}
          alt={`상권DB 유동인구DB 인구DB 부동산DB 매출DB 지역특성DB`}
          src={`${process.env.PUBLIC_URL}/sub_4/sub_4_1_4${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        />
      </div>
      <div
        className={`w-full bg-[#f0f0f0] flex flex-col items-center ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'pt-10' : 'pt-20'
        }`}
      >
        <div
          className={` ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-10' : 'mb-20'
          }`}
        >
          <img
            loading='lazy'
            className={`w-full mx-auto object-cover
                            ${
                              deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? ''
                                : 'max-w-[1000px]'
                            }`}
            src={`${process.env.PUBLIC_URL}/sub_4/sub_4_1_5.webp`}
            alt='상권분석 차트'
          />
        </div>
        <div className='w-full flex justify-center'>
          <div
            className={`w-full flex flex-col items-center ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ''
                : 'max-w-[1300px] pt-16 px-6 pb-24 '
            }`}
          >
            <DividerWithLabel label='Q. 상권 분석을 하는 이유는?' />
            <div
              className={`flex flex-col items-center ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo'
                  : 'Slb-Content mt-10'
              }`}
            >
              {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                <>
                  <p className='flex flex-col text-center my-6'>
                    <span className='font-medium'>
                      지속적으로 높은 매출이 발생될 수 있는지
                    </span>
                    <p>
                      <span className='font-medium'>여부를 확인하는절차</span>
                      입니다
                    </p>
                  </p>
                  <p>상권분석은 향후 매출을 분석해 유추해 볼 수 있는</p>
                  <p>
                    토대가 되므로
                    <span className='font-medium'>
                      상권분석 전문가의 체계적이고
                    </span>
                  </p>
                  <p className='mb-6'>
                    <span className='font-medium'>
                      과학적인 접근을 통한 분석
                    </span>
                    이 필요합니다.
                  </p>
                  <p>SLB는 본사 아이템의 특성에 가장 적합한 입지를</p>
                  <p>상권분석 시스템으로후보지를 선정하는</p>
                  <p className='mb-6'>한편 예비 창업주님의 창업 비용에 맞는</p>
                </>
              ) : (
                <>
                  <p className='mb-6'>
                    <span className='font-medium'>
                      지속적으로 높은 매출이 발생될 수 있는지 여부를
                      확인하는절차
                    </span>
                    입니다.
                  </p>
                  <p>
                    상권분석은 향후 매출을 분석해 유추해 볼 수 있는 토대가
                    되므로
                  </p>
                  <p className='mb-6'>
                    <span className='font-medium'>
                      상권분석 전문가의 체계적이고 과학적인 접근을 통한 분석
                    </span>
                    이 필요합니다.
                  </p>
                  <p>
                    SLB는 본사 아이템의 특성에 가장 적합한 입지를 상권분석
                    시스템으로
                  </p>
                  <p className='mb-6'>
                    후보지를 선정하는 한편 예비 창업주님의 창업 비용에 맞는
                  </p>
                </>
              )}
            </div>
            <div
              className={`flex items-center ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Title-mo'
                  : 'Slb-Point mb-4'
              }`}
            >
              <span
                className='text-[#FF331F] leading-none bg-no-repeat bg-bottom pb-2'
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_1_1_line.webp)`,
                  backgroundSize: 'contain',
                  textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
                }}
              >
                적합한 상권을 찾아
              </span>
            </div>
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo flex-col mt-4'
                    : ''
                } flex items-center`}
              >
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-SubTitle-mo'
                      : ''
                  } flex items-center`}
                >
                  가장
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo'
                        : 'Slb-Point'
                    }
              text-[#FF331F]`}
                  >
                    <span className=' bg-[#FF331F] ml-1 px-1 text-White'>
                      우수한 매장
                    </span>
                    을
                  </p>
                  을
                </div>

                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-SubTitle-mo'
                      : ''
                  } flex items-center`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo mr-1'
                        : 'Slb-Point'
                    }
              text-[#FF331F]`}
                  >
                    선별 및 제안
                  </p>
                  합니다.
                </div>
              </div>
            ) : (
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo'
                    : ''
                } flex items-center`}
              >
                가장
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point mr-2'
                  }
              text-[#FF331F]`}
                >
                  <span className=' bg-[#FF331F] mx-2 py-1 px-1 text-White'>
                    우수한 매장
                  </span>
                  을 선별 및 제안
                </p>
                합니다.
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        {/* 05/15 변경 -SH */}
        {/* <Chip text='Point 2' type='black' /> */}
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4 mb-1'
                : 'mt-6 mb-4'
            } flex items-end leading-none`}
          >
            물류비 안정화를 통한
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-1 flex-col items-center'
                : 'mb-20 items-end'
            } flex leading-none`}
          >
            <span
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo'
                  : 'Slb-Point'
              } flex items-end`}
            >
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                } text-[#FF331F] leading-none`}
              >
                가맹점 매출 및 수익성 UP
              </p>
            </span>
          </div>
        </SlideUpOnView>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center'
            : 'Slb-Content flex-col items-center mb-20'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>SLB는 본사의 가장 중요한 역할 중</p>
            <p>하나 물류비용의 안정화</p>
          </>
        ) : (
          <>
            <p>SLB는 본사의 가장 중요한 역할 중 하나 물류비용의 안정화</p>
          </>
        )}
      </div>
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/318] my-6'
            : 'aspect-[1067/276] mb-6 max-w-[1100px]'
        } w-full`}
        alt={`현재 경기 성장률은 낮고, 물가는 매년 상승 중 물류비용 또한 상승하는 것은 당연한 일입니다.`}
        src={`${process.env.PUBLIC_URL}/sub_4/sub_4_1_6${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
        }.webp`}
      />
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/318] my-6'
            : 'aspect-[1067/276] mb-20 max-w-[1100px]'
        } w-full`}
        alt={`하지만 SLB는 물가 상승에 따른 물류 비용 상승을 막기 위해 원부자재 업체 개발 노력을 지속 진행 중입니다.`}
        src={`${process.env.PUBLIC_URL}/sub_4/sub_4_1_7${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
        }.webp`}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        {/* 05/15 변경 -SH */}
        {/* <Chip text='Point 3' type='black' /> */}
        <SlideUpOnView>
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-4 mb-1'
                    : ''
                } flex items-end leading-none`}
              >
                <p className='Slb-Point-mo'>안정적인 매출</p>을 지속적으로
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1'
                    : 'mt-2 mb-4'
                } flex items-end leading-none`}
              >
                <p className='Slb-Point-mo'>유지</p>하기 위해
                <p className='Slb-Point-mo ml-2'>가장 중요한 것?</p>
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1 flex-col items-center'
                    : 'mb-20 items-end'
                } flex leading-none`}
              >
                <span
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Title-mo mb-1'
                      : 'Slb-Title'
                  } flex items-end`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo'
                        : ''
                    } text-[#FF331F] leading-none`}
                  >
                    고객이 인정한 맛집
                  </p>
                  이
                </span>
                되는 것입니다.
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'mt-6'
                } flex items-end leading-none`}
              >
                <p className='Slb-Point'>안정적인 매출</p>을 지속적으로
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ''
                    : 'mt-6 mb-4'
                } flex items-end leading-none`}
              >
                <p className='Slb-Point'>유지</p>하기 위해
                <p className='Slb-Point ml-2'>가장 중요한 것?</p>
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1 flex-col items-center'
                    : 'mb-20 items-end'
                } flex leading-none`}
              >
                <span
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } flex items-end`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                    } text-[#FF331F] leading-none`}
                  >
                    고객이 인정한 맛집
                  </p>
                  이 되는 것입니다.
                </span>
              </div>
            </>
          )}
        </SlideUpOnView>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center'
            : 'Slb-Content flex-col items-center mt-6 mb-6'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>SLB는 모든 메뉴가 '맛'있다고 자부하지만</p>
            <p>'맛'만 있다고 [맛집]이 되는 것은 아닙니다.</p>
            <p>많은 고객이 SLB의</p>
            <p>'맛'있는 메뉴들을 드셔볼 수 있도록</p>
            <p className='font-medium'>
              본사와 가맹점주 모두의 노력이 필요합니다.
            </p>
          </>
        ) : (
          <>
            <p>SLB는 모든 메뉴가 '맛'있다고 자부하지만 '맛'만 있다고</p>
            <p>[맛집]이 되는 것은 아닙니다.</p>
            <p>많은 고객이 SLB의 '맛'있는 메뉴들을 드셔볼 수 있도록</p>
            <p className='font-medium'>
              본사와 가맹점주 모두의 노력이 필요합니다.
            </p>
          </>
        )}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo grid grid-cols-1 gap-6 p-10'
            : 'Slb-Content mt-20 mb-20 w-[1100px] grid grid-cols-2 items-center justify-center gap-10'
        } `}
      >
        {desc.map((v, idx) => (
          <img
            key={idx}
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'aspect-[534/489]'
                : 'aspect-[513/415]'
            } w-full`}
            alt={v.alt}
            src={v.img}
          />
        ))}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'mt-10'
            : 'mt-40 aspect-[1904/1000]'
        }  bg-no-repeat bg-center w-full flex flex-col items-center`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_2${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }_background.webp)`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full  pt-10'
              : 'w-[1300px]  pt-20'
          } flex flex-col items-center h-full font-semibold`}
        >
          {/* 05/15 변경 -SH */}
          {/* <Chip text='Point 4' type='white' /> */}
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-White Slb-Point-mo'
                  : 'text-White Slb-Point'
              } flex items-end leading-none mt-6 mb-4`}
            >
              어떤 상권에도 매출 걱정 없는 SLB
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Title-mo  flex flex-col items-center gap-1'
                  : 'Slb-Title  flex justify-center gap-2'
              } text-White leading-none`}
            >
              <p>매력적인 브랜드는 고객이</p> <p>찾아오게 만든다!</p>
            </div>
          </SlideUpOnView>
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <div
              className={`w-full mt-6 mb-10 px-10 flex flex-col justify-around items-center`}
            >
              <div className=''>
                <img
                  loading='lazy'
                  className='w-full rounded-t'
                  alt='평균매출 7,350만원 9천4백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_mo_3.webp`}
                />
              </div>
              <div className=''>
                <img
                  loading='lazy'
                  className='w-full rounded-t'
                  alt='평균매출 4,700만원 8천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_mo_2.webp`}
                />
              </div>
              <div className=''>
                <img
                  loading='lazy'
                  className='w-full rounded-t'
                  alt='평균매출 7,960만원 7천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_mo_1.webp`}
                />
              </div>
            </div>
          ) : (
            <div className={`w-[1000px] mt-20 mx-auto flex justify-around`}>
              <div className='w-[31%]'>
                <img
                  loading='lazy'
                  className='w-full rounded-t'
                  alt='평균매출 7,350만원 9천4백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_store_1.webp`}
                />
              </div>
              <div className='w-[31%]'>
                <img
                  loading='lazy'
                  className='w-full rounded-t'
                  alt='평균매출 4,700만원 8천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_store_2.webp`}
                />
              </div>
              <div className='w-[31%]'>
                <img
                  loading='lazy'
                  className='w-full rounded-t'
                  alt='평균매출 7,960만원 7천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_store_3.webp`}
                />
              </div>
            </div>
          )}
        </div>
        <span
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col text-center'
              : 'gap-2'
          } flex `}
        >
          <p>SLB의 수익률을</p>
          <p>확인해 보세요</p>
        </span>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'px-8' : ''
        } flex flex-col`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[626/589] my-6'
              : 'aspect-[1066/588] my-20 max-w-[1000px]'
          } w-full`}
          alt={`현재 경기 성장률은 낮고, 물가는 매년 상승 중 물류비용 또한 상승하는 것은 당연한 일입니다.`}
          src={`${process.env.PUBLIC_URL}/sub_4/sub_4_1_12${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        />
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[626/589] my-6'
              : 'aspect-[1066/588] max-w-[1000px] mb-20'
          } w-full`}
          alt={`현재 경기 성장률은 낮고, 물가는 매년 상승 중 물류비용 또한 상승하는 것은 당연한 일입니다.`}
          src={`${process.env.PUBLIC_URL}/sub_4/sub_4_1_13${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        />
      </div>
    </section>
  );
};

export default Sub4Section1;
