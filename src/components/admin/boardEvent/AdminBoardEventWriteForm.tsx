import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import Button from '../../ui/buttons/Button';
import OutlineButton from '../../ui/buttons/OutlineButton';
import AlterModal from '../../ui/alters/AlterModal';
import InputField from '../../ui/inputs/InputField';
import { LoadingState } from '../../../store/atom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import Editor from '../../ui/Editer/Editor';
import RadioButtonGroup from '../../ui/radio/RadioButtonGroup';
import FileInput from '../../ui/inputs/FileInput';

const AdminBoardEventWriteForm: React.FC = () => {
    const [loading, setLoading] = useRecoilState(LoadingState);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string;}>();
    const [onConfirm, setOnConfirm] = useState(() => () => {});
    
    const titleRef = useRef<HTMLInputElement>(null);
    const [selectedOption, setSelectedOption] = useState('1');
    const [editorContent, setEditorContent] = useState<string>('');

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageMsg, setImageMsg] = useState<string>('이미지 권장 사이즈 282X201');

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const options = [
        { id: 'option1', name: 'group1', value: '1', label: '공지' },
        { id: 'option2', name: 'group1', value: '0', label: '일반' },
    ];

    const handleChange = (value: React.SetStateAction<string>) => {
        setSelectedOption(value);
    };

    const handleEditorChange = (content: string) => {
        console.log(content);
        setEditorContent(content);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await axios.get(`/api/event/${id}`);
                    console.log(response);
                    if (response.status === 200) {
                        const data = response.data;
                        titleRef.current!.value = data.title;
                        setSelectedOption( data.isNotice == true ? '1' : '0' );
                        setEditorContent(data.content);
                    }
                } catch (error) {
                    console.log('사용자 정보를 가져오는 데 실패했습니다.');
                }
            }
        };

        fetchData();
    }, [id]);

    const onSubmit = async () => {

        setLoading(true);

        handleOpenModal(`등록 하시겠습니까?`, true, handleConfirm)

        setModalVisible(true);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                setImageFile(file);
                const img = new Image();
                img.src = URL.createObjectURL(file);
                img.onload = () => {
                    setImageMsg(`이미지 권장 사이즈 282X201<br>이미지 사이즈 ${img.width}X${img.height}`);
                };
                console.log('선택된 파일:', file);
            } else {
                setImageFile(null);
                setImageMsg('이미지 권장 사이즈 282X201');
            }
        };

    const handleDelClick = () => {
        handleOpenModal('삭제 하시겠습니까?', true, deleteId);
    };

    const deleteId = async () => {
        try {
            if(id){
                const response = await axios.delete(
                    `api/event/${id}`,
                  );
      
                  console.log(response)
                  const data = response.data;
      
                  if (response.status === 200) {
                      navigate('/admin/board/event');
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

    const handleConfirm = async () => {
        const title = titleRef.current?.value || '';
        const isNotice = selectedOption === '1';
        const content = editorContent;

        try {
            if(!id){
                const response = await axios.post('/api/event', {
                    title: title,
                    isNotice: isNotice,
                    content: content
                });

                const data = response.data;
    
                if (response.status === 201) {
                    navigate('/admin/board/event');
                } else {
                    alert(data.message);
                }
            } else {
                const response = await axios.put(`api/event/${id}`, {
                    title: title,
                    isNotice: isNotice,
                    content: content
                });

                const data = response.data;
    
                if (response.status === 200) {
                    console.log(response);
                    navigate('/admin/board/event');
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

    const handleCancel = () => {
        setModalVisible(false);
    }

    const onBackPage = () => {
        navigate('/admin/board/event');
    }

    const thClassName = 'bg-LightGray border border-Black border-[2px] p-2 text-left text-center w-[30%]';
    const tdClassName = 'bg-White border border-Black border-[2px] p-2 text-center w-full';

    return (
        <AdminCurrentLayout title='톡톡 이벤트 등록'>
            <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='text-diagram'>
                        
                    </thead>
                    <tbody className='text-diagram'>
                        <tr>
                            <th className={thClassName}>제목</th>
                            <td className={tdClassName}>
                                <InputField
                                    className=' p-1 w-full border-[2px] '
                                    placeholder='제목'
                                    ref={titleRef} 
                                    autoComplete='id'
                                    readOnly={!!id}
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>운영 상태</th>
                            <td className={tdClassName}>
                                <RadioButtonGroup
                                    options={options}
                                    selectedOption={selectedOption}
                                    onChange={handleChange}
                                    className="radio-group flex gap-2"
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>이벤트 기간</th>
                            <td className={tdClassName}>
                            <div className='flex gap-2'>
                                    <InputField
                                        type='date'
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className='border-[2px] p-1'
                                    />
                                    <span>~</span>
                                    <InputField
                                        type='date'
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className='border-[2px] p-1'
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr >
                            <th className={thClassName}>썸네일</th>
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
                            <th className={thClassName}>내용</th>
                            <td className={`${tdClassName}`}>
                                <Editor value={editorContent} onChange={handleEditorChange} /> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex w-full items-center justify-center h-fit mt-2 gap-2'>
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

export default AdminBoardEventWriteForm;
