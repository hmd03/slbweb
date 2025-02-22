import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type Type = 'primary' | 'secondary' | 'admin';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Type;
  children: ReactNode;
}

const Button = ({ children, theme = 'primary', ...props }: Props) => {
  let filteredProps = {...props};

  const className = (() => {
    let baseClasses = 'body2 px-8 py-[14px] rounded ';

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
      }
    }

    if (props.className) {
      baseClasses += ` ${props.className}`;
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
