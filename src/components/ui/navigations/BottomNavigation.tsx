import React from 'react';
import { Link } from 'react-router-dom';

type NavItem = {
  label?: string;
  icon?: React.ReactElement;
  path: string;
  disabled?: boolean;
};

type Props = {
  items: NavItem[];
};

const BottomNavigation = ({ items }: Props) => {
  const [selectIndex, setSelectIndex] = React.useState(0);

  const handleChange = (index: number) => {
    setSelectIndex(index);
  };

  return (
    <div className='static w-full h-fit left-0 bottom-0 flex items-center'>
      {items.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`flex justify-center items-center flex-col py-1 w-full ${
            item.disabled
              ? 'text-Gray pointer-events-none'
              : selectIndex === index
              ? 'text-Primary'
              : 'text-Secondary'
          }`}
          onClick={() => handleChange(index)}
        >
          {item.icon && item.icon}
          {item.label && <span>{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
