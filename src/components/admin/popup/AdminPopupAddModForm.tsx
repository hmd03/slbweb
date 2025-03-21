import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import OutlineButton from '../../ui/buttons/OutlineButton';
import axios from 'axios';
import Button from '../../ui/buttons/Button';
import InputField from '../../ui/inputs/InputField';
import FileInput from '../../ui/inputs/FileInput';
import RadioButtonGroup from '../../ui/radio/RadioButtonGroup';
import AlterModal from '../../ui/alters/AlterModal';
import { useRecoilState } from 'recoil';
import { LoadingState } from '../../../store/atom';

const AdminPopupAddModForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string;}>();

    console.log(id);

    const [loading, setLoading] = useRecoilState(LoadingState);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [onConfirm, setOnConfirm] = useState(() => () => {});
    
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<HTMLInputElement>(null);
    const durationRef = useRef<HTMLInputElement>(null);

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [videoFile, setVideoFile] = useState<File | null>(null); 
    const [imageMsg, setImageMsg] = useState<string>('이미지 사이즈 1920X650');
    const [videoMsg, setVideoMsg] = useState<string>('동영상 사이즈 1920X650');

    const [imagePath, setImagePath] = useState<string>('');

    const [selectedOption, setSelectedOption] = useState('0');

    const options = [
            { id: 'option1', name: 'group1', value: '0', label: 'PC' },
            { id: 'option2', name: 'group1', value: '1', label: 'MO' },
        ];
    
        const handleChange = (value: React.SetStateAction<string>) => {
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
            
            
            const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files?.[0];
                if (file) {
                    setVideoFile(file);
                    const video = document.createElement('video');
                    video.src = URL.createObjectURL(file);
                    video.onloadedmetadata = () => {
                        setVideoMsg(`선택한 동영상 사이즈 ${video.videoWidth}X${video.videoHeight}`);
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
                    const response = await axios.get(`/api/banners/${id}`);
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

    const onSubmit = async () => {
        const title = titleRef.current?.value || '';
        const link = linkRef.current?.value || '';
        const priority = priorityRef.current?.value || '';
        const duration = durationRef.current?.value || '';
    
        const isImageSelected = imageFile != null;
        const isVideoSelected = videoFile != null;
    
        if (
            title === '' || 
            (isImageSelected && isVideoSelected) ||
            (!isImageSelected && !isVideoSelected) ||
            link === '' || 
            priority === '' || 
            duration === ''
        ) {
            handleOpenModal(`이미지와 영상 중 하나만 등록 가능, 제목, 우선순위, 재생시간을 다시 확인해주세요.`, false, handleCancel);
        } else {
            handleOpenModal(`등록 하시겠습니까?`, true, handleConfirm);
        }
    };
    

    const handleConfirm = async () => {
        const title = titleRef.current?.value || '';
        const link = linkRef.current?.value || '';
        const priority = priorityRef.current?.value || '';
        const duration = durationRef.current?.value || '';
        const isMobile = selectedOption === '1' ? 'true' : 'false';
        const media = imageFile != null ? imageFile : videoFile;

        try {
            const formData = new FormData();
                formData.append('title', title);
                formData.append('isMobile', isMobile);
                formData.append('link', link);
                formData.append('priority', priority);
                formData.append('duration', duration);

                if (media) {
                    formData.append('media', media);
                }

                for (const [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }

            if(!id){
                setLoading(true);
                const response = await axios.post(`/api/banners`, formData);

                const data = response.data;
                setLoading(false);
    
                if (response.status === 201) {
                    navigate('/admin/banner');
                } else {
                    alert(data.message);
                }
            } else {
                setLoading(true);
                const response = await axios.put(`api/banners/${id}`, formData);

                const data = response.data;
                setLoading(false);

                if (response.status === 200) {
                    console.log(response);
                    navigate('/admin/banner');
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
    }

    const handleDelClick = () => {
        handleOpenModal('삭제 하시겠습니까?', true, deleteId);
    };

    const deleteId = async () => {
        try {
            if(id){
                const response = await axios.delete(
                    `api/banners/${id}`,
                  );
      
                  console.log(response)
                  const data = response.data;
      
                  if (response.status === 200) {
                      navigate('/admin/banner');
                  } else {
                      alert(data.message);
                  }
            }
          } catch (error) {
            console.log("error: " + error);
          }
    };

    const handleOpenModal = (msg: string, isCancel = true, confirmFunction: () => void) => {
        setMessage(msg);
        setIsCancelVisible(isCancel)
        setOnConfirm(() => confirmFunction);
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    }

    const onBackPage = () => {
        navigate('/admin/banner');
    }

    const thClassName = 'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
    const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

    return (
        <AdminCurrentLayout title={`팝업 ${id !== undefined ? '수정' : '' } 등록`}>
            <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='text-diagram'>
                    </thead>
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
                        <tr >
                            <th className={thClassName}>팝업 링크</th>
                            <td className={`${tdClassName} text-center`}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='연결 링크를 넣어주세요.'
                                    ref={linkRef}
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>팝업 이미지</th>
                            <td className={`${tdClassName}`}>
                                <div className='w-full flex items-center'>
                                    <FileInput
                                        id='imgInput'
                                        msg={imageMsg}
                                        accept='image/*'
                                        onChange={handleImageChange}
                                    />
                                    {imagePath != '' && <img className='ml-10 w-[6.65rem] h-[2.25rem]' id='thumbnail' alt='thumbnail' src={imagePath} />}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex w-full items-center h-fit mt-2 gap-2'>
                    <Button onClick={onSubmit} theme='admin' className='px-8 py-[14px] border border-[2px]'>{!id?'등록':'수정'}</Button>
                    {!!id && <Button onClick={handleDelClick} theme='error' className='px-8 py-[14px] border border-[2px]'>삭제</Button>}
                    <OutlineButton onClick={onBackPage} theme='admin' className='px-8 py-[13px]'>← 목록</OutlineButton>
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
