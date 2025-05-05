import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPagination from '../../ui/paging/AdminPagination';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import Button from '../../ui/buttons/Button';
import axios from 'axios';
import { formatDate } from '../../utils/dateUtils';
import OutlineButton from '../../ui/buttons/OutlineButton';
import AlterModal from '../../ui/alters/AlterModal';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../store/atom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPencilAlt } from 'react-icons/fa';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import InputField from '../../ui/inputs/InputField';
import Dropdown from '../../ui/dropdown/Dropdown';

const AdminStoreForm: React.FC = () => {
  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [dropdownValue, setDropdownValue] = useState('searchName');
  const [searchValue, setSearchValue] = useState('');
  const { isSupervisor } = useRecoilValue(UserState);

  const deviceInfo = useDeviceInfo();

  let pageItems = 10;

  const items = [
    {
      label: '매장명',
      value: 'searchName ',
    },
    {
      label: '주소',
      value: 'searchAddress',
    },
    {
      label: '연락처',
      value: 'searchContact',
    },
    {
      label: '태그',
      value: 'searchTag',
    },
  ];

  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  const handlePageChange = (page: number) => {
    setPageIndex(page);
    if (page === pageIndex) {
      fetchData();
    }
  };

  const handleRegisterClick = () => {
    navigate('/admin/store/add');
  };

  const handleModClick = (id: string) => {
    navigate(`/admin/store/modify/no/${id}`);
  };

  const handleDelClick = (id: string) => {
    if (!isSupervisor) {
      handleOpenModal('사용할 수 없는 기능입니다.', false, handleCancel);
      return;
    }
    handleOpenModal('삭제 하시겠습니까?', false, () => deleteId(id));
  };

  const fetchData = async () => {
    try {
      let url = `api/stores?page=${pageIndex}`;

      if (searchValue !== '') {
        url += `&${dropdownValue}=${searchValue}`;
      }
      const response = await axios.get(url);
      const storeList = response.data.storeList;

      const updatedStoreList = await Promise.all(
        storeList.map(
          async (store: { media: { id: string; fileType: string } }) => {
            if (store.media == null) {
              return store;
            }
            const fileType = store.media.fileType.split('/')[0];
            const imgSrc = await getFile(store.media.id);
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

  const handleExcelDownload = async () => {
    try {
      const response = await axios.get('/api/stores/excel', {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = '매장리스트.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('엑셀 다운로드 실패:', error);
    }
  };

  const deleteId = async (id: string) => {
    try {
      const response = await axios.delete(`api/stores/${id}`);

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

  return (
    <AdminCurrentLayout title='매장 리스트'>
      <div
        className={`w-full h-fit border border-Black bg-White ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'p-1' : 'p-5'
        }`}
      >
        <div
          className={`flex width-full pb-6 gap-2 ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col'
              : 'items-center'
          }`}
        >
          <Dropdown
            items={items}
            onSelectItemHandler={setDropdownValue}
            placeholder=''
            defaultValue='매장명'
            width={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full'
                : 'w-[200px]'
            }`}
          ></Dropdown>
          <InputField
            className={`border-[1px] px-4 py-3 ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full'
                : 'w-[200px] '
            }`}
            placeholder='검색어 입력'
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <OutlineButton
            theme='admin'
            className={`h-[3rem] bg-LightGray ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full'
                : 'w-[5rem] '
            }`}
            onClick={fetchData}
          >
            검색
          </OutlineButton>
          <div className='w-full'>
            <OutlineButton
              theme='admin'
              className={`bg-LightGray float-right p-2 ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'w-full'
                  : 'w-fit'
              }`}
              onClick={handleExcelDownload}
            >
              매장 리스트 다운로드(엑셀파일)
            </OutlineButton>
          </div>
        </div>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <thead className='bg-LightGray text-diagram'>
            <tr>
              <th className='border border-Black border-[2px] p-2'>No</th>
              <th className='border border-Black border-[2px] p-2'>지역</th>
              <th className='border border-Black border-[2px] p-2'>썸네일</th>
              <th className='border border-Black border-[2px] p-2'>매장명</th>
              <th className='border border-Black border-[2px] p-2'>주소</th>
              <th className='border border-Black border-[2px] p-2'>연락처</th>
              <th className='border border-Black border-[2px] p-2'>태그</th>
              <th className='border border-Black border-[2px] p-2'>등록일</th>
              <th className='border border-Black border-[2px] p-2'>관리리</th>
            </tr>
          </thead>
          <tbody className='bg-White text-diagram'>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className='border border-Black border-[2px] p-2 text-center w-[5%]'>
                  {totalItems - index - (pageIndex - 1) * pageItems}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[10%]'>
                  {item.region.name}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[10%]'>
                  {item.fileType === 'image' && item.media && (
                    <img
                      className='w-[18.75rem] h-[6.375rem]'
                      src={`${item.media}`}
                    ></img>
                  )}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[10%]'>
                  {item.name}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[20%]'>
                  {item.address}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[15%]'>
                  {item.contact}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[10%]'>
                  {item.name}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[10%]'>
                  {formatDate(item.createdAt)}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[10%]'>
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
        <Button theme='admin' onClick={handleRegisterClick}>
          등록
        </Button>
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

export default AdminStoreForm;
