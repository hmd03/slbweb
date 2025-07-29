import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RollingBanner from '../../ui/RollingBanner/RollingBanner';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import PopupManager from '../../ui/popup/PopupManager';
import { useLocation } from 'react-router-dom';
import LazyRenderOnView from '../../common/LazyRenderOnView';
import Point1Section from './Point1Section';
import Point2Section from './Point2Section';
import Point3Section from './Point3Section';
import Point4Section from './Point4Section';
import Point5Section from './Point5Section';
import Point6Section from './Point6Section';
import Point7Section from './Point7Section';
import Point8Section from './Point8Section';
import Point9Section from './Point9Section';

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
      const ismobile =
        deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'true' : 'false';
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

      const response = await axios.get(url);
      const bannerList = response.data.bannerList;

      const updatedBannerList = await Promise.all(
        bannerList.map(
          async (banner: {
            duration: number;
            link: string;
            media: {
              id: string;
              fileType: string;
              filePath: string;
            };
          }) => {
            if (banner.media == null) {
              return banner;
            }
            const fileType = banner.media.fileType.split('/');

            let fileSrc = '';
            if (fileType[1] !== 'youtube') {
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

      const url = `api/popups?page=1&searchIsExposed=true&isMain=true`;

      const response = await axios.get(url);
      const popupList = response.data.popupList;

      const updatedPopupList = await Promise.all(
        popupList.map(
          async (popup: {
            title: string;
            link: string;
            locationX: number;
            locationY: number;
            width: number;
            height: number;
            media: {
              id: string;
              fileType: string;
              filePath: string;
            };
          }) => {
            if (popup.media === null) {
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

  return (
    <div className='flex flex-col w-full h-full items-center'>
      <div className='w-full h-full'>
        <PopupManager
          popups={popupList}
          isMobile={deviceInfo.isSmallScreen || deviceInfo.isMobile}
        />
        <RollingBanner items={bannerList} />
      </div>
      {/* Point 1 */}
      <LazyRenderOnView>
        <Point1Section />
      </LazyRenderOnView>
      {/* Point 2 */}
      <LazyRenderOnView>
        <Point2Section />
      </LazyRenderOnView>
      {/* Point 3 */}
      <LazyRenderOnView>
        <Point3Section />
      </LazyRenderOnView>
      {/* Point 4 */}
      <LazyRenderOnView>
        <Point4Section />
      </LazyRenderOnView>
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
          <LazyRenderOnView>
            <Point5Section />
          </LazyRenderOnView>
          {/* Point 6 */}
          <LazyRenderOnView>
            <Point6Section />
          </LazyRenderOnView>
        </div>
      </section>
      <section
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-full Slb-Title-mo pt-16'
            : 'w-[1300px] Slb-Title pt-40'
        } flex flex-col items-center`}
      >
        {/* Point 7 */}
        <LazyRenderOnView>
          <Point7Section />
        </LazyRenderOnView>
        {/* Point 8 */}
        <LazyRenderOnView>
          <Point8Section />
        </LazyRenderOnView>
        {/* Point 9 */}
        <LazyRenderOnView>
          <Point9Section />
        </LazyRenderOnView>
      </section>
    </div>
  );
};

export default MainForm;
