import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminCurrentLayout from '../ui/layout/AdminCurrentLayout';
import Button from '../ui/buttons/Button';
import OutlineButton from '../ui/buttons/OutlineButton';
import AlterModal from '../ui/alters/AlterModal';
import InputField from '../ui/inputs/InputField';
import { LoadingState } from '../../store/atom';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const AdminMasterWriteForm: React.FC = () => {
    const [loading, setLoading] = useRecoilState(LoadingState);
    const [isModalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();
    
    const idRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const chackPasswordRef = useRef<HTMLInputElement>(null);

    const onSignup = async () => {
        const name = nameRef.current?.value || '';
        const id = idRef.current?.value || '';
        const password = passwordRef.current?.value || '';
        const checkPassword = chackPasswordRef.current?.value || '';

        setLoading(true);

        if (!/^[가-힣]+$/.test(name)) {
            alert('아이디는 한글만 가능합니다.');
            setLoading(false);
            return;
        }
        if (!/^[a-zA-Z]{6,}$/.test(id)) {
            alert('이름은 영어로 최소 6자 이상이어야 합니다.');
            setLoading(false);
            return;
        }
        if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(password)) {
            alert('비밀번호는 영어, 숫자, 특수문자를 포함하여 최소 6자 이상이어야 합니다.');
            setLoading(false);
            return;
        }
        if (password !== checkPassword) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            setLoading(false);
            return;
        }

        setModalVisible(true);
    }

    const handleConfirm = async () => {
        const name = nameRef.current?.value || '';
        const id = idRef.current?.value || '';
        const password = passwordRef.current?.value || '';

        try {
            const response = await axios.post('/api/auth/signup', {
                id,
                name,
                password,
            });

            const data = response.data;

            if (response.status === 201) {
                console.log(response);
                navigate('/admin/master');
            } else {
                alert(data.message);
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
        navigate('/admin/master');
    }

    return (
        <AdminCurrentLayout title='관리자 등록'>
            <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
                <table className="min-w-full border-collapse border border-[2px] border-Black">
                    <thead className='text-diagram'>
                        
                    </thead>
                    <tbody className='text-diagram'>
                        <tr>
                            <th className="bg-LightGray border border-Black border-[2px] p-2">이름</th>
                            <td className="bg-White border border-Black border-[2px] p-2 text-center w-[70%]">
                                <InputField
                                    className=' py-1'
                                    placeholder='한글만 가능'
                                    ref={nameRef} 
                                    autoComplete='id'
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className="bg-LightGray border border-Black border-[2px] p-2">아이디</th>
                            <td className="bg-White border border-Black border-[2px] p-2 text-center w-[70%]">
                                <InputField
                                    className=' py-1'
                                    placeholder='영어(최소 6자 이상)'
                                    ref={idRef} 
                                    autoComplete='name'
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className="bg-LightGray border border-Black border-[2px] p-2">비밀번호</th>
                            <td className="bg-White border border-Black border-[2px] p-2 text-center w-[70%]">
                                <InputField
                                    className=' py-1'
                                    placeholder='영어+숫자+특문(최소 6자 이상)'
                                    ref={passwordRef} 
                                    autoComplete='password'
                                />
                            </td>
                        </tr>
                        <tr >
                            <th className="bg-LightGray border border-Black border-[2px] p-2">비밀번호 확인</th>
                            <td className="bg-White border border-Black border-[2px] p-2 text-center w-[70%]">
                                <InputField
                                    className=' py-1'
                                    placeholder='영어+숫자+특문(최소 6자 이상)'
                                    ref={chackPasswordRef} 
                                    autoComplete='chackPassword'
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex w-full items-center justify-center h-fit mt-2'>
                    <Button onClick={onSignup} theme='admin' className='px-8 py-[14px] border border-[2px]'>등록</Button>
                    <OutlineButton onClick={onBackPage} theme='admin' className='px-8 py-[13px]'>← 목록</OutlineButton>
                </div>
            </div>
            {isModalVisible && (
                <AlterModal
                    message="정말로 등록하시겠습니까?"
                    isCancelVisible={true}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </AdminCurrentLayout>
    );
};

export default AdminMasterWriteForm;
