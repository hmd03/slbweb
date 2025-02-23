import React, { Suspense, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from './components/ui/headers/AdminHeader';
import { loginState } from './store/userAtom';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const Login = React.lazy(() => import('./pages/Login'));
const AdminMaster = React.lazy(() => import('./pages/AdminMaster'));

const AppInner: React.FC = () => {
  const [login, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    console.log(storedUser);
    if (storedUser) {
      setLogin(true);
    }
  }, [setLogin]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>...loading</div>}>
        <HeaderWrapper />
        <Routes>
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/master' element={<ProtectedRoute component={AdminMaster} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
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

interface ProtectedRouteProps {
  component: React.FC;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const [login] = useRecoilState(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate('/admin/login');
    }
  }, [login, navigate]);

  return login ? <Component /> : null;
};

export default AppInner;
