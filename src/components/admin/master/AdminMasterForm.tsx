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

const AdminMasterForm: React.FC = () => {
    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const { isSupervisor } = useRecoilValue(UserState);
    const [onConfirm, setOnConfirm] = useState(() => () => {});

    const deviceInfo = useDeviceInfo();

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

    const handleRegisterClick = () => {
        navigate('/admin/master/write');
    };

    const handleModClick = (id: string, itemSupervisor: boolean) => {
        if (!isSupervisor) {
            handleOpenModal('사용할 수 없는 기능입니다.', false, handleCancel);
            return;
        }
        navigate(`/admin/master/write/no/${id}/${itemSupervisor ? 1 : 0}`);
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
            const response = await axios.get(`api/users?page=${pageIndex}`);

            setData(response.data.userList);
            setTotalItems(response.data.totalCount);
        } catch (error) {
            console.log('error: ' + error);
        }
    };

    const deleteId = async (id: string) => {
        try {
            const response = await axios.delete(`api/users/${id}`);

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

    const thClassName = 'border border-Black border-[2px] p-2';
    const tdClassName = 'border border-Black border-[2px] p-2 text-center';

    return (
        <AdminCurrentLayout title='관리자 리스트'>
            <div
                className={`w-full h-fit border border-Black bg-White ${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'p-1'
                        : 'p-5'
                }`}
            >
                <table className='min-w-full border-collapse border border-[2px] border-Black'>
                    <thead className='bg-LightGray text-diagram'>
                        <tr>
                            <th className={thClassName}>No</th>
                            <th className={thClassName}>아이디</th>
                            <th className={thClassName}>이름</th>
                            <th className={thClassName}>가입일</th>
                            <th className={thClassName}>관리</th>
                        </tr>
                    </thead>
                    <tbody className='bg-White text-diagram'>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td className={`${tdClassName} w-[5%]`}>
                                    {totalItems -
                                        index -
                                        (pageIndex - 1) * pageItems}
                                </td>
                                <td className={`${tdClassName} w-[20%]`}>
                                    {item.id}
                                </td>
                                <td className={`${tdClassName} w-[20%]`}>
                                    {item.name}
                                </td>
                                <td className={`${tdClassName} w-[25%]`}>
                                    {formatDate(item.createdAt)}
                                </td>
                                <td className={`${tdClassName} w-[25%]`}>
                                    <div
                                        className={`w-full flex ${
                                            deviceInfo.isSmallScreen ||
                                            deviceInfo.isMobile
                                                ? 'flex-col items-center justify-center'
                                                : 'items-center justify-center'
                                        }`}
                                    >
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
                                        {!item.isSupervisor && (
                                            <Button
                                                theme='error'
                                                className={`${
                                                    deviceInfo.isSmallScreen ||
                                                    deviceInfo.isMobile ===
                                                        false
                                                        ? 'ml-2'
                                                        : ''
                                                } px-2 w-[4rem] h-[2rem] bolder flex items-center`}
                                                onClick={() =>
                                                    handleDelClick(item.id)
                                                }
                                            >
                                                삭제
                                                <RiDeleteBin6Line
                                                    color='white'
                                                    className='ml-[0.2rem] w-fit'
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

export default AdminMasterForm;
