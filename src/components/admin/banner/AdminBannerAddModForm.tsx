import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import OutlineButton from '../../ui/buttons/OutlineButton';
import axios from 'axios';
import Button from '../../ui/buttons/Button';
import InputField from '../../ui/inputs/InputField';
import FileInput from '../../ui/inputs/FileInput';

const AdminBannerAddModForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string;}>();

    console.log(id);
    
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<HTMLInputElement>(null);
    const durationRef = useRef<HTMLInputElement>(null);

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [videoFile, setVideoFile] = useState<File | null>(null); 
    const [imageMsg, setImageMsg] = useState<string>('이미지 사이즈 1920X650');
    const [videoMsg, setVideoMsg] = useState<string>('동영상 사이즈 1920X650');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                setImageMsg(`${imageMsg}<br>선택한 이미지 사이즈 ${img.width}X${img.height}`);
            };
            console.log('선택된 파일:', file);
        } else {
            setImageFile(null);
            setImageMsg('이미지 사이즈 1920X650');
        }
    };

    const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setVideoFile(file);
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.onloadedmetadata = () => {
                setVideoMsg(`${videoMsg}<br>선택한 동영상 사이즈 ${video.videoWidth}X${video.videoHeight}`);
            };
            console.log('선택된 파일:', file);
        } else {
            setVideoFile(null);
            setVideoMsg('동영상 사이즈 1920X650');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await axios.get(`/api/users/${id}`);
                    console.log(response);
                    if (response.status === 200) {
                        const data = response.data;

                        titleRef.current!.value = data.title;
                        linkRef.current!.value = data.link;
                        priorityRef.current!.value = data.priority;
                        durationRef.current!.value = data.duration;
                    }
                } catch (error) {
                    console.log('사용자 정보를 가져오는 데 실패했습니다.');
                }
            }
        };

        fetchData();
    }, [id]);

    const onBackPage = () => {
        navigate('/admin/inquiry');
    }

    const thClassName = 'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
    const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

    return (
        <AdminCurrentLayout title={`배너 ${id !== undefined ? '수정' : '' } 등록`}>
            <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='text-diagram'>
                    </thead>
                    <tbody className='text-diagram'>
                        <tr>
                            <th className={thClassName}>배너 제목</th>
                            <td className={`${tdClassName} text-center`}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='제목을 입력해 주세요.'
                                    ref={titleRef} 
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>배너 링크</th>
                            <td className={`${tdClassName} text-center`}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='연결 링크를 넣어주세요.'
                                    ref={linkRef}
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>배너 우선순위</th>
                            <td className={`${tdClassName} text-center`}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='숫자가 작을수록 노출 순서가 빠릅니다.'
                                    ref={priorityRef}
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>배너 이미지</th>
                            <td className={`${tdClassName}`}>
                                <div className='w-full flex items-center'>
                                    <FileInput
                                        id='imgInput'
                                        msg={imageMsg}
                                        accept='image/*'
                                        onChange={handleImageChange}
                                    />
                                    {imageFile && <img className='ml-10 w-[6.65rem] h-[2.25rem]' id='thumbnail' alt='thumbnail' src={URL.createObjectURL(imageFile)} />}
                                </div>
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>동영상</th>
                            <td className={`${tdClassName}`}>
                                <FileInput
                                    id='videoInput'
                                    msg={videoMsg}
                                    accept='video/*'
                                    onChange={handleVideoChange}
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>재생시간(초)</th>
                            <td className={`${tdClassName} text-center`}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='재생시간을 설정해 주세요.'
                                    ref={durationRef}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex w-full items-center h-fit mt-2 gap-2'>
                    <Button theme='admin' className='px-8 py-[14px] border border-[2px]'>{!id?'등록':'수정'}</Button>
                    {id && <Button theme='error' className='px-8 py-[14px] border border-[2px]'>삭제</Button>}
                    <OutlineButton onClick={onBackPage} theme='admin' className='px-8 py-[13px]'>← 목록</OutlineButton>
                </div>
            </div>
        </AdminCurrentLayout>
    );
};

export default AdminBannerAddModForm;
