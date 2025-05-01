import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub2Section4: React.FC = () => {
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
                {/* <Chip text='Point 8' type='black' /> */}
                <Chip text='Point 4' type='black' />
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'mb-1'
                                        : 'mb-2'
                                } flex items-end leading-none`}
                            >
                                샐러드&포케 X 한식 접목
                            </div>
                            <div
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'mb-10'
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'mb-1'
                                        : 'mb-2'
                                } flex items-end leading-none`}
                            >
                                샐러드&포케 X 한식 접목
                            </div>
                            <div
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? ''
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
                        ? 'Slb-Content-mo flex-col items-center'
                        : 'Slb-Content flex-col items-center'
                } flex`}
            >
                {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                    <>
                        <p>
                            음식에 진심인 사람들이 모여
                            <span className='font-medium'>맛에 대한</span>
                        </p>
                        <p>
                            <span className='font-medium'>
                                기준이 높은 SLB!
                            </span>
                            고객의 건강은 물론
                        </p>
                        <p>입맛까지 사로잡기 위해 우리나라 전통 식문화를 </p>
                        <p>접목한 요리를 연구하고 개발해</p>
                        <p>독보적인 메뉴 경쟁력을 갖추고 있습니다.</p>
                    </>
                ) : (
                    <>
                        <p>
                            음식에 진심인 사람들이 모여
                            <span className='font-medium'>
                                맛에 대한 기준이 높은 SLB!
                            </span>
                        </p>
                        <p>고객의 건강은 물론 입맛까지 사로잡기 위해</p>
                        <p>
                            <span className='font-medium'>
                                우리나라 전통 식문화를 접목
                            </span>
                            한 요리를 연구하고 개발해
                        </p>
                        <p>독보적인 메뉴 경쟁력을 갖추고 있습니다.</p>
                    </>
                )}
            </div>
            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'flex-col-reverse items-center  py-6 px-4'
                        : `max-w-[1300px] w-[100%] gap-10 py-10 my-20 items-center`
                } flex `}
            >
                <div>
                    <div
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'items-start py-4 border-t-[1px] border-Black'
                                : 'flex-col justify-center py-10 border-b-[2px] border-Black'
                        } flex`}
                    >
                        <div
                            className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                    ? 'Slb-SubTitle-mo flex-1'
                                    : 'Slb-SubTitle flex-col flex-wrap mb-6'
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
                                    1
                                </div>
                                <span
                                    className={`${
                                        deviceInfo.isSmallScreen ||
                                        deviceInfo.isMobile
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
                                    ? 'Slb-Content-mo w-[65%]'
                                    : 'Slb-Content'
                            } break-keep whitespace-pre-wrap flex flex-col gap-8`}
                        >
                            <p
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'break-keep'
                                        : ''
                                } flex flex-col `}
                            >
                                <span>SLB의 모든 메뉴는 직영점에서</span>
                                <span>고객 평가를 거칩니다.</span>
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'border-dotted border-t-[1px] border-Black'
                                : ''
                        }`}
                    ></div>
                    <div
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'items-start py-4 border-b-[1px] border-Black'
                                : 'flex-col justify-center py-10'
                        } flex`}
                    >
                        <div
                            className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                    ? 'Slb-SubTitle-mo flex-1'
                                    : 'Slb-SubTitle flex-col flex-wrap mb-6'
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
                                    1
                                </div>
                                <span
                                    className={`${
                                        deviceInfo.isSmallScreen ||
                                        deviceInfo.isMobile
                                            ? 'Slb-Title-mo'
                                            : 'Slb-Title'
                                    } text-[#EF812A]`}
                                >
                                    만족도 上
                                </span>
                            </p>
                        </div>
                        <div
                            className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                    ? 'Slb-Content-mo w-[65%]'
                                    : 'Slb-Content'
                            } break-keep whitespace-pre-wrap flex flex-col gap-8`}
                        >
                            <p
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'break-keep'
                                        : 'flex flex-col'
                                } `}
                            >
                                <span>
                                    SLB의 모든 메뉴는 고객평가를 거친 후
                                </span>
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
                        ? 'aspect-[720/420] text-White'
                        : 'aspect-[1904/650] text-White justify-center'
                } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL
                    }/sub_2/sub_2_4_2${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.webp)`,
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
                                ? 'mt-6 Slb-Content-mo'
                                : 'mt-[6rem]'
                        } flex items-end leading-none`}
                    >
                        고객의 제대로 된 한끼를 대접하기 위해
                    </div>
                    <div
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'Slb-Content-mo mt-1'
                                : 'mt-2'
                        } flex items-end leading-none`}
                    >
                        재료의 선택부터 메뉴의 구성까지 고민하다
                    </div>
                    <div
                        className={`${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'Slb-Title-mo flex-col'
                                : 'Slb-Title items-center leading-none mt-2'
                        } flex `}
                    >
                        정성을 담은
                        <p
                            className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                    ? 'Slb-Point-mo w-fit'
                                    : 'Slb-Point ml-2'
                            } bg-[#FF331F] leading-none p-1`}
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
                        <div className='text-[10px] font-normal flex flex-col gap-1 leading-none'>
                            <div>한끼를 먹더라도 든든하게 드실 수 있도록</div>
                            <div>제대로 된 한상의 감동을 경험 할 수 있도록</div>
                            <div>SLB는 고객을 가장 중요하게 생각합니다</div>
                        </div>
                    ) : (
                        <div className='Slb-Content flex flex-col leading-none gap-3 mb-[6rem]'>
                            <div>한끼를 먹더라도 든든하게 드실 수 있도록</div>
                            <div>제대로 된 한상의 감동을 경험 할 수 있도록</div>
                            <div>SLB는 고객을 가장 중요하게 생각합니다</div>
                        </div>
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
                {/* 05/15 변경 -SH */}
                {/* <Chip text='Point 9' type='black' /> */}
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
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
                        ? 'Slb-Content-mo flex-col items-center mt-4'
                        : 'Slb-Content flex-col items-center mb-20 mt-6'
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
                        : 'my-40 m-40'
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
                    src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_3${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.png`}
                />
            </div>

            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-10'
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
                    src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_4${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.png`}
                />
            </div>

            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-10'
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
                    src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_5${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.png`}
                />
            </div>

            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mb-10'
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
                    src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_6${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.png`}
                />
            </div>

            <div
                className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? ''
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
                    src={`${process.env.PUBLIC_URL}/sub_2/sub_2_4_7${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.png`}
                />
            </div>
        </section>
    );
};

export default Sub2Section4;
