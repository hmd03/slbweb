import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const RightArrowButton = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`flex justify-between py-4 w-full h-fit ${props.className}`}
    >
      {children}
      <MdArrowForwardIos size={24} />
    </button>
  );
};

export default RightArrowButton;
