import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub4Section4: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const itemData = [
    {
      number: '1',
      title: '철저한',
      highlight: '가맹점 상권보호',
      desc: [
        '가맹계약 시 가맹점주님과 협의를 통한 상권 결정',
        `상권 확정 후 어떠한 사유가 발생하여도 동일 영업 지역 내 입점을 SLB는 철저히 금지하고 있습니다.`,
      ],
    },

    {
      /* 05/15 변경 -SH */
      number: '2',
      title: '정기적인',
      highlight: '신메뉴 개발 및 출시',
      desc: [
        `트렌드 분석을 통해 경쟁력 높은 메뉴 개발을 지속적으로 실시하며, 주기적인 신메뉴 출시를 통해 고객 만족도를 높여 매출을 향상 시킵니다.
`,
      ],
    },
    {
      /* 05/15 변경 -SH */
      number: '3',
      title: '안정적인',
      highlight: '물류공급',
      desc: [
        `신선 제품의 안정적인 공급을 위해 당일 배송을 원칙으로 하며 친환경 무농약 채소 계약 재배를 통해 제품을 안전하고 빠르게 공급해 드립니다. (주 6회 배송, 일부 지역 제외)`,
      ],
    },
    {
      number: '4',
      title: '제안 및 지원',
      highlight: '지속적인 마케팅',
      desc: [
        `매장 별 상권에 적합한 맞춤 이벤트 및 브랜드 마케팅을 통한 가맹점 매출 향상에 도움이 될 수 있도록 지속적으로 제안 및 지원해 드립니다.
        `,
      ],
    },
  ];

  return (
    <section
      id='section-4'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo mt-20'
          : 'Slb-Title'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
    >
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          <div className='pt-20'>
          <Chip text='Point 5' type='black' />
            <SlideUpOnView>
              <div className='mt-4'>일 잘하는 사람들의 운영 관리 시스템</div>
            </SlideUpOnView>
          </div>
          <div className='w-[1px] border border-black h-10 my-4' />
          <div>가맹점주님의 고민을 줄여드리기 위해</div>
          <div className='flex flex-col items-center Slb-Point-mo gap-1 leading-none'>
            일 잘하는 SLB 식구들은
            <p className='flex items-end text-[#FF331F]'>항상 고민합니다</p>
          </div>
          <div className='Slb-Content-mo gap-2 mt-8 mb-10 flex flex-col items-center leading-none'>
            <p>일 잘하는 SLB는 신규 가맹점을 늘리는 것보다</p>
            <p>현재 가맹점주님들의 성공을 더 중요하게 생각합니다</p>
          </div>
          <div className='Slb-SubTitle-mo flex flex-col items-center gap-1 leading-none'>
            <p>가맹점주님이 진심으로</p>
            <p>'가족'이라 부르실 수 있도록 노력하겠습니다!</p>
          </div>
          <div
            className='mt-10 aspect-[720/694] bg-no-repeat bg-center w-full h-full flex flex-col items-center justify-end'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_4_1_background_mo.webp)`,
              backgroundSize: 'cover',
            }}
          >
            <div className='mb-10 text-center'>
              <p>내 가족이 운영하는 매장이라고</p>
              <p>생각하면 아무리 사소해도</p>
              <p>대충 할 수 있겠어요?</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='pt-10 pb-20 bg-[#F0F0F0] w-full flex flex-col items-center'>
          <Chip text='Point 5' type='black' />
            <SlideUpOnView>
              <div className='mb-5 mt-6'>
                일 잘하는 사람들의 운영 관리 시스템
              </div>
            </SlideUpOnView>

            <div className='w-[1px] border border-black h-20 my-6' />
            <div>가맹점주님의 고민을 줄여드리기 위해</div>
            <div className='flex justify-center gap-2 mt-2 mb-20 Slb-Point leading-none'>
              일 잘하는 SLB 식구들은
              <p className='flex items-end text-[#FF331F]'>항상 고민합니다</p>
            </div>
            <div className='Slb-Content gap-2 mb-10 flex flex-col items-center leading-none'>
              <p>일 잘하는 SLB는 신규 가맹점을 늘리는 것보다</p>
              <p>현재 가맹점주님들의 성공을 더 중요하게 생각합니다</p>
            </div>
            <div className='flex flex-col items-center gap-2 leading-none'>
              <p>가맹점주님이 진심으로</p>
              <p>'가족'이라 부르실 수 있도록 노력하겠습니다!</p>
            </div>
          </div>
          <div
            className='aspect-[1904/629] bg-no-repeat bg-bottom w-full h-full flex flex-col items-center justify-center'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/sub_4/sub_4_4_1_background.webp)`,
              backgroundSize: 'cover',
            }}
          >
            <div className='w-full h-full max-w-[1100px]'>
              <div className='ml-auto Slb-Point flex-1 flex flex-col justify-center h-full gap-2 mt-10 leading-none w-[50%]'>
                <p>내 가족이 운영하는</p>
                <p>매장이라고 생각하면</p>
                <p>아무리 사소해도</p>
                <p>대충 할 수 있겠어요?</p>
                <div className='ml-auto mt-8'>- SLB 대표</div>
              </div>
            </div>
          </div>
        </>
      )}
      <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col gap-1 items-center mt-10'
              : 'gap-2 mt-40'
          } flex`}
        >
          <p>프랜차이즈에 특화된</p>
          <p>전문 슈퍼바이저를 통한</p>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ' Slb-Point-mo'
              : ' Slb-Point'
          } flex items-end leading-none text-[#FF331F]`}
        >
          SLB의 슈퍼바이징 시스템
        </div>
      </SlideUpOnView>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-col items-center px-8 mt-10'
            : 'justify-center'
        } flex`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[661/639]'
              : 'aspect-[1904/1002] mt-40'
          } w-full`}
          alt={`슈퍼바이징 시스템`}
          src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_2${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        />
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[720/1602] mb-20'
            : 'mt-40 mb-40 aspect-[1904/600]'
        }  bg-no-repeat bg-center w-full flex flex-col items-center`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_2${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo1' : ''
          }_background.webp)`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full pt-10'
              : 'w-[1300px] justify-center'
          } flex flex-col items-center h-full font-semibold`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <div className={` flex flex-col px-8 gap-4`}>
              <div className='flex-1'>
                <img
                  loading='lazy'
                  className='w-full rounded-t shadow-lg'
                  alt='오픈 초기 안정적인 매장운영 지원'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_1_mo.webp`}
                />
              </div>
              <div className='flex-1'>
                <img
                  loading='lazy'
                  className='w-full rounded-t shadow-lg'
                  alt='상권 특성에 적합한 운영방안 개발'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_2_mo.webp`}
                />
              </div>
              <div className='flex-1'>
                <img
                  loading='lazy'
                  className='w-full rounded-t shadow-lg'
                  alt='본사 마케팅 정책 및 운영 매뉴얼 시행 점검'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_3_mo.webp`}
                />
              </div>
              <div className='flex-1'>
                <img
                  loading='lazy'
                  className='w-full rounded-t shadow-lg'
                  alt='가맹점 애로사항 수집 및 대안강구'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_4_mo.webp`}
                />
              </div>
            </div>
          ) : (
            /* 05/04 변경 -SH
             *   max-w-[1300px] -> max-w-[1100px]
             */
            <div className='w-[1100px] mt-20 mx-auto flex justify-between'>
              <div className='flex-none w-[270px] h-[425px]'>
                <img
                  loading='lazy'
                  className='w-full h-full object-cover rounded-t shadow-lg'
                  alt='오픈 초기 안정적인 매장운영 지원'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_1.webp`}
                />
              </div>
              <div className='flex-none w-[270px] h-[425px]'>
                <img
                  loading='lazy'
                  className='w-full h-full object-cover rounded-t shadow-lg'
                  alt='상권 특성에 적합한 운영방안 개발'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_2.webp`}
                />
              </div>
              <div className='flex-none w-[270px] h-[425px]'>
                <img
                  loading='lazy'
                  className='w-full h-full object-cover rounded-t shadow-lg'
                  alt='본사 마케팅 정책 및 운영 매뉴얼 시행 점검'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_3.webp`}
                />
              </div>
              <div className='flex-none w-[270px] h-[425px]'>
                <img
                  loading='lazy'
                  className='w-full h-full object-cover rounded-t shadow-lg'
                  alt='가맹점 애로사항 수집 및 대안강구'
                  src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_3_4.webp`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* 05/15 변경 -SH */}
      {/* <Chip text='Point 6' type='black' /> */}
      <SlideUpOnView>
        <div className='flex flex-col text-center leading-none '>
          <span
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'flex items-end mt-4 mb-1'
                : 'flex items-end mb-2 mt-6'
            } leading-none`}
          >
            가맹점의
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
              } leading-none text-[#FF331F]`}
            >
              &nbsp;안정적인 운영
            </p>
            을 위한
          </span>
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mb-10'
                : 'Slb-Point mb-40'
            } leading-none`}
          >
            SLB 본사의 노력
          </p>
        </div>
      </SlideUpOnView>
      {itemData.map((item, idx) => (
        <div
          key={idx}
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? `flex-col py-4 mx-8 ${
                  idx === 0 ? '' : 'border-t-[1px]'
                } border-Black`
              : `max-w-[1300px] w-full gap-10 py-10 ${
                  idx === 0 ? '' : 'border-t-[1px]'
                } border-Black`
          } flex `}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'flex-col'
                : 'flex-1 flex-col justify-center'
            } flex`}
          >
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Title-mo mb-4'
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
                      : `flex items-center justify-center w-6 h-6 rounded-full bg-black text-white Slb-Content `
                  }`}
                >
                  {item.number}
                </div>
                <div
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? ' gap-1'
                      : `items-end gap-2`
                  } flex ${idx === 3 ? `flex-row-reverse` : ``}  `}
                >
                  {item.title}
                  <span
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                    } text-[#EF812A]`}
                  >
                    {item.highlight}
                  </span>
                </div>
              </p>
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo px-6'
                  : 'Slb-Content'
              } break-keep whitespace-pre-wrap flex flex-col`}
            >
              {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
                <p className='break-keep'>{item.desc.join(' ')}</p>
              ) : (
                item.desc.map((text, i) => <p key={i}>{text}</p>)
              )}
            </div>
          </div>
        </div>
      ))}
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'px-8' : ''
        } w-full`}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[579/695] my-10'
              : 'aspect-[1904/624] my-60'
          } w-full`}
          alt={`SLB는 이미
          준비되어 있습니다!!
          본사와 적극적으로 함께 노력할
          수 있는 강한 의지로 성공을
          만들어갈 예비 가족분들을
          기다립니다.`}
          src={`${process.env.PUBLIC_URL}/sub_4/sub_4_4_4${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        />
      </div>
    </section>
  );
};

export default Sub4Section4;
