import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import OutlineButton from '../../ui/buttons/OutlineButton';
import axios from 'axios';
import Button from '../../ui/buttons/Button';
import InputField from '../../ui/inputs/InputField';
import FileInput from '../../ui/inputs/FileInput';
import AlterModal from '../../ui/alters/AlterModal';
import { useRecoilState } from 'recoil';
import { LoadingState } from '../../../store/atom';
import Dropdown from '../../ui/dropdown/Dropdown';
import { formatDateYYYYMMDD } from '../../utils/dateUtils';
import DatePicker from '../../ui/inputs/DatePicker';
import dayjs from 'dayjs';

const AdminPopupAddModForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();

    console.log(id);

    const [loading, setLoading] = useRecoilState(LoadingState);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [onConfirm, setOnConfirm] = useState(() => () => {});

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const locationXRef = useRef<HTMLInputElement>(null);
    const locationYRef = useRef<HTMLInputElement>(null);
    const widthRef = useRef<HTMLInputElement>(null);
    const heightRef = useRef<HTMLInputElement>(null);

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageMsg, setImageMsg] = useState<string>('이미지 사이즈 1920X650');
    const [imagePath, setImagePath] = useState<string>('');

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const [startDateObj, setStartDateObj] = useState<dayjs.Dayjs | null>(
        startDate ? dayjs(startDate) : null
    );
    const [endDateObj, setEndDateObj] = useState<dayjs.Dayjs | null>(
        endDate ? dayjs(endDate) : null
    );

    const [selectedOption, setSelectedOption] = useState('사용');

    const items = [
        { label: '사용', value: '사용' },
        { label: '사용 안함', value: '사용 안함' },
    ];

    const handleSelectItem = (value: string) => {
        setSelectedOption(value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePath(URL.createObjectURL(file));
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                setImageMsg(`선택한 이미지 사이즈 ${img.width}X${img.height}`);
            };
            console.log('선택된 파일:', file);
        } else {
            setImageFile(null);
            setImagePath('');
            setImageMsg('이미지 사이즈 1920X650');
        }
    };

    const handleCustomStartDateChange = (date: dayjs.Dayjs) => {
        setStartDateObj(date);
        setStartDate(date.format('YYYY-MM-DD'));
        if (endDateObj && date.isAfter(endDateObj)) {
            setEndDateObj(date);
            setEndDate(date.format('YYYY-MM-DD'));
        }
    };
    
    const handleCustomEndDateChange = (date: dayjs.Dayjs) => {
        if (startDateObj && date.isBefore(startDateObj)) return;
        setEndDateObj(date);
        setEndDate(date.format('YYYY-MM-DD'));
    };

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await axios.get(`/api/popups/${id}`);
                    console.log(response);
                    if (response.status === 200) {
                        const data = response.data;

                        titleRef.current!.value = data.title;
                        setStartDate(formatDateYYYYMMDD(data.startDate));
                        setEndDate(formatDateYYYYMMDD(data.endDate));
                        linkRef.current!.value = data.link;
                        locationXRef.current!.value = data.locationX;
                        locationYRef.current!.value = data.locationY;
                        widthRef.current!.value = data.width;
                        heightRef.current!.value = data.height;
                        setSelectedOption(
                            data.isExposed ? '사용' : '사용 안함'
                        );
                        getFile(data.media.id, data.media.fileName);
                    }
                } catch (error) {
                    console.log('사용자 정보를 가져오는 데 실패했습니다.');
                }
            }
        };

        fetchData();
    }, [id]);

    const getFile = async (id: string, fileName: string) => {
      try {
        const response = await axios.get(`api/files/${id}`, {
          responseType: "arraybuffer",
        });

        const contentType = response.headers["content-type"];
        const base64String = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );

        const strbase64 = `data:${contentType};base64,${base64String}`;

        setImagePath(strbase64);

        const img = new Image();
        img.src = strbase64;
        img.onload = () => {
          setImageMsg(`불러온 이미지 사이즈 ${img.width}X${img.height}`);
        };

        const byteString = atob(base64String);
        const mimeString = contentType;
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        const file = new File([blob], fileName, { type: mimeString });

        setImageFile(file);

        return strbase64;
      } catch (error) {
        console.log("error: " + error);
        return "";
      }
    };

    const onSubmit = async () => {
        const title = titleRef.current?.value || '';
        const link = linkRef.current?.value || '';
        const locationX = locationXRef.current?.value || '';
        const locationY = locationYRef.current?.value || '';
        const width = widthRef.current?.value || '';
        const height = heightRef.current?.value || '';

        if (
            title === '' ||
            link === '' ||
            locationX === '' ||
            locationY === '' ||
            width === '' ||
            height === '' ||
            (!id && imageFile === null)
        ) {
            handleOpenModal(
                `팝업 제목, 팝업 크기, 팝업 이미지 팝업 시작일/종료일을 확인해 주세요.`,
                false,
                handleCancel
            );
        } else {
            handleOpenModal(`등록 하시겠습니까?`, true, handleConfirm);
        }
    };

    const handleConfirm = async () => {
        const title = titleRef.current?.value || '';
        const link = linkRef.current?.value || '';
        const locationX = locationXRef.current?.value || '';
        const locationY = locationYRef.current?.value || '';
        const width = widthRef.current?.value || '';
        const height = heightRef.current?.value || '';
        const isExposed = selectedOption === '사용' ? 'true' : 'false';
        const media = imageFile;

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('startDate', startDate);
            formData.append('endDate', endDate);
            formData.append('link', link);
            formData.append('width', width);
            formData.append('height', height);
            formData.append('locationX', locationX);
            formData.append('locationY', locationY);
            formData.append('isExposed', isExposed);

            if (media) {
                formData.append('media', media);
            }

            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            if (!id) {
                setLoading(true);
                const response = await axios.post(`/api/popups`, formData);

                const data = response.data;
                setLoading(false);

                if (response.status === 201) {
                    navigate('/admin/popup');
                } else {
                    alert(data.message);
                }
            } else {
                setLoading(true);
                const response = await axios.put(`api/popups/${id}`, formData);

                const data = response.data;
                setLoading(false);

                if (response.status === 200) {
                    console.log(response);
                    navigate('/admin/popup');
                } else {
                    alert(data.message);
                }
            }
        } catch (error) {
            alert((error as Error).message);
        } finally {
            setLoading(false);
            setModalVisible(false);
        }
    };

    const handleDelClick = () => {
        handleOpenModal('삭제 하시겠습니까?', true, deleteId);
    };

    const deleteId = async () => {
        try {
            if (id) {
                const response = await axios.delete(`api/popups/${id}`);

                const data = response.data;

                if (response.status === 200) {
                    navigate('/admin/popup');
                } else {
                    alert(data.message);
                }
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

    const onBackPage = () => {
        navigate('/admin/popup');
    };

    const thClassName =
        'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
    const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

    return (
        <AdminCurrentLayout
            title={`팝업 ${id !== undefined ? '수정' : ''} 등록`}
        >
            <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
                <table className='min-w-full border-collapse border border-[2px] border-Black'>
                    <thead className='text-diagram'></thead>
                    <tbody className='text-diagram'>
                        <tr>
                            <th className={thClassName}>팝업 제목</th>
                            <td className={`${tdClassName} text-center`}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='제목을 입력해 주세요.'
                                    ref={titleRef}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>팝업 링크</th>
                            <td className={`${tdClassName} text-center`}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='연결 링크를 넣어주세요.'
                                    ref={linkRef}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>팝업 위치</th>
                            <td className={`${tdClassName}`}>
                                <div>
                                    <div className='w-full flex items-center pl-1 mb-1'>
                                        <p className='whitespace-nowrap'>
                                            X좌표
                                        </p>
                                        <input
                                            className='rounded body1 border-Black bg-White focus:outline-none p-1 w-full border-[2px] ml-4'
                                            placeholder='화면 왼쪽 모서리 가로 기준'
                                            ref={locationXRef}
                                        />
                                    </div>
                                    <div className='w-full flex items-center pl-1'>
                                        <p className='whitespace-nowrap'>
                                            Y좌표
                                        </p>
                                        <input
                                            className='rounded body1 border-Black bg-White focus:outline-none p-1 w-full border-[2px] ml-4'
                                            placeholder='화면 왼쪽 모서리 세로 기준'
                                            ref={locationYRef}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>팝업 크기</th>
                            <td className={`${tdClassName}`}>
                                <div>
                                    <div className='w-full flex items-center pl-1 mb-1'>
                                        <p className='whitespace-nowrap'>
                                            가로
                                        </p>
                                        <input
                                            className='rounded body1 border-Black bg-White focus:outline-none p-1 w-full border-[2px] ml-6'
                                            placeholder='가로 이미지 사이즈를 넣어주세요'
                                            ref={widthRef}
                                        />
                                    </div>
                                    <div className='w-full flex items-center pl-1'>
                                        <p className='whitespace-nowrap'>
                                            세로
                                        </p>
                                        <input
                                            className='rounded body1 border-Black bg-White focus:outline-none p-1 w-full border-[2px] ml-6'
                                            placeholder='세로 이미지 사이즈를 넣어주세요'
                                            ref={heightRef}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>팝업 이미지</th>
                            <td className={`${tdClassName} h-[15rem]`}>
                                <div className='w-full h-full flex items-end justify-between'>
                                    <FileInput
                                        id='imgInput'
                                        msg={imageMsg}
                                        accept='image/*'
                                        onChange={handleImageChange}
                                    />
                                    {imagePath !== '' && (
                                        <img
                                            className='ml-10 w-[12rem] h-[14rem] mr-1'
                                            id='thumbnail'
                                            alt='thumbnail'
                                            src={imagePath}
                                        />
                                    )}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>팝업 시작일</th>
                            <td className={tdClassName}>
                                <DatePicker value={startDateObj} onChange={handleCustomStartDateChange} />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>팝업 종료일</th>
                            <td className={tdClassName}>
                                <DatePicker value={endDateObj} onChange={handleCustomEndDateChange} />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>팝업 사용 여부</th>
                            <td className={tdClassName}>
                                <Dropdown
                                    placeholder='Select an option'
                                    items={items}
                                    defaultValue={selectedOption}
                                    width='w-full'
                                    onSelectItemHandler={handleSelectItem}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex w-full items-center justify-center h-fit mt-2 gap-2'>
                    <Button
                        onClick={onSubmit}
                        theme='admin'
                        className='px-8 py-[14px] border border-[2px]'
                    >
                        {!id ? '등록' : '수정'}
                    </Button>
                    {!!id && (
                        <Button
                            onClick={handleDelClick}
                            theme='error'
                            className='px-8 py-[14px] border border-[2px]'
                        >
                            삭제
                        </Button>
                    )}
                    <OutlineButton
                        onClick={onBackPage}
                        theme='admin'
                        className='px-8 py-[13px]'
                    >
                        ← 목록
                    </OutlineButton>
                </div>
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

export default AdminPopupAddModForm;
