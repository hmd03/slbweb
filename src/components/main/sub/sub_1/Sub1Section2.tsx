import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub1Section2: React.FC = () => {
    const deviceInfo = useDeviceInfo();

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
        <section
            id='section-2'
            className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'w-full Slb-Title-mo pt-20 pb-10'
                    : 'Slb-Title py-40'
            } flex flex-col items-center w-full`}
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
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? 'mb-1'
                            : 'mb-2'
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
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? ''
                            : 'flex-1'
                    } w-full`}
                    alt={`익숙한 한식 X 새로운 샐러드&포케`}
                    src={`${process.env.PUBLIC_URL}/sub_1/sub_1_2_1${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.webp`}
                />
                <div
                    className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? ''
                            : 'flex-1 '
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
                            <span className='font-bold'>더</span> 건강한 요리
                            개발을 위한 <span className='font-bold'>도전</span>
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
                                {/* 05/15 추가 -SH */}
                                <p>노력과 바램으로 요리하는 사람도 </p>
                                <p>먹는 사람도 만족할 수 있도록 맛과 건강에</p>
                                <p>특화된 한국의 ‘식(食)’ 문화를 기반으로</p>
                                <p>
                                    SLB다운 ‘맛의 정의’를 개발해 샐러드&포케로
                                </p>
                                <p className='mb-4'>
                                    새로운 외식 문화를 만들어 갑니다.
                                </p>
                                <p>고객에게 사랑 받는 남다른</p>
                                <p>특별한 ‘맛’으로 기억되는</p>
                                <p>독보적인 한식X샐러드&포케 브랜드 SLB</p>
                            </>
                        ) : (
                            <>
                                <p>
                                    보통의 외식브랜드가 단순히 ‘맛’을 위해
                                    노력하고 있을 때, SLB는 다른 고민을 합니다.
                                </p>
                                {/* 05/15 추가 -SH */}
                                <p>
                                    건강한 음식은 맛없다는 편견을 바꾸기 위해
                                    건강하지 못한 식습관을 개선하기 위한 노력과
                                    바램으로 요리하는 사람도 먹는 사람도 만족할
                                    수 있도록 맛과 건강에 특화된 한국의 ‘식(食)’
                                    문화를 기반으로 SLB다운 ‘맛의 정의’를 개발해
                                    샐러드&포케로 새로운 외식 문화를 만들어
                                    갑니다.
                                </p>
                                <p>
                                    고객에게 사랑 받는 남다른 특별한 ‘맛’으로
                                    기억되는 독보적인 한식X샐러드&포케 브랜드
                                    SLB
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
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'p-6'
                                        : 'flex-1'
                                } w-full`}
                                alt={item.alt}
                                src={`${process.env.PUBLIC_URL}/sub_1/${item.image}`}
                            />
                            <div
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'flex-col'
                                        : 'flex-1 flex-col justify-center'
                                } flex`}
                            >
                                <span
                                    className={`${
                                        deviceInfo.isSmallScreen ||
                                        deviceInfo.isMobile
                                            ? 'items-end gap-1 mb-6'
                                            : 'flex-col'
                                    } flex`}
                                >
                                    <div
                                        className={`${
                                            deviceInfo.isSmallScreen ||
                                            deviceInfo.isMobile
                                                ? 'Slb-Content-mo mb-[2px]'
                                                : 'Slb-Content mb-8'
                                        } text-DeepGray`}
                                    >
                                        {item.number}
                                    </div>
                                    <div
                                        className={`${
                                            deviceInfo.isSmallScreen ||
                                            deviceInfo.isMobile
                                                ? 'Slb-SubTitle-mo'
                                                : 'Slb-SubTitle flex-col flex-wrap mb-12'
                                        } flex`}
                                    >
                                        <p>
                                            {item.title}{' '}
                                            <span
                                                className={`${
                                                    deviceInfo.isSmallScreen ||
                                                    deviceInfo.isMobile
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
                                        deviceInfo.isSmallScreen ||
                                        deviceInfo.isMobile
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
    );
};

export default Sub1Section2;
