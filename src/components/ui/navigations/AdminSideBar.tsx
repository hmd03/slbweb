import React from 'react';
import { Link } from 'react-router-dom';

type NavItem = {
  label?: string;
  path: string;
  disabled?: boolean;
};

type Props = {
  items: NavItem[];
};

const Sidebar = ({ items }: Props) => {
  const [selectIndex, setSelectIndex] = React.useState(0);

  const handleChange = (index: number) => {
    setSelectIndex(index);
  };

  return (
    <div className='fixed w-[12rem] h-full bg-Black text-white flex flex-col top-0 left-0 z-50 mt-[4rem]'>
      {items.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`flex items-center py-2 px-4 w-[100%] h-[4rem] text-center border-b border-b-White text-main font-bold ${
            item.disabled
              ? 'text-gray-500 pointer-events-none'
              : selectIndex === index
              ? 'bg-White text-Black'
              : 'bg-Black text-White hover:bg-White hover:text-Black'
          }`}
          onClick={() => handleChange(index)}
        >
          {item.label && <span className='m-auto'>{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
