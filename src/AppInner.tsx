import React, { Suspense, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from './components/ui/headers/AdminHeader';
import Loading from './components/ui/Loading';
import SideBar from './components/ui/navigations/AdminSideBar';
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
        Cookies.remove('refreshToken');
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
        <SideBarWrapper />
        <div className={`w-full h-screen ${location.pathname === '/admin/login' ? '' : 'flex-1  ml-[12rem] pt-[4rem] bg-LightGray'}`}>
          <Suspense fallback={<Loading isLoading={isLoading} />}>
            <HeaderWrapper />
            <Routes>
              <Route path='/admin/login' element={<Login />} />
              <Route path='/admin/master' element={<AdminMaster />} />
            </Routes>
          </Suspense>
        </div>
      </div>
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

const SideBarWrapper: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginRoute = location.pathname === '/admin/login';

  const sidebarItem = [
    { label: '창업문의 관리', path: '/admin/inquiry' },
    { label: '관리자 관리', path: '/admin/master' },
    { label: '배너 관리',path: '/admin/banner ', },
    { label: '팝업 관리', path: '/admin/popup', },
    { label: '공지&뉴스', path: '/admin/board/notice', },
    { label: '톡톡 이벤트', path: '/admin/board/event ', },
    { label: '고객문의', path: '/admin/board/cs ', },
    { label: '협력제안', path: '/admin/board/partner', },
    { label: '매장관리', path: '/admin/store', },
    { label: '설정', path: '/admin/config', },
  ]

  return (
    <>
      {isAdminRoute && !isLoginRoute && <SideBar items={sidebarItem} />}
    </>
  );
};

export default AppInner;
