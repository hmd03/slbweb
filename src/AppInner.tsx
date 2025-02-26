import React, { Suspense, useEffect } from 'react';
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

        if (data.statusCode === 419) {
          const type = error.response.data.type;

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
            const response = await axios.post(
              'api/auth/refresh',
            );
            const accessToken = response.data.accessToken;

            setUser({
              id: user.id,
              name: user.name,
              accessToken: accessToken,
            });
            //originalRequest.headers.authorization = `${data.accessToken}`;
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
