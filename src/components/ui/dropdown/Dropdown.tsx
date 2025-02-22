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
  onSelectItemHandler?: (label: string) => void;
}

const Dropdown = ({
  placeholder,
  items,
  defaultValue,
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

  const handleItemClick = (value: string) => {
    setCurrentItem(value);
    setIsOpen(false);
    if (onSelectItemHandler) {
      onSelectItemHandler(value);
    }
  };

  return (
    <div className='dropdown-wrapper relative'>
      <button
        className='border-[1px] border-Primary px-4 py-3 flex justify-between w-[300px] rounded'
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
          className={`text-Primary ${isOpen && 'rotate-180'}`}
        />
      </button>
      {isOpen && (
        <div className='my-3 absolute w-fit max-h-[240px] overflow-y-scroll z-10 rounded shadow-[0_4px_8px_1px_rgba(0,0,0,0.1)]'>
          {items.map((item) => (
            <button
              key={item.value}
              className={`w-[300px] h-[48px] px-4 py-3 body1 flex justify-start ${
                currentItem === item.value
                  ? 'text-Primary'
                  : item.disable
                  ? 'text-Gray pointer-events-none'
                  : 'text-Secondary'
              } `}
              onClick={() => handleItemClick(item.value)}
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
