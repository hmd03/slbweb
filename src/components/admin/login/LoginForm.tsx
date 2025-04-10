import React, { useRef, useCallback } from 'react';
import InputField from '../../ui/inputs/InputField';
import Button from '../../ui/buttons/Button';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { UserState, LoadingState } from '../../../store/atom';
import { useNavigate } from 'react-router-dom';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [user, setUser] = useRecoilState(UserState);
    const [loading, setLoading] = useRecoilState(LoadingState);
    const navigate = useNavigate();

    const deviceInfo = useDeviceInfo();

    const onSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const inputid = idRef.current?.value;
            const password = passwordRef.current?.value;

            if (!inputid || !password) {
                return;
            }

            setLoading(true);

            try {
                const response = await axios.post('/api/auth/login', {
                    id: inputid,
                    password: password,
                });

                const data = response.data;
                console.log(data);

                if (response.status === 201) {
                    const { accessToken, user } = data;
                    const id = user.id;
                    const name = user.name;
                    const isSupervisor = user.isSupervisor;
                    const refreshToken = response.data.refreshToken;

                    Cookies.set('refreshToken', refreshToken, { expires: 4 / 24 });
                    setUser({
                        id,
                        name,
                        isSupervisor,
                        accessToken,
                    });
                    navigate('/admin/inquiry');
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert((error as Error).message);
            } finally {
                setLoading(false);
            }
        },
        [setLoading, navigate]
    );

    return (
        <form onSubmit={onSubmit} className={`${deviceInfo.isMobile ? 'w-full h-full' : 'w-[40rem] h-[32rem]'}  border-[2px] border-Black bg-LightGray px-16`}>
            <div className='flex flex-col items-center h-full justify-center'>
                <div className='w-full mb-10 mt-2'>
                    <img alt='adminLoginLogo' src={`${process.env.PUBLIC_URL}/adminLoginLogo.png`} className='h-[6rem] m-auto'/>
                </div>
                <div className='pb-2 w-full'>
                    <InputField
                        aria-label='관리자 아이디'
                        placeholder='관리자 아이디'
                        ref={idRef} 
                        autoComplete='id'
                        className='px-4 py-3 w-full border-[2px] '
                    />
                </div>
                <div className='pb-2 w-full'>
                    <InputField 
                        aria-label='비밀번호' 
                        type='password' 
                        placeholder='비밀번호' 
                        ref={passwordRef}
                        autoComplete='password'
                    />
                </div>
                <div className='pb-2 w-full mb-2'>
                    <Button theme='admin' className='w-full px-8 py-[14px] rounded' type='submit'>
                        {loading ? '로딩 중...' : '로그인'}
                    </Button>
                </div>
                <p className='text-main'>본 화면은 관리자 전용 페이지입니다.</p>
            </div>
        </form>
    );
};

export default LoginForm;
