import React from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import Chip from '../../../ui/chip/chip';
import SlideUpOnView from '../../../ui/slideUpOnView/SlideUpOnView';

const Sub3Section2: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  return (
    <section
      id='section-1'
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? 'Slb-Title-mo mt-10'
          : 'Slb-Title mt-40'
      } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
    >
      <Chip
        text='Point 3'
        type={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'black' : 'black'
        }`}
      />
      <SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mt-4 flex flex-col text-center'
              : 'mt-6'
          }`}
        >
          청년, 중장년, 남녀 누구나 <span>성공 창업 가능!</span>
        </div>
      </SlideUpOnView>
      <div
        className={`w-[1px]  border border-black  ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'h-10 my-4'
            : 'h-20 my-6'
        }`}
      />
      <div>요새 어렵다고 하는데</div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'mb-20'
        } flex items-end leading-none`}
      >
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? ' Slb-Point-mo'
              : ' Slb-Point'
          } flex items-end leading-none text-[#FF331F]`}
        >
          지금 창업해도 되나요?
        </p>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo gap-2 mt-8 mb-10'
            : 'Slb-Content gap-2 mb-40'
        } flex leading-none flex-col items-center`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>여전히 많은 예비창업자가 창업을 진행 중!</p>
            <p>
              다만,{' '}
              <span className='font-medium'>매출만 좋은 아이템이 아닌</span>
            </p>
            <p>
              <span className='font-medium'>
                평균 매출의 지속성이 높은 확실한 창업 아이템
              </span>
              인지
            </p>
            <p>여부를 먼저 확인하는 것이 중요</p>
          </>
        ) : (
          <>
            <p>여전히 많은 예비창업자가 창업을 진행 중!</p>
            <p>
              다만,{' '}
              <span className='font-medium'>
                매출만 좋은 아이템이 아닌 평균 매출의 지속성이 높은
              </span>
            </p>
            <p>
              <span className='font-medium'>확실한 창업 아이템</span>인지 여부를
              먼저 확인하는 것이 중요
            </p>
          </>
        )}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-col'
            : 'justify-center gap-6'
        } w-full flex `}
      >
        {[1, 2].map((v) => (
          <div
            key={v}
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'p-8' : ''
            } w-fit`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? ' aspect-[404/280]'
                  : 'max-w-[404px] aspect-[404/280]'
              } w-full`}
              alt={`SLB`}
              src={`${process.env.PUBLIC_URL}/sub_3/sub_3_2_${v}.webp`}
            />
          </div>
        ))}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-col'
            : 'mt-10 mb-40'
        } w-full flex justify-center gap-6`}
      >
        {[3, 4, 5].map((v) => (
          <div
            key={v}
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'p-8' : ''
            } w-fit`}
          >
            <img
              loading='lazy'
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'aspect-[404/280]'
                  : 'max-w-[404px] aspect-[404/280]'
              } w-full`}
              alt={`SLB`}
              src={`${process.env.PUBLIC_URL}/sub_3/sub_3_2_${v}.webp`}
            />
          </div>
        ))}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'w-[1300px] Slb-Title pt-20'
        } flex flex-col items-center`}
      >
        <Chip text='Point 4' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4'
                : 'flex-col text-center my-6'
            } flex`}
          >
            예비 창업자 창업 의향도
          </div>
        </SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo flex-col items-center mt-6'
              : 'Slb-Content flex-col items-center mb-20'
          } flex`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <p>창업 하고 싶어하는 예비창업자의</p>
              <p>창업 의지는 여전히 높다</p>
              <p>
                <span className='font-medium'>
                  안정적인 매출과 수익이 확실한 창업 아이템
                </span>
                만 있다면
              </p>
              <p>창업하고 싶다는 것이 예비창업자들의 생각입니다.</p>
            </>
          ) : (
            <>
              <p>창업 하고 싶어하는 예비창업자의 창업 의지는 여전히 높다</p>
              <p>
                <span className='font-medium'>
                  안정적인 매출과 수익이 확실한 창업 아이템
                </span>
                만 있다면
              </p>
              <p>창업하고 싶다는 것이 예비창업자들의 생각입니다.</p>
            </>
          )}
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex flex-col'
              : ''
          } w-full`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <img
                loading='lazy'
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-10 aspect-[721/247]'
                    : 'max-w-[1253px] aspect-[1253/384]'
                } w-full`}
                alt={`예비 창업자 창업 의향도`}
                src={`${process.env.PUBLIC_URL}/sub_3/sub_3_2_6_1_mo.webp`}
              />
              <img
                loading='lazy'
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mt-6 aspect-[721/247]'
                    : 'max-w-[1253px] aspect-[1253/384]'
                } w-full`}
                alt={`예비 창업자 창업 의향도`}
                src={`${process.env.PUBLIC_URL}/sub_3/sub_3_2_6_2_mo.webp`}
              />
            </>
          ) : (
            <>
              <img
                loading='lazy'
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ''
                    : 'max-w-[1253px] aspect-[1253/384]'
                } w-full`}
                alt={`예비 창업자 창업 의향도`}
                src={`${process.env.PUBLIC_URL}/sub_3/sub_3_2_6.webp`}
              />
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'mt-20 aspect-[720/1585]'
            : 'aspect-[1904/3000] pt-[30rem]'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-full`}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL
          }/sub_3/sub_3_2_background${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp)`,
        }}
      >
        <Chip text='Point 5' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4 flex-col text-center'
                : 'mt-6 flex-col text-center leading-none gap-1'
            }  flex`}
          >
            <p>예비 창업자님!</p>
            <p>매력적인 외식 프랜차이즈</p>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo leading-none'
                  : 'Slb-Point'
              } text-[#FF331F]`}
            >
              SLB 어떠세요?
            </p>
          </div>
        </SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo gap-2 mt-10 text-center'
              : 'Slb-Content gap-2 mb-40 mt-6'
          } flex leading-none flex-col items-center`}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <p>익숙함에 새로움을 더해 더 특별한 맛집</p>
              <p className='font-medium'>한식X샐러드&포케 전문점 SLB</p>
            </>
          ) : (
            <>
              <p>익숙함에 새로움을 더해 더 특별한 맛집</p>
              <p className='font-medium'>한식X샐러드&포케 전문점 SLB</p>
            </>
          )}
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ' my-20'
          } w-full flex justify-center`}
        >
          <img
            loading='lazy'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'px-4'
                : 'max-w-[1232px] aspect-[1232/636]'
            } w-full`}
            alt={`폭식 후 식단 균형 조절`}
            src={`${process.env.PUBLIC_URL}/sub_3/sub_3_2_7${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
            }.webp`}
          />
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col  border-y-[1px] border-Black'
              : 'flex-col max-w-[1300px] mt-20 px-20 border-y-[1px] border-Black'
          } w-full flex justify-center`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo gap-2 mt-10 text-center'
                : 'Slb-Content gap-2 mt-10'
            } flex leading-none flex-col items-center`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <>
                <p>고물가 시대 외식 소비 변화 대표 키워드</p>
                <span className='font-medium'>#푸드게이지(웰빙,가심비)</span>
                <p>고객들의 먹는 즐거움, 건강 트렌드에 적합한 메뉴</p>
                <span className='font-medium'>샐러드&포케!</span>
                <div
                  className={`w-[1px]  border border-black  ${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'h-10 my-4'
                      : 'h-20 my-6'
                  }`}
                />
                <p>나만의 기준으로 균형을 맞추는</p>
                <p>#평균게이지 자극적인 식사, 폭식, 음주 후 건강하고</p>
                <p>가벼운 샐러드&포케로 나만의 총량을 맞추고</p>
                <p>식사와 건강 균형을 위해 음식의</p>
                <p className='mb-6'>칼로리 및 영양성분 필이 확인!</p>
              </>
            ) : (
              <>
                <p>
                  고물가 시대 외식 소비 변화 대표 키워드{' '}
                  <span className='font-medium'>#푸드게이지(웰빙,가심비)</span>
                </p>
                <p className='mb-10'>
                  고객들의 먹는 즐거움, 건강 트렌드에 적합한 메뉴{' '}
                  <span className='font-medium'>샐러드&포케!</span>
                </p>
                <p>
                  나만의 기준으로 균형을 맞추는 #평균게이지 자극적인 식사, 폭식,
                  음주 후
                </p>
                <p>건강하고 가벼운 샐러드&포케로 나만의 총량을 맞추고</p>
                <p>
                  식사와 건강 균형을 위해 음식의 칼로리 및 영양성분 필이 확인!
                </p>
              </>
            )}
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo flex-col'
                : 'Slb-Title justify-center my-10'
            } flex items-center leading-none w-full`}
          >
            지금이 SLB 한식X샐러드&포케
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo pb-2 px-2 mt-2 mb-10'
                  : 'Slb-Point pt-2 pb-2 ml-2'
              } 
            text-center text-[#FF331F] leading-none bg-no-repeat bg-bottom`}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_1_line.webp)`,
                backgroundSize: 'contain',
                textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
              }}
            >
              창업 적기!
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'aspect-[431/173] mt-[30rem]'
            : 'aspect-[1904/540]'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sub_3/sub_3_2_8.webp)`,
        }}
      />
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        <SlideUpOnView>
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'mb-2 Slb-Content-mo'
                    : 'mb-2'
                } flex items-end leading-none`}
              >
                이런 분들이 SLB를 창업합니다
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                } flex items-end leading-none`}
              >
                좋은 상권은 기다려 주지 않습니다
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
                이런 분들이 SLB를 창업합니다
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : 'mb-2'
                } flex items-end leading-none`}
              >
                좋은 상권은 기다려 주지 않습니다
              </div>
            </>
          )}
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'flex-col items-center mb-6'
                : 'items-end mb-10'
            } flex leading-none`}
          >
            <span
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'my-1' : ''
              } flex items-end`}
            >
              <p
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo flex-col text-center gap-1'
                    : 'Slb-Point mx-2 gap-2'
                } text-[#FF331F] leading-none flex`}
              >
                <span>SLB를 선점할 기회!</span>놓치지 마세요
              </p>
            </span>
          </div>
        </SlideUpOnView>
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo flex-col items-center'
            : 'Slb-Content flex-col items-center mb-4'
        } flex`}
      >
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <>
            <p>청년들은 어려운 취업 대신 N잡러 부가수입을 위해</p>
            <p>퇴직 걱정 없는 안정적인 직장으로</p>
            <p>경력 단절녀?지만 가정에 도움이 되고자 합니다</p>
          </>
        ) : (
          <>
            <p>청년들은 어려운 취업 대신 N잡러 부가수입을 위해</p>
            <p>퇴직 걱정 없는 안정적인 직장으로</p>
            <p>경력 단절녀?지만 가정에 도움이 되고자 합니다</p>
          </>
        )}
      </div>
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-col-reverse items-center py-6 px-4'
            : `w-full items-center justify-center mb-20`
        } flex `}
      >
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'aspect-[650/734]'
              : 'aspect-[1904/706]'
          } w-full`}
          alt={`SLB를 선점할 기회! 놓치지 마세요`}
          src={`${process.env.PUBLIC_URL}/sub_3/sub_3_2_9${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        />
      </div>
    </section>
  );
};

export default Sub3Section2;
