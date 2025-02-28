// src/AdminMasterForm.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPagination from '../../ui/paging/AdminPagination';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import Button from '../../ui/buttons/Button';
import axios from 'axios';
import { formatDate } from '../../utils/dateUtils';
import OutlineButton from '../../ui/buttons/OutlineButton';

const AdminMasterForm: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);

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
        navigate('/admin/master/write');
    };

    const handleModClick = (id: string, isSupervisor: boolean) => {
        navigate(`/admin/master/write/id=${id}/isv=${isSupervisor?1:0}`);
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

    return (
        <AdminCurrentLayout title='관리자 리스트'>
            <div className='w-full h-fit p-5 border border-Black bg-White'>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='bg-LightGray text-diagram'>
                        <tr>
                            <th className="border border-Black border-[2px] p-2">No</th>
                            <th className="border border-Black border-[2px] p-2">아이디</th>
                            <th className="border border-Black border-[2px] p-2">이름</th>
                            <th className="border border-Black border-[2px] p-2">가입일</th>
                            <th className="border border-Black border-[2px] p-2">관리</th>
                        </tr>
                    </thead>
                    <tbody className='bg-White text-diagram'>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border border-Black border-[2px] p-2 text-center w-[10%]">{totalItems - index - ((pageIndex-1) * pageItems)}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[20%]">{item.id}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[20%]">{item.name}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[25%]">{formatDate(item.createdAt)}</td>
                                <td className="border border-Black border-[2px] p-2 text-center w-[25%]">
                                    <OutlineButton theme='admin' className='w-[4rem] h-[2rem]' onClick={() => handleModClick(item.id, item.isSupervisor)}  >수정</OutlineButton>
                                    {!item.isSupervisor && <Button theme='error' className='ml-2 w-[4rem] h-[2rem] bolder'>삭제</Button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AdminPagination totalItems={totalItems} itemsPerPage={pageItems} onPageChange={handlePageChange}/>
                <Button theme='admin' onClick={handleRegisterClick}>등록</Button> 
            </div>
        </AdminCurrentLayout>
    );
};

export default AdminMasterForm;
