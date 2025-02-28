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

const AdminBannerForm: React.FC = () => {
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
        //fetchData();
    }, [pageIndex]);

    const handlePageChange = (page: number) => {
        console.log(`현재 페이지: ${page}`);
        setPageIndex(page);
        if(page == pageIndex) {
            fetchData();
        }
    };

    const handleRegisterClick = () => {
        //navigate('/admin/master/write');
    };

    const handleModClick = (id: string, itemSupervisor: boolean) => {
        if(!isSupervisor){
            handleOpenModal('사용할 수 없는 기능입니다.', false, handleCancel);
            return;
        }
        navigate(`/admin/master/write/id=${id}/isv=${itemSupervisor?1:0}`);
    };

    const fetchData = async () => {
        try {
            console.log(pageIndex)
            const response = await axios.get(
              `api/users?page=${pageIndex}`,
            );

            console.log(response);
            setData(response.data.userList);
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

    return (
        <AdminCurrentLayout title='배너 관리 리스트'>
            <div className='w-full h-fit p-5 border border-Black bg-White'>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='bg-LightGray text-diagram'>
                        <tr>
                            <th className="border border-Black border-[2px] p-2">No</th>
                            <th className="border border-Black border-[2px] p-2">구분</th>
                            <th className="border border-Black border-[2px] p-2">배너 제목</th>
                            <th className="border border-Black border-[2px] p-2">배너 이미지</th>
                            <th className="border border-Black border-[2px] p-2">등록일</th>
                            <th className="border border-Black border-[2px] p-2">관리</th>
                        </tr>
                    </thead>
                    <tbody className='bg-White text-diagram'>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border border-Black border-[2px] p-2 text-center w-[5%]">{totalItems - index - ((pageIndex-1) * pageItems)}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[5%]">{item.id}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[30%]">{item.name}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[20%]">{item.name}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[20%]">{formatDate(item.createdAt)}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[20%]">
                                    <div className='w-full flex items-center justify-center'>
                                        <OutlineButton theme='admin' 
                                            className='px-2  w-[4rem] h-[2rem] flex items-center' 
                                            onClick={() => handleModClick(item.id, item.isSupervisor)}>
                                                수정
                                                <FaPencilAlt color='black' className='ml-1 w-fit'/>
                                        </OutlineButton>
                                        {!item.isSupervisor && 
                                            <Button theme='error' className='ml-2 px-2 w-[4rem] h-[2rem] bolder flex items-center'>
                                                삭제
                                                <RiDeleteBin6Line color='white' className='ml-1 w-fit' />
                                            </Button>
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AdminPagination totalItems={totalItems} itemsPerPage={pageItems} onPageChange={handlePageChange}/>
                <Button theme='admin' onClick={handleRegisterClick}>등록</Button> 
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
