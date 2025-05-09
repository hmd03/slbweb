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

const AdminSideBar: React.FC<Props> = ({ items, visible = false }) => {
  const location = useLocation();
  const deviceInfo = useDeviceInfo();
  const [selectIndex, setSelectIndex] = React.useState(-1);

  React.useEffect(() => {
    const index = items.findIndex(item => location.pathname.includes(item.path));
    if (index !== -1) setSelectIndex(index);
  }, [location.pathname, items]);

  const handleChange = (index: number) => {
    setSelectIndex(index);
  };

  if (!visible) return null;

  const isMobile = deviceInfo.isSmallScreen || deviceInfo.isMobile;
  const wrapperClass = `${isMobile ? 'w-full' : 'min-w-[12rem]'} h-full bg-Black text-white flex flex-col`;

  return (
    <div className={wrapperClass}>
      {items.map((item, index) => {
        const isSelected = selectIndex === index;
        const isFirst = index === 0;

        const itemClass = `
          flex items-center text-center py-2 px-4 w-full font-bold text-main
          ${isFirst ? 'border-y border-y-White border-y-[2px]' : 'border-b border-b-White border-b-[2px]'}
          ${isMobile ? '' : 'h-[4rem]'}
          ${
            item.disabled
              ? 'text-gray-500 pointer-events-none'
              : isSelected
              ? 'bg-White text-Black'
              : 'bg-Black text-White hover:bg-White hover:text-Black'
          }
        `;

        return (
          <Link
            to={item.path}
            key={index}
            className={itemClass}
            onClick={() => handleChange(index)}
          >
            {item.label && <span className="m-auto">{item.label}</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSideBar;
