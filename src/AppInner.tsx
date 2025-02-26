import React, { Suspense, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './components/ui/Loading';
import { LoadingState, UserState } from './store/atom';
import AdminNavLayout from './components/ui/layout/AdminNavLayout';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

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
        console.log(error);
        const {
          config,
          response: { data },
        } = error;

        console.log(data);

        if (data.statusCode === 419) {
          const type = error.response.data.type;

          console.log(type);

          if (type === 'refresh') {
            setUser({
              id: '',
              name: '',
              accessToken: '',
            });
            alert('다시 로그인해주세요.');
            navigate('/admin/login');
            return;
          } else if (type === 'access') {
            const originalRequest = config;
            const {
              data: { data },
            } = await axios.post(
              'api/auth/refresh',
            );

            setUser({
              id: user.id,
              name: user.name,
              accessToken: data.accessToken,
            });
            
            return axios(originalRequest);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [navigate, setUser]);

  // useEffect(() => {
  //   const requestVerifyRefreshToken = async () => {
  //     const cookies_refreshToken = cookies.get('refresh');
  //     console.log("cookies_refreshToken: " + cookies_refreshToken)

  //     if (!cookies_refreshToken) {
  //       setIsReady(true);
  //       return;
  //     }

  //     try {
  //       const {
  //         data: { data },
  //         } = await axios.post(
  //          'api/auth/refresh',
  //        );

  //        const { refreshToken, accessToken, user } = data;
  //        const id = user.user.id;
  //        const name = user.user.name;
  //        setUser({
  //          id,
  //          name,
  //          accessToken,
  //        });
  //        cookies.set('refresh', refreshToken, { secure: false, path: '/'});
  //        setIsReady(true);
  //      } catch (error) {
  //        //cookies.remove('refresh', { path: '/' });
  //        setIsReady(true); 
  //      }
  //   };

  //   if (location.pathname.startsWith('/admin')) {
  //     requestVerifyRefreshToken();
  //   } else {
  //     setIsReady(true);
  //   }
  // }, [location.pathname, setUser]);

  useEffect(() => {
    if (location.pathname.startsWith('/admin') && !user.accessToken) {
      navigate('/admin/login');
    }
  }, [location.pathname, user.accessToken, navigate]);

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
