import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserState } from '../../../store/atom';
import OutlineButton from '../buttons/OutlineButton';

interface Props {
  title?: string;
}

const AdminHeader = (props: Props) => {
  const navigate = useNavigate();
  const [_, setLogin] = useRecoilState(UserState);

  const handleLogoClick = () => {
    navigate('/admin/inquiry');
  };

  const handleLogout = () => {
    //setLogin(null);
    navigate('/admin/login');
  };

  const handleHomePageRedirect = () => {
    window.open('https://slbslb.com/', '_blank');
  };

  return (
    <div className='flex justify-between items-center w-full bg-Black fixed top-0 left-0 z-50 h-[4rem]'>
      <div 
        className='cursor-pointer w-[12rem]' 
        onClick={handleLogoClick}
      >
       <img alt='adminLogo' src={`${process.env.PUBLIC_URL}/adminLogo.png`} className='h-[3rem] m-auto'/>
      </div>
      <div className='m-[1rem]'>
        <OutlineButton theme='admin' onClick={handleHomePageRedirect}>
          홈페이지 바로가기
        </OutlineButton>
        <OutlineButton theme='admin' onClick={handleLogout}>
          로그아웃
        </OutlineButton>
      </div>
    </div>
  );
};

export default AdminHeader;
