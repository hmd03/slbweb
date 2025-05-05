import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPagination from '../../ui/paging/AdminPagination';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import Button from '../../ui/buttons/Button';
import axios from 'axios';
import { formatDate } from '../../utils/dateUtils';
import OutlineButton from '../../ui/buttons/OutlineButton';
import AlterModal from '../../ui/alters/AlterModal';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPencilAlt } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../store/atom';

const AdminBannerForm: React.FC = () => {
  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [searchIsMobile, setSearchIsMobile] = useState('');

  const { isSupervisor } = useRecoilValue(UserState);

  let pageItems = 10;

  useEffect(() => {
    fetchData();
  }, [pageIndex, searchIsMobile]);

  const handlePageChange = (page: number) => {
    setPageIndex(page);
    if (page === pageIndex) {
      fetchData();
    }
  };

  const handleRegisterClick = () => {
    navigate('/admin/banner/mode/add');
  };

  const handleModClick = (id: string) => {
    navigate(`/admin/banner/mode/add/no/${id}`);
  };

  const fetchData = async () => {
    try {
      let url = `api/banners?page=${pageIndex}`;
      if (searchIsMobile !== '') {
        url += `&searchIsMobile=${searchIsMobile}`;
      }
      const response = await axios.get(url);

      const bannerList = response.data.bannerList;

      const updatedBannerList = await Promise.all(
        bannerList.map(
          async (banner: { media: { id: string; fileType: string } }) => {
            if (banner.media === null) {
              return banner;
            }
            const fileType = banner.media.fileType.split('/')[0];

            let imgSrc = '';
            if (fileType === 'image') {
              imgSrc = await getFile(banner.media.id);
            }

            return {
              ...banner,
              fileType: fileType,
              media: imgSrc,
            };
          }
        )
      );

      setData(updatedBannerList);
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

  const handleOpenModal = (
    msg: string,
    isCancel = true,
    confirmFunction: () => void
  ) => {
    setMessage(msg);
    setIsCancelVisible(isCancel);
    setOnConfirm(() => confirmFunction);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleSearchClick = (strIsMobile: string) => {
    setSearchIsMobile(strIsMobile);
  };

  const handleDelClick = (id: string) => {
    if (!isSupervisor) {
      handleOpenModal('사용할 수 없는 기능입니다.', false, handleCancel);
      return;
    }
    handleOpenModal('삭제 하시겠습니까?', true, () => deleteItem(id));
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await axios.delete(`api/banners/${id}`);

      const data = response.data;

      if (response.status === 200) {
        handleCancel();
        fetchData();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const thClassName = 'border border-Black border-[2px] p-2';
  const tdClassName = 'border border-Black border-[2px] p-2 text-center';

  return (
    <AdminCurrentLayout title='배너 관리 리스트'>
      <div className='w-full h-fit p-5 border border-Black bg-White'>
        <div className={`flex width-full pb-6 gap-2 items-center`}>
          <Button
            theme='admin'
            className='w-[5rem] h-[3rem] '
            onClick={() => handleSearchClick('')}
          >
            전체
          </Button>
          <Button
            theme='admin'
            className='w-[5rem] h-[3rem] '
            onClick={() => handleSearchClick('false')}
          >
            PC
          </Button>
          <Button
            theme='admin'
            className='w-[5rem] h-[3rem] '
            onClick={() => handleSearchClick('true')}
          >
            모바일
          </Button>
          <Button
            theme='admin'
            className='w-[5rem] h-[3rem] '
            onClick={handleRegisterClick}
          >
            등록
          </Button>
        </div>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <thead className='bg-LightGray text-diagram'>
            <tr>
              <th className={thClassName}>No</th>
              <th className={thClassName}>구분</th>
              <th className={thClassName}>배너 제목</th>
              <th className={thClassName}>파일 타입</th>
              <th className={thClassName}>배너 이미지</th>
              <th className={thClassName}>등록일</th>
              <th className={thClassName}>관리</th>
            </tr>
          </thead>
          <tbody className='bg-White text-diagram'>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className={`${tdClassName} w-[5%]`}>
                  {totalItems - index - (pageIndex - 1) * pageItems}
                </td>
                <td className={`${tdClassName} w-[5%]`}>{`${
                  item.isMobile ? 'MO' : 'PC'
                }`}</td>
                <td className={`${tdClassName} w-[20%]`}>{`${item.title}${
                  item.isMobile ? '(모바일)' : ''
                }`}</td>
                <td className={`${tdClassName} w-[10%]`}>{item.fileType}</td>
                <td className={`${tdClassName} w-[20%]`}>
                  {item.fileType === 'image' && item.media && (
                    <img
                      className='w-[18.75rem] h-[6.375rem]'
                      src={`${item.media}`}
                    ></img>
                  )}
                </td>
                <td className={`${tdClassName} w-[20%]`}>
                  {formatDate(item.createdAt)}
                </td>
                <td className={`${tdClassName} w-[20%]`}>
                  <div className='w-full flex items-center justify-center'>
                    <OutlineButton
                      theme='admin'
                      className='px-2  w-[4rem] h-[2rem] flex items-center'
                      onClick={() => handleModClick(item.id)}
                    >
                      수정
                      <FaPencilAlt color='black' className='ml-1 w-fit' />
                    </OutlineButton>
                    <Button
                      theme='error'
                      className='ml-2 px-2 w-[4rem] h-[2rem] bolder flex items-center'
                      onClick={() => handleDelClick(item.id)}
                    >
                      삭제
                      <RiDeleteBin6Line color='white' className='ml-1 w-fit' />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AdminPagination
          totalItems={totalItems}
          itemsPerPage={pageItems}
          onPageChange={handlePageChange}
        />
      </div>
      {isModalVisible && (
        <AlterModal
          message={message}
          isCancelVisible={isCancelVisible}
          onConfirm={onConfirm}
          onCancel={handleCancel}
        />
      )}
    </AdminCurrentLayout>
  );
};

export default AdminBannerForm;
