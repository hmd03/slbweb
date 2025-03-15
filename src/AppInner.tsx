import React, { Suspense, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './components/ui/Loading';
import { LoadingState, UserState } from './store/atom';
import AdminNavLayout from './components/ui/layout/AdminNavLayout';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const TestPage = React.lazy(() => import('./pages/test'));
const Login = React.lazy(() => import('./pages/admin/Login'));

const AdminInquiry = React.lazy(() => import('./pages/admin/inquiry/AdminInquiry'));
const AdminInquiryView = React.lazy(() => import('./pages/admin/inquiry/AdminInquiryView'))
;
const AdminMaster = React.lazy(() => import('./pages/admin/master/AdminMaster'));
const AdminMasterWrite = React.lazy(() => import('./pages/admin/master/AdminMasterWrite'));

const AdminBanner = React.lazy(() => import('./pages/admin/banner/AdminBanner'));
const AdminBannerAddMod = React.lazy(() => import('./pages/admin/banner/AdminBannerAddMod'));

const AdminPopup = React.lazy(() => import('./pages/admin/popup/AdminPopup'));

const AdminBoardNotice = React.lazy(() => import('./pages/admin/boardNotice/AdminBoardNotice'));
const AdminBoardNoticeWrite = React.lazy(() => import('./pages/admin/boardNotice/AdminBoardNoticeWrite'));

const AdminBoardEvent = React.lazy(() => import('./pages/admin/boardEvent/AdminBoardEvent'));
const AdminBoardEventWrite = React.lazy(() => import('./pages/admin/boardEvent/AdminBoardEventWrite'));

const AdminBoardCs = React.lazy(() => import('./pages/admin/boardCs/AdminBoardCs'));

const AdminBoardPartner = React.lazy(() => import('./pages/admin/boardPartner/AdminBoardPartner'));

const AdminStore = React.lazy(() => import('./pages/admin/store/AdminStore'));

const AdminConfig = React.lazy(() => import('./pages/admin/config/AdminConfig'));

const AppInner: React.FC = () => {
  const [isLoading, setIsLoading] = useRecoilState(LoadingState);
  const [user, setUser] = useRecoilState(UserState);
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => {
        setIsLoading(false);
        return response;
      },
      async (error) => {
        setIsLoading(false);
        console.log(error);
        const {
          config,
          response: { data },
        } = error;

        if (data.statusCode === 419 && location.pathname.startsWith('/admin')) {
          const type = error.response.data.type;

          console.log(data);
          setIsLoading(false);

          if (type === 'refresh') {
            if (!isLoading) {
              setUser({
                id: '',
                name: '',
                isSupervisor: false,
                accessToken: '',
              });
              alert('다시 로그인해주세요.');
              setIsLoading(false);
              navigate('/admin/login');
              return;
            }
          } else if (type === 'access') {
            const originalRequest = config;
            if (!isLoading) {
              setIsLoading(true);
              const response = await axios.post('api/auth/refresh');
              const accessToken = response.data.accessToken;
              setUser({
                id: user.id,
                name: user.name,
                isSupervisor: user.isSupervisor,
                accessToken: accessToken,
              });
              setIsLoading(false);
              return axios(originalRequest);
            }
          }
        } else if (!location.pathname.startsWith('/admin')) {
          setUser({
            id: '',
            name: '',
            isSupervisor: false,
            accessToken: '',
          });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [location.pathname, navigate, setIsLoading, setUser, user.id, user.name, isLoading]);

  useEffect(() => {
    if (location.pathname.startsWith('/admin') && !user.accessToken) {
      navigate('/admin/login');
    }
  }, [location.pathname, user.accessToken, navigate, isLoading]);

  return (
    <>
      <div className="flex w-screen h-screen">
        <Suspense fallback={<Loading isLoading={isLoading} />}>
          {isAdminRoute ? (
            <AdminNavLayout>
              <Routes>
                <Route path='/admin/login' element={<Login />} />

                <Route path='/admin/inquiry' element={<AdminInquiry />} />
                <Route path='/admin/inquiry/view/no/:id' element={<AdminInquiryView />} />

                <Route path='/admin/master' element={<AdminMaster />} />
                <Route path='/admin/master/write' element={<AdminMasterWrite />} />
                <Route path='/admin/master/write/no/:id/:isv' element={<AdminMasterWrite />} />
                
                <Route path='/admin/banner' element={<AdminBanner />} />
                <Route path='/admin/banner/mode/add' element={<AdminBannerAddMod />} />
                <Route path='/admin/banner/mode/add/no/:id' element={<AdminBannerAddMod />} />

                <Route path='/admin/popup' element={<AdminPopup />} />

                <Route path='/admin/board/notice' element={<AdminBoardNotice />} />
                <Route path='/admin/board/notice/write' element={<AdminBoardNoticeWrite />} />
                <Route path='/admin/board/notice/write/no/:id' element={<AdminBoardNoticeWrite />} />
                
                <Route path='/admin/board/event' element={<AdminBoardEvent />} />
                <Route path='/admin/board/event/write' element={<AdminBoardEventWrite />} />
                <Route path='/admin/board/event/write/no/:id' element={<AdminBoardEventWrite />} />

                <Route path='/admin/board/cs' element={<AdminBoardCs />} />
                <Route path='/admin/board/partner' element={<AdminBoardPartner />} />
                <Route path='/admin/store' element={<AdminStore />} />
                <Route path='/admin/config' element={<AdminConfig />} />
              </Routes>
            </AdminNavLayout>
          ) : (
            <div>
              <Routes>
                {true && <><Route path='/test' element={<TestPage />} /></>}
              </Routes>
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default AppInner;
