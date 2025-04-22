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
import { FaPencilAlt } from 'react-icons/fa';

const AdminReviewCardForm: React.FC = () => {
    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [onConfirm, setOnConfirm] = useState(() => () => {});
    const [searchIsMobile, setSearchIsMobile] = useState('');

    let pageItems = 10;

    useEffect(() => {
        fetchData();
    }, [pageIndex, searchIsMobile]);

    const handlePageChange = (page: number) => {
        console.log(`현재 페이지: ${page}`);
        setPageIndex(page);
        if (page === pageIndex) {
            fetchData();
        }
    };

    const handleRegisterClick = () => {
        navigate('/admin/card/review/mode/add');
    };

    const handleModClick = (id: string, itemSupervisor: boolean) => {
        navigate(`/admin/card/review/mode/add/no/${id}`);
    };

    const fetchData = async () => {
        try {
            console.log(pageIndex);
            let url = `api/content/cards?page=${pageIndex}`;
            const response = await axios.get(url);

            console.log(response);
            const reviewCardList = response.data.contentCardList;

            const updatedBannerList = await Promise.all(
                reviewCardList.map(
                    async (reviewCard: {
                        media: { id: string; fileType: string };
                    }) => {
                        if (reviewCard.media == null) {
                            return reviewCard;
                        }
                        const fileType =
                            reviewCard.media.fileType.split('/')[0];

                        let imgSrc = '';
                        if (fileType == 'image') {
                            imgSrc = await getFile(reviewCard.media.id);
                        }

                        return {
                            ...reviewCard,
                            fileType: fileType,
                            media: imgSrc,
                        };
                    }
                )
            );

            console.log(updatedBannerList);

            setData(updatedBannerList);
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

            console.log(response);
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

    const handleSearchClick = (strIsMobile: string) => {
        setSearchIsMobile(strIsMobile);
    };

    const handleDelClick = (id: string) => {
        handleOpenModal('삭제 하시겠습니까?', true, () => deleteItem(id));
    };

    const deleteItem = async (id: string) => {
        try {
            console.log(id);
            const response = await axios.delete(`api/content/cards/${id}`);

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

    const thClassName = 'border border-Black border-[2px] p-2';
    const tdClassName = 'border border-Black border-[2px] p-2 text-center';

    return (
        <AdminCurrentLayout title='리뷰 카드 관리 리스트'>
            <div className='w-full h-fit p-5 border border-Black bg-White'>
                <div className={`flex width-full pb-6 gap-2 items-center`}>
                    <Button
                        theme='admin'
                        className='w-[5rem] h-[3rem] '
                        onClick={handleRegisterClick}
                    >
                        등록
                    </Button>
                </div>
                <table className='min-w-full border-collapse border border-[2px] border-Black'>
                    <thead className='bg-LightGray text-diagram'>
                        <tr>
                            <th className={thClassName}>No</th>
                            <th className={thClassName}>리뷰 카드 제목</th>
                            <th className={thClassName}>파일 타입</th>
                            <th className={thClassName}>리뷰 카드 이미지</th>
                            <th className={thClassName}>등록일</th>
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
                                <td className={`${tdClassName} w-[10%]`}>
                                    {item.title}
                                </td>
                                <td className={`${tdClassName} w-[10%]`}>
                                    {item.fileType}
                                </td>
                                <td className={`${tdClassName} w-[20%]`}>
                                    {item.fileType === 'image' &&
                                        item.media && (
                                            <img
                                                className='w-[18.75rem] h-[6.375rem]'
                                                src={`${item.media}`}
                                            ></img>
                                        )}
                                </td>
                                <td className={`${tdClassName} w-[20%]`}>
                                    {formatDate(item.createdAt)}
                                </td>
                                <td className={`${tdClassName} w-[20%]`}>
                                    <div className='w-full flex items-center justify-center'>
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
                                                className='ml-1 w-fit'
                                            />
                                        </OutlineButton>
                                        <Button
                                            theme='error'
                                            className='ml-2 px-2 w-[4rem] h-[2rem] bolder flex items-center'
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

export default AdminReviewCardForm;
