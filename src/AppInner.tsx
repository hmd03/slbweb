import React, { Suspense, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from './components/ui/headers/AdminHeader';
import Loading from './components/ui/Loading';
import { LoadingState, UserState } from './store/atom';
import Cookies from 'js-cookie';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const Login = React.lazy(() => import('./pages/Login'));
const AdminMaster = React.lazy(() => import('./pages/AdminMaster'));

const AppInner: React.FC = () => {
  const isLoading = useRecoilValue(LoadingState);
  const [user, setUser] = useRecoilState(UserState);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(user);

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const {
          config,
          response: { status },
        } = error;

        console.log(status);

        if (status === 419) {
          if (error.response.data.code === 'expired') {
            const type = error.response.data.type;

            if (type === 'refresh') {
              setUser({
                id: '',
                accessToken: '',
              });
              alert('다시 로그인해주세요.');
              navigate('/admin/login');
              return;
            } else if (type === 'access') {
              const originalRequest = config;
              const refreshToken = Cookies.get('refreshToken');

              const {
                data: { data },
              } = await axios.get(
                'api/auth/refresh',
                {
                  headers: {
                    authorization: `Bearer ${refreshToken}`,
                  },
                }
              );

              setUser({
                id: user.id,
                accessToken: data.accessToken,
              });
              
              originalRequest.headers.authorization = `Bearer ${refreshToken}`;

              return axios(originalRequest);
            }
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [setUser]);

  useEffect(() => {
    const requestVerifyRefreshToken = async () => {
      const cookies_refreshToken = Cookies.get('refreshToken');

      if (!cookies_refreshToken) {
        setIsReady(true);
        return;
      }

      try {
        const {
          data: { data },
        } = await axios.get(
          'api/auth/refresh',
          {
            headers: {
              authorization: `Bearer ${cookies_refreshToken}`,
            },
          }
        );

        // 새로운 토큰 저장
        const { refreshToken, accessToken, user } = data;
        const id = user.user.id;
        setUser({
          id,
          accessToken,
        });
        Cookies.set('refreshToken', refreshToken, { secure: false, sameSite: 'Strict' });
        setIsReady(true);
      } catch (error) {
        Cookies.remove('refreshToken');
        setIsReady(true); 
      }
    };

    if (location.pathname.startsWith('/admin')) {
      requestVerifyRefreshToken();
    } else {
      setIsReady(true);
    }
  }, [setUser]);

  useEffect(() => {
    if (isReady && location.pathname.startsWith('/admin') && !user.accessToken) {
      navigate('/admin/login');
    }
  }, [isReady, location.pathname, user.accessToken, navigate]);

  return (
    <>
      {isLoading && <Loading isLoading={isLoading} />}
        <Suspense fallback={<Loading isLoading={isLoading} />}>
          <HeaderWrapper />
          <Routes>
            <Route path='/admin/login' element={<Login />} />
            <Route path='/admin/master' element={<AdminMaster />} />
          </Routes>
        </Suspense>
    </>
  );
};

const HeaderWrapper: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginRoute = location.pathname === '/admin/login';

  return (
    <>
      {isAdminRoute && !isLoginRoute && <AdminHeader />}
    </>
  );
};

export default AppInner;
