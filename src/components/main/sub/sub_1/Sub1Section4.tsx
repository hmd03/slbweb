import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub1Section4: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-4'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo'
          : 'Slb-Title'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
    >
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        {/* 05/15 변경 -SH */}
        {/* <Chip text='Point 6' type='black' /> */}
        <Chip text='Point 4' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4 Slb-SubTitle-mo flex-col items-center'
                : 'mt-6 mb-6 Slb-SubTitle gap-2'
            }  flex`}
          >
            <p>배달부터 홀 운영까지</p> <p>해본 사람들이 함께합니다.</p>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-1 flex-col items-center mt-4'
                : 'mb-2 items-end'
            } flex leading-none`}
          >
            SLB의 임직원은
            <span
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'my-1' : ''
              } flex items-end`}
            >
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mx-1'
                    : 'Slb-Point mx-2'
                } text-[#FF331F] leading-none`}
              >
                10년 이상의 전문가
              </p>
              로
            </span>
          </div>
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1'
                    : 'mb-2'
                } flex items-end leading-none`}
              >
                배달부터 홀 브랜드까지 다양한 경험을
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-1' : ''
                } flex items-end leading-none`}
              >
                보유한
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo mr-1'
                      : 'Slb-Point mr-2'
                  } text-[#FF331F] leading-none`}
                >
                  프랜차이즈 경력자
                </p>
                가
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'mb-10'
                } flex items-end leading-none`}
              >
                함께합니다!
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1'
                    : 'mb-2'
                } flex items-end leading-none`}
              >
                배달부터 홀 브랜드까지 다양한 경험을 보유한
              </div>
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
                      ? 'Slb-Point-mo mr-1'
                      : 'Slb-Point mr-2'
                  } text-[#FF331F] leading-none`}
                >
                  프랜차이즈 경력자
                </p>
                가 함께합니다!
              </div>
            </>
          )}
        </SlideUpOnView>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'h-10 my-4 w-[1px]  border border-black  '
            : ''
        }`}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center'
            : 'Slb-Content flex-col items-center'
        } flex`}
      >
        <p>
          일반적인 외식 프랜차이즈의{' '}
          <span className='font-medium'>메뉴 교육 3일</span>
        </p>
        <p>
          <span className='font-medium'>SLB 메뉴 및 노하우 교육 5일+@</span>
        </p>
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>SLB는 예비 점주님이 원하실 경우</p>
            <p>본사 직영점에서 충분히 노하우를 쌓을 수 있도록</p>
            <p>교육을 지원하고 있습니다.</p>
          </>
        ) : (
          <>
            <p>SLB는 예비 점주님이 원하실 경우 본사 직영점에서</p>
            <p>충분히 노하우를 쌓을 수 있도록 교육을 지원하고 있습니다.</p>
          </>
        )}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'my-10' : ' my-20'
        } w-full flex justify-center`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'px-4'
              : 'max-w-[1300px] aspect-[1139/594]'
          } w-full`}
          alt={`SLB샐러드 점`}
          src={`${process.env.PUBLIC_URL}/sub_1/sub_1_4_1.webp`}
        />
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'p-4' : ' my-20'
        } flex justify-center`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full flex-col p-4 items-center'
              : 'w-[1300px] py-20 px-10  justify-center gap-20 items-center'
          } flex border-y-2 border-Black`}
        >
          <img
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'py-6 px-16 mb-2'
                : 'w-[30%]'
            }`}
            alt={`SLB샐러드 점`}
            src={`${process.env.PUBLIC_URL}/adminLoginLogo.png`}
          />
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo flex-col items-center'
                : 'flex-col Slb-Content'
            } flex `}
          >
            <p>
              일반적인 프랜차이즈{' '}
              <span className='font-medium'>오픈 지원 2~3일</span>
            </p>
            <p>
              <span className='font-medium text-White bg-Black'>
                SLB의 오픈 지원 4일
              </span>
            </p>
            <span
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-col items-center'
                  : ''
              } flex `}
            >
              <p>SLB는 신규 점주님</p>
              <p>매장 오픈 전부터 메뉴 완성도 확인</p>
            </span>
            <span
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-col items-center'
                  : 'gap-2'
              } flex `}
            >
              <p>오픈 전 체크사항 미리 확인하고</p>
              <p>도움을 드리고 있습니다.</p>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'Slb-Title pt-20'
        } flex flex-col items-center`}
      >
        {/* 05/15 변경 -SH */}
        {/* <Chip text='Point 7' type='black' /> */}
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4 Slb-SubTitle-mo'
                : 'mt-6 mb-6 Slb-SubTitle'
            }  `}
          >
            그 누구보다
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-1' : 'mb-2'
            } flex items-end leading-none`}
          >
            창업자님들의
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo mx-1'
                  : 'Slb-Point mx-2'
              } text-[#FF331F] leading-none`}
            >
              마음을
            </p>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-6' : 'mb-10'
            } flex items-end leading-none`}
          >
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo'
                  : 'Slb-Point'
              } text-[#FF331F] leading-none`}
            >
              공감
            </p>
            하고 있습니다!
          </div>
        </SlideUpOnView>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'p-4 gap-4 flex-col-reverse'
            : 'max-w-[1300px] w-[100%] mt-20 mb-40 gap-10'
        } flex`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col items-center text-center'
              : 'flex-1 flex-col justify-center'
          } flex`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo'
                : 'Slb-Content pr-6'
            } break-keep whitespace-pre-wrap flex flex-col gap-8`}
          >
            <p>
              프랜차이즈 가맹점 점주였던 사람들..
              <br />
              홀부터 배달까지 다양한 외식아이템을 경험한 사람들까지 모였기
              때문에
            </p>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-SubTitle-mo my-4'
                : 'Slb-SubTitle flex-col flex-wrap mt-6 mb-12'
            } flex`}
          >
            <p>
              <span
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                } flex font-semibold flex-col`}
              >
                <p>그 누구보다 창업자님들의 마음을</p>
                <p>공감하고 있습니다!</p>
              </span>
            </p>
          </div>

          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo'
                : 'Slb-Content pr-6'
            } break-keep whitespace-pre-wrap flex flex-col gap-8`}
          >
            <p>
              외식 경험이 없는 초보 창업자분들의 불안한 마음, 다른 프랜차이즈
              외식을 해보셨던 분들의 불만이 최대한 없는 외식 프랜차이즈가
              되겠습니다.
            </p>
            <p>
              SLB는 ‘가맹점과 끝까지 함께한다’는 초심을 늘 기억 하고 실천합니다.
            </p>
            <p className='font-medium'>
              가맹점주님이 함께하시는 그날까지 튼튼한 울타리가 되어드리겠습니다.
            </p>
          </div>
        </div>
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'flex-1'
          } w-full`}
          alt={`익숙한 한식 X 새로운 샐러드&포케`}
          src={`${process.env.PUBLIC_URL}/sub_1/sub_1_4_2.webp`}
        />
      </div>
    </section>
  );
};

export default Sub1Section4;
