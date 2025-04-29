import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import axios from 'axios';
import AdminPagination from '../../../ui/paging/AdminPagination';
import { useNavigate } from 'react-router-dom';

const SubStoreFrom = () => {
  const navigate = useNavigate();
  const deviceInfo = useDeviceInfo();
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [searchValue, setSearchValue] = useState("");

  let pageItems = 10;

  useEffect(() => {
      fetchData();
    }, [pageIndex]);
  
    const handlePageChange = (page: number) => {
      console.log(`현재 페이지: ${page}`);
      setPageIndex(page);
      if (page == pageIndex) {
        fetchData();
      }
    };

  const fetchData = async () => {
    try {
      let url = `api/stores?page=${pageIndex}`;

      if (searchValue !== '') {
        url += `&=${searchValue}`;
      }
      
      const response = await axios.get(url);

      console.log(response);
      const storeList = response.data.storeList;
      
      const updatedStoreList = await Promise.all(
        storeList.map(
          async (store: { media: { id: string; fileType: string } }) => {
            if (store.media == null) {
              return store;
            }
            const fileType = store.media.fileType.split('/')[0];
            console.log(fileType);
            const imgSrc = await getFile(store.media.id);
            return {
              ...store,
              fileType: fileType,
              media: imgSrc,
            };
          }
        )
      );

      console.log(updatedStoreList);

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

      console.log(response);
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
    navigate(`/store/detail/no/${id}`);
  };

  const parseTags = (tags: string | any[]): string[] => {
    if (Array.isArray(tags)) {
      return tags;
    }
    try {
      const parsed = JSON.parse(tags);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
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
            매장 안내
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
                ? 'Slb-Title-mo '
                : 'Slb-Title gap-2'
            } flex flex-col text-center`}
          >
            <span>SLB 가맹점을</span>
            <span>확인하세요</span>
          </p>
        </div>
        <div className='flex w-full justify-center gap-4'>
          <div
            className={` text-White bg-Black cursor-pointer ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-fit h-fit px-2 py-1 whitespace-nowrap'
                : 'w-fit h-fit px-4 py-1 mt-10 mb-4'
            }`}
            onClick={fetchData}
          >
            SLB 매장 찾기
          </div>
          <input
            className={`border-[1px] px-4 py-1 border-Black ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full'
                : 'w-[400px] mt-10 mb-4'
            }`}
            placeholder='지역 또는 매장명을 입력해주세요'
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {data.length > 0 && (
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-SubTitle-mo gap-4 mt-10 mb-10'
                : 'Slb-SubTitle gap-4 mt-10 mb-10'
            } flex flex-col cursor-pointer`}
          >
            {data.map((item, idx) => (
              <div
                key={item.title}
                onClick={() => handleItemClick(item.id)}
                className={`${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'flex-col items-center mt-4 pb-4 border-b-[1px] border-Black'
                    : 'py-2 items-center gap-20 border-y-[1px] border-Black'
                } flex `}
              >
                <div
                  className={`${
                    deviceInfo.isMobile || deviceInfo.isSmallScreen
                      ? 'mb-6'
                      : 'max-w-[20%] h-full flex justify-center items-center'
                  } w-full`}
                >
                  <img
                    loading='lazy'
                    className={`${
                      deviceInfo.isSmallScreen || deviceInfo.isMobile ? '' : ''
                    } aspect-[1920/650] w-full h-full`}
                    alt={``}
                    src={item.media}
                  />
                </div>
                {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
                  <>
                    <div
                      className={`${
                        deviceInfo.isMobile || deviceInfo.isSmallScreen
                          ? ' justify-between'
                          : 'gap-2 max-w-[50%] flex-col '
                      } flex w-full`}
                    >
                      <div>{item.name}</div>
                      <div
                        className={`${
                          deviceInfo.isMobile || deviceInfo.isSmallScreen
                            ? 'justify-end gap-2 Slb-Content-mo'
                            : 'max w-[30%] justify-end gap-10'
                        } flex w-full`}
                      >
                        {parseTags(item.tags).map((v: string, idx: number) => (
                          <div
                            key={`${v}-${idx}`}
                            className='flex gap-2 items-center'
                          >
                            <img
                              loading='lazy'
                              className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                  ? 'max-w-[16px] max-h-[16px] mr-1'
                                  : 'max-w-[24px] max-h-[24px] mr-1'
                              } w-full h-full`}
                              alt={`${v}`}
                              src={`${process.env.PUBLIC_URL}/${v}.webp`}
                            />
                            <span className='whitespace-nowrap'>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`${
                        deviceInfo.isMobile || deviceInfo.isSmallScreen
                          ? 'text-[10px] w-full'
                          : ''
                      }`}
                    >
                      {item.address}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`${
                        deviceInfo.isMobile || deviceInfo.isSmallScreen
                          ? ''
                          : 'gap-2 max-w-[50%]'
                      } flex flex-col w-full`}
                    >
                      <div>{item.name}</div>
                      <div
                        className={`${
                          deviceInfo.isMobile || deviceInfo.isSmallScreen
                            ? 'Slb-Content-mo'
                            : 'Slb-Content'
                        }`}
                      >
                        {item.address}
                      </div>
                    </div>
                    <div
                      className={`${
                        deviceInfo.isMobile || deviceInfo.isSmallScreen
                          ? ''
                          : 'max w-[30%] justify-end gap-10'
                      } flex w-full`}
                    >
                      {JSON.parse(item.tags).map(
                        (v: React.Key | null | undefined) => (
                          <div key={v} className='flex gap-2 items-center'>
                            <img
                              loading='lazy'
                              className={`${
                                deviceInfo.isSmallScreen || deviceInfo.isMobile
                                  ? 'max-w-[16px] max-h-[16px] mr-1'
                                  : 'max-w-[24px] max-h-[24px] mr-1'
                              } w-full h-full`}
                              alt={`${v}`}
                              src={`${process.env.PUBLIC_URL}/${v}.webp`}
                            />
                            <span className=' whitespace-nowrap'>{v}</span>
                          </div>
                        )
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        <AdminPagination
          totalItems={totalItems}
          itemsPerPage={pageItems}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SubStoreFrom;
