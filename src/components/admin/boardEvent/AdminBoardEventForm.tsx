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
import { CgLink } from 'react-icons/cg';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Dropdown from '../../ui/dropdown/Dropdown';
import InputField from '../../ui/inputs/InputField';

const AdminBoardEventForm: React.FC = () => {
    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [onConfirm, setOnConfirm] = useState(() => () => {});
    const { isSupervisor } = useRecoilValue(UserState);

    const [dropdownValue, setDropdownValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const deviceInfo = useDeviceInfo();

    let pageItems = 10;

    const items = [
        {
            label: '제목',
            value: 'searchTitle',
        },
        {
            label: '내용',
            value: 'searchContent',
        },
    ];

    useEffect(() => {
        fetchData();
    }, [pageIndex]);

    const handlePageChange = (page: number) => {
        console.log(`현재 페이지: ${page}`);
        setPageIndex(page);
        if (page === pageIndex) {
            fetchData();
        }
    };

    const handleRegisterClick = () => {
        navigate('/admin/board/event/write');
    };

    const handleModClick = (id: string, itemSupervisor: boolean) => {
        if (!isSupervisor) {
            handleOpenModal('사용할 수 없는 기능입니다.', false, handleCancel);
            return;
        }
        navigate(`/admin/board/event/write/no/${id}`);
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
            let url = `api/events?page=${pageIndex}`;
            if (dropdownValue !== '' && searchValue !== '') {
                url += `&${dropdownValue}=${searchValue}`;
            }
            const response = await axios.get(url);

            setData(response.data.eventList);
            setTotalItems(response.data.totalCount);
        } catch (error) {
            console.log('error: ' + error);
        }
    };

    const deleteId = async (id: string) => {
        console.log(id);
        try {
            const response = await axios.delete(`api/events/${id}`);

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
        <AdminCurrentLayout title='톡톡 이벤트 리스트'>
            <div
                className={`w-full h-fit border border-Black bg-White ${
                    deviceInfo.isSmallScreen ? 'p-1' : 'p-5'
                }`}
            >
                <div
                    className={`flex width-full pb-6 gap-2 ${
                        deviceInfo.isSmallScreen ? 'flex-col' : 'items-center'
                    }`}
                >
                    <Dropdown
                        items={items}
                        onSelectItemHandler={setDropdownValue}
                        placeholder=''
                        defaultValue='제목'
                        width={`${
                            deviceInfo.isSmallScreen ? 'w-full' : 'w-[200px]'
                        }`}
                    ></Dropdown>
                    <InputField
                        className={`border-[1px] px-4 py-3 ${
                            deviceInfo.isSmallScreen ? 'w-full' : 'w-[200px] '
                        }`}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder='검색어 입력'
                    />
                    <OutlineButton
                        theme='admin'
                        className={`h-[3rem] bg-LightGray ${
                            deviceInfo.isSmallScreen ? 'w-full' : 'w-[5rem] '
                        }`}
                    >
                        검색
                    </OutlineButton>
                </div>
                <table className='min-w-full border-collapse border border-[2px] border-Black'>
                    <thead className='bg-LightGray text-diagram'>
                        <tr>
                            <th className='border border-Black border-[2px] p-2'>
                                No
                            </th>
                            <th className='border border-Black border-[2px] p-2'>
                                제목
                            </th>
                            <th className='border border-Black border-[2px] p-2'>
                                조회수
                            </th>
                            <th className='border border-Black border-[2px] p-2'>
                                등록일
                            </th>
                            <th className='border border-Black border-[2px] p-2'>
                                관리
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-White text-diagram'>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td className='border border-Black border-[2px] p-2 text-center w-[5%]'>
                                    {totalItems -
                                        index -
                                        (pageIndex - 1) * pageItems}
                                </td>
                                <td className='border border-Black border-[2px] p-2 text-center w-[35%]'>
                                    {item.title}
                                </td>
                                <td className='border border-Black border-[2px] p-2 text-center w-[10%]'>
                                    {item.viewCount}
                                </td>
                                <td className='border border-Black border-[2px] p-2 text-center w-[25%]'>
                                    {formatDate(item.createdAt)}
                                </td>
                                <td className='border border-Black border-[2px] p-2 text-center w-[25%]'>
                                    <div className='w-full flex items-center justify-center gap-2'>
                                        <OutlineButton
                                            theme='admin'
                                            className='px-2  w-[6rem] h-[2rem] flex items-center'
                                            onClick={() =>
                                                handleModClick(
                                                    item.id,
                                                    item.isSupervisor
                                                )
                                            }
                                        >
                                            <CgLink
                                                color='black'
                                                className='mr-1 w-fit rotate-90'
                                            />
                                            바로가기
                                        </OutlineButton>
                                        <OutlineButton
                                            theme='admin'
                                            className='px-2  w-[4rem] h-[2rem] flex items-center'
                                            onClick={() =>
                                                handleModClick(
                                                    item.id,
                                                    item.isSupervisor
                                                )
                                            }
                                        >
                                            수정
                                            <FaPencilAlt
                                                color='black'
                                                className='ml-[0.2rem] w-fit'
                                            />
                                        </OutlineButton>
                                        <Button
                                            theme='error'
                                            className='p-2 w-[4rem] h-[2rem] bolder flex items-center'
                                            onClick={() =>
                                                handleDelClick(item.id)
                                            }
                                        >
                                            삭제
                                            <RiDeleteBin6Line
                                                color='white'
                                                className='ml-1 w-fit'
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

export default AdminBoardEventForm;
