import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import axios from 'axios';
import AdminPagination from '../../../ui/paging/AdminPagination';
import { useNavigate } from 'react-router-dom';

const SubStoreFrom: React.FC = () => {
  const navigate = useNavigate();
  const deviceInfo = useDeviceInfo();
  const [data, setData] = useState<{
    id: string;
    title?: string;
    name: string;
    address: string;
    tags: string[];
    media: string;
  }[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');

  const itemsPerPage = 10;

  // 문자열 또는 배열 형태의 tags를 항상 string[]로 반환
  const parseTags = (tags: string | any[]): string[] => {
    if (Array.isArray(tags)) return tags;
    try {
      const parsed = JSON.parse(tags);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  const handlePageChange = (page: number) => {
    setPageIndex(page);
  };

  const fetchData = async () => {
    try {
      let url = `api/stores?page=${pageIndex}`;
      if (searchValue !== '') {
        url += `&search=${encodeURIComponent(searchValue)}`;  // 검색 파라미터 추가
      }
      const response = await axios.get(url);
      const storeList = response.data.storeList;

      const updatedStoreList = await Promise.all(
        storeList.map(async (store: any) => {
          let imgSrc = '';
          if (store.media) {
            imgSrc = await getFile(store.media.id);
          }
          return {
            ...store,
            media: imgSrc,
            tags: parseTags(store.tags),
          };
        })
      );

      setData(updatedStoreList);
      setTotalItems(response.data.totalCount);
    } catch (error) {
      console.error('fetchData error:', error);
    }
  };

  const getFile = async (id: string): Promise<string> => {
    try {
      const response = await axios.get(`api/files/${id}`, {
        responseType: 'arraybuffer',
      });
      const contentType = response.headers['content-type'];
      const base64String = btoa(
        new Uint8Array(response.data).reduce(
          (acc, byte) => acc + String.fromCharCode(byte),
          ''
        )
      );
      return `data:${contentType};base64,${base64String}`;
    } catch (error) {
      console.error('getFile error:', error);
      return '';
    }
  };

  const handleItemClick = (id: string) => {
    navigate(`/store/detail/no/${id}`);
  };

  return (
    <div className="w-full flex justify-center px-4 py-8 bg-white">
      <div className="w-full max-w-[1300px]">
        {/* 헤더 타이틀 */}
        <div className="flex flex-col items-center justify-center mb-6">
          <p className={deviceInfo.isMobile || deviceInfo.isSmallScreen ? 'Slb-Title-mo' : 'Slb-Title'}>
            매장 안내
          </p>
          <div className={`w-[1px] border-r border-black ${deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'h-5 my-2' : 'h-10 my-5'}`} />
          <p className={`${deviceInfo.isMobile || deviceInfo.isSmallScreen ? 'Slb-Title-mo' : 'Slb-Title gap-2'} flex flex-col text-center`}
          >
            <span>SLB 가맹점을</span>
            <span>확인하세요</span>
          </p>
        </div>

        {/* 검색 및 버튼 */}
        <div className="flex w-full justify-center gap-4">
          <button
            className={`text-white bg-black cursor-pointer ${deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'px-2 py-1 whitespace-nowrap' : 'px-4 py-1 mt-10 mb-4'}`}
            onClick={fetchData}
          >
            SLB 매장 찾기
          </button>
          <input
            className={`border px-4 py-1 border-black ${deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'w-full' : 'w-[400px] mt-10 mb-4'}`}
            placeholder="지역 또는 매장명을 입력해주세요"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* 매장 리스트 */}
        {data.length > 0 && (
          <div className={`${deviceInfo.isMobile || deviceInfo.isSmallScreen ? 'Slb-SubTitle-mo' : 'Slb-SubTitle'} gap-4 mt-10 mb-10 flex flex-col cursor-pointer`}
          >
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`${deviceInfo.isMobile || deviceInfo.isSmallScreen
                  ? 'flex-col items-center mt-4 pb-4 border-b border-black'
                  : 'py-2 flex items-center gap-20 border-y border-black'}`}
              >
                {/* 이미지 */}
                <div className={`${deviceInfo.isMobile || deviceInfo.isSmallScreen ? 'mb-6 w-full' : 'max-w-[20%] flex justify-center items-center w-full'}`}>
                  <img
                    loading="lazy"
                    className="aspect-[1920/650] w-full h-full"
                    alt={item.name}
                    src={item.media}
                  />
                </div>

                {/* 모바일 뷰 */}
                {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
                  <>
                    <div className="flex w-full justify-between gap-2">
                      <div>{item.name}</div>
                      <div className="flex justify-end gap-2 Slb-Content-mo">
                        {item.tags.map((v, idx) => (
                          <div key={`${v}-${idx}`} className="flex gap-2 items-center">
                            <img
                              loading="lazy"
                              className="max-w-[16px] max-h-[16px] mr-1"
                              alt={v}
                              src={`${process.env.PUBLIC_URL}/${v}.webp`}
                            />
                            <span className="whitespace-nowrap">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-[10px] w-full">{item.address}</div>
                  </>
                ) : (
                  /* 데스크탑 뷰 */
                  <>
                    <div className="flex flex-col w-full gap-2 max-w-[50%]">
                      <div>{item.name}</div>
                      <div className="Slb-Content">{item.address}</div>
                    </div>
                    <div className="flex w-full justify-end gap-10 max-w-[30%]">
                      {item.tags.map((v, idx) => (
                        <div key={`${v}-${idx}`} className="flex gap-2 items-center">
                          <img
                            loading="lazy"
                            className="max-w-[24px] max-h-[24px] mr-1"
                            alt={v}
                            src={`${process.env.PUBLIC_URL}/${v}.webp`}
                          />
                          <span className="whitespace-nowrap">{v}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 페이징 */}
        <AdminPagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SubStoreFrom;
