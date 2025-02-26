import React, { Suspense, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './components/ui/Loading';
import { LoadingState, UserState } from './store/atom';
import Cookies from 'js-cookie';
import AdminNavLayout from './components/ui/layout/AdminNavLayout';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const Login = React.lazy(() => import('./pages/Login'));
const AdminMaster = React.lazy(() => import('./pages/AdminMaster'));
const AdminMasterWrite = React.lazy(() => import('./pages/AdminMasterWrite'));

const AppInner: React.FC = () => {
  const isLoading = useRecoilValue(LoadingState);
  const [user, setUser] = useRecoilState(UserState);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

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
  }, [navigate, setUser, user.id]);

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

        const { refreshToken, accessToken, user } = data;
        const id = user.user.id;
        setUser({
          id,
          accessToken,
        });
        Cookies.set('refreshToken', refreshToken, { secure: false, sameSite: 'Strict' });
        setIsReady(true);
      } catch (error) {
        Cookies.remove('refreshToken', { path: '/' }); 
        setIsReady(true); 
      }
    };

    if (location.pathname.startsWith('/admin')) {
      requestVerifyRefreshToken();
    } else {
      setIsReady(true);
    }
  }, [location.pathname, setUser]);

  useEffect(() => {
    if (isReady && location.pathname.startsWith('/admin') && !user.accessToken) {
      navigate('/admin/login');
    }
  }, [isReady, location.pathname, user.accessToken, navigate]);

  return (
    <>
      {isLoading && <Loading isLoading={isLoading} />}
      <div className="flex">
          <Suspense fallback={<Loading isLoading={isLoading} />}>
            {isAdminRoute ? (
              <AdminNavLayout>
                <Routes>
                  <Route path='/admin/login' element={<Login />} />
                  <Route path='/admin/master' element={<AdminMaster />} />
                  <Route path='/admin/master/write' element={<AdminMasterWrite />} />
                </Routes>
              </AdminNavLayout>
            ) : (
              <div>
                <Routes>
                  <Route path='/test' element={<Login />} />
                </Routes>
              </div>
            )}
          </Suspense>
      </div>
    </>
  );
};

export default AppInner;
