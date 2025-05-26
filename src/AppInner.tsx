// AppInner.tsx
import React, { Suspense, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from './api/axios';
import Loading from './components/ui/Loading';
import SeoHelmet from './components/common/SeoHelmet';
import {
    defaultUser,
    LoadingState,
    siteSettingState,
    UserState,
} from './store/atom';
import AdminNavLayout from './components/ui/layout/AdminNavLayout';
import CurrentLayout from './components/ui/layout/CurrentLayout';
import AdminReviewCard from './pages/admin/reviewCard/AdminReviewCard';
import AdminReviewCardAddMod from './pages/admin/reviewCard/AdminReviewCardAddMod';
import useDeviceInfo from './hooks/useDeviceInfo';
import {
    trackGoogleExit,
    trackGooglePageView,
    trackKarrotPageView,
    trackNaverPageView,
} from './components/utils/analytics';
import { User } from './types/interface';

// Lazy-loaded pages
const TestPage = React.lazy(() => import('./pages/test'));
const Login = React.lazy(() => import('./pages/admin/Login'));
const AdminInquiry = React.lazy(() => import('./pages/admin/inquiry/AdminInquiry'));
const AdminInquiryView = React.lazy(() => import('./pages/admin/inquiry/AdminInquiryView'));
const AdminMaster = React.lazy(() => import('./pages/admin/master/AdminMaster'));
const AdminMasterWrite = React.lazy(() => import('./pages/admin/master/AdminMasterWrite'));
const AdminBanner = React.lazy(() => import('./pages/admin/banner/AdminBanner'));
const AdminBannerAddMod = React.lazy(() => import('./pages/admin/banner/AdminBannerAddMod'));
const AdminPopup = React.lazy(() => import('./pages/admin/popup/AdminPopup'));
const AdminPopupAddMod = React.lazy(() => import('./pages/admin/popup/AdminPopupAddMod'));
const AdminBoardNotice = React.lazy(() => import('./pages/admin/boardNotice/AdminBoardNotice'));
const AdminBoardNoticeWrite = React.lazy(() => import('./pages/admin/boardNotice/AdminBoardNoticeWrite'));
const AdminBoardEvent = React.lazy(() => import('./pages/admin/boardEvent/AdminBoardEvent'));
const AdminBoardEventWrite = React.lazy(() => import('./pages/admin/boardEvent/AdminBoardEventWrite'));
const AdminBoardCs = React.lazy(() => import('./pages/admin/boardCs/AdminBoardCs'));
const AdminBoardCsView = React.lazy(() => import('./pages/admin/boardCs/AdminBoardCsView'));
const AdminBoardPartner = React.lazy(() => import('./pages/admin/boardPartner/AdminBoardPartner'));
const AdminBoardPartnerView = React.lazy(() => import('./pages/admin/boardPartner/AdminBoardPartnerView'));
const AdminStore = React.lazy(() => import('./pages/admin/store/AdminStore'));
const AdminStoreAddMod = React.lazy(() => import('./pages/admin/store/AdminStoreAddMod'));
const AdminConfig = React.lazy(() => import('./pages/admin/config/AdminConfig'));
const Main = React.lazy(() => import('./pages/main/Main'));
const Sub_1 = React.lazy(() => import('./pages/main/sub/sub_1'));
const Sub_2 = React.lazy(() => import('./pages/main/sub/sub_2'));
const Sub_3 = React.lazy(() => import('./pages/main/sub/sub_3'));
const Sub_4 = React.lazy(() => import('./pages/main/sub/sub_4'));
const Inquiry = React.lazy(() => import('./pages/main/sub/inquiry'));
const BoardCs = React.lazy(() => import('./pages/main/sub/boardCs'));
const BoardPartner = React.lazy(() => import('./pages/main/sub/boardPartner'));
const Map = React.lazy(() => import('./pages/main/sub/map'));
const Story = React.lazy(() => import('./pages/main/sub/story'));
const BoardNotice = React.lazy(() => import('./pages/main/sub/boardNotice'));
const BoardNoticeDetail = React.lazy(() => import('./pages/main/sub/boardNoticeDetail'));
const BoardEvent = React.lazy(() => import('./pages/main/sub/boardEvent'));
const BoardEventDetail = React.lazy(() => import('./pages/main/sub/boardEventDetail'));
const Store = React.lazy(() => import('./pages/main/sub/store'));
const StoreDetail = React.lazy(() => import('./pages/main/sub/storeDetail'));

const AppInner: React.FC = () => {
    const [isLoading, setIsLoading] = useRecoilState(LoadingState);
    const [user, setUser] = useRecoilState(UserState);
    const settings = useRecoilValue(siteSettingState);
    const setSetting = useSetRecoilState(siteSettingState);
    const navigate = useNavigate();
    const location = useLocation();
    const enterTimeRef = useRef<number>(Date.now());

    const { isMobile = false } = useDeviceInfo();
    const deviceType = isMobile ? 'mobile' : 'desktop';
    const isAdminRoute = location.pathname.startsWith('/admin');
    const isLoginPage = location.pathname === '/admin/login';

    // 페이지 뷰 트래킹
    useEffect(() => {
        enterTimeRef.current = Date.now();
        trackGooglePageView(location.pathname + location.search, deviceType);
        trackNaverPageView();
        trackKarrotPageView();
    }, [location.pathname, location.search, deviceType]);

    // 페이지 이탈 트래킹
    useEffect(() => {
        const handler = () => {
            const dwellMs = Date.now() - enterTimeRef.current;
            trackGoogleExit(location.pathname + location.search, deviceType, dwellMs);
        };
        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, [location.pathname, location.search, deviceType]);

    // 사이트 설정 가져오기
    useEffect(() => {
        axios.get('/api/setting').then(res => {
            if (res.status === 200) {
                setSetting(res.data);
            }
        });
    }, [setSetting]);

    // 관리자 인증 처리
    useEffect(() => {
        if (!isAdminRoute) return;
        if (isLoginPage) {
            setUser(defaultUser);
            return;
        }

        const controller = new AbortController();
        let isMounted = true;

        const fetchWithRefresh = async (): Promise<User> => {
            try {
                const { data } = await axios.get<{ user: User }>('/api/auth/me', { withCredentials: true, signal: controller.signal });
                return data.user;
            } catch (err: any) {
                if (axios.isCancel(err)) throw err;
                const status = err.response?.status;
                if (status === 419 || status === 401) {
                    await axios.post('/api/auth/refresh', {}, { withCredentials: true });
                    const retry = await axios.get<{ user: User }>('/api/auth/me', { withCredentials: true });
                    return retry.data.user;
                }
                throw err;
            }
        };

        (async () => {
            setIsLoading(true);
            try {
                const authUser = await fetchWithRefresh();
                if (isMounted) setUser(authUser);
            } catch (err) {
                console.error('Auth failed:', err);
                if (isMounted) {
                    setUser(defaultUser);
                    navigate('/admin/login');
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        })();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [isAdminRoute, isLoginPage, location.pathname, setUser, setIsLoading, navigate]);

    return (
        <>
          <SeoHelmet />
          <div className='flex w-full h-screen'>
              <Suspense fallback={<Loading isLoading={isLoading} />}>
                  {isAdminRoute ? (
                      <AdminNavLayout>
                          <Routes>
                              <Route
                                  path='/admin/login'
                                  element={<Login />}
                              />

                              <Route
                                  path='/admin/inquiry'
                                  element={<AdminInquiry />}
                              />
                              <Route
                                  path='/admin/inquiry/view/no/:id'
                                  element={<AdminInquiryView />}
                              />

                              <Route
                                  path='/admin/master'
                                  element={<AdminMaster />}
                              />
                              <Route
                                  path='/admin/master/write'
                                  element={<AdminMasterWrite />}
                              />
                              <Route
                                  path='/admin/master/write/no/:id/:isv'
                                  element={<AdminMasterWrite />}
                              />

                              <Route
                                  path='/admin/banner'
                                  element={<AdminBanner />}
                              />
                              <Route
                                  path='/admin/banner/mode/add'
                                  element={<AdminBannerAddMod />}
                              />
                              <Route
                                  path='/admin/banner/mode/add/no/:id'
                                  element={<AdminBannerAddMod />}
                              />

                              <Route
                                  path='/admin/card/review'
                                  element={<AdminReviewCard />}
                              />
                              <Route
                                  path='/admin/card/review/mode/add'
                                  element={<AdminReviewCardAddMod />}
                              />
                              <Route
                                  path='/admin/card/review/mode/add/no/:id'
                                  element={<AdminReviewCardAddMod />}
                              />

                              <Route
                                  path='/admin/popup'
                                  element={<AdminPopup />}
                              />
                              <Route
                                  path='/admin/popup/mode/add'
                                  element={<AdminPopupAddMod />}
                              />
                              <Route
                                  path='/admin/popup/mode/add/no/:id'
                                  element={<AdminPopupAddMod />}
                              />

                              <Route
                                  path='/admin/board/notice'
                                  element={<AdminBoardNotice />}
                              />
                              <Route
                                  path='/admin/board/notice/write'
                                  element={<AdminBoardNoticeWrite />}
                              />
                              <Route
                                  path='/admin/board/notice/write/no/:id'
                                  element={<AdminBoardNoticeWrite />}
                              />

                              <Route
                                  path='/admin/board/event'
                                  element={<AdminBoardEvent />}
                              />
                              <Route
                                  path='/admin/board/event/write'
                                  element={<AdminBoardEventWrite />}
                              />
                              <Route
                                  path='/admin/board/event/write/no/:id'
                                  element={<AdminBoardEventWrite />}
                              />

                              <Route
                                  path='/admin/board/cs'
                                  element={<AdminBoardCs />}
                              />
                              <Route
                                  path='/admin/board/cs/view/no/:id'
                                  element={<AdminBoardCsView />}
                              />

                              <Route
                                  path='/admin/board/partner'
                                  element={<AdminBoardPartner />}
                              />
                              <Route
                                  path='/admin/board/partner/view/no/:id'
                                  element={<AdminBoardPartnerView />}
                              />

                              <Route
                                  path='/admin/store'
                                  element={<AdminStore />}
                              />
                              <Route
                                  path='/admin/store/add'
                                  element={<AdminStoreAddMod />}
                              />
                              <Route
                                  path='/admin/store/modify/no/:id'
                                  element={<AdminStoreAddMod />}
                              />

                              <Route
                                  path='/admin/config'
                                  element={<AdminConfig />}
                              />
                          </Routes>
                      </AdminNavLayout>
                  ) : (
                      <div className='flex col w-full h-full'>
                          <CurrentLayout>
                              <Routes>
                                  {true && (
                                      <>
                                          <Route
                                              path='/test'
                                              element={<TestPage />}
                                          />
                                      </>
                                  )}
                                  <Route path='/' element={<Main />} />
                                  <Route
                                      path='/sub_1/:page'
                                      element={<Sub_1 />}
                                  />
                                  <Route
                                      path='/sub_2/:page'
                                      element={<Sub_2 />}
                                  />
                                  <Route
                                      path='/sub_3/:page'
                                      element={<Sub_3 />}
                                  />
                                  <Route
                                      path='/sub_4/:page'
                                      element={<Sub_4 />}
                                  />

                                  <Route
                                      path='/inquiry'
                                      element={<Inquiry />}
                                  />
                                  <Route
                                      path='/board/cs'
                                      element={<BoardCs />}
                                  />
                                  <Route
                                      path='/board/partner'
                                      element={<BoardPartner />}
                                  />
                                  <Route path='/map' element={<Map />} />

                                  <Route path='/story' element={<Story />} />
                                  <Route
                                      path='/board/notice'
                                      element={<BoardNotice />}
                                  />
                                  <Route
                                      path='/board/notice/detail/no/:id'
                                      element={<BoardNoticeDetail />}
                                  />
                                  <Route
                                      path='/board/event'
                                      element={<BoardEvent />}
                                  />
                                  <Route
                                      path='/board/event/detail/no/:id'
                                      element={<BoardEventDetail />}
                                  />
                                  <Route path='/store' element={<Store />} />
                                  <Route
                                      path='/store/detail/no/:id'
                                      element={<StoreDetail />}
                                  />
                              </Routes>
                          </CurrentLayout>
                      </div>
                  )}
              </Suspense>
          </div>
      </>
    );
};

export default AppInner;
