import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';
import RollingCard from '../../ui/RollingBanner/RollingCard';

const Point3Section: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const imageList = [
    `${process.env.PUBLIC_URL}/main/rolling/review1.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review2.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review3.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review4.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review5.jpg`,
  ];
  return (
    <>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title'
        } flex flex-col items-center w-full font-semibold`}
      >
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
                : 'w-[1300px] Slb-Title pt-20'
            } flex flex-col items-center`}
          >
            <Chip text='Point 3' type='black' />
            <SlideUpOnView>
              <div className='mt-2'>SLB는 고객이 만든 #맛집</div>
              <div className='flex items-end leading-none mb-10'>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : 'Slb-Point'
                  } text-[#FF331F] font-black leading-none`}
                >
                  고객들의 후기
                </p>
                를 확인하세요!
              </div>
            </SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo flex-col items-center'
                  : 'Slb-Content gap-2'
              } flex`}
            >
              특별한 광고 없이도 <p>매출이 높을 수 밖에 없는 이유는 고객!</p>
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo flex-col items-center mt-2'
                  : 'Slb-Content mb-[8rem] gap-2'
              } flex`}
            >
              예비창업자님들의
              <span className={`flex`}>
                <p className='font-medium'>창업문의가 끊이지 않는 이유</p>
                이기도 합니다.
              </span>
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
        className='bg-no-repeat bg-center bg-cover w-full'
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_3_background_1.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content'
          } flex flex-col items-center w-full bg-[#231F20] text-White invisible`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full Slb-Content-mo pt-6  pb-6'
                : 'w-[1300px] Slb-Content pt-20  pb-10'
            } flex flex-col items-center`}
          >
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo'
                  : 'Slb-Content'
              } flex items-center leading-none mb-3`}
            >
              블루오션, 샐러드 & 포케 시장에서 남다른 고집으로
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Content-mo'
                  : 'Slb-Content gap-2'
              } flex items-center leading-none `}
            >
              <p className='font-medium'>특별한 브랜드</p>
              <p className=''>, 직원도 점주가 되는</p>
              <p className='font-medium'>힙한 브랜드</p>
            </div>
          </div>
          <img
            loading='lazy'
            alt='slb 로고'
            src={`${process.env.PUBLIC_URL}/main/logo.webp`}
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-[3.5rem] mb-6'
                : 'h-[8rem] mb-20'
            }`}
          />
        </div>
      </section>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Content-mo'
            : 'Slb-Content'
        } flex flex-col items-center w-full bg-[#231F20] text-White`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full Slb-Content-mo pt-6 pb-6'
              : 'w-[1300px] Slb-Content pt-10 pb-10'
          } flex flex-col items-center`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo'
                : 'Slb-Content'
            } flex items-center leading-none mb-3`}
          >
            블루오션, 샐러드 & 포케 시장에서 남다른 고집으로
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Content-mo'
                : 'Slb-Content'
            } flex items-center leading-none `}
          >
            <p className='font-medium'>특별한 브랜드</p>
            <p className={`${deviceInfo.isMobile || deviceInfo.isSmallScreen ? 'mr-1' : 'mr-2'}`}>, 직원도 점주가 되는</p>
            <p className='font-medium'>힙한 브랜드</p>
          </div>
        </div>
        <img
          loading='lazy'
          alt='slb 로고'
          src={`${process.env.PUBLIC_URL}/main/logo.webp`}
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'h-[3.5rem] mb-6'
              : 'h-[8rem] mb-10'
          }`}
        />
      </section>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title pb-60'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit font-semibold`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_3_background_2.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-4' : ' mb-10'
          } flex items-end leading-none`}
        >
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mt-20 mr-1'
                : 'Slb-Point  mt-40 mr-2'
            } text-[#FF331F] font-black leading-none `}
          >
            더 나은 삶,
          </p>
          더 맛있는 경험
        </div>

        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content'
          } flex`}
        >
          더 나은 음식 '맛'을 내기위해해
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content'
          } flex`}
        >
          식재료 선택부터 진심을 담다!
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
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-4' : ' mb-10'
          } flex items-end leading-none`}
        >
          더 나은 삶,
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo'
                : 'Slb-Point'
            } text-[#FF331F] leading-none ml-2`}
          >
            더 맛있는 경험
          </p>
        </div>

        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo flex-col items-center'
              : 'Slb-Content gap-2'
          } flex`}
        >
          고객이 더 맛있는 경험을 할 수 있도록
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo flex-col items-center'
              : 'Slb-Content gap-2'
          } flex`}
        >
          한식의 익숙함을 담아 <p>특별한 샐러드&포케를 완성했습니다</p>
        </div>
        <img
          loading='lazy'
          alt='고객을 제대로 대접하겠다는 의지를 담아 정성껏 준비한 SLB만의 특별한 `한상차림` 마음까지 든든해지는 기분 좋은 경험이 시작됩니다'
          src={`${process.env.PUBLIC_URL}/main/point_3_salad.png`}
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full mt-20 mb-20 px-4'
              : 'w-[50%] ml-auto mr-[15%] mt-40 mb-40'
          }aspect-[14/10]`}
        />
      </section>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit text-White`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_3_footer.webp)`,
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full px-4'
              : 'w-[1200px]'
          } flex flex-col`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-6'
                : 'mt-[6rem]'
            } flex items-end leading-none`}
          >
            메뉴 개발에 노력한 결과!
          </div>
          <div className='flex items-center leading-none mt-1'>
            SLB 가맹점 고객
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo'
                  : 'Slb-Point'
              } bg-[#FF331F] leading-none ml-2 p-1`}
            >
              재방문율 86%
            </p>
          </div>

          <div
            className={`w-[1px]  border-r border-White  ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-5 my-2'
                : 'h-12 my-8 ml-4'
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
                현재에 안주하지 않고 한식의 익숙함에
              </div>
              <div className='Slb-Content flex items-center leading-none mb-3'>
                <p className='font-medium'>
                  샐러드&amp;포케의 새로움을 더하기 위해
                </p>{' '}
                지금 이 순간에도
              </div>
              <div className='Slb-Content flex items-center leading-none mb-[6rem]'>
                SLB R&D부서 전문가들은 연구에{' '}
                <p className='ml-2 font-medium'>연구를 거듭</p> 하고 있습니다
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
      

export default Point3Section;