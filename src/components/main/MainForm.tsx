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
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let url = `api/banners?page=1`;
            if (deviceInfo.isMobile) {
                url += `&searchIsMobile=true`;
            }
            const response = await axios.get(url);

            console.log(response);
            const bannerList = response.data.bannerList;

            const updatedBannerList = await Promise.all(
                bannerList.map(
                    async (banner: {
                        duration: number;
                        link: string;
                        media: { id: string; fileType: string };
                    }) => {
                        const fileType = banner.media.fileType.split('/')[0];
                        console.log(fileType);
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

            console.log(updatedBannerList);
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

            console.log(response);

            const base64String = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );

            const imgSrc = `data:image/png;base64,${base64String}`;

            return imgSrc;
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
