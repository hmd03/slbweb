import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';
import DividerWithLabel from '../../../ui/label/DividerWithLabel';

const Sub3Section4: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-4'
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
            : 'aspect-[1904/680] mb-0'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center w-full h-fit text-White`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_1_1.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'invisible'
              : 'flex leading-none flex-col items-center'
          } `}
        >
          <SlideUpOnView>
            {/* 05/15 변경 -SH */}
            <Chip text='Point 4' type='black' />
            <div className={`mt-6`}>
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
                ? 'gap-2'
                : 'gap-2'
            } flex leading-none flex-col items-center`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <div className='invisible'>
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
              </div>
            ) : (
              <>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? ''
                      : 'flex-col text-center gap-2'
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
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/291] mt-[-1px] pt-2 mb-20'
            : 'aspect-[1904/376] mt-[-1px]'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center w-full h-fit text-White`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_1_2.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          } flex leading-none flex-col items-center`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'text-[12px] gap-2 mb-4'
                : 'Slb-Content gap-2 mb-6'
            } flex leading-none flex-col items-center`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>인테리어가 좋다는 것은 단순히 디자인만 좋다가 아닙니다.</p>
                <p>브랜드가 추구하는 컨셉을 얼마나 잘 녹여져 있는지</p>
                <p>고객의 5감을 만족시킬 수 있는 인테리어 전략이 있어야만</p>
                <p>높은 매출이 나오는 성공한 맛집이 됩니다.</p>
              </>
            ) : (
              <>
                <p>인테리어가 좋다는 것은 단순히 디자인만 좋다가 아닙니다.</p>
                <p>
                  브랜드가 추구하는 컨셉을 얼마나 잘 녹여져 있는지 고객의 5감을
                  만족시킬 수 있는
                </p>
                <p>
                  인테리어 전략이 있어야만 높은 매출이 나오는 성공한 맛집이
                  됩니다.
                </p>
              </>
            )}
          </div>
          <img
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-[20%] aspect-[131/72]'
                : 'w-[20%] aspect-[251/138]'
            } `}
            alt={`SLB샐러드 점`}
            src={`${process.env.PUBLIC_URL}/sub_3/sub_3_4_1_3.webp`}
          />
        </div>
      </div>
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          {/* 05/15 변경 -SH */}
          {/* <Chip
                        text='Point 7'
                        type={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'black'
                                : 'black'
                        }`}
                    /> */}
          <SlideUpOnView>
            <div className='flex flex-col items-center leading-none mt-4 mb-2 gap-1'>
              <span className='flex items-end '>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point mt-6'
                  } text-[#FF331F] font-black leading-none`}
                >
                  MZ
                </p>
                뿐만 아니라
              </span>
              <span className='flex items-end'>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo '
                      : 'Slb-Point mt-6 ml-2'
                  } text-[#FF331F] font-black leading-none`}
                >
                  모든 고객
                </p>
                을 사로잡는
              </span>
            </div>
            <div className='flex flex-col items-end justify-end leading-none mb-10 gap-1'>
              <span className='flex items-end'>
                SLB만의
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point ml-2'
                  } text-[#FF331F] font-black leading-none`}
                >
                  독보적
                </p>
                이고
              </span>
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo'
                    : 'Slb-Point ml-2'
                } text-[#FF331F] font-black leading-none`}
              >
                감각적인 인테리어
              </p>
            </div>
          </SlideUpOnView>
        </>
      ) : (
        <></>
      )}
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          <div
            className='aspect-[720/720] bg-no-repeat bg-cover bg-top flex flex-col items-center w-full justify-end'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_2_mo.webp)`,
            }}
          ></div>
          <div className='flex flex-col w-full pb-10 bg-[#F2F2F2]'>
            <div className='Slb-SubTitle-mo flex flex-col items-center mb-4 mt-12'>
              <p>
                <span className='font-bold'>
                  고객 동선 & 서비스 동선까지 고려한
                </span>
              </p>
              <p>
                <span className='font-bold'>인테리어의 과학적 설계</span>
              </p>
            </div>

            <div className='Slb-Content-mo w-full flex flex-col items-center text-center'>
              <DividerWithLabel label='비움과 절제의 미학' />
              <div className='mt-4 mb-8'>
                <p>프리미엄 한식X샐러드&포케 전문 브랜드로서</p>
                <p>고객 경험을 강화하기 위해 모던함에</p>
                <p>한국의 전통적인 정신을 계승하기 위해</p>
                <p>비움과 절제의 미학을 반영했고,</p>
              </div>
              <DividerWithLabel label='순수함과 깨끗함' />
              <div className='mt-4 mb-8'>
                <p>우리 민족이 가장 좋아하고 숭상하는 빛,</p>
                <p>순수함, 깨끗함을 뜻하는 흰색을 메인 컬러로 활용해</p>
                <p>SLB만의 인테리어 디자인을 완성했습니다.</p>
              </div>
              <DividerWithLabel label='오픈 키친' />
              <div className='mt-4 mb-8'>
                <p>또한, 요리 퍼포먼스와 청결함을 고객에게</p>
                <p>확인시켜 줄 수 있는 오픈 키친으로</p>
                <p>고객에게 좋은 인상을 남기고 있습니다.</p>
              </div>
              <DividerWithLabel label='끊임없는 연구' />
              <div className='mt-4 mb-8'>
                <p>SLB는 단순한 유행을 따라가는 것이 아닌</p>
                <p>SLB만의 '힙'함을 브랜드에 녹여내기 위해</p>
                <p>오랜 시간 고민하고 수많은 디자인 트렌드 연구를 통해</p>
                <p>현재의 인테리어 디자인을 개발 할 수 있었습니다.</p>
              </div>
            </div>

            <div className='Slb-SubTitle-mo flex flex-col items-center'>
              <p>시작부터 남다른 SLB의 고집이 만들어낸</p>
              <p className='Slb-Point-mo text-[#FF331F] font-black leading-none'>
                수익형 인테리어의 완성
              </p>
            </div>
          </div>
        </>
      ) : (
        <div
          className='aspect-[1904/1891] bg-no-repeat bg-cover bg-center mb-40 pt-60 h-fit flex flex-col items-center w-full'
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_2.webp)`,
          }}
        >
          <SlideUpOnView>
            <div className='flex items-end leading-none mb-2'>
              <p className='Slb-Point mt-6 text-[#FF331F] font-black'>MZ</p>
              뿐만 아니라
              <p className='Slb-Point mt-6 ml-2 text-[#FF331F] font-black'>
                모든 고객
              </p>
              을 사로잡는
            </div>
            <div className='flex items-end leading-none mb-10'>
              SLB만의
              <p className='Slb-Point ml-2 text-[#FF331F] font-black'>독보적</p>
              이고
              <p className='Slb-Point ml-2 text-[#FF331F] font-black'>
                감각적인 인테리어
              </p>
            </div>
          </SlideUpOnView>

          <div className='flex w-full mt-auto mb-80 gap-10 max-w-[1300px] justify-end'>
            <div className='w-[45%] flex flex-col justify-center'>
              <div className='Slb-SubTitle mb-12 flex flex-col'>
                <p>
                  <span className='font-bold'>
                    고객 동선 & 서비스 동선까지 고려한
                  </span>
                </p>
                <p>
                  <span className='font-bold'>인테리어의 과학적 설계</span>
                </p>
              </div>
              <div className='Slb-Content pr-6 gap-8 break-keep whitespace-pre-wrap flex flex-col'>
                <p>
                  프리미엄 한식X샐러드&포케 전문 브랜드로서 고객 경험을 강화하기
                  위해 모던함에 한국의 전통적인 정신을 계승하기 위해 비움과
                  절제의 미학을 반영했고,
                </p>
                <p>
                  우리 민족이 가장 좋아하고 숭상하는 빛, 순수함, 깨끗함을 뜻하는
                  흰색을 메인 컬러로 활용해 SLB만의 인테리어 디자인을
                  완성했습니다.
                </p>
                <p>
                  또한, 요리 퍼포먼스와 청결함을 고객에게 확인시켜 줄 수 있는
                  오픈 키친으로 고객에게 좋은 인상을 남기고 있습니다.
                </p>
                <p>
                  SLB는 단순한 유행을 따라가는 것이 아닌 SLB만의 '힙'함을
                  브랜드에 녹여내기 위해 오랜 시간 고민하고 수많은 디자인 트렌드
                  연구를 통해 현재의 인테리어 디자인을 개발 할 수 있었습니다.
                </p>
              </div>
              <div className='Slb-SubTitle gap-2 mt-10 flex flex-col'>
                <p>시작부터 남다른 SLB의 고집이 만들어낸</p>
                <p className='Slb-Point text-[#FF331F] font-black leading-none'>
                  수익형 인테리어의 완성
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[762/1696] my-20 w-full'
            : 'aspect-[1904/3286] mb-40 flex flex-col items-center justify-center w-full h-fit'
        } bg-no-repeat bg-center bg-cover `}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_3.webp)`,
        }}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-10'
            : 'Slb-Title'
        } flex flex-col items-center`}
      >
        {/* 05/15 변경 -SH */}
        {/* {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
                    <div className='flex w-full items-center px-4'>
                        <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
                        <Chip text='Point 8' type='black' />
                        <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
                    </div>
                ) : (
                    <Chip text='Point 8' type='black' />
                )} */}
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-1 flex-col items-center mt-4'
                : 'mb-2 items-end mt-6'
            } flex leading-none`}
          >
            <span
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'my-1 flex-col text-center'
                  : 'flex-col text-center gap-2'
              } flex `}
            >
              <p>배달형 딜리버리 매장은</p>
              <p>브랜드 컨셉을 표현할 수 있는</p>
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mx-1 my-4'
                    : 'Slb-Point mx-2'
                } text-[#FF331F] leading-none`}
              >
                최소한의 인테리어로 진행
              </p>
            </span>
          </div>
        </SlideUpOnView>
      </div>
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          <div
            className={`aspect-[720/1305] mt-10 my-20 bg-no-repeat bg-center bg-contain flex flex-col items-center justify-end w-full h-full`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_4_mo.webp)`,
            }}
          >
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
              } w-full leading-none`}
            >
              <div
                className={`text-slbContentMo font-normal text-center flex flex-col items-center `}
              >
                <>
                  <p className=' leading-normal'>
                    SLB는 가맹점의 매출 및 수익성을 높이기 위해
                  </p>
                  <span className='font-medium'>
                    한식을 접목한 샐러드&포케 프리미엄 브랜드로
                  </span>
                  <p className=' leading-normal mb-4'>
                    <span className='font-medium'>성장하는 중</span>
                    입니다.
                  </p>
                  <p className=' leading-normal'>
                    점주님들이 브랜드에 자부심을 가지실 수 있도록
                  </p>
                  <p className=' leading-normal mb-4'>
                    SLB는{' '}
                    <span className='font-medium'>
                      최소한의 인테리어를 시행
                    </span>
                    하고 있습니다.
                  </p>
                  <p className=' leading-normal flex flex-col'>
                    무책임하게 가맹점을 늘리기보다
                    <span>책임 있는 자세로 가맹점을 관리하고</span>
                  </p>
                  <p className=' leading-normal flex flex-col'>
                    <span>돈을 버실 수 있도록</span>
                    도움을 드리고 싶습니다.
                  </p>
                  <div
                    className={`w-[1px]  border border-black  ${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'h-10 my-4'
                        : 'h-20 my-10'
                    }`}
                  />
                  <p className='Slb-SubTitle-mo leading-normal text-[#FF331F] mb-10'>
                    SLB에게 가맹점은 ‘돈’벌이 수단이 아닌 ‘가족’입니다.
                  </p>
                </>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={` aspect-[1904/1133] mt-40 mb-60 bg-no-repeat bg-center bg-cover flex flex-col items-center justify-end w-full h-fit`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_4_4.webp)`,
            }}
          >
            <div
              className={` rounded-tr-[5rem] rounded-bl-[5rem] max-w-[845px] max-h-[480px] mr-[25vw] w-full h-full bg-[#E3E3E4]  leading-none`}
            >
              <div
                className={` text-slbContent font-normal w-full h-full p-8 items justify-between break-keep flex flex-col`}
              >
                <>
                  <p className=' leading-normal'>
                    SLB는 가맹점의 매출 및 수익성을 높이기 위해{' '}
                    <span className='font-medium'>
                      한식을 접목한 샐러드&포케 프리미엄 브랜드로 성장하는 중
                    </span>
                    입니다.
                  </p>
                  <p className=' leading-normal'>
                    점주님들이 브랜드에 자부심을 가지실 수 있도록 SLB는{' '}
                    <span className='font-medium'>
                      최소한의 인테리어를 시행
                    </span>
                    하고 있습니다.
                  </p>
                  <p className=' leading-normal flex flex-col'>
                    무책임하게 가맹점을 늘리기보다
                    <span>
                      책임 있는 자세로 가맹점을 관리하고 돈을 버실 수 있도록
                    </span>
                    도움을 드리고 싶습니다.
                  </p>
                  <p className='Slb-SubTitle leading-normal text-[#FF331F]'>
                    SLB에게 가맹점은 ‘돈’벌이 수단이 아닌 ‘가족’입니다.
                  </p>
                </>
              </div>
            </div>
          </div>
        </>
      )}
      {/* 05/15 변경 -SH */}
      {/* <Chip text='Point 9' type='black' /> */}
      <SlideUpOnView>
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <div className='flex items-end leading-none'>
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mt-4'
                    : 'Slb-Point mt-6'
                } text-[#FF331F] leading-none`}
              >
                투명하고 올바른 프랜차이즈
              </p>
              가
            </div>
            <div className='leading-none mt-2'>되기 위한 멈추지 않는</div>
            <div>SLB 노력</div>
          </>
        ) : (
          <>
            <div className='flex items-end leading-none'>
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mt-4'
                    : 'Slb-Point mt-6'
                } text-[#FF331F] leading-none`}
              >
                투명하고 올바른 프랜차이즈
              </p>
              가 되기 위한
            </div>
            <div>멈추지 않는 SLB 노력</div>
          </>
        )}
      </SlideUpOnView>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'px-4 mt-10 mb-20'
            : 'mt-40 h-fit mb-20'
        }`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ' aspect-[580/894]'
              : ' aspect-[880/430]'
          }`}
          alt='초기 인테리어 비용 최대 35% 이상 감소'
          src={`${process.env.PUBLIC_URL}/main/point_7${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        ></img>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col gap-1 text-center'
            : 'Slb-Content gap-2 flex-col text-center'
        } flex`}
      >
        <p className=''>‘인테리어 직거래 시스템’으로</p>
        <p>프리미엄 인테리어 공간을</p>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo mb-10 text-center'
            : 'Slb-Content flex mb-20 text-center'
        } `}
      >
        저렴하게 시공 가능하도록 지원합니다
      </div>
    </section>
  );
};

export default Sub3Section4;
