import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

type DropdownItem = {
  label: string;
  value: string;
  disable?: boolean;
};

interface Props {
  placeholder?: string;
  items: DropdownItem[];
  defaultValue?: string;
  width?: string;
  onSelectItemHandler?: (label: string) => void;
}

const Dropdown = ({
  placeholder,
  items,
  defaultValue,
  width = '200px',
  onSelectItemHandler,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState('');

  useEffect(() => {
    if (defaultValue) {
      setCurrentItem(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest('.dropdown-wrapper')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => document.removeEventListener('click', closeDropdown);
  }, [isOpen]);

  const handleItemClick = (item: { value: string; label: string }) => {
    setCurrentItem(item.label);
    setIsOpen(false);
    if (onSelectItemHandler) {
      onSelectItemHandler(item.value);
    }
  };

  return (
    <div className='dropdown-wrapper relative'>
      <button
        className={`border-[2px] px-2 py-1 border-Black flex justify-between ${width} rounded`}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span className='body1'>
          {currentItem !== '' ? currentItem : placeholder}
        </span>
        <MdKeyboardArrowDown
          size={24}
          className={`text-Black ${isOpen && 'rotate-180'}`}
        />
      </button>
      {isOpen && (
        <div className={`my-3 absolute ${width} max-h-[240px] overflow-y-scroll z-10 rounded shadow-[0_4px_8px_1px_rgba(0,0,0,0.1)]`}>
          {items.map((item) => (
            <button
              key={item.value}
              className={`w-full h-[48px] px-4 py-3 body1 flex justify-start bg-White ${
                currentItem === item.value
                  ? 'text-Black'
                  : item.disable
                  ? 'text-Gray pointer-events-none'
                  : 'text-Secondary'
              } `}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
