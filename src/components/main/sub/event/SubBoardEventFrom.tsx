import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/dateUtils';
import dayjs from 'dayjs';

const SubBoardEventFrom = () => {
  const navigate = useNavigate();
  const deviceInfo = useDeviceInfo();
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let url = `api/events`;

      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error('Failed to fetch data');
      }

      const storeList = response.data.eventList;

      const updatedStoreList = await Promise.all(
        storeList.map(
          async (store: { thumbnail: { id: string; fileType: string } }) => {
            if (store.thumbnail === null) {
              return store;
            }
            const fileType = store.thumbnail.fileType.split('/')[0];
            const imgSrc = await getFile(store.thumbnail.id);
            return {
              ...store,
              fileType: fileType,
              media: imgSrc,
            };
          }
        )
      );

      setData(updatedStoreList);
      setTotalItems(response.data.totalCount);
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

      const strbase64 = `data:${contentType};base64,${base64String}`;

      return strbase64;
    } catch (error) {
      console.log('error: ' + error);
      return '';
    }
  };

  const handleItemClick = (id: String) => {
    navigate(`/board/event/detail/no/${id}`);
  };

  return (
    <div className={`w-full flex justify-center px-4 py-8 bg-white`}>
      <div className='w-full max-w-[1300px]'>
        <div className='flex flex-col items-center justify-center mb-6'>
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Title-mo'
                : 'Slb-Title'
            }`}
          >
            톡톡 이벤트
          </p>
          <div
            className={`w-[1px]  border-r border-black  ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-5 my-2'
                : 'h-10 my-5'
            }`}
          />
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Title-mo'
                : 'Slb-Title'
            }  flex flex-col text-center`}
          >
            <span>SLB의 다양한 이벤트</span>
            <span>정보를 확인하세요!</span>
          </p>
        </div>
        {data.length > 0 && (
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Content-mo grid-cols-1 p-10 gap-10'
                : 'Slb-Content border-t-[2px] border-Black gap-10 pt-10 grid-cols-3'
            } grid cursor-pointer`}
          >
            {data.map((item, idx) => {
              const now = dayjs();
              const start = dayjs(item.startDate);
              const end = dayjs(item.endDate);
              let status = '';

              if (now.isBefore(start)) {
                status = '[예정] ';
              } else if (now.isAfter(end)) {
                status = '[종료] ';
              } else {
                status = '[진행중] ';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleItemClick(item.id)}
                  className='flex flex-col border-BorderGray border-[1px]'
                >
                  <div>
                    <img
                      loading='lazy'
                      className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                          ? 'aspect-[405/289]'
                          : 'aspect-[405/289]'
                      }  w-full`}
                      alt={item.title}
                      src={item.media}
                    />
                    <div>
                      <div className='border-t-[1px] border-BorderGray p-2 font-medium text-center break-words whitespace-normal'>
                        {status}
                        {item.title}
                      </div>
                      <p
                        className={`${
                          deviceInfo.isMobile || deviceInfo.isSmallScreen
                            ? 'text-[10px] mb-2'
                            : 'text-[16px]'
                        } text-center`}
                      >
                        {`${formatDate(item.startDate)} ~ ${formatDate(
                          item.endDate
                        )}`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubBoardEventFrom;
