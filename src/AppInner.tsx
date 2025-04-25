/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { Suspense, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './components/ui/Loading';
import { LoadingState, siteSettingState, UserState } from './store/atom';
import AdminNavLayout from './components/ui/layout/AdminNavLayout';
import Cookies from 'js-cookie';
import CurrentLayout from './components/ui/layout/CurrentLayout';
import AdminReviewCard from './pages/admin/reviewCard/AdminReviewCard';
import AdminReviewCardAddMod from './pages/admin/reviewCard/AdminReviewCardAddMod';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const TestPage = React.lazy(() => import('./pages/test'));
const Login = React.lazy(() => import('./pages/admin/Login'));

const AdminInquiry = React.lazy(
    () => import('./pages/admin/inquiry/AdminInquiry')
);
const AdminInquiryView = React.lazy(
    () => import('./pages/admin/inquiry/AdminInquiryView')
);
const AdminMaster = React.lazy(
    () => import('./pages/admin/master/AdminMaster')
);
const AdminMasterWrite = React.lazy(
    () => import('./pages/admin/master/AdminMasterWrite')
);

const AdminBanner = React.lazy(
    () => import('./pages/admin/banner/AdminBanner')
);
const AdminBannerAddMod = React.lazy(
    () => import('./pages/admin/banner/AdminBannerAddMod')
);

const AdminPopup = React.lazy(() => import('./pages/admin/popup/AdminPopup'));
const AdminPopupAddMod = React.lazy(
    () => import('./pages/admin/popup/AdminPopupAddMod')
);

const AdminBoardNotice = React.lazy(
    () => import('./pages/admin/boardNotice/AdminBoardNotice')
);
const AdminBoardNoticeWrite = React.lazy(
    () => import('./pages/admin/boardNotice/AdminBoardNoticeWrite')
);

const AdminBoardEvent = React.lazy(
    () => import('./pages/admin/boardEvent/AdminBoardEvent')
);
const AdminBoardEventWrite = React.lazy(
    () => import('./pages/admin/boardEvent/AdminBoardEventWrite')
);

const AdminBoardCs = React.lazy(
    () => import('./pages/admin/boardCs/AdminBoardCs')
);
const AdminBoardCsView = React.lazy(
    () => import('./pages/admin/boardCs/AdminBoardCsView')
);

const AdminBoardPartner = React.lazy(
    () => import('./pages/admin/boardPartner/AdminBoardPartner')
);
const AdminBoardPartnerView = React.lazy(
    () => import('./pages/admin/boardPartner/AdminBoardPartnerView')
);

const AdminStore = React.lazy(() => import('./pages/admin/store/AdminStore'));
const AdminStoreAddMod = React.lazy(
    () => import('./pages/admin/store/AdminStoreAddMod')
);

const AdminConfig = React.lazy(
    () => import('./pages/admin/config/AdminConfig')
);

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
const BoardEvent = React.lazy(() => import('./pages/main/sub/boardEvent'));
const Store = React.lazy(() => import('./pages/main/sub/store'));

const AppInner: React.FC = () => {
    const [isLoading, setIsLoading] = useRecoilState(LoadingState);
    const [user, setUser] = useRecoilState(UserState);
    const navigate = useNavigate();
    const location = useLocation();

    const isAdminRoute = location.pathname.startsWith('/admin');

    const setSetting = useSetRecoilState(siteSettingState);

    useEffect(() => {
        const fetchSettings = async () => {
            const res = await axios.get('/api/setting');
            console.log(res);
            if (res.status === 200) {
                const {
                    name,
                    title,
                    description,
                    privacyPolicy,
                    termsOfService,
                    keywords
                } = res.data;
                setSetting({
                    name,
                    title,
                    description,
                    privacyPolicy,
                    termsOfService,
                    keywords,
                });
            }
        };

        fetchSettings();
    }, []);

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

                if (
                    data.statusCode === 419 &&
                    location.pathname.startsWith('/admin')
                ) {
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
                            Cookies.set('refreshToken', '', { expires: -1 });
                            navigate('/admin/login');
                            return;
                        }
                    } else if (type === 'access') {
                        const originalRequest = config;
                        if (!isLoading) {
                            setIsLoading(true);
                            const response = await axios.post(
                                'api/auth/refresh'
                            );
                            const accessToken = response.data.accessToken;
                            const refreshToken = response.data.refreshToken;

                            Cookies.set('refreshToken', refreshToken, {
                                expires: 4 / 24,
                            });

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
    }, [
        location.pathname,
        navigate,
        setIsLoading,
        setUser,
        user.id,
        user.name,
        isLoading,
    ]);

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken');
        if (location.pathname.startsWith('/admin')) {
            if (!refreshToken) {
                navigate('/admin/login');
            }
        }
    }, [location.pathname, Cookies.get('refreshToken'), navigate, isLoading]);

    return (
        <>
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
                                        path='/board/event'
                                        element={<BoardEvent />}
                                    />
                                    <Route path='/store' element={<Store />} />
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
