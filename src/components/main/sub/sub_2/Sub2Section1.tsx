import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

interface Sub2Section1Props {
    onIframeLoad?: () => void;
}

const Sub2Section1: React.FC<Sub2Section1Props> = ({ onIframeLoad }) => {
    const deviceInfo = useDeviceInfo();
    return (
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
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? ''
                            : ''
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
                    으로
                    <p
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? ' Slb-Point-mo'
                                : ' Slb-Point'
                        } flex items-end leading-none text-[#FF331F]`}
                    >
                        고려
                    </p>
                    하는
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
                        <p>고객들의 외식 선택 요소의 변화가</p>
                        <p>'샐러드 & 포케'시장의 성장으로 이어지고 있습니다.</p>
                    </>
                ) : (
                    <>
                        <p>고객들의 외식 선택 요소의 변화가</p>
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
                        ? 'Slb-Content-mo text-center flex-col'
                        : 'Slb-Content gap-2'
                } flex`}
            >
                외식에서 가장 중요한 것은 여전히 맛이지만
                <p>
                    현재 고객은
                    <span className='font-medium'>
                        {' ' /* 05/15 추가 -SH */}
                        건강도 중요하게 작용하는
                    </span>
                </p>
            </div>
            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Content-mo text-center flex-col'
                        : 'Slb-Content'
                } flex`}
            >
                <span className='font-medium'>영양성분을 음식의 맛만큼</span>
                <p>
                    {/* 05/15 추가 -SH */}
                    <span className='font-medium'>&nbsp;중요하게 생각</span>
                    하고 있습니다.
                </p>
            </div>
            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'Slb-Content-mo flex-col items-center text-White'
                        : 'Slb-Content mb-[8rem]'
                } flex`}
            >
                <span className={`flex`}>
                    고객들의 외식 선택 요소 변화가 ‘샐러드 & 포케’시장의
                    성장으로 이어지고 있습니다.
                </span>
            </div>
            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-10'
                        : ' mb-40'
                } w-full flex justify-center`}
            >
                {/* 05/04 변경 -SH
                 *   max-w-[1300px] -> max-w-[1100px]
                 */}
                <img
                    loading='lazy'
                    className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? 'px-4'
                            : 'max-w-[1100px]'
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
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.webp)`,
                }}
            >
                {/* 05/15 변경 -SH */}
                {/* <Chip text='Point 2' type='black' /> */}
                <SlideUpOnView>
                    <div
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'mt-4 flex-col text-center'
                                : 'mt-6 gap-2 items-end'
                        }  flex`}
                    >
                        한국인이 자주 섭취하는 메뉴
                        <p
                            className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                    ? 'Slb-Point-mo leading-none'
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
                            ? 'Slb-Content-mo gap-2 mb-6 mt-10 text-center'
                            : 'Slb-Content gap-2 mb-20 mt-20'
                    } flex leading-none flex-col items-center`}
                >
                    {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                        <>
                            <p>
                                지금
                                <span className='ml-1 font-medium'>
                                    한국인은 샐러드 섭취 횟수를 매년 늘리는 중
                                </span>
                            </p>
                            <p>SLB는 한국인이 가장 많이 섭취하는 한식을</p>
                            <p>샐러드&포케 등 다양한 메뉴에 접목해</p>
                            <p>시장 경쟁력을 더 높이고 있습니다</p>
                        </>
                    ) : (
                        <>
                            <p>
                                지금 한국인은 샐러드 섭취 횟수를 매년 늘리는 중
                            </p>
                            <p>
                                SLB는 한국인이 가장 많이 섭취하는 한식을
                                샐러드&포케 등 다양한 메뉴에 접목해
                            </p>
                            <p>시장 경쟁력을 더 높이고 있습니다</p>
                        </>
                    )}
                </div>
                <div
                    className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? ''
                            : ' mb-20'
                    } w-full flex justify-center`}
                >
                    {/* 05/04 변경 -SH
                     *   max-w-[1300px] -> max-w-[1100px]
                     */}
                    <img
                        loading='lazy'
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'px-4'
                                : 'max-w-[1100px]'
                        } w-full`}
                        alt={`한국인이 자주 섭취하는 메뉴 Top20`}
                        src={`${process.env.PUBLIC_URL}/sub_2/sub_2_1_2${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? '_mo'
                                : ''
                        }.webp`}
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
                {/* 05/15 변경 -SH */}
                {/* <Chip text='Point 3' type='black' /> */}
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
                                ? ' text-center flex-col leading-none'
                                : 'mt-6 items-end gap-2'
                        }  flex`}
                    >
                        <span className='flex items-end'>
                            앞으로
                            <p
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'Slb-Point-mo'
                                        : 'Slb-Point ml-2'
                                } text-[#FF331F]`}
                            >
                                성장할 수 밖에
                            </p>
                        </span>
                        <p
                            className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                    ? 'Slb-Point-mo mt-1 mb-6'
                                    : 'Slb-Point'
                            } text-[#FF331F]`}
                        >
                            없는 가장 큰 이유?
                        </p>
                    </div>
                </SlideUpOnView>
                <div
                    className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? 'Slb-Content-mo gap-2 mb-10 text-center'
                            : 'Slb-Content gap-2 mb-20 mt-20'
                    } flex leading-none flex-col items-center`}
                >
                    {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                        <>
                            <p className='font-medium'>
                                전 연령대 모두 신체/정신 건강에 대한
                            </p>
                            <p>폭넓은 관심과 관리 노력!</p>
                            <p>건강 관리 5대 관심 분야 : 수면, 식단 관리,</p>
                            <p> 스트레스 관리, 체중 감량 방법, 운동 방법</p>
                        </>
                    ) : (
                        <>
                            <p className='font-medium'>
                                전 연령대 모두 신체/정신 건강에 대한 폭넓은
                                관심과 관리 노력!
                            </p>
                            <p>
                                건강 관리 5대 관심 분야 : 수면, 식단 관리,
                                스트레스 관리, 체중 감량 방법, 운동 방법
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
                {/* 05/04 변경 -SH
                 *   max-w-[1300px] -> max-w-[1100px]
                 */}
                <img
                    loading='lazy'
                    className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? 'px-4'
                            : 'max-w-[1100px]'
                    } w-full`}
                    alt={`대한민국 전 연령 신체 정신 건강 우려도`}
                    src={`${process.env.PUBLIC_URL}/sub_2/sub_2_1_3${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.webp`}
                />
            </div>
            <div
                className={`w-full ${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-10 aspect-[4/3]'
                        : 'my-20 aspect-[16/7]'
                }`}
            >
                <iframe
                    loading='lazy'
                    className='w-full h-full'
                    src='https://www.youtube.com/embed/-Gn1Cmfe5Is?autoplay=1&mute=1&loop=1&playlist=-Gn1Cmfe5Is&controls=0&modestbranding=1&showinfo=0&rel=0'
                    title='Just Eat It! 한식X샐러드&포케 전문점 SLB'
                    onLoad={onIframeLoad}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default Sub2Section1;
