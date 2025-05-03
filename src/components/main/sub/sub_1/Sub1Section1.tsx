import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';
import DividerWithLabel from '../../../ui/label/DividerWithLabel';

const Sub1Section1: React.FC = () => {
    const deviceInfo = useDeviceInfo();
    const isMobile = deviceInfo.isMobile || deviceInfo.isSmallScreen;
    return (
        <section
            id='section-1'
            className={`${
                isMobile ? 'Slb-Title-mo' : 'Slb-Title'
            } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
        >
            {/* 05/04 변경 -SH */}
            <div
                className={`relative overflow-hidden
                  ${
                      isMobile
                          ? 'Slb-Title-mo aspect-[1/1] mb-10'
                          : 'Slb-Title aspect-[1904/1090] mb-40'
                  } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit font-semibold`}
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL
                    }/sub_1/sub_1_1_1${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? '_mo'
                            : ''
                    }.webp)`,
                }}
            >
                {isMobile && (
                    <>
                        <div
                            className='absolute inset-0 
                             bg-gradient-to-b 
                             from-black/80 
                             to-transparent'
                        />

                        <div className='relative w-full max-w-full z-10 px-4 mt-12'>
                            <h2 className='text-white text-[clamp(1.5rem,6vw,3.5rem)] font-bold mb-1'>
                                한식X샐러드&포케 SLB
                            </h2>
                            <div className='mt-8'>
                                <p className='text-white text-[clamp(1.5rem,6vw,3.5rem)] font-bold leading-tight'>
                                    <span className='text-red-600'>맛</span>에
                                    대한{' '}
                                    <span className='text-red-600'>고집이</span>
                                </p>
                                <p className='text-white text-[clamp(1.5rem,6vw,3.5rem)] font-bold leading-tight'>
                                    <span className='text-red-600'>
                                        남다른 특별함
                                    </span>
                                    을 만든다!
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'mb-4 break-keep'
                                        : 'mb-6'
                                }`}
                            >
                                대접하기 위해 우리나라 한식이 가지고 있는 특유의
                                정성과 세심함으로
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'w-[14%] my-4'
                                        : ' w-[10%] my-6'
                                } border-b-[2px] border-DeepGray`}
                            />
                            <p className='font-medium'>
                                새로운 시장을 개척하는 트렌드 리더
                            </p>
                            <p className='font-medium'>
                                한식X샐러드&amp;포케 전문점 SLB
                            </p>
                        </>
                    ) : (
                        <>
                            <p>단순히 건강한 샐러드&amp;포케 요리가 아닌</p>
                            <p>
                                고객의 입맛까지 사로잡을 수 있는 요리를 대접하기
                                위해
                            </p>
                            <p
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'mb-4'
                                        : 'mb-6'
                                }`}
                            >
                                우리나라 한식이 가지고 있는 특유의 정성과
                                세심함으로
                            </p>
                            <p>
                                식재료 선별은 물론 식재료의 궁합과 건강한
                                조리법까지 활용해
                            </p>
                            <p>
                                <span className='font-medium'>
                                    SLB만의 특별한 [맛의 정의]
                                </span>
                                를 만들어 갑니다.
                            </p>
                            <div
                                className={`${
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? ''
                                        : ' w-[10%] my-6'
                                } border-b-[2px] border-DeepGray`}
                            />
                            <p className='font-medium'>
                                새로운 시장을 개척하는 트렌드 리더
                                한식X샐러드&amp;포케 전문점 SLB
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
                                    deviceInfo.isSmallScreen ||
                                    deviceInfo.isMobile
                                        ? 'mb-4'
                                        : 'gap-10'
                                } flex flex-col items-center`}
                            >
                                <img
                                    loading='lazy'
                                    className={`${
                                        deviceInfo.isSmallScreen ||
                                        deviceInfo.isMobile
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
    );
};

export default Sub1Section1;
