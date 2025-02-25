import React, { ReactNode, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
}

const AdminCurrentLayout = ({ children, title, ...props }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center px-10" {...props}>
      <div className='w-full py-5 text-title'>{title}</div>
      {children}
    </div>
  );
};

export default AdminCurrentLayout;
