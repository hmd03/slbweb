import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubBoardEventFrom = () => {
  const navigate = useNavigate();
  const deviceInfo = useDeviceInfo();
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  const fetchData = async () => {
    try {
      let url = `api/events`;

      const response = await axios.get(url);

      console.log(response);
      setData(response.data.eventList);
      setTotalItems(response.data.eventList);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const handleItemClick = (id: String) => {
    navigate(`/board/event/${id}`);
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
                : 'Slb-Title flex flex-col text-center'
            }`}
          >
            <span>SLB의 다양한 이벤트</span>
            <span>정보를 확인하세요!</span>
          </p>
        </div>
        {data.length > 0 && (
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Content-mo'
                : 'Slb-Content border-t-[2px] border-Black gap-10 pt-10'
            } grid grid-cols-3 cursor-pointer`}
          >
            {data.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleItemClick(item.id)}
                className='flex flex-col border-Black border-[1px]'
              >
                <div>
                  <img
                    loading='lazy'
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'my-6'
                        : ' mb-6'
                    } aspect-[282/201] w-full`}
                    alt={``}
                    src={''}
                  />
                  <div>
                    <div className='border-t-[1px] border-Black p-2 font-medium text-center'>
                      {item.title.length > 20
                        ? item.title.slice(0, 20) + '...'
                        : item.title}
                    </div>
                    <p
                      className={`${
                        deviceInfo.isMobile || deviceInfo.isSmallScreen
                          ? 'text-[10px]'
                          : 'text-[16px]'
                      } text-center`}
                    >
                      날짜
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubBoardEventFrom;
