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
import { FaRegEye } from 'react-icons/fa';
import Checkbox from '../../ui/checkbox/Checkbox';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import InputField from '../../ui/inputs/InputField';
import Dropdown from '../../ui/dropdown/Dropdown';

const AdminBoardPartnerForm: React.FC = () => {
    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [onConfirm, setOnConfirm] = useState(() => () => {});
    const [dropdownValue, setDropdownValue] = useState("searchSender");
    const [searchValue, setSearchValue] = useState("");

    const deviceInfo = useDeviceInfo();

    let pageItems = 10;

    const items = [
    {
        label: "이름",
        value: "searchSender ",
    },
    {
        label: "내용",
        value: "searchContent",
    },
    ];
    useEffect(() => {
        fetchData();
    }, [pageIndex]);

    const handlePageChange = (page: number) => {
        console.log(`현재 페이지: ${page}`);
        setPageIndex(page);
        if(page == pageIndex) {
            fetchData();
        }
    };

    const fetchData = async () => {
        try {
            console.log(pageIndex);
            let url = `api/partnership/proposals?page=${pageIndex}`;

            if (searchValue !== "") {
              url += `&${dropdownValue}=${searchValue}`;
            }
            console.log(url);

            const response = await axios.get(url);

            console.log(response);
            setData(response.data.inquiryList);
            setTotalItems(response.data.totalCount);
          } catch (error) {
            console.log("error: " + error);
          }
    };

    const handleDelClick = (id: string) => {
        handleOpenModal('삭제 하시겠습니까?', false, () => deleteId(id));
    };

    const deleteId = async (id: string) => {
        console.log(id);
        try {
            const response = await axios.delete(`api/partnership/proposals/${id}`);

            console.log(response);
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

    const handleCheckboxChange = (id: string, isChecked: boolean) => {
        setSelectedIds(prev =>
            isChecked ? [...prev, id] : prev.filter(selectedId => selectedId !== id)
        );
    };

    const handleBulkDelete = () => {
        if (selectedIds.length === 0) {
            handleOpenModal('선택된 항목이 없습니다.', false, handleCancel);
            return;
        }
    
        handleOpenModal('선택된 항목을 모두 삭제하시겠습니까?', true, async () => {
            for (const id of selectedIds) {
                await deleteId(id);
            }
            setSelectedIds([]);
            fetchData();
        });
    };

    const handleOpenModal = (msg: string,  isCancel = true, confirmFunction: () => void) => {
        setMessage(msg);
        setIsCancelVisible(isCancel);
        setOnConfirm(() => confirmFunction);
        setModalVisible(true);
      };

    const handleCancel = () => {
        setModalVisible(false);
    }

    return (
      <AdminCurrentLayout title="협력제안 리스트">
        <div
          className={`w-full h-fit border border-Black bg-White ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? "p-1" : "p-5"
          }`}
        >
          <div
            className={`flex width-full pb-6 gap-2 ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? "flex-col"
                : "items-center"
            }`}
          >
            <Dropdown
              items={items}
              onSelectItemHandler={setDropdownValue}
              placeholder=""
              defaultValue="이름"
              width={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? "w-full"
                  : "w-[200px]"
              }`}
            ></Dropdown>
            <InputField
              className={`border-[1px] px-4 py-3 ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? "w-full"
                  : "w-[200px] "
              }`}
              placeholder="검색어 입력"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <OutlineButton
              theme="admin"
              className={`h-[3rem] bg-LightGray ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? "w-full"
                  : "w-[5rem] "
              }`}
              onClick={fetchData}
            >
              검색
            </OutlineButton>
          </div>
          <table className="min-w-full border-collapse border border-[2px] border-Black">
            <thead className="bg-LightGray text-diagram">
              <tr>
                <th className="border border-Black border-[2px] p-2">체크</th>
                <th className="border border-Black border-[2px] p-2">No</th>
                <th className="border border-Black border-[2px] p-2">작성자</th>
                <th className="border border-Black border-[2px] p-2">등록일</th>
                <th className="border border-Black border-[2px] p-2">관리</th>
              </tr>
            </thead>
            <tbody className="bg-White text-diagram">
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="border border-Black border-[2px] p-2 w-[5%]">
                    <div className="flex justify-center items-center">
                      <Checkbox
                        isChecked={selectedIds.includes(item.id)}
                        onValueChangeHandler={(checked: boolean) =>
                          handleCheckboxChange(item.id, checked)
                        }
                        disabled={false}
                      >
                        <></>
                      </Checkbox>
                    </div>
                  </td>
                  <td className="border border-Black border-[2px] p-2 text-center w-[10%]">
                    {totalItems - index - (pageIndex - 1) * pageItems}
                  </td>
                  <td className="border border-Black border-[2px] p-2 text-center w-[30%]">
                    {item.sender.name}
                  </td>
                  <td className="border border-Black border-[2px] p-2 text-center w-[30%]">
                    {formatDate(item.createdAt)}
                  </td>
                  <td className="border border-Black border-[2px] p-2 text-center w-[25%]">
                    <div className="w-full flex items-center justify-center">
                      <OutlineButton
                        theme="admin"
                        className="px-2  w-[4rem] h-[2rem] flex items-center"
                        onClick={() =>
                          navigate(`/admin/board/partner/view/no/${item.id}`)
                        }
                      >
                        <FaRegEye color="black" className="mr-1 w-fit" />
                        보기
                      </OutlineButton>
                      <Button
                        theme="error"
                        className="ml-2 px-2 w-[4rem] h-[2rem] bolder flex items-center"
                        onClick={() => handleDelClick(item.id)}
                      >
                        삭제
                        <RiDeleteBin6Line
                          color="white"
                          className="ml-1 w-fit"
                        />
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
          <Button theme="error" onClick={handleBulkDelete}>
            선택 삭제
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

export default AdminBoardPartnerForm;
