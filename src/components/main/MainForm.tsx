import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RollingBanner from '../ui/RollingBanner/RollingBanner';
import useDeviceInfo from '../../hooks/useDeviceInfo';

const MainForm: React.FC = () => {
    const deviceInfo = useDeviceInfo();
    const [bannerList, setBannerList] = useState<
        Array<{
            media: string;
            fileType: string;
            duration: number;
            link: string;
        }>
    >([]);

    useEffect(() => {
        if (deviceInfo.isSmallScreen !== undefined) {
            const mobile = deviceInfo.isSmallScreen ? 'true' : 'false';
            fetchData(mobile);
        }
    }, [deviceInfo.isSmallScreen]);

    const fetchData = async (searchIsMobile: string) => {
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
                        media: { id: string; fileType: string };
                    }) => {
                        const fileType = banner.media.fileType.split('/')[0];
                        const imgSrc = await getFile(banner.media.id);

                        return {
                            link: banner.link,
                            duration: banner.duration,
                            fileType: fileType,
                            media: imgSrc,
                        };
                    }
                )
            );

            setBannerList(updatedBannerList);
        } catch (error) {
            console.log('error: ' + error);
        }
    };

    const getFile = async (id: string) => {
        try {
            const response = await axios.get(`api/files/${id}`, {
                responseType: 'arraybuffer',
            });

            const base64String = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );

            return `data:image/png;base64,${base64String}`;
        } catch (error) {
            console.log('error: ' + error);
            return '';
        }
    };

    return (
        <div className='flex flex-col w-full h-full'>
            <RollingBanner items={bannerList} />
        </div>
    );
};

export default MainForm;
