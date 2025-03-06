import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

type NavItem = {
  label?: string;
  path: string;
  disabled?: boolean;
};

type Props = {
  items: NavItem[];
  visible: boolean;
};

const AdminSideBar = ({ items, visible = true}: Props) => {
  const location = useLocation();
  const [selectIndex, setSelectIndex] = React.useState(0);

  const deviceInfo = useDeviceInfo();

  // 현재 경로에 포함된 항목의 인덱스를 찾는 함수
  const findSelectedIndex = () => {
    return items.findIndex(item => location.pathname.includes(item.path));
  };

  React.useEffect(() => {
    const index = findSelectedIndex();
    if (index !== -1) {
      setSelectIndex(index);
    }
  }, [location.pathname, items]);

  const handleChange = (index: number) => {
    setSelectIndex(index);
  };

  return (
    <div 
    className={`${visible ? `${deviceInfo.isSmallScreen ? 'w-full' : 'min-w-[12rem]'}  h-full bg-Black text-white flex flex-col` : 'hidden'}`}>
      {items.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`flex items-center text-center py-2 px-4 w-[100%] text-main font-bold
            ${index === 0 ? 'border-y border-y-White border-y-[2px]' : 'border-b border-b-White border-b-[2px]'}
            ${deviceInfo.isSmallScreen ? '' : ' h-[4rem]'}
            ${
            item.disabled
              ? 'text-gray-500 pointer-events-none'
              : selectIndex === index
              ? 'bg-White text-Black'
              : 'bg-Black text-White hover:bg-White hover:text-Black'
          }
          
          `}
          onClick={() => handleChange(index)}
        >
          {item.label && <span className='m-auto'>{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default AdminSideBar;
