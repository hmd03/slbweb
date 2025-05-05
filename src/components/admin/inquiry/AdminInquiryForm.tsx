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
import { FaRegEye } from 'react-icons/fa';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Dropdown from '../../ui/dropdown/Dropdown';
import InputField from '../../ui/inputs/InputField';

const AdminInquiryForm: React.FC = () => {
  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const { isSupervisor } = useRecoilValue(UserState);

  const [searchCategoryData, setSearchCategoryData] = useState<any[]>([]);
  const [searchCategory, setSearchCategory] = useState('-1');

  const [selectedSenderDropdownItem, setSelectedSenderDropdownItem] =
    useState('searchSender');
  const [searchSender, setSearchSender] = useState('');

  const deviceInfo = useDeviceInfo();

  let pageItems = 10;

  const placeholder = '분류선택';

  const senderDropdownItem = [
    {
      label: '이름',
      value: 'searchSender',
    },
    {
      label: '연락처',
      value: 'searchSenderContact',
    },
  ];

  useEffect(() => {
    fetchData();
    fetchCategoryData();
  }, [pageIndex]);

  const handlePageChange = (page: number) => {
    setPageIndex(page);
    if (page === pageIndex) {
      fetchData();
    }
  };

  const hanViewClick = (id: string) => {
    navigate(`/admin/inquiry/view/no/${id}`);
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
      let url = `api/inquiries?page=${pageIndex}`;

      if (searchCategory !== '-1') {
        url += `&searchCategory=${searchCategory}`;
      }
      if (selectedSenderDropdownItem !== '') {
        url += `&searchSender=${searchSender}`;
      }
      const response = await axios.get(url);

      setData(response.data.inquiryList);
      setTotalItems(response.data.totalCount);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(`api/inquiries/categories`);
      const category = response.data.map((v: { name: string; id: number }) => {
        const obj = {
          label: v.name,
          value: v.id,
        };
        return obj;
      });

      category.unshift({
        label: '분류선택',
        value: -1,
      });

      setSearchCategoryData(category);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const deleteId = async (id: string) => {
    try {
      const response = await axios.delete(`api/inquiries/${id}`);
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

  const onSelectItemHandler = (value: string) => {
    setSearchCategory(value);
  };

  return (
    <AdminCurrentLayout title='창업문의 리스트'>
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
            onSelectItemHandler={onSelectItemHandler}
            items={searchCategoryData}
            placeholder={placeholder}
            width={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full'
                : 'w-[200px]'
            }`}
          ></Dropdown>
          <Dropdown
            onSelectItemHandler={setSelectedSenderDropdownItem}
            items={senderDropdownItem}
            placeholder='이름'
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
            onChange={(e) => setSearchSender(e.target.value)}
          />
          <OutlineButton
            onClick={fetchData}
            theme='admin'
            className={`h-[3rem] bg-LightGray ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'w-full'
                : 'w-[5rem] '
            }`}
          >
            검색
          </OutlineButton>
        </div>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <thead className='bg-LightGray text-diagram'>
            <tr>
              <th className='border border-Black border-[2px] p-2'>No</th>
              <th className='border border-Black border-[2px] p-2'>제목</th>
              <th className='border border-Black border-[2px] p-2'>연락처</th>
              <th className='border border-Black border-[2px] p-2'>등록일</th>
              <th className='border border-Black border-[2px] p-2'>관리</th>
            </tr>
          </thead>
          <tbody className='bg-White text-diagram'>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className='border border-Black border-[2px] p-2 text-center w-[5%]'>
                  {totalItems - index - (pageIndex - 1) * pageItems}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[35%]'>
                  {item.title}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[20%]'>
                  {item.senderContact}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[20%]'>
                  {formatDate(item.createdAt)}
                </td>
                <td className='border border-Black border-[2px] p-2 text-center w-[20%]'>
                  <div className='w-full flex items-center justify-center'>
                    <OutlineButton
                      theme='admin'
                      className='p-2  w-[4rem] h-[2rem] flex items-center'
                      onClick={() => hanViewClick(item.id)}
                    >
                      <FaRegEye color='black' className='mr-[0.125rem] w-fit' />
                      보기
                    </OutlineButton>
                    {!item.isSupervisor && (
                      <Button
                        theme='error'
                        className='ml-2 p-2 w-[4rem] h-[2rem] bolder flex items-center'
                        onClick={() => handleDelClick(item.id)}
                      >
                        삭제
                        <RiDeleteBin6Line
                          color='white'
                          className='ml-1 w-fit'
                        />
                      </Button>
                    )}
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

export default AdminInquiryForm;
