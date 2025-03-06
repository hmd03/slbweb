import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import OutlineButton from '../../ui/buttons/OutlineButton';
import axios from 'axios';

const AdminInquiryViewForm: React.FC = () => {
    const navigate = useNavigate();
    const params= useParams<{ id?: string;}>();
    const [item, setItem] = useState({
        id:'',
        category: '',
        sender: '',
        senderContact: '',
        preferredRegion: '',
        ageGroup: '',
        discoveryRoute: '',
        content: '',
        createdAt: ''
    });

    console.log(params.id);

    useEffect(() => {
        const fetchData = async () => {
            if (params.id) {
                try {
                    const response = await axios.get(`/api/inquiries/${params.id.split('=')[1]}`);
                    console.log(response);
                    if (response.status === 200) {
                        const data = response.data;
                        setItem({
                            id : data.id,
                            category : data.category,
                            sender : data.sender.name,
                            senderContact : data.sender.contact,
                            preferredRegion : data.preferredRegion,
                            ageGroup : data.ageGroup,
                            discoveryRoute : data.discoveryRoute,
                            content : data.content,
                            createdAt : data.createdAt
                        })
                    }
                } catch (error) {
                    console.log('사용자 정보를 가져오는 데 실패했습니다.');
                }
            }
        };

        fetchData();
    }, [params.id]);

    const onBackPage = () => {
        navigate('/admin/inquiry');
    }

    const thClassName = 'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
    const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

    return (
        <AdminCurrentLayout title='창업문의 상세보기'>
            <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='text-diagram'>
                        
                    </thead>
                    <tbody className='text-diagram'>
                        <tr>
                            <th className={thClassName}>분류</th>
                            <td className={tdClassName}>
                                {item.category}
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>이름</th>
                            <td className={tdClassName}>
                                {item.sender}
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>연락처</th>
                            <td className={tdClassName}>
                                {item.senderContact}
                            </td>
                        </tr>
                        {item.category === '온라인 창업 문의' && (
                            <>
                                <tr>
                                    <th className={thClassName}>창업 희망 지역</th>
                                    <td className={tdClassName}>
                                        {item.preferredRegion}
                                    </td>
                                </tr>
                                <tr>
                                    <th className={thClassName}>연령대</th>
                                    <td className={tdClassName}>
                                        {item.ageGroup}
                                    </td>
                                </tr>
                                <tr>
                                    <th className={thClassName}>SLB를 최초 알게 된<br />경로를 선택해 주세요</th>
                                    <td className={tdClassName}>
                                        {item.discoveryRoute}
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${thClassName} p-10`}>문의 내용</th>
                                    <td className={tdClassName}>
                                        {item.content}
                                    </td>
                                </tr>
                            </>
                        )}
                        <tr >
                            <th className={thClassName}>신청일</th>
                            <td className={tdClassName}>
                                {item.createdAt}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex w-full items-center justify-center h-fit mt-2'>
                    <OutlineButton onClick={onBackPage} theme='admin' className='px-8 py-[13px]'>← 목록</OutlineButton>
                </div>
            </div>
        </AdminCurrentLayout>
    );
};

export default AdminInquiryViewForm;
