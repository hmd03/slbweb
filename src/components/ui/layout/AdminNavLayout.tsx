import React, { ReactNode, HTMLAttributes, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../headers/AdminHeader';
import AdminSideBar from '../navigations/AdminSideBar';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AdminNavLayout = ({ children, ...props }: Props) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const location = useLocation();
  const isLoginRoute = location.pathname === '/admin/login';

  const deviceInfo = useDeviceInfo();

  const onMenuClick = () => {
    setSidebarVisible(!isSidebarVisible);
  }

  useEffect(() => {
    setSidebarVisible(!deviceInfo.isSmallScreen);
  }, [deviceInfo]);

  return (
    <div className="w-screen h-screen flex flex-col" {...props}>
      <HeaderWrapper onMenuClick={onMenuClick} />
      <div className="flex flex-1">
        {isSidebarVisible && <SideBarWrapper isSidebarVisible={isSidebarVisible} />}
        <div className={`flex-1 ${isSidebarVisible && !isLoginRoute ? 'ml-[12rem]' : 'ml-0'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

interface HeaderWrapperProps {
  onMenuClick: () => void;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ onMenuClick }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginRoute = location.pathname === '/admin/login';

  return (
    <>
      {isAdminRoute && !isLoginRoute && <AdminHeader onMenuClick={onMenuClick}/>}
    </>
  );
};

interface SideBarWrapperProps {
  isSidebarVisible: boolean;
}

const SideBarWrapper: React.FC<SideBarWrapperProps> = ({ isSidebarVisible }) => {
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
      {isAdminRoute && !isLoginRoute && <AdminSideBar items={sidebarItem} visible={isSidebarVisible} />}
    </>
  );
};

export default AdminNavLayout;
