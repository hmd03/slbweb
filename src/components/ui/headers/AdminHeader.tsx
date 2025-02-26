import React from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserState } from '../../../store/atom';
import OutlineButton from '../buttons/OutlineButton';
import Cookies from 'js-cookie';

interface Props {
  title?: string;
  onMenuClick?: () => void;
}

const AdminHeader = (props: Props) => {
  const { onMenuClick } = props;
  const navigate = useNavigate();
  const [_, setLogin] = useRecoilState(UserState);

  const handleLogoClick = () => {
    navigate('/admin/inquiry');
  };

  const handleLogout = () => {
    setLogin({
      id: '',
      accessToken: '',
    });
    Cookies.remove('refreshToken', { path: '/' }); 
    navigate('/admin/login');
  };

  const handleHomePageRedirect = () => {
    window.open('https://slbslb.com/', '_blank');
  };

  return (
    <div className='flex justify-between items-center w-full bg-Black h-[4rem]'>
      <div className='h-full flex flex-row justify-center items-center'>
        <div 
          className='cursor-pointer w-[12rem] h-full flex justify-center items-center' 
          onClick={handleLogoClick}
        >
          <img alt='adminLogo' src={`${process.env.PUBLIC_URL}/adminLogo.png`} className='h-[3rem] m-auto'/>
        </div>
        <MdOutlineMenu 
          color='white'
          className='cursor-pointer w-[2rem] h-[2rem]' 
          onClick={onMenuClick}
        />
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
