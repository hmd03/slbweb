import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub1Section3: React.FC = () => {
    const deviceInfo = useDeviceInfo();

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
                '일반적인 브랜드 매력도라고 하면 유명 프랜차이즈 브랜드만을 생각하는 경우가 많습니다. 하지만, /브랜드 매력도는 단순히 유명하냐가 아닌 판매 아이템의 상품성, 발전 가능성, 고객 소비 트렌드 등을 종합해서 판단/해야 합니다.',
                '유명 프랜차이즈가 많다는 이야기는 그만큼 레드 오션 시장일 가능성이 높습니다. 블루오션 시장의 아이템 중 브랜드 매력도가 높은 프랜차이즈를 선택하는 것이 /장기적으로 예비창업자님들이 중요하게 생각하고 계신 매출 향상과 안정적인 수익성/을 가져갈 수 있습니다.',
            ],
            /* 05/15 추가 -SH */
        },
        {
            number: '3',
            numberStr: '세 번째,',
            title: '운영',
            highlight: '편의성',
            image: 'sub_1_3_1_3.webp',
            alt: '운영 편의성',
            desc: [
                '운영 편의성에서 가장 많이 생각하는 부분이 노동강도 입니다. 푸드테크 기술이 많이 도입되었다고는 하지만 여전히 외식은 다른 산업군 대비 노동강도가 높으며 개인적인 시간을 갖기가 어려운 구조입니다.',
                '그렇기 때문에 /노동강도가 낮으면서도 인력을 최소화 할 수 있는 창업 아이템을 고르는 것이 중요/합니다. 단순히 노동강도가 낮다고 고르기보다 /매출 구조를 꼼꼼히 따져보는 것이 중요/합니다. 막상 노동강도가 낮다고 창업했지만 매출과 수익성이 높지 않은 경우가 많기 때문입니다.',
            ],
            /* 05/15 추가 -SH */
        },
    ];

    return (
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
                            ? ''
                            : 'mb-5'
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
                        <p>
                            요즘 뜨고 있으니까, 너도 나도 하는 것 같으니까?
                            창업!
                        </p>
                        <p>
                            잠깐, 멈추세요! 무작정 창업 하지 말고 이것만 알고
                            시작하세요
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'flex-1 max-w-[250px] my-6'
                                        : 'flex-1 max-w-[400px]'
                                } w-full aspect-[1/1]`}
                                alt={item.alt}
                                src={`${process.env.PUBLIC_URL}/sub_1/${item.image}`}
                            />
                            <div
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'flex-col items-center'
                                        : 'flex-1 flex-col justify-center'
                                } flex`}
                            >
                                <div
                                    className={`${
                                        deviceInfo.isSmallScreen ||
                                        deviceInfo.isMobile
                                            ? 'Slb-SubTitle-mo'
                                            : 'Slb-SubTitle flex-col flex-wrap mb-12'
                                    } flex`}
                                >
                                    <p
                                        className={`${
                                            deviceInfo.isSmallScreen ||
                                            deviceInfo.isMobile
                                                ? 'gap-1'
                                                : 'gap-2'
                                        } flex items-center`}
                                    >
                                        <div
                                            className={`${
                                                deviceInfo.isSmallScreen ||
                                                deviceInfo.isMobile
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
                                <div
                                    className={`${
                                        deviceInfo.isSmallScreen ||
                                        deviceInfo.isMobile
                                            ? 'Slb-Content-mo px-6 mb-20'
                                            : 'Slb-Content'
                                    } break-keep whitespace-pre-wrap flex flex-col gap-8`}
                                >
                                    {item.desc.map((text, i) => (
                                        <p
                                            key={i}
                                            className={`${
                                                deviceInfo.isSmallScreen ||
                                                deviceInfo.isMobile
                                                    ? 'text-center break-keep'
                                                    : ''
                                            }`}
                                        >
                                            {text.split('/').map((part, idx) =>
                                                idx % 2 === 1 ? (
                                                    <span
                                                        key={idx}
                                                        className='font-medium'
                                                    >
                                                        {part}
                                                    </span>
                                                ) : (
                                                    <span key={idx}>
                                                        {part}
                                                    </span>
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
                    <span className='font-medium'>노동강도가 낮으면서도</span>
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
                        <span className='font-medium'>&nbsp;인력을</span>
                    </span>
                    <span className={`flex`}>
                        <span className='font-medium'>
                            최소화 할 수 있는 구도
                        </span>
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
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL
                    }/sub_1/sub_1_3_2${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_2_mo'
                            : ''
                    }.webp)`,
                }}
            />
        </section>
    );
};

export default Sub1Section3;
