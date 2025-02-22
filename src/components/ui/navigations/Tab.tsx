import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  label: string;
  link?: string;
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
}

const Tab = ({ label, link = '#', isActive, disabled, className }: Props) => {
  const classes = (() => {
    let baseClasses =
      'py-2 px-4 normal shadow-[0px_1px_0px_0px] w-full flex justify-center';

    if (disabled) {
      baseClasses += ' shadow-Gray text-Gray';
    } else {
      baseClasses += ' cursor-pointer';
      if (isActive) {
        baseClasses += ' shadow-Primary text-Primary';
      } else {
        baseClasses += ' shadow-Secondary text-Secondary';
      }
    }

    if (className) {
      baseClasses += ` ${className}`;
    }

    return baseClasses;
  })();

  return (
    <Link to={link}>
      <div className={classes}>{label}</div>
    </Link>
  );
};

export default Tab;
