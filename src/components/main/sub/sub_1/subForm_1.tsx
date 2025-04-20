import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';
import DividerWithLabel from '../../../ui/label/DividerWithLabel';

const SubForm1: React.FC = () => {
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

  const itemData = [
    {
      number: '1',
      numberStr: '첫 번째,',
      title: '창업 아이템의',
      highlight: '지속 가능성',
      image: 'sub_1_3_1_1.webp',
      alt: '첫 번째, 창업 아이템의 지속 가능성',
      desc: [
        '예비 창업자님들! 창업 아이템 선정 시 가장 중요하게 확인해야 할 것은 해당 아이템이 /얼마나 오랫동안 성장 및 유지될 수 있는지를 확인/하셔야 합니다.',
        '너무 유행에 민감한 창업 아이템 선택 시 잠깐 돈을 벌 수 있지만, 지속성이 약해 실패 할 수 있으니 주의가 필요합니다. 그런 면에서 /샐러드 & 포케는 지속성장 중인/ 아이템이며, /앞으로 더 많은 성장이 개대되는 창업 아이템/입니다.',
      ],
    },
    {
      number: '2',
      numberStr: '두 번째,',
      title: '브랜드',
      highlight: '매력도',
      image: 'sub_1_3_1_2.webp',
      alt: '브랜드 매력도',
      desc: [
        '일반적인 브랜드 매력도라고 하면 유명 프랜차이즈 브랜드만을 생각하는 경우가 많습니다. 하지만, /브랜드 매력도는 단순히 유하냐가 아닌 판매 아이템의 상품성, 발전 가능성, 고객 소비 트렌드 등을 종합해서 판단/해야 합니다.',
        '유명 프랜차이즈가 많다는 이야기는 그만큼 레드 오션 시장일 가능성이 높습니다. 블루오션 시장의 아이템 중 브랜드 매력도가 높은 프랜차이즈를 선택하는 것이 /장기적으로 예비창업자님들이 중요하게 생각하고 계신 매출 향상과 안정적인 수익성/을 가져갈 수 있습니다.',
      ],
    },
    {
      number: '3',
      numberStr: '세 번째,',
      title: '운영',
      highlight: '편의성',
      image: 'sub_1_3_1_3.webp',
      alt: '운영 편의성',
      desc: [
        '운영 편의성에서 가장 많이 생각하는 부분이 노동강도 입니다. 푸드테크 기술이 많이 도입되었다고는 하지만 여전히 외식은 다른 산업군 대비 노동강도가 높으면 개인적인 시간을 갖기가 어려운 구조입니다.',
        '그렇기 때문에 /노동강도가 낮으면서도 인력을 최소화 할 수 있는 창업 아이템을 고르는 것이 중요/합니다. 단순히 노동강도가 낮다고 고르기보다 /매출 구조를 꼼꼼히 따져보는 것이 중요/합니다. 막상 노동강도가 낮다고 창업했지만 매출과 수익성이 높지 않은 경우가 많기 때문입니다.',
      ],
    },
  ];

  const menuData = [
    {
      number: '01',
      title: "건강에 '맛' 까지 더한",
      highlight: '샐러드 한상',
      image: `sub_1_2_3_1${
        deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
      }.webp`,
      alt: "건강에 '맛' 까지 더한 샐러드 한상",
      desc: [
        '무농약 친환경 유로피안 채소로 더 건강하게!',
        '샐러드&포케에 익숙한 한식을 접목해 건강은 물론 맛까지 잡은 SLB만의 특별한 요리로 다이어터, 헬스인 뿐만 아니라 건강을 고민하는 모든 고객들을 위해 연구 개발했습니다.',
        '익숙하지만 새로운 맛을 경험하고 싶은 고객의 소비 트렌드까지 사로잡은 샐러드 메뉴라인',
      ],
    },
    {
      number: '02',
      title: '국산 15곡 잡곡밥! 한국인 밥심',
      highlight: '포케 한상',
      image: `sub_1_2_3_2${
        deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
      }.webp`,
      alt: '국산 15곡 잡곡밥! 한국인 밥심 포케 한상',
      desc: [
        '든든하게 먹고 싶을 때도, 더 맛있게 건강하게!',
        "한국인이 가장 많이 소비하는 '밥' 하지만 SLB는 고객이 건강까지 챙길 수 있도록 개발했습니다.",
        '국내산 15가지 잡곡으로 건강한 포만감, 하루를 맛있고 든든할 뿐만 아니라 한식을 접목해 맛의 균형까지 뛰어난 SLB 포케 라인',
      ],
    },
    {
      number: '03',
      title: '오늘은 가볍게! 하지만 알차게~',
      highlight: '샌드 & 랩',
      image: `sub_1_2_3_3${
        deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
      }.webp`,
      alt: '오늘은 가볍게! 하지만 알차게~ 샌드 & 랩',
      desc: [
        '맛있게는 먹고 싶지만, 배부르게 먹기 싫을 때~',
        '전날 너무 과하게 먹었나? 입맛이 좀 없는데 영양가도 높고 맛있지만 가볍게 먹을 메뉴를 찾는 고객을 사로잡는 SLB의 샌드 & 랩 메뉴!',
        '가벼운 즐거움이 있는 샌드&랩은 스프 메뉴 또는 건강 음료와 함께 가볍게 즐길 수 있는 메뉴 라인',
      ],
    },
    {
      number: '04',
      title: '객단가 높이는',
      highlight: '추가 메뉴',
      image: `sub_1_2_3_4${
        deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
      }.webp`,
      alt: '객단가 높이는 추가 메뉴',
      desc: [
        '샐러드, 포케, 샌드, 랩만으로 부족할 때 주문할 수 있는 알찬구성의 추가 메뉴!',
        'SLB 추가 메뉴는 객단가를 높이기 위해 샐러드, 포케, 샌드 & 랩 메뉴 주문 시 함께 주문할 수 있는 메뉴로 개발된 SLB 사이드 라인',
      ],
    },
    {
      number: '05',
      title: '커피? 착즙? 맛있는',
      highlight: '건강 음료',
      image: `sub_1_2_3_5${
        deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
      }.webp`,
      alt: '커피? 착즙? 맛있는 건강 음료',
      desc: [
        '커피도 건강음료도 맛을 높인 SLB',
        '식사 메뉴인 샐러드, 포케, 델리 메뉴와 함께 먹을 수 있도록 구성, 객 단가를 높일 수 있는 구조로 개발해 맛, 건강, 매출 모두 UP! SLB 음료 라인',
      ],
    },
  ];

  return (
    <div>
      {/* sub 1 */}
      <section
        id='section-1'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Title-mo aspect-[1/1] mb-10'
              : 'Slb-Title aspect-[1904/1090] mb-40'
          } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit font-semibold`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/sub_1/sub_1_1_1${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
            }.webp)`,
          }}
        ></div>
        <Chip text='Point 1' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4 mb-2 flex flex-col items-center leading-none gap-1'
                : 'mt-6 flex'
            }  `}
          >
            건강하지만 맛있는 요리를 <p>대접하기 위해</p>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mb-10'
                : 'mb-10'
            } flex items-end leading-none`}
          >
            <span
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo flex-col gap-1'
                  : 'Slb-Point gap-3'
              }  flex items-center text-[#FF331F] leading-none`}
            >
              우리 조상들의 지혜가 담긴 <p>한식에서 정답을 찾다!</p>
            </span>
          </div>
        </SlideUpOnView>
        <div
          className={`relative w-fit mx-auto px-4 py-6 ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo mb-10'
              : 'Slb-Content mt-10 mb-40'
          } flex`}
        >
          {/* 왼쪽 세로줄 */}
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'left-4'
                : 'left-0'
            } absolute top-0 w-[1px] h-full bg-black`}
          />
          {/* 오른쪽 세로줄 */}
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'right-4'
                : 'right-0'
            } absolute top-0 w-[1px] h-full bg-black`}
          />

          {/* 위쪽 귀퉁이 */}
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-[30px] left-4 '
                : 'w-[60px] left-0 '
            } absolute top-0 h-[2px] bg-black`}
          />
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-[30px] right-4'
                : 'w-[60px] right-0'
            } absolute top-0 h-[2px] bg-black`}
          />

          {/* 아래쪽 귀퉁이 */}
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-[30px] left-4'
                : 'w-[60px] left-0 '
            } absolute bottom-0 h-[2px] bg-black`}
          />
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-[30px] right-4'
                : 'w-[60px] right-0'
            } absolute bottom-0 h-[2px] bg-black`}
          />

          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo flex-col items-center '
                : 'Slb-Content flex-col items-center mx-20 my-4'
            } flex text-center`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>단순히 건강한 샐러드&amp;포케 요리가 아닌</p>
                <p>고객의 입맛까지 사로잡을 수 있는 요리를</p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'mb-4 break-keep'
                      : 'mb-6'
                  }`}
                >
                  대접하기 위해 우리나라 한식이 가지고 있는 특유의 정성과
                  세심함으로
                </p>
                <p>식재료 선별은 물론 식재료의 궁합과</p>
                <p>건강한 조리법까지 활용해</p>
                <p>
                  <span className='font-medium'>
                    SLB만의 특별한 [맛의 정의]
                  </span>
                  를 만들어 갑니다.
                </p>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'w-[14%] my-4'
                      : ' w-[10%] my-6'
                  } border-b-[2px] border-DeepGray`}
                />
                <p className='font-medium'>
                  새로운 시장을 개척하는 트렌드 리더
                </p>
                <p className='font-medium'>한식X샐러드&amp;포케 전문점 SLB</p>
              </>
            ) : (
              <>
                <p>단순히 건강한 샐러드&amp;포케 요리가 아닌</p>
                <p>고객의 입맛까지 사로잡을 수 있는 요리를 대접하기 위해</p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'mb-4'
                      : 'mb-6'
                  }`}
                >
                  우리나라 한식이 가지고 있는 특유의 정성과 세심함으로
                </p>
                <p>
                  식재료 선별은 물론 식재료의 궁합과 건강한 조리법까지 활용해
                </p>
                <p>
                  <span className='font-medium'>
                    SLB만의 특별한 [맛의 정의]
                  </span>
                  를 만들어 갑니다.
                </p>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? ''
                      : ' w-[10%] my-6'
                  } border-b-[2px] border-DeepGray`}
                />
                <p className='font-medium'>
                  새로운 시장을 개척하는 트렌드 리더 한식X샐러드&amp;포케 전문점
                  SLB
                </p>
              </>
            )}
          </div>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Title-mo'
              : 'Slb-Title py-20'
          } flex flex-col items-center w-full bg-[#F6F6F6]`}
        >
          <DividerWithLabel
            label='SLB의 경쟁력 고객이 먼저 알아봅니다.'
            isLineView={false}
            color='Black'
          />
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo mt-10'
                : 'Slb-Title'
            } flex flex-col items-center w-full font-semibold bg-[#F6F6F6]`}
          >
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo grid grid-cols-2 gap-2 p-4'
                  : 'Slb-Content mt-20 w-[1300px] flex items-center justify-center gap-8'
              } `}
            >
              {['G', 'A', 'H', 'O'].map((v) => (
                <div
                  key={v}
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'mb-4'
                      : 'gap-10'
                  } flex flex-col items-center`}
                >
                  <img
                    loading='lazy'
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'max-w-[70%] mb-2'
                        : 'max-w-[250px]'
                    } w-full`}
                    alt={`SLB샐러드 ${v}점`}
                    src={`/sub_1/sub_1_1_2_${v}.png`}
                  />
                  <div>{`SLB샐러드 ${v}점`}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* sub 2 */}
      <section
        id='section-2'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        <Chip text='Point 2' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4'
                : 'mt-6 mb-6'
            }  `}
          >
            아쉬움에 항상 고민합니다
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-1' : 'mb-2'
            } flex items-end leading-none`}
          >
            샐러드&포케는
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo mx-1'
                  : 'Slb-Point mx-2'
              } text-[#FF331F] leading-none`}
            >
              맛
            </p>
            없다는
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo'
                  : 'Slb-Point ml-2'
              } text-[#FF331F] leading-none`}
            >
              편견
            </p>
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
              SLB를 먹기 전
            </p>
            입니다!
          </div>
        </SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col aspect-[1/1] px-4'
              : 'max-w-[1300px] mt-20 gap-10'
          } flex w-full`}
        >
          <img
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'flex-1'
            } w-full`}
            alt={`익숙한 한식 X 새로운 샐러드&포케`}
            src={`${process.env.PUBLIC_URL}/sub_1/sub_1_2_1${
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
                  익숙한 한식 X 새로운 샐러드&포케
                </span>
              </p>
              <p>
                <span className='font-bold'>더</span> 맛있고,{' '}
                <span className='font-bold'>더</span> 건강한 요리 개발을 위한{' '}
                <span className='font-bold'>도전</span>
              </p>
              <p>지금 이 순간에도 계속됩니다</p>
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
                    보통의 외식브랜드가 단순히 ‘맛’을 위해 노력하고 있을 때,
                    SLB는 다른 고민을 합니다.
                  </p>
                  <p>
                    건강한 음식은 맛없다는 편견을 바꾸기 위해 건강하지 못한
                    식습관을 개선하기 위한 노력과 바쁨으로 요리하는 사람도 먹는
                    사람도 만족할 수 있도록 맛과 건강에 특화된 한국의 ‘식(食)’
                    문화를 기반으로 SLB다운 ‘맛의 정의’를 개발해 샐러드&포케로
                    새로운 외식 문화를 만들어 갑니다.
                  </p>
                  <p>
                    고객에게 사랑 받는 남다른 특별한 ‘맛’으로 기억되는 독보적인
                    한식X샐러드&포케 브랜드 SLB
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[431/173] mt-10'
              : 'aspect-[1904/605] mt-40'
          } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/sub_1/sub_1_2_2.webp)`,
          }}
        />
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mt-10 pb-5'
              : 'mt-40 pb-40'
          } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL
            }/sub_1/sub_1_2_3_background${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
            }.webp)`,
          }}
        >
          <Chip text='Point 3' type='black' />
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
                SLB를 메뉴 라인업
              </p>
            </div>
          </SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'flex-col px-4 items-center mt-10'
                : 'flex-col w-[1300px] items-center mt-10'
            } w-full flex`}
          >
            {menuData.map((item, idx) => (
              <div
                key={idx}
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'flex-col'
                    : 'max-w-[1300px] w-[100%] gap-10 py-10'
                } flex ${
                  idx === 0 ? 'border-y-[1px]' : 'border-b-[1px]'
                } border-Black`}
              >
                <img
                  loading='lazy'
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'p-6'
                      : 'flex-1'
                  } w-full`}
                  alt={item.alt}
                  src={`${process.env.PUBLIC_URL}/sub_1/${item.image}`}
                />
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'flex-col'
                      : 'flex-1 flex-col justify-center'
                  } flex`}
                >
                  <span
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'items-end gap-1 mb-6'
                        : 'flex-col'
                    } flex`}
                  >
                    <div
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'Slb-Content-mo mb-[2px]'
                          : 'Slb-Content mb-8'
                      } text-DeepGray`}
                    >
                      {item.number}
                    </div>
                    <div
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'Slb-SubTitle-mo'
                          : 'Slb-SubTitle flex-col flex-wrap mb-12'
                      } flex`}
                    >
                      <p>
                        {item.title}{' '}
                        <span
                          className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                              ? 'Slb-Title-mo'
                              : 'Slb-Title'
                          } text-[#EF812A]`}
                        >
                          {item.highlight}
                        </span>
                      </p>
                    </div>
                  </span>
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Content-mo gap-4 px-2 mb-4'
                        : 'Slb-Content gap-8'
                    } break-keep whitespace-pre-wrap flex flex-col`}
                  >
                    {item.desc.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* sub 3 */}
      <section
        id='section-3'
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
            동상이몽 창업?
          </div>
          <div>요즘 인기 있다고 무작정 창업?</div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point'
            } flex items-end leading-none text-[#FF331F]`}
          >
            인기는 반짝하다 사라질 수 있다!
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
              <p>예비 창업자들의 오해</p>
              <p>요즘 뜨고 있으니까, 너도 나도 하는 것 같으니까?</p>
              <p>창업! 잠깐, 멈추세요! 무작정 창업 하지 말고</p>
              <p>이것만 알고 시작하세요 창업 아이템 선정 시</p>
              <p>핵심 기준 SLB가 알려드립니다</p>
            </>
          ) : (
            <>
              <p>예비 창업자들의 오해</p>
              <p>요즘 뜨고 있으니까, 너도 나도 하는 것 같으니까? 창업!</p>
              <p>
                잠깐, 멈추세요! 무작정 창업 하지 말고 이것만 알고 시작하세요
              </p>
              <p>창업 아이템 선정 시 핵심 기준 SLB가 알려드립니다</p>
            </>
          )}
        </div>
        <div className='bg-[#F6F6F6] w-full flex flex-col items-center'>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full Slb-Title-mo pt-10'
                : 'w-[1300px] Slb-Title pt-20 mb-20'
            } flex flex-col items-center bg-[#F6F6F6]`}
          >
            <Chip text='Point 4' type='black' />
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mt-4 mb-10'
                    : 'Slb-Point mt-6 mb-20'
                } text-[#FF331F] leading-none`}
              >
                창업 아이템 선정 노하우!
              </div>
            </SlideUpOnView>
            {itemData.map((item, idx) => (
              <div
                key={idx}
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'flex-col items-center'
                    : `max-w-[1300px] w-[100%] gap-10 py-10 ${
                        idx === 0 ? '' : 'border-t-[1px]'
                      } border-Black`
                } flex `}
              >
                <img
                  loading='lazy'
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'flex-1 max-w-[250px] my-6'
                      : 'flex-1 max-w-[400px]'
                  } w-full aspect-[1/1]`}
                  alt={item.alt}
                  src={`${process.env.PUBLIC_URL}/sub_1/${item.image}`}
                />
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'flex-col items-center'
                      : 'flex-1 flex-col justify-center'
                  } flex`}
                >
                  <div
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-SubTitle-mo'
                        : 'Slb-SubTitle flex-col flex-wrap mb-12'
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
                        {item.number}
                      </div>
                      {item.numberStr}
                      {item.title}
                      <span
                        className={`${
                          deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? 'Slb-Title-mo'
                            : 'Slb-Title'
                        } text-[#EF812A]`}
                      >
                        {item.highlight}
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
                    {item.desc.map((text, i) => (
                      <p
                        key={i}
                        className={`${
                          deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? 'text-center break-keep'
                            : ''
                        }`}
                      >
                        {text.split('/').map((part, idx) =>
                          idx % 2 === 1 ? (
                            <span key={idx} className='font-medium'>
                              {part}
                            </span>
                          ) : (
                            <span key={idx}>{part}</span>
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full Slb-Title-mo pt-10 aspect-[720/439] bg-no-repeat bg-center bg-cover flex flex-col items-center h-fit'
              : 'w-[1300px] Slb-Title pt-40'
          } flex flex-col items-center`}
          style={{
            backgroundImage: `${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? `url(${process.env.PUBLIC_URL}/sub_1/sub_1_3_2_1_mo.webp)`
                : ''
            }`,
          }}
        >
          <Chip
            text='Point 5'
            type={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'white'
                : 'black'
            }`}
          />
          <SlideUpOnView>
            <div className='flex items-end leading-none mb-10'>
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mt-4'
                    : 'Slb-Point mt-6'
                } text-[#FF331F] font-black leading-none`}
              >
                노동 강도 낮은 순의 비교
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
            SLB는 다른 산업군 대비{' '}
            <span className='font-medium'>노동강도가 늦으면서도</span>
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo flex-col items-center text-White'
                : 'Slb-Content mb-[8rem] gap-2'
            } flex`}
          >
            <span className={`flex`}>
              예비창업자님들의
              <span className='font-medium'>인력을</span>
            </span>
            <span className={`flex`}>
              <span className='font-medium'>최소화 할 수 있는 구도</span>
              입니다.
            </span>
          </div>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[720/439]'
              : 'aspect-[1904/860]'
          } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/sub_1/sub_1_3_2${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_2_mo' : ''
            }.webp)`,
          }}
        />
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
          <Chip text='Point 6' type='black' />
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
                <span className='font-medium'>오픈 지원 2~3일일</span>
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
                    : ''
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
          <Chip text='Point 7' type='black' />
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
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mb-1'
                  : 'mb-2'
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
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mb-6'
                  : 'mb-10'
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
                SLB는 ‘가맹점과 끝까지 함께한다’는 초심을 늘 기억 하고
                실천합니다.
              </p>
              <p className='font-medium'>
                가맹점주님이 함께하시는 그날까지 튼튼한 울타리가
                되어드리겠습니다.
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
    </div>
  );
};

export default SubForm1;
