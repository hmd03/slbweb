import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type Type = 'primary' | 'secondary' | 'admin' | 'error';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Type;
  children: ReactNode;
}

const Button = ({ children, theme = 'primary', ...props }: Props) => {
  let filteredProps = {...props};

  const className = (() => {
    let baseClasses = '';
    baseClasses += 'body2';

    if (props.disabled) {
      baseClasses += ' bg-DeepGray text-White ';
    } else {
      baseClasses += ' active:opacity-60 cursor-pointer';
      if (theme === 'primary') {
        baseClasses += ' text-White bg-Primary';
      } else if (theme === 'secondary'){
        baseClasses += ' text-Primary border border-Primary';
      } else if (theme === 'admin') {
        baseClasses += ' text-White bg-Black';
      } else if (theme === 'error') {
        baseClasses += ' text-White bg-Error';
      }
    }

    if (props.className) {
      baseClasses += ` ${props.className}`;
    } else {
      baseClasses +=  ' px-8 py-[14px] rounded';
    }

    filteredProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => key !== 'className')
    );

    return baseClasses;
  })();
  return (
    <button className={className} {...filteredProps}>
      {children}
    </button>
  );
};

export default Button;
