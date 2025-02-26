import React, { ReactNode, HTMLAttributes, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../headers/AdminHeader';
import AdminSideBar from '../navigations/AdminSideBar';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AdminNavLayout = ({ children, ...props }: Props) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const location = useLocation();
  const isLoginRoute = location.pathname === '/admin/login';

  return (
    <div className="w-screen h-screen flex flex-col" {...props}>
      <HeaderWrapper />
      <div className="flex flex-1">
        {isSidebarVisible && <SideBarWrapper />}
        <div className={`flex-1 ${isSidebarVisible && !isLoginRoute ? 'ml-[12rem]' : 'ml-0'}`}>
          {children}
        </div>
      </div>
    </div>
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
    { label: '배너 관리', path: '/admin/banner' },
    { label: '팝업 관리', path: '/admin/popup' },
    { label: '공지&뉴스', path: '/admin/board/notice' },
    { label: '톡톡 이벤트', path: '/admin/board/event' },
    { label: '고객문의', path: '/admin/board/cs' },
    { label: '협력제안', path: '/admin/board/partner' },
    { label: '매장관리', path: '/admin/store' },
    { label: '설정', path: '/admin/config' },
  ];

  return (
    <>
      {isAdminRoute && !isLoginRoute && <AdminSideBar items={sidebarItem} />}
    </>
  );
};

export default AdminNavLayout;
