// src/AdminMasterForm.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPagination from '../ui/paging/AdminPagination';
import AdminCurrentLayout from '../ui/layout/AdminCurrentLayout';
import Button from '../ui/buttons/Button';

const AdminMasterForm: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(0);
    let pageItems = 10;

    // 예시 데이터 fetch (실제 API 호출로 대체 가능)
    useEffect(() => {
        const fetchData = async () => {
            setTotalItems(4);
            setPageIndex(1-1);
            const result = [{
                    'id': 'id1',
                    'name': 'name1',
                    'date': '2025-02-17 00:00:00'
                },
                {
                    'id': 'id2',
                    'name': 'name2',
                    'date': '2025-02-17 00:00:00'
                },
                {
                    'id': 'id3',
                    'name': 'name3',
                    'date': '2025-02-17 00:00:00'
                },
                {
                    'id': 'id4',
                    'name': 'name4',
                    'date': '2025-02-17 00:00:00'
                },
            ]
            setData(result);
        };

        fetchData();
    }, []);

    const handlePageChange = (page: number) => {
        console.log(`현재 페이지: ${page}`);
    };

    const handleRegisterClick = () => {
        navigate('/admin/master/write');
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
                                <td className="border border-Black border-[2px] p-2 text-center">{totalItems - index - (pageIndex * pageItems)}</td>
                                <td className="border border-Black border-[2px] p-2 text-center">{item.id}</td>
                                <td className="border border-Black border-[2px] p-2 text-center">{item.name}</td>
                                <td className="border border-Black border-[2px] p-2 text-center">{item.date}</td>
                                <td className="border border-Black border-[2px] p-2 text-center">관리</td>
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
