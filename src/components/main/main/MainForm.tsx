import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RollingBanner from '../../ui/RollingBanner/RollingBanner';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Chip from '../../ui/chip/chip';
import DividerWithLabel from '../../ui/label/DividerWithLabel';
import RollingCard from '../../ui/RollingBanner/RollingCard';
import SlideUpOnView from '../../ui/slideUpOnView/SlideUpOnView';
import PopupManager from '../../ui/popup/PopupManager';
import { useLocation } from 'react-router-dom';

const MainForm: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  const location = useLocation();
  const [bannerList, setBannerList] = useState<
    Array<{
      media: string;
      fileType: string;
      duration: number;
      link: string;
    }>
  >([]);

  const [popupList, setPopupList] = useState<
    Array<{
      title: string;
      link: string;
      locationX: number;
      locationY: number;
      width: number;
      height: number;
      image: string;
      cookiesId: string;
    }>
  >([]);

  useEffect(() => {
  
    if (Object.keys(deviceInfo).length > 0) {
      const ismobile = deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'true' : 'false';
      fetchBannerData(ismobile);
    }
  }, [deviceInfo]);
  
  useEffect(() => {
    fetchPopupData();
  }, [location.pathname]);

  const fetchBannerData = async (searchIsMobile: string) => {
    try {
      setBannerList([]);
      const url = `api/banners?page=1&searchIsMobile=${searchIsMobile}`;
      console.log('요청 URL:', url);

      const response = await axios.get(url);
      const bannerList = response.data.bannerList;

      console.log('응답 데이터:', response.data);

      const updatedBannerList = await Promise.all(
        bannerList.map(
          async (banner: {
            duration: number;
            link: string;
            media: { id: string; fileType: string; filePath: string };
          }) => {
            if (banner.media == null) {
              return banner;
            }
            const fileType = banner.media.fileType.split('/');

            let fileSrc = '';
            if (fileType[1] != 'youtube') {
              fileSrc = await getFile(banner.media.id);
            } else {
              fileSrc = banner.media.filePath;
            }

            return {
              link: banner.link,
              duration: banner.duration,
              fileType: banner.media.fileType,
              media: fileSrc,
            };
          }
        )
      );

      setBannerList(updatedBannerList);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const fetchPopupData = async () => {
    try {
      setPopupList([]);
      const url = `api/popups?page=1&searchIsMobile`;
      console.log('요청 URL:', url);

      const response = await axios.get(url);
      const popupList = response.data.popupList;

      console.log('응답 데이터:', response.data);

      const updatedPopupList = await Promise.all(
        popupList.map(
          async (popup: {
            title: string;
            link: string;
            locationX: number;
            locationY: number;
            width: number;
            height: number;
            media: { id: string; fileType: string; filePath: string };
          }) => {
            if (popup.media == null) {
              return popup;
            }

            let fileSrc = '';
            fileSrc = await getFile(popup.media.id);

            return {
              title: popup.title,
              link: popup.link,
              locationX: popup.locationX,
              locationY: popup.locationY,
              width: popup.width,
              height: popup.height,
              image: fileSrc,
              cookiesId: popup.media.id,
            };
          }
        )
      );

      setPopupList(updatedPopupList);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const getFile = async (id: string) => {
    try {
      const response = await axios.get(`api/files/${id}`, {
        responseType: 'arraybuffer',
      });

      const contentType = response.headers['content-type'];
      const base64String = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );

      return `data:${contentType};base64,${base64String}`;
    } catch (error) {
      console.log('error: ' + error);
      return '';
    }
  };

  const imageList = [
    `${process.env.PUBLIC_URL}/main/rolling/review1.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review2.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review3.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review4.jpg`,
    `${process.env.PUBLIC_URL}/main/rolling/review5.jpg`,
  ];

  return (
    <div className='flex flex-col w-full h-full items-center'>
      <div className='w-full h-full'>
        <PopupManager popups={popupList} isMobile={deviceInfo.isSmallScreen || deviceInfo.isMobile}/>
        <RollingBanner items={bannerList} />
      </div>
      {/* Point 1 */}
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-20'
            : 'w-[1300px] Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        <Chip text='Point 1' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mt-4' : 'mt-6'
            }  `}
          >
            샐러드 & 포케 창업 지금이 적기,
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
                  ? 'Slb-Point-mo'
                  : 'Slb-Point'
              } text-[#FF331F] leading-none`}
            >
              고민하지 말고 선점
            </p>
            하세요!
          </div>
        </SlideUpOnView>
        {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
          <div className='flex flex-col w-full h-full items-center'>
            <img
              loading='lazy'
              className='mb-10 px-10 transition-opacity duration-500 opacity-0'
              onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
              alt='대한민국 국민 신체·정신 건강 우려도 1.8배 증가'
              src={`${process.env.PUBLIC_URL}/main/point_1_mo.webp`}
            ></img>
          </div>
        ) : (
          <img
            loading='lazy'
            className='mb-[12rem] transition-opacity duration-500 opacity-0'
            onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
            alt='대한민국 국민 신체·정신 건강 우려도 1.8배 증가'
            src={`${process.env.PUBLIC_URL}/main/point_1_img.webp`}
          ></img>
        )}
        <DividerWithLabel label='Q. 식사 메뉴를 정할 때 고객은?' />
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Title-mo'
              : 'Slb-Title'
          } flex items-center leading-none  mt-8`}
        >
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo pb-2 px-2'
                : 'Slb-Point px-4 pt-2 pb-2'
            } 
             text-center text-[#FF331F] leading-none bg-no-repeat bg-bottom`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_1_line.webp)`,
              backgroundSize: 'contain',
              textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
            }}
          >
            맛은 기본
          </p>
          다음은
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Title-mo mb-4 mt-2'
              : 'Slb-Title mb-20 mt-5'
          } flex items-center leading-none`}
        >
          가격이 아닌
          <p
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo pb-3 pt-2 px-4'
                : 'Slb-Point px-4 pt-4 pb-4'
            } text-center text-[#FF331F] leading-none bg-no-repeat bg-center`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_1_circle.webp)`,
              backgroundSize: 'contain',
              textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
            }}
          >
            영양성분
          </p>
          이 더 중요!
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content'
          } flex`}
        >
          고객들의 외식 선택 요소의 변화로
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo'
              : 'Slb-Content'
          } flex`}
        >
          '샐러드&포케' 시장
          <p className='font-medium ml-1'>지속 성장 중!</p>
        </div>
      </section>
      {/* Point 2 */}
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mt-10' : 'mt-40'
        }  bg-no-repeat bg-center w-full flex flex-col items-center`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_2${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }_background.webp)`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full  pt-10'
              : 'w-[1300px]  pt-20'
          } flex flex-col items-center h-full font-semibold`}
        >
          <Chip text='Point 2' type='white' />
          <SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-White Slb-Point-mo'
                  : 'text-White Slb-Point'
              } flex items-end leading-none mt-6 mb-4`}
            >
              어떤 상권에도 매출 걱정 없는 SLB
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Title-mo  flex flex-col items-center gap-1'
                  : 'Slb-Title  flex justify-center gap-2'
              } text-White leading-none`}
            >
              <p>매력적인 브랜드는 고객이</p> <p>찾아오게 만든다!</p>
            </div>
          </SlideUpOnView>
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <div
              className={`w-full mt-6 mb-10 px-10 flex flex-col justify-around items-center`}
            >
              <div className=''>
                <img
                  loading='lazy'
                  className='w-full rounded-t transition-opacity duration-500 opacity-0'
                  onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                  alt='평균매출 7,350만원 9천4백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_mo_3.webp`}
                />
              </div>
              <div className=''>
                <img
                  loading='lazy'
                  className='w-full rounded-t transition-opacity duration-500 opacity-0'
                  onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                  alt='평균매출 4,700만원 8천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_mo_2.webp`}
                />
              </div>
              <div className=''>
                <img
                  loading='lazy'
                  className='w-full rounded-t transition-opacity duration-500 opacity-0'
                  onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                  alt='평균매출 7,960만원 7천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_mo_1.webp`}
                />
              </div>
            </div>
          ) : (
            <div className={`w-[1000px] mt-20 mx-auto flex justify-around`}>
              <div className='w-[31%]'>
                <img
                  loading='lazy'
                  className='w-full rounded-t transition-opacity duration-500 opacity-0'
                  onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                  alt='평균매출 7,350만원 9천4백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_store_1.webp`}
                />
              </div>
              <div className='w-[31%]'>
                <img
                  loading='lazy'
                  className='w-full rounded-t transition-opacity duration-500 opacity-0'
                  onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                  alt='평균매출 4,700만원 8천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_store_2.webp`}
                />
              </div>
              <div className='w-[31%]'>
                <img
                  loading='lazy'
                  className='w-full rounded-t transition-opacity duration-500 opacity-0'
                  onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                  alt='평균매출 7,960만원 7천9백 최고매출'
                  src={`${process.env.PUBLIC_URL}/main/point_2_store_3.webp`}
                />
              </div>
            </div>
          )}
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <></>
          ) : (
            <button
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-sub'
                  : 'Slb-Content'
              } rounded-[4rem] bg-Point text-White px-4 mt-10 mb-[8rem]`}
            >
              SLB 수익률 확인하기
            </button>
          )}
        </div>
      </section>
      {/* Point 3 */}
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
                  : 'Slb-Content'
              } flex items-center leading-none `}
            >
              <p className='font-medium'>특별한 브랜드</p>, 직원도 점주가 되는
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
            } transition-opacity duration-500 opacity-0`}
            onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
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
            <p className='font-medium'>특별한 브랜드</p>, 직원도 점주가 되는
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
          } transition-opacity duration-500 opacity-0`}
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
        />
      </section>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title'
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
          } transition-opacity duration-500 opacity-0  aspect-[14/10]`}
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
        />
      </section>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-Title-mo'
            : 'Slb-Title'
        } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-full text-White`}
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
      {/* Point 4 */}
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full text-m_mainContent pt-20'
            : 'w-[1300px] Slb-Title pt-40'
        } flex flex-col items-center font-semibold`}
      >
        <Chip text='Point 4' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo mt-4'
                : 'Slb-Title mt-6'
            }  `}
          >
            성공한 맛집 = 인테리어도 좋다!
          </div>
          <div
            className={`flex ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo flex-col items-center mb-10'
                : 'Slb-Title items-end mb-20'
            }  leading-none `}
          >
            고객이 트렌디하다고 말하는
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-title'
                  : 'Slb-Point'
              } text-[#FF331F] leading-none ml-2`}
            >
              SLB 인테리어
            </p>
          </div>
        </SlideUpOnView>
      </section>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full px-8'
            : 'w-[1300px]'
        }`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'bg-contain bg-no-repeat bg-top flex flex-col min-h-[800px] items-center pt-10 text-third justify-between aspect-[10/15] mb-20'
              : 'Slb-SubTitle mb-40 bg-no-repeat bg-center bg-cover flex flex-col items-center h-[80vh]'
          } w-full`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_4_${
              deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mo_' : ''
            }background.png)`,
          }}
        >
          {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
            <div className='invisible'>
              <div
                className={`${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'p-2'
                    : 'ml-[25%] py-2 px-20 '
                } bg-[#F1F2F2] w-fit break-keep`}
              >
                SLB의 경쟁력 고객이 먼저 알아봅니다.
              </div>
              <div
                className={`${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'text-center p-2'
                    : 'w-[35%] py-10 px-8 mt-auto mb-40 mr-[30%] text-right '
                } bg-[#F1F2F2] break-keep`}
              >
                SLB의 수익형 인테리어
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail mt-2'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  오랜 기간 고객 동선과
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  서비스 동선까지 고려한 과학적 설계와
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  우리민족 고유의 절제와 비움에 미학을 반영한
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  모던하고 감각적인 인테리어 디자인으로
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  SLB만의 수익형 인테리어를 완성하였습니다.
                </p>
              </div>
            </div>
          ) : (
            // 이미지로 교체
            <div className='invisible'>
              <div
                className={`${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'p-2'
                    : 'ml-[25%] py-2 px-20 '
                } bg-[#F1F2F2] w-fit break-keep`}
              >
                SLB의 경쟁력 고객이 먼저 알아봅니다.
              </div>
              <div
                className={`${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'text-center p-2'
                    : 'Slb-SubTitle w-[35%] py-10 px-8 mt-auto mb-40 mr-[30%] text-right '
                } bg-[#F1F2F2] break-keep`}
              >
                SLB의 수익형 인테리어
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail mt-2'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  오랜 기간 고객 동선과
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  서비스 동선까지 고려한 과학적 설계와
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'Slb-Content'
                  }break-keep`}
                >
                  우리민족 고유의 절제와 비움에 미학을 반영한
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'Slb-Content'
                  } break-keep`}
                >
                  모던하고 감각적인 인테리어 디자인으로
                </p>
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'text-detail'
                      : 'tSlb-Content'
                  } break-keep`}
                >
                  SLB만의 수익형 인테리어를 완성하였습니다.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <DividerWithLabel label='Q. 상권선점을 위해서는?' />
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'Slb-SubTitle-mo mb-20'
            : 'Slb-SubTitle mb-40'
        } flex flex-col items-center leading-none mt-8 font-black`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-SubTitle-mo'
              : 'Slb-Title'
          } mt-2 mb-2`}
        >
          좋은 상권은 기다려주지 않습니다. 놓치지 마세요!
        </div>
        <p
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Point-mo pb-2 px-2'
              : 'Slb-Point pb-5 px-4'
          } pt-2 text-center text-[#FF331F] leading-none bg-no-repeat bg-bottom`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_4_line.webp)`,
            backgroundSize: 'contain',
            textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
          }}
        >
          SLB를 선점할 수 있는 기회
        </p>
      </section>
      {/* Point 5 6 */}
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
          {/* Point 5*/}
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full  pt-10'
                : 'w-[1300px] pt-20'
            } flex flex-col items-center`}
          >
            <Chip text='Point 5' type='black' />
            <SlideUpOnView>
              <div className='mt-6'>각 분야 10년 이상의 전문가가</div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Point-mo'
                    : 'Slb-Point'
                } flex items-end leading-none mb-10`}
              >
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                  } text-[#FF331F] leading-none`}
                >
                  창업부터 운영까지 지원
                </p>
                하는 SLB
              </div>
            </SlideUpOnView>
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <div className='flex flex-col items-center'>
                <div className='Slb-Content-mo flex'>
                  매장을 직접 운영 했던 경험 보유자부터 홀, 배달 등
                </div>
                <div className='Slb-Content-mo flex'>
                  다양한 외식아이템을 경험한
                  <p className='font-medium ml-2'>10년 이상의</p>
                </div>
                <div className='Slb-Content-mo flex'>
                  <p className='font-medium'>
                    각 분야 전문가들이 예비 가맹점주님의
                  </p>
                </div>
                <div className='Slb-Content-mo mb-6 flex'>
                  <p className='font-medium'>고충을 해결</p>해 드립니다
                </div>
              </div>
            ) : (
              <>
                <div className='Slb-Content flex'>
                  매장을 직접 운영 했던 경험 보유자부터 홀, 배달 등
                </div>
                <div className='Slb-Content flex'>
                  다양한 외식아이템을 경험한
                  <p className='font-medium ml-2'>10년 이상의</p>
                </div>
                <div className='Slb-Content mb-[8rem] flex'>
                  <p className='font-medium mr-2'>
                    각 분야 전문가들이 예비 가맹점주님의 고충을 해결
                  </p>
                  해드립니다.
                </div>
              </>
            )}

            {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
              <div className='flex flex-col items-center gap-8 mx-8'>
                <div className=''>
                  <img
                    loading='lazy'
                    className='w-full rounded-t transition-opacity duration-500 opacity-0'
                    style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
                    onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                    alt='메뉴 및 운영 노하우 교육육'
                    src={`${process.env.PUBLIC_URL}/main/point_5_mo_1.webp`}
                  />
                </div>
                <div className=''>
                  <img
                    loading='lazy'
                    className='w-full rounded-t transition-opacity duration-500 opacity-0'
                    style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
                    onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                    alt='오픈 운영 지원'
                    src={`${process.env.PUBLIC_URL}/main/point_5_mo_2.webp`}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className='flex items-center gap-8'>
                  <div className=''>
                    <img
                      loading='lazy'
                      className='w-full rounded-t transition-opacity duration-500 opacity-0'
                      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
                      onLoad={(e) =>
                        e.currentTarget.classList.add('opacity-100')
                      }
                      alt='메뉴 및 운영 노하우 교육육'
                      src={`${process.env.PUBLIC_URL}/main/point_5_1.webp`}
                    />
                  </div>
                  <div className=''>
                    <img
                      loading='lazy'
                      className='w-full rounded-t transition-opacity duration-500 opacity-0'
                      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
                      onLoad={(e) =>
                        e.currentTarget.classList.add('opacity-100')
                      }
                      alt='오픈 운영 지원'
                      src={`${process.env.PUBLIC_URL}/main/point_5_2.webp`}
                    />
                  </div>
                </div>

                <div className='mb-[8rem]' />
              </>
            )}
          </div>

          {/* Point 6 */}
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full Slb-SubTitle-mo'
                : 'w-[1300px] Slb-SubTitle'
            } flex flex-col items-center pt-20 `}
          >
            {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
              <div className='flex w-full items-center px-10'>
                <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
                <Chip text='Point 6' type='black' />
                <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
              </div>
            ) : (
              <Chip text='Point 6' type='black' />
            )}
            <SlideUpOnView>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo mt-4'
                    : 'Slb-Title mt-6'
                }`}
              >
                SLB만의 슈퍼바이징 시스템으로
              </div>
              <div
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo mb-10'
                    : 'Slb-Point mb-20'
                } flex items-end leading-none`}
              >
                오픈 이후에도
                <p
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'Slb-Point-mo'
                      : ''
                  } text-[#FF331F] leading-none ml-2`}
                >
                  체계적으로 관리
                </p>
                합니다
              </div>
            </SlideUpOnView>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-col px-8'
                  : ''
              } flex items-center gap-8 mb-16`}
            >
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className='aspect-[11/10] w-full rounded-t-[1rem] overflow-hidden'
                  style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
                >
                  <img
                    loading='lazy'
                    className='w-full h-full object-cover transition-opacity duration-500 opacity-0'
                    onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                    alt={`point ${idx}`}
                    src={`${process.env.PUBLIC_URL}/main/point_6_${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mo_'
                        : ''
                    }${idx}.webp`}
                  />
                </div>
              ))}
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-col px-8'
                  : ''
              } flex items-center gap-8 mb-16`}
            >
              {[3, 4, 5].map((idx) => (
                <div
                  key={idx}
                  className='aspect-[11/10] w-full rounded-t-[1rem] overflow-hidden'
                  style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.2)' }}
                >
                  <img
                    loading='lazy'
                    className='w-full h-full object-cover transition-opacity duration-500 opacity-0'
                    onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                    alt={`point ${idx}`}
                    src={`${process.env.PUBLIC_URL}/main/point_6_${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'mo_'
                        : ''
                    }${idx}.webp`}
                  />
                </div>
              ))}
            </div>
            {deviceInfo.isMobile || deviceInfo.isSmallScreen || (
              <div className='mb-10' />
            )}
          </div>
        </div>
      </section>
      {/* Point 7 */}
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-16'
            : 'w-[1300px] Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        <Chip text='Point 7' type='black' />
        <SlideUpOnView>
          <div className='mt-6'>창업 및 운영 비용은 DOWN</div>
          <div className='flex items-end leading-none'>
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo'
                  : 'Slb-Point'
              } text-[#FF331F] leading-none`}
            >
              수익률은 UP 시키는 SLB의 노력!
            </p>
          </div>
        </SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo mt-10'
              : 'Slb-Content mt-20'
          } flex`}
        >
          예비 창업자들의 최대 고민? 창업 비용!
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo mb-4'
              : 'Slb-Content flex mb-20'
          } `}
        >
          SLB는 초기 창업 비용을 줄이기 위해
          <p className='font-medium ml-2'>'인테리어 직거래 시스템' 도입</p>
        </div>
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'mb-20' : 'mb-60'
          }  transition-opacity duration-500 opacity-0`}
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
          alt='초기 인테리어 비용 최대 35% 이상 감소'
          src={`${process.env.PUBLIC_URL}/main/point_7${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? '_mo' : ''
          }.webp`}
        ></img>
        {/* Point 8 */}

        {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
          <div className='flex w-full items-center px-10'>
            <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
            <Chip text='Point 8' type='black' />
            <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
          </div>
        ) : (
          <Chip text='Point 8' type='black' />
        )}
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'mt-4 Slb-SubTitle-mo'
                : 'mt-6 Slb-SubTitle'
            }`}
          >
            물가상승으로 힘들어 하는
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-SubTitle-mo'
                : 'Slb-SubTitle'
            }`}
          >
            가맹점주님들을 위해 매년 물류 비용
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Point-mo mb-10'
                : 'Slb-Point mb-10'
            } flex items-end leading-none`}
          >
            {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
              <div className='flex flex-col items-center text-[28px]'>
                <p className='text-[#FF331F] leading-none'>
                  유지 또는 낮추기 위해
                </p>
                <p className='flex items-end mt-2'>
                  <span className='text-[#FF331F] leading-none'>
                    SLB는 노력
                  </span>
                  <span className='leading-none text-main'>합니다!</span>
                </p>
              </div>
            ) : (
              <>
                <p className='text-[#FF331F] leading-none mt-2'>
                  유지 또는 낮추기 위해 SLB는 노력
                </p>
                합니다!
              </>
            )}
          </div>
        </SlideUpOnView>
        {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
          <img
            loading='lazy'
            className='transition-opacity duration-500 opacity-0 mb-6 px-8'
            onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
            alt='주6회 배송은 기본! 친환경 무농약 인증 받은 농장과 계약 재배로 사시사철 균일한 가격으로 제공해드립니다.'
            src={`${process.env.PUBLIC_URL}/main/point_8_mo_1.webp`}
          ></img>
        ) : (
          <></>
        )}
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'text-detail'
              : 'Slb-Content'
          } flex`}
        >
          채소의 안정된 공급과 수익률을 높이기 위해
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'text-detail mb-8'
              : 'Slb-Content mb-20'
          } flex`}
        >
          지속적인
          <p className='font-medium ml-2'>무농약 인증 신규 농가 발굴</p>
        </div>
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mb-20 px-8'
              : 'mb-60'
          }  transition-opacity duration-500 opacity-0`}
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
          alt='주6회 배송은 기본! 친환경 무농약 인증 받은 농장과 계약 재배로 사시사철 균일한 가격으로 제공해드립니다.'
          src={`${process.env.PUBLIC_URL}/main/point_8${
            deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo_2' : ''
          }.webp`}
        ></img>
        {/* Point 9 */}

        <Chip text='Point 9' type='black' />
        <SlideUpOnView>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo mt-4'
                : 'Slb-Title mt-6'
            }
          `}
          >
            누구나 쉽게 쉽게!
          </div>
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'Slb-Title-mo mb-6'
                : 'Slb-Title mb-10'
            } flex items-end leading-none`}
          >
            <p
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'Slb-Point-mo mr-1'
                  : 'Slb-Point mr-2'
              } text-[#FF331F] leading-none`}
            >
              요리를 전혀 못해도
            </p>
            창업 가능
          </div>
        </SlideUpOnView>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo gap-1'
              : 'Slb-Content gap-2'
          } flex`}
        >
          <p className='font-medium'>키오스크와 원팩 시스템 도입</p>등 운영
          편의성을 높여
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'Slb-Content-mo mb-8 gap-1'
              : 'Slb-Content mb-10 gap-2'
          } flex`}
        >
          다른 외식 아이템 대비
          <p className='font-medium'>낮은 인건비로 운영가능</p>
        </div>
        <img
          loading='lazy'
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'mb-8 px-8'
              : 'mb-40 '
          } transition-opacity duration-500 opacity-0`}
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
          alt='주문 시스템 운영 인력 최소화를 위해 키오스크로 편하게! 
          > 원팩 시스템 - 주로 사용되는 원부자재 원팩화로 준비시간 짧게! 
          > 간단 조리 시스템 - 어려운 조리 스킬 필요 없이 모든 메뉴 쉽게 가능!
          > 빠른 메뉴 완성 - 고객 테이블 or 배달 전달 끝!'
          src={`${process.env.PUBLIC_URL}/main/point_9${
            deviceInfo.isMobile || deviceInfo.isSmallScreen ? '_mo' : ''
          }.webp`}
        ></img>
      </section>
    </div>
  );
};

export default MainForm;
