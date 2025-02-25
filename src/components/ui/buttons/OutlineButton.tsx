import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type Type = 'primary' | 'secondary' | 'admin';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Type;
  children: ReactNode;
}

const OutlineButton = ({ children, theme = 'primary' , ...props }: Props) => {
  let filteredProps = {...props};
  
  const className = (() => {
    let baseClasses = '';
    
    baseClasses += ' body2 px-8 py-[14px] border-[1px]  bg-White';

    if (props.disabled) {
      baseClasses += ' border-DeepGray text-Gray';
    } else {
      baseClasses += ' active:bg-opacity-60 cursor-pointer';
      if (theme === 'primary') {
        baseClasses += ' border-Primary text-Primary  active:bg-Primary ';
      } else if (theme === 'secondary'){
        baseClasses += ' text-Primary border border-Primary';
      } else if (theme === 'admin') {
        baseClasses += ' border-Black text-Black bg-White';
      }
    }

    if (props.className) {
      baseClasses += ` ${props.className}`;
    }

    return baseClasses;
  })();
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default OutlineButton;
