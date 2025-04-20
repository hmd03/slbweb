import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';
import Chip from '../../../ui/chip/chip';
import RollingCard from '../../../ui/RollingBanner/RollingCard';

const SubForm2: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  const { page } = useParams<{ page: string }>();

  const isDeviceReady =
    deviceInfo.isMobile !== undefined &&
    deviceInfo.isTouchDevice !== undefined &&
    deviceInfo.isSmallScreen !== undefined;

  console.log(deviceInfo);

  useEffect(() => {
    if (!isDeviceReady) return;
    if (!page || page === '1') return;

    const target = document.getElementById(`section-${page}`);
    if (!target) return;

    const headerId =
      deviceInfo.isMobile || deviceInfo.isSmallScreen ? 'header_mo' : 'header';
    const headerEl = document.getElementById(headerId);
    const headerHeight = headerEl?.offsetHeight ?? 0;

    const absoluteY =
      target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({ top: absoluteY });
  }, [page, deviceInfo.isMobile]);
    
    const imageList = [
      `${process.env.PUBLIC_URL}/main/rolling/review1.jpg`,
      `${process.env.PUBLIC_URL}/main/rolling/review2.jpg`,
      `${process.env.PUBLIC_URL}/main/rolling/review3.jpg`,
      `${process.env.PUBLIC_URL}/main/rolling/review4.jpg`,
      `${process.env.PUBLIC_URL}/main/rolling/review5.jpg`,
    ];

    const qnaItem = [
      `회사만 다녔는데 운영 할 수 있을까요?`,
      `집안일만 하던 주부인데도 창업 가능할까요?`,
      `메뉴가 적지 않은데 손이 많이 가지 않나요?`,
      `나이가 좀 있는데 제가 할 수 있을까요?`,
      `부모님이 해주신 음식 말고 라면 정도만 끓여봤는데 가능할까요?`,
    ];

  return (
    <>
      <div>
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
                  ? ' mt-10'
                  : 'mb-5 mt-40'
              }`}
            >
              성장하는 시장, 성장하는 아이템
            </div>
            <div>현재 고객은?</div>
            <div>식사 방법이나 메뉴를 정할 때</div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
              } flex items-end leading-none`}
            >
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ' Slb-Point-mo'
                    : ' Slb-Point'
                } flex items-end leading-none text-[#FF331F]`}
              >
                최우선
              </p>
              으로로
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ' Slb-Point-mo'
                    : ' Slb-Point'
                } flex items-end leading-none text-[#FF331F]`}
              >
                고려
              </p>
              하는는
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ' Slb-Point-mo'
                    : ' Slb-Point'
                } flex items-end leading-none text-[#FF331F]`}
              >
                요소
              </p>
              가 달라졌다!
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
                ? 'Slb-Content-mo gap-2 mb-10'
                : 'Slb-Content gap-2 mb-40'
            } flex leading-none flex-col items-center`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>고객들의 외식 선택 요소의 변화가가</p>
                <p>'샐러드 & 포케'시장의 성장으로 이어지고 있습니다.</p>
              </>
            ) : (
              <>
                <p>고객들의 외식 선택 요소의 변화가가</p>
                <p>'샐러드 & 포케'시장의 성장으로 이어지고 있습니다.</p>
              </>
            )}
          </div>
          <Chip
            text='Point 1'
            type={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'black'
                : 'black'
            }`}
          />
          <SlideUpOnView>
            <div className='flex items-end leading-none mb-10'>
              식사 방법ㆍ메뉴 선택 시
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mt-4 ml-1'
                    : 'Slb-Point mt-6 ml-2'
                } text-[#FF331F] font-black leading-none`}
              >
                고려 요소
              </p>
            </div>
          </SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo flex-col items-center text-White'
                : 'Slb-Content'
            }`}
          >
            외식에서 가장 중요한 것은 여전히 맛이지만 현재 고객은
            <span className='font-medium'>건강도 중요하게 작용하는</span>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo flex-col items-center text-White'
                : 'Slb-Content'
            } flex`}
          >
            <span className={`flex`}>
              <span className='font-medium'>
                영양성분을 음식의 맛만큼 중요하게 생각
              </span>
              하고 있습니다.
            </span>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo flex-col items-center text-White'
                : 'Slb-Content mb-[8rem]'
            } flex`}
          >
            <span className={`flex`}>
              고객들의 외식 선택 요소 변화가 ‘샐러드 & 포케’시장의 성장으로
              이어지고 있습니다.
            </span>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-10'
                : ' mb-40'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px]'
              } w-full`}
              alt={`식사 방법ㆍ메뉴 선택 시 고려 요소`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_1_1.webp`}
            />
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-10 pb-5'
                : 'aspect-[1904/1237] justify-center pt-20'
            } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL
              }/sub_2/sub_2_1_2_background${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
              }.webp)`,
            }}
          >
            <Chip text='Point 2' type='black' />
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-4'
                    : 'mt-6 gap-2 items-end'
                }  flex`}
              >
                한국인이 자주 섭취하는 메뉴
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } text-[#FF331F]`}
                >
                  Top20
                </p>
              </div>
            </SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo gap-2 mb-10'
                  : 'Slb-Content gap-2 mb-20 mt-20'
              } flex leading-none flex-col items-center`}
            >
              {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                <>
                  <p>지금 한국인은 샐러드 섭취 횟수를 매년 늘리는 중</p>
                  <p>
                    SLB는 한국인이 가장 많이 섭취하는 한식을 샐러드&포케 등
                    다양한 메뉴에 접목해
                  </p>
                  <p>시장 경쟁력을 더 높이고 있습니다</p>
                </>
              ) : (
                <>
                  <p>지금 한국인은 샐러드 섭취 횟수를 매년 늘리는 중</p>
                  <p>
                    SLB는 한국인이 가장 많이 섭취하는 한식을 샐러드&포케 등
                    다양한 메뉴에 접목해
                  </p>
                  <p>시장 경쟁력을 더 높이고 있습니다</p>
                </>
              )}
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mb-10'
                  : ' mb-20'
              } w-full flex justify-center`}
            >
              <img
                loading='lazy'
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'px-4'
                    : 'max-w-[1300px]'
                } w-full`}
                alt={`한국인이 자주 섭취하는 메뉴 Top20`}
                src={`${process.env.PUBLIC_URL}/sub_2/sub_2_1_2.webp`}
              />
            </div>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full Slb-Title-mo pt-20'
                : 'Slb-Title pt-40'
            } flex flex-col items-center`}
          >
            <Chip text='Point 3' type='black' />
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-4'
                    : 'mt-6 items-end'
                }  flex`}
              >
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } text-[#FF331F]`}
                >
                  샐러드 시장
                </p>
                이
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-4'
                    : 'mt-6 items-end gap-2'
                }  flex`}
              >
                앞으로
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } text-[#FF331F]`}
                >
                  성장할 수 밖에 없는 가장 큰 이유?
                </p>
              </div>
            </SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo gap-2 mb-10'
                  : 'Slb-Content gap-2 mb-20 mt-20'
              } flex leading-none flex-col items-center`}
            >
              {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                <>
                  <p className='font-medium'>
                    전 연령대 모두 신체/정신 건강에 대한 폭넓은 관심과 관리
                    노력!
                  </p>
                  <p>
                    건강 관리 5대 관심 분야 : 수면, 식단 관리, 스트레스 관리,
                    체중 감량 방법, 운동 방법
                  </p>
                </>
              ) : (
                <>
                  <p className='font-medium'>
                    전 연령대 모두 신체/정신 건강에 대한 폭넓은 관심과 관리
                    노력!
                  </p>
                  <p>
                    건강 관리 5대 관심 분야 : 수면, 식단 관리, 스트레스 관리,
                    체중 감량 방법, 운동 방법
                  </p>
                </>
              )}
            </div>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-10'
                : ' mb-20'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px]'
              } w-full`}
              alt={`대한민국 전 연령 신체 정신 건강 우려도`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_1_3.webp`}
            />
          </div>
          <div
            className={`relative w-full ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-10'
                : 'my-20'
            }`}
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/-Gn1Cmfe5Is?autoplay=1&mute=1&loop=1&playlist=-Gn1Cmfe5Is&controls=0&modestbranding=1&showinfo=0&rel=0'
              title='Just Eat It! 한식X샐러드&포케 전문점 SLB'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section
          id='section-2'
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
            <Chip text='Point 4' type='black' />
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-4 Slb-SubTitle-mo flex-col items-center'
                    : 'mt-6 mb-6 Slb-SubTitle gap-2'
                }  flex`}
              >
                <p>고객이 인정하는 샐러드&포케 맛집</p> <p></p>
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1 flex-col items-center mt-4'
                    : 'mb-2 items-end'
                } flex leading-none`}
              >
                <span
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'my-1'
                      : ''
                  } flex items-end`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo mx-1'
                        : 'Slb-Point mx-2'
                    } text-[#FF331F] leading-none`}
                  >
                    SLB는 다르다!
                  </p>
                  SLB의
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo mx-1'
                        : 'Slb-Point mx-2'
                    } text-[#FF331F] leading-none`}
                  >
                    경쟁력은 메뉴!
                  </p>
                </span>
              </div>
              {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                <>
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-1'
                        : ''
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
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? ''
                        : 'mb-10'
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
                        ? 'mb-10'
                        : 'mb-10'
                    } flex items-end leading-none`}
                  >
                    한번이라도 SLB를 경험한
                    <p
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'Slb-Point-mo ml-1'
                          : 'Slb-Point ml-2'
                      } text-[#FF331F] leading-none`}
                    >
                      고객 재방문율 86%
                    </p>
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
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>
                  고객들의 입맛은 냉정하다! 아무리 건강해도 ‘맛’이 없다면
                  소비하지 않습니다.
                </p>
                <p>
                  SLB는 외식 프랜차이즈로서 ‘맛’과 ‘건강’모두 높이기 위해 익숙한
                  한식을
                </p>
                <p>
                  샐러드&포케와 접목한 메뉴를 개발해 고객 재방문을 높였습니다.
                </p>
              </>
            ) : (
              <>
                <p>
                  고객들의 입맛은 냉정하다! 아무리 건강해도 ‘맛’이 없다면
                  소비하지 않습니다.
                </p>
                <p>
                  SLB는 외식 프랜차이즈로서 ‘맛’과 ‘건강’모두 높이기 위해 익숙한
                  한식을
                </p>
                <p>
                  샐러드&포케와 접목한 메뉴를 개발해 고객 재방문을 높였습니다.
                </p>
              </>
            )}
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-10'
                : 'my-40'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px] aspect-[1139/594]'
              } w-full`}
              alt={`고객이 인정하는 샐러드 포케 맛집`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_2_1.webp`}
            />
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo'
                : 'Slb-Title'
            } flex flex-col items-center w-full font-semibold bg-[#F6F6F6]`}
          >
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'w-full Slb-Title-mo pt-10'
                  : ' Slb-Title pt-20'
              } flex flex-col items-center`}
            >
              <Chip text='Point 5' type='black' />
              <SlideUpOnView>
                <div className='flex items-end leading-none'>
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo mt-4'
                        : 'Slb-Point mt-6'
                    } text-[#FF331F] font-black leading-none`}
                  >
                    고객들의 후기
                  </p>
                  가
                </div>
                <div className=' mb-10'>SLB를 증명합니다!</div>
              </SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Content-mo flex-col items-center'
                    : 'Slb-Content gap-2'
                } flex`}
              >
                특별히 광고하지 않아도 고객이 인정한 ‘맛집’이기에 매출이 높을 수
                밖에 없습니다.
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Content-mo flex-col items-center mt-2'
                    : 'Slb-Content mb-[8rem] gap-2'
                } flex`}
              >
                예비창업자님들의 창업문의가 끊이지 않는 이유이기도 합니다.
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'px-12 overflow-hidden w-full'
                    : 'mb-[16rem] w-[1100px]'
                }`}
              >
                <RollingCard images={imageList} />
              </div>
            </div>
          </div>
        </section>
        <section
          id='section-3'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Title-mo'
              : 'Slb-Title'
          } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'aspect-[431/173] mt-10'
                : 'aspect-[1904/540]'
            } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sub_2/sub_2_3_1.webp)`,
            }}
          />
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-10 pb-5'
                : 'mt-40 pb-20'
            } flex flex-col items-center w-full h-fit`}
          >
            <Chip text='Point 6' type='black' />
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-4'
                    : 'mt-6'
                }  `}
              >
                '맛'에 대한 고집으로 매출을 높이는
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1'
                    : 'mb-2'
                } flex items-end leading-none`}
              >
                한식X샐러드&포케 전문점
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                } flex items-end leading-none`}
              >
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo mr-1'
                      : 'Slb-Point mr-2'
                  } text-[#FF331F] leading-none`}
                >
                  SLB를 메뉴 라인업
                </p>
              </div>
            </SlideUpOnView>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ''
                : 'max-w-[800px] Slb-Content gap-10'
            } flex flex-col w-full`}
          >
            {qnaItem.map((q, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? 'self-start' : 'self-end'
                } bg-[#E0E0E0] rounded-full px-4 py-2 text-black w-fit whitespace-nowrap`}
              >
                Q. {q}
              </div>
            ))}
          </div>
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
                ? 'Slb-Content-mo gap-2 mb-10'
                : 'Slb-Content gap-2 mb-40'
            } flex leading-none flex-col items-center`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>외식 프랜차이즈가 가장 많이 듣는 질문 중 하나입니다.</p>
                <p>
                  걱정 하지 마세요! SLB는 메뉴 개발 과정부터 조리 편의성은 물론
                </p>
                <p>고객의 만족도를 높일 수 있도록 개발됩니다.</p>
              </>
            ) : (
              <>
                <p>외식 프랜차이즈가 가장 많이 듣는 질문 중 하나입니다.</p>
                <p>
                  걱정 하지 마세요! SLB는 메뉴 개발 과정부터
                  <span className='font-medium'>조리 편의성</span>은 물론
                </p>
                <p>
                  <span className='font-medium'>
                    고객의 만족도를 높일 수 있도록 개발
                  </span>
                  됩니다.
                </p>
              </>
            )}
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full Slb-Title-mo pt-10'
                : 'Slb-Title pt-20 mb-20'
            } flex flex-col items-center bg-[#F6F6F6] w-full`}
          >
            <Chip text='Point 7' type='black' />
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo mt-4'
                    : 'Slb-Title mt-6'
                }
          `}
              >
                누구나 쉽게 쉽게!
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo mb-6'
                    : 'Slb-Title mb-10'
                } flex items-end leading-none`}
              >
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo mr-1'
                      : 'Slb-Point mr-2'
                  } text-[#FF331F] leading-none`}
                >
                  요리를 전혀 못해도
                </p>
                창업 가능
              </div>
            </SlideUpOnView>
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mb-8 px-8'
                  : 'mb-40 mt-10 aspect-[975/201] max-w-[1300px]'
              } w-full`}
              alt='주문 시스템 운영 인력 최소화를 위해 키오스크로 편하게! 
          > 원팩 시스템 - 주로 사용되는 원부자재 원팩화로 준비시간 짧게! 
          > 간단 조리 시스템 - 어려운 조리 스킬 필요 없이 모든 메뉴 쉽게 가능!
          > 빠른 메뉴 완성 - 고객 테이블 or 배달 전달 끝!'
              src={`${process.env.PUBLIC_URL}/main/point_9${
                deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
              }.webp`}
            ></img>
          </div>
        </section>
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
            <Chip text='Point 8' type='black' />
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
                      ? 'my-1'
                      : ''
                  } flex items-end`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo mx-1'
                        : 'Slb-Point mx-2'
                    } text-[#FF331F] leading-none`}
                  >
                    독보적인 메뉴=높은 매출!
                  </p>
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
                    샐러드&포케 X 한식 접목
                  </div>
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-1'
                        : ''
                    } flex items-end leading-none`}
                  >
                    SLB만의 메뉴 경쟁력을 높이다
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
                    샐러드&포케 X 한식 접목
                  </div>
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-10'
                        : 'mb-10'
                    } flex items-end leading-none`}
                  >
                    SLB만의 메뉴 경쟁력을 높이다
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
              음식에 진심인 사람들이 모여
              <span className='font-medium'>맛에 대한 기준이 높은 SLB!</span>
            </p>
            <p>고객의 건강은 물론 입맛까지 사로잡기 위해</p>
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>우리나라 전통 식문화를 접목한 요리를 연구하고 개발해</p>
                <p>본사 직영점에서 충분히 노하우를 쌓을 수 있도록</p>
                <p>독보적인 메뉴 경쟁력을 갖추고 있습니다.</p>
              </>
            ) : (
              <>
                <p>
                  <span className='font-medium'>
                    우리나라 전통 식문화를 접목
                  </span>
                  한 요리를 연구하고 개발해
                </p>
                <p>본사 직영점에서 충분히 노하우를 쌓을 수 있도록</p>
                <p>독보적인 메뉴 경쟁력을 갖추고 있습니다.</p>
              </>
            )}
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'flex-col items-center'
                : `max-w-[1300px] w-[100%] gap-10 py-10 my-20 items-center`
            } flex `}
          >
            <div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'flex-col items-center'
                    : 'flex-col justify-center py-10 border-b-[2px] border-Black'
                } flex`}
              >
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-SubTitle-mo'
                      : 'Slb-SubTitle flex-col flex-wrap mb-6'
                  } flex`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'gap-1'
                        : 'gap-2'
                    } flex items-center`}
                  >
                    <div
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'flex items-center justify-center w-4 h-4 rounded-full bg-black text-white Slb-Content-mo'
                          : 'flex items-center justify-center w-6 h-6 rounded-full bg-black text-white Slb-Content'
                      }`}
                    >
                      1
                    </div>
                    <span
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'Slb-Title-mo'
                          : 'Slb-Title'
                      } text-[#EF812A]`}
                    >
                      TEST
                    </span>
                  </p>
                </div>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Content-mo px-6 mb-20'
                      : 'Slb-Content'
                  } break-keep whitespace-pre-wrap flex flex-col gap-8`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'text-center break-keep'
                        : 'flex flex-col'
                    }`}
                  >
                    <span>SLB의 모든 메뉴는 직영점에서</span>
                    <span>고객 평가를 거칩니다.</span>
                  </p>
                </div>
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'flex-col items-center'
                    : 'flex-col justify-center py-10'
                } flex`}
              >
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-SubTitle-mo'
                      : 'Slb-SubTitle flex-col flex-wrap mb-6'
                  } flex`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'gap-1'
                        : 'gap-2'
                    } flex items-center`}
                  >
                    <div
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'flex items-center justify-center w-4 h-4 rounded-full bg-black text-white Slb-Content-mo'
                          : 'flex items-center justify-center w-6 h-6 rounded-full bg-black text-white Slb-Content'
                      }`}
                    >
                      1
                    </div>
                    <span
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'Slb-Title-mo'
                          : 'Slb-Title'
                      } text-[#EF812A]`}
                    >
                      TEST
                    </span>
                  </p>
                </div>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Content-mo px-6 mb-20'
                      : 'Slb-Content'
                  } break-keep whitespace-pre-wrap flex flex-col gap-8`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'text-center break-keep'
                        : 'flex flex-col'
                    }`}
                  >
                    <span>SLB의 모든 메뉴는 고객평가를 거친 후</span>
                    <span>고객만족도가 높은 메뉴만을 엄선해</span>
                    <span>구성합니다.</span>
                  </p>
                </div>
              </div>
            </div>
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-1 max-w-[250px] my-6'
                  : 'flex-1 aspect-[722/491]'
              } w-full`}
              alt={`독보적 메뉴 = 높은 매출!`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_1.webp`}
            />
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'aspect-[431/173] mt-10'
                : 'aspect-[1904/650] text-White justify-center'
            } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sub_2/sub_2_4_2.webp)`,
            }}
          >
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'w-full px-4'
                  : 'w-[1300px]'
              } flex flex-col`}
            >
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-6'
                    : 'mt-[6rem]'
                } flex items-end leading-none`}
              >
                고객의 제대로 된 한끼를 대접하기 위해
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'mt-2'
                } flex items-end leading-none`}
              >
                재료의 선택부터 메뉴의 구성까지 고민하다
              </div>
              <div className='flex items-center leading-none mt-2'>
                정성을 담은
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } bg-[#FF331F] leading-none ml-2 p-1`}
                >
                  SLB 한상차림
                </p>
              </div>

              <div
                className={`border border-White  ${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'h-5 my-2 w-[1px]'
                    : 'h-12 my-8 w-[2px]'
                }`}
              />

              {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                <>
                  <div className='Slb-Content-mo flex items-center leading-none mb-3'>
                    현재에 안주하지 않고 한식의 익숙함에
                  </div>
                  <div className='Slb-Content-mo flex items-center leading-none mb-3'>
                    샐러드&amp;포케의 새로움을 더하기 위해
                  </div>
                  <div className='Slb-Content-mo flex items-center leading-none mb-3'>
                    지금 이 순간에도 SLB R&D 부서 전문가들은
                  </div>
                  <div className='Slb-Content-mo flex items-center leading-none mb-6'>
                    연구에 연구를 거듭하고 있습니다
                  </div>
                </>
              ) : (
                <>
                  <div className='Slb-Content flex items-center leading-none mb-3'>
                    한끼를 먹더라도 든든하게 드실 수 있도록
                  </div>
                  <div className='Slb-Content flex items-center leading-none mb-3'>
                    제대로 된 한상의 감동을 경험 할 수 있도록
                  </div>
                  <div className='Slb-Content flex items-center leading-none mb-[6rem]'>
                    SLB는 고객을 가장 중요하게 생각합니다
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full Slb-Title-mo pt-20'
                : 'Slb-Title pt-40'
            } flex flex-col items-center`}
          >
            <Chip text='Point 9' type='black' />
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-1 flex-col items-center mt-4'
                    : 'items-end mt-6 mb-10'
                } flex leading-none`}
              >
                <span
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'my-1'
                      : ''
                  } flex items-end`}
                >
                  <p
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Point-mo mx-1'
                        : 'Slb-Point mx-2'
                    } text-[#FF331F] leading-none`}
                  >
                    SLB MENU
                  </p>
                </span>
              </div>
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
                : 'Slb-Content flex-col items-center mb-20'
            } flex`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>평범함이 특별함이 되는 SLB!</p>
                <p>매출이 높을 수 밖에 없는 이유이기도 합니다</p>
              </>
            ) : (
              <>
                <p>평범함이 특별함이 되는 SLB!</p>
                <p>매출이 높을 수 밖에 없는 이유이기도 합니다</p>
              </>
            )}
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-10'
                : 'mt-40 mb-40'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px] aspect-[1300/1713]'
              } w-full`}
              alt={`샐러드 한상`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_3.png`}
            />
          </div>

          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-10'
                : 'mb-40'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px] aspect-[1300/1300]'
              } w-full`}
              alt={`포케 한상`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_4.png`}
            />
          </div>

          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-10'
                : 'mb-40'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px] aspect-[1300/495]'
              } w-full`}
              alt={`랩 메뉴`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_5.png`}
            />
          </div>

          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-10'
                : 'mb-40'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px] aspect-[1300/495]'
              } w-full`}
              alt={`샌드 메뉴`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_6.png`}
            />
          </div>

          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'my-10'
                : 'mb-[20rem]'
            } w-full flex justify-center`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'px-4'
                  : 'max-w-[1300px] aspect-[1300/1300]'
              } w-full`}
              alt={`추가 메뉴`}
              src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_7.png`}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SubForm2;
