import React, { useRef, useCallback } from 'react';
import InputField from '../ui/inputs/InputField';
import Button from '../ui/buttons/Button';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { UserState, LoadingState } from '../../store/atom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [user, setUser] = useRecoilState(UserState);
    const [loading, setLoading] = useRecoilState(LoadingState);
    const navigate = useNavigate();

    const onSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const id = idRef.current?.value;
            const password = passwordRef.current?.value;

            if (!id || !password) {
                return;
            }

            setLoading(true);

            try {
                const response = await axios.post('/api/auth/login', {
                    id,
                    password,
                });

                const data = response.data;

                if (response.status === 201) {
                    const { refreshToken, accessToken, user } = data;
                    const id = user.user.id;
                    setUser({
                        id,
                        accessToken,
                    });
                    Cookies.set('refreshToken', refreshToken, { secure: false, sameSite: 'Strict' });
                    console.log(Cookies.get('refreshToken'))
                    navigate('/admin/master');
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
        <form onSubmit={onSubmit} className='w-[40rem] h-[32rem] border-[2px] border-Black bg-LightGray px-16'>
            <div className='flex flex-col items-center h-full justify-center'>
                <div className='w-full mb-8'>로고가 아마도!</div>
                <div className='pb-2 w-full'>
                    <InputField
                        aria-label='관리자 아이디'
                        placeholder='관리자 아이디'
                        ref={idRef} 
                    />
                </div>
                <div className='pb-2 w-full'>
                    <InputField 
                        aria-label='비밀번호' 
                        type='password' 
                        placeholder='비밀번호' 
                        ref={passwordRef} 
                    />
                </div>
                <div className='pb-2 w-full'>
                    <Button theme='admin' className='w-full' type='submit'>
                        {loading ? '로딩 중...' : '로그인'}
                    </Button>
                </div>
                <p>본 화면은 관리지 전용 페이지입니다.</p>
            </div>
        </form>
    );
};

export default LoginForm;
