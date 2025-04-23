import React from "react";
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub3Section3: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const itemData = [
    {
      number: '1',
      desc: [
        'SLB는 대기업 자체 발주 시스템으로',
        '/주 6회 물류 배송/'
      ],
    },
    {
      number: '2',
      desc: [
        '매일 신선하고 품질 높은 /식자재만 선별 후/ 가맹점에 배송!',
      ],
    },
    {
      number: '3',
      desc: [
        '특히, 한식X샐러드&포케 전문 브랜드로서 가장 중요한 채소 공급은 /친환경 무농약 인증을 받은 농장과 계약 재배/로 사시사철 신선한 채소를 /저렴하게공급/ 가능!',
      ],
    },
  ];

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
          샐러드 & 포케 창업 이것만은 꼭 확인하세요!
        </div>
      </SlideUpOnView>
      <div
        className={`w-[1px]  border border-black  ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'h-10 my-4'
            : 'h-20 my-10'
        }`}
      />
      <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          } flex items-end leading-none`}
        >
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point mr-2'
            } flex items-end leading-none text-[#FF331F]`}
          >
            주 6회 배송?
          </p>
          은
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point ml-2'
            } flex items-end leading-none text-[#FF331F]`}
          >
            기본!
          </p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
          } flex items-end leading-none`}
        >
         샐러드&포케 전문 브랜드는
        </div>
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
            샐러드 채소
          </p>
          의
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point ml-2'
            } flex items-end leading-none text-[#FF331F]`}
          >
            공급 안정성
          </p>
          이
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ' Slb-Point-mo'
                : ' Slb-Point ml-2'
            } flex items-end leading-none text-[#FF331F]`}
          >
            중요
          </p>
        </div>
        <div
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'my-10'
          : 'mt-40 mb-6'
      } w-full flex justify-center`}
    >
      <img
        loading='lazy'
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'px-4'
            : 'max-w-[1300px] aspect-[1139/594]'
        } w-full`}
        alt={`샐러드 & 포케 창업 이것만은 꼭 확인하세요!`}
        src={`${process.env.PUBLIC_URL}/sub_3/sub_3_3_1.webp`}
      />
    </div>
    <span className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? ''
          : 'Slb-Content flex-col items-end max-w-[1300px] text-DeepGray mb-40'
      } w-full flex `}>
        <span>* 일부 지역은 배송 기준이 다를 수 있습니다.</span>
        <span>SLB 본사로 직접 문의하세요</span>
      </span>
      <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full Slb-Title-mo pt-20'
              : 'Slb-Title pt-20'
          } flex flex-col items-center`}
        >
          <Chip text='Point 6' type='black' />
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'mb-1'
                  : 'mt-6 mb-20'
              } flex items-end leading-none`}
            >
              SLB는 대기업
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo mx-1'
                    : 'Slb-Point ml-2'
                } text-[#FF331F] leading-none`}
              >
                발주 시스템
              </p>
            </div>
          </SlideUpOnView>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'p-4 gap-4 flex-col-reverse'
              : 'max-w-[1300px] w-[100%] mt-20 mb-40'
          } flex`}
        >
          <div className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'flex-col Slb-Content px-10 w-[50%] justify-center'
          } flex`}>
          {itemData.map((item, idx) => (
            <div className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ''
                : `items-start py-10 ${
                      idx === 0 ? '' : 'border-dashed border-t-[1px]'
                    } border-Black`
            } flex`}>
              <div 
                className={`${ deviceInfo.isSmallScreen || deviceInfo.isMobile 
                ? 'w-4 h-4' 
                : `w-6 h-6 mr-2 ${idx == 1 ? 'mt-2' : 'mt-1'}`} 
                flex items-center justify-center rounded-full bg-black text-white`} 
                > 
                  {item.number} 
              </div>
              <div className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? ''
                : 'w-[90%]'
                 }`}>
                {item.desc.map((text, i) => (
                      <p
                        key={i}
                        className={`${
                          deviceInfo.isSmallScreen || deviceInfo.isMobile
                            ? 'text-center break-keep'
                            : 'break-keep leading-2'
                        }`}
                      >
                        {text.split('/').map((part, idx) =>
                          idx % 2 === 1 ? (
                            <span key={idx} className='Slb-SubTitle'>
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
          ))}
          </div>
          <img
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'flex-1'
            } w-full`}
            alt={`SLB는 대기업 발주 시스템`}
            src={`${process.env.PUBLIC_URL}/sub_3/sub_3_3_2.webp`}
          />
        </div>
      </section>);
};

export default Sub3Section3;