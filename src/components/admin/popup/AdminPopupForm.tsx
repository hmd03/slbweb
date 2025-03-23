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

const AdminPopupForm: React.FC = () => {
    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const { isSupervisor } = useRecoilValue(UserState);
    const [onConfirm, setOnConfirm] = useState(() => () => {});

    let pageItems = 10;

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

    const handleRegisterClick = () => {
        navigate('/admin/popup/mode/add');
    };

    const handleModClick = (id: string, itemSupervisor: boolean) => {
        navigate(`/admin/popup/mode/add/no/${id}`);
    };

    const fetchData = async () => {
        try {
            console.log(pageIndex)
            const response = await axios.get(
              `api/popups?page=${pageIndex}`,
            );

            console.log(response);
            setData(response.data.popupList);
            setTotalItems(response.data.totalCount);
          } catch (error) {
            console.log("error: " + error);
          }
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

    const handleDelClick = (id:string) => {
        handleOpenModal('삭제 하시겠습니까?', true, () => deleteItem(id));
    };

    const deleteItem = async (id:string) => {
        try {
            console.log(id);
            const response = await axios.delete(
                `api/popups/${id}`,
                );
    
                console.log(response)
                const data = response.data;
    
                if (response.status === 200) {
                    handleCancel();
                    fetchData();
                } else {
                    alert(data.message);
                }
          } catch (error) {
            console.log("error: " + error);
          }
    };

    const thClassName = 'border border-Black border-[2px] p-2';
    const tdClassName = 'border border-Black border-[2px] p-2 text-center';

    return (
        <AdminCurrentLayout title='팝업 관리 리스트'>
            <div className='w-full h-fit p-5 border border-Black bg-White'>
            <div className={`flex width-full pb-6 gap-2 items-center`}>
                    <Button theme='admin' className='w-[5rem] h-[3rem] '>전체</Button>
                    <Button theme='admin' className='w-[5rem] h-[3rem] '>PC</Button>
                    <Button theme='admin' className='w-[5rem] h-[3rem] '>모바일</Button>
                    <Button theme='admin' className='w-[5rem] h-[3rem] ' onClick={handleRegisterClick}>등록</Button>
                </div>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='bg-LightGray text-diagram'>
                        <tr>
                            <th className={thClassName}>No</th>
                            <th className={thClassName}>사용여부</th>
                            <th className={thClassName}>팝업 제목</th>
                            <th className={thClassName}>팝업 이미지</th>
                            <th className={thClassName}>팝업게시일</th>
                            <th className={thClassName}>등록일</th>
                            <th className={thClassName}>관리</th>
                        </tr>
                    </thead>
                    <tbody className='bg-White text-diagram'>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td className={`${tdClassName} w-[5%]`}>{totalItems - index - ((pageIndex-1) * pageItems)}</td>
                                <td className={`${tdClassName} w-[10%]`}>{`${item.isExposed ? '사용' : '사용중지'}`}</td>
                                <td className={`${tdClassName} w-[25%]`}>{item.title}</td>
                                <td className={`${tdClassName} w-[20%]`}>{item.media}</td>
                                <td className={`${tdClassName} w-[15%]`}>
                                    {formatDate(item.startDate)}<br />
                                    ~<br />
                                    {formatDate(item.endDate)}
                                </td>
                                <td className={`${tdClassName} w-[15%]`}>{formatDate(item.createdAt)}</td>
                                <td className={`${tdClassName} w-[20%]`}>
                                    <div className='w-full flex items-center justify-center'>
                                        <OutlineButton theme='admin' 
                                            className='px-2  w-[4rem] h-[2rem] flex items-center' 
                                            onClick={() => handleModClick(item.id, item.isSupervisor)}>
                                                수정
                                                <FaPencilAlt color='black' className='ml-1 w-fit'/>
                                        </OutlineButton>
                                        <Button theme='error' 
                                            className='ml-2 px-2 w-[4rem] h-[2rem] bolder flex items-center'
                                            onClick={() => handleDelClick(item.id)}>
                                                삭제
                                            <RiDeleteBin6Line color='white' className='ml-1 w-fit' />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AdminPagination totalItems={totalItems} itemsPerPage={pageItems} onPageChange={handlePageChange}/>
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

export default AdminPopupForm;
