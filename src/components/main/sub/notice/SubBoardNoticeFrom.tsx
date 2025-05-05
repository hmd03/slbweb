import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import axios from 'axios';
import AdminPagination from '../../../ui/paging/AdminPagination';
import { useNavigate } from 'react-router-dom';

const SubBoardNoticeFrom = () => {
  const navigate = useNavigate();
  const deviceInfo = useDeviceInfo();
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);

  let pageItems = 10;

  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  const handlePageChange = (page: number) => {
    setPageIndex(page);
    if (page === pageIndex) {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      let url = `api/notices?page=${pageIndex}`;

      const response = await axios.get(url);

      setData(response.data.noticeList);
      setTotalItems(response.data.totalCount);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const extractTextFromPTag = (htmlString: string): string[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const pTags = doc.querySelectorAll('p');

    const texts = Array.from(pTags).map((p) => {
      Array.from(p.querySelectorAll('img')).forEach((img) => img.remove());
      return p.textContent?.trim() ?? '';
    });

    return texts.filter((text) => text.length > 0);
  };

  const handleItemClick = (id: String) => {
    navigate(`/board/notice/detail/no/${id}`);
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
            공지&뉴스
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
                ? 'Slb-Point-mo'
                : 'Slb-Point'
            } text-Point`}
          >
            Just Eat It!
          </p>
          {deviceInfo.isMobile || deviceInfo.isSmallScreen ? (
            <p
              className={`${
                deviceInfo.isMobile || deviceInfo.isSmallScreen
                  ? 'Slb-Title-mo mb-6'
                  : 'Slb-Title '
              } flex flex-col text-center`}
            >
              <span>음식을 넘어 삶의 균형을</span>
              <span>고민하는 브랜드</span>
              <span>SLB의 소식을 확인하세요</span>
            </p>
          ) : (
            <p
              className={`${
                deviceInfo.isMobile || deviceInfo.isSmallScreen
                  ? 'Slb-Title-mo'
                  : 'Slb-Title flex flex-col text-center'
              }`}
            >
              <span>음식을 넘어 삶의 균형을 고민하는 브랜드</span>
              <span>SLB의 소식을 확인하세요</span>
            </p>
          )}
        </div>
        {data.length > 0 && (
          <div
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-SubTitle-mo mb-6'
                : 'Slb-SubTitle '
            } flex flex-col cursor-pointer border-y-[2px] border-Black`}
          >
            {data.map((item, idx) => (
              <div
                key={item.title}
                onClick={() => handleItemClick(item.id)}
                className={`${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'py-6 px-8 items- start gap-8'
                    : 'py-6 px-8 items-center gap-20'
                } flex ${
                  idx === 0 ? '' : 'border-dashed border-t-[1px]'
                } border-DeepGray`}
              >
                <div className='w-[5%] flex justify-center whitespace-nowrap'>
                  {item.isNotice ? (
                    <div className='text-White bg-[#FF331F] text-center w-fit h-fit px-4 rounded-xl whitespace-nowrap'>
                      공지
                    </div>
                  ) : (
                    totalItems - idx - (pageIndex - 1) * pageItems
                  )}
                </div>
                <div
                  className={`${
                    deviceInfo.isMobile || deviceInfo.isSmallScreen
                      ? ''
                      : 'gap-2'
                  } flex flex-col w-full`}
                >
                  <div>{item.title}</div>
                  <div
                    className={`${
                      deviceInfo.isMobile || deviceInfo.isSmallScreen
                        ? 'Slb-Content-mo'
                        : 'Slb-Content'
                    } overflow-hidden text-ellipsis max-w-[100ch]`}
                  >
                    <span className='text-White'>.</span>
                    {extractTextFromPTag(item.content).join(' ')}
                  </div>
                </div>
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

export default SubBoardNoticeFrom;
