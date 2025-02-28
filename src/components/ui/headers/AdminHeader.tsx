import React from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserState } from '../../../store/atom';
import OutlineButton from '../buttons/OutlineButton';
import axios from 'axios';
import { IoHome, IoPowerSharp } from "react-icons/io5";

interface Props {
  title?: string;
  onMenuClick?: () => void;
}

const AdminHeader = (props: Props) => {
  const { onMenuClick } = props;
  const navigate = useNavigate();
  const [_, setUser] = useRecoilState(UserState);

  const handleLogoClick = () => {
    navigate('/admin/inquiry');
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'api/auth/logout',
      );

      console.log(response);
      setUser({
        id: '',
        name: '',
        isSupervisor: false,
        accessToken: '',
      });

    } catch (error) {
      console.log("error: " + error);
    }
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
          className='cursor-pointer w-[2rem] h-[2rem] select-none' 
          onClick={onMenuClick}
        />
      </div>
      <div className='m-[1rem] flex'>
        <OutlineButton theme='admin' 
          className='px-5  w-[11.375rem] h-[3rem] flex items-center' 
          onClick={handleHomePageRedirect}>
              홈페이지 바로가기
              <IoHome color='black' className='ml-1 w-fit'/>
        </OutlineButton>
        <OutlineButton theme='admin' 
          className='px-5 w-[7.5rem] h-[3rem] flex items-center' 
          onClick={handleLogout}>
              <IoPowerSharp color='black' className='mr-1 w-fit'/>
              로그아웃
        </OutlineButton>
      </div>
    </div>
  );
};

export default AdminHeader;
