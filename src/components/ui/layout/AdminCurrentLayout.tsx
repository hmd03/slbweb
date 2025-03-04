import React, { ReactNode, HTMLAttributes } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
}

const AdminCurrentLayout = ({ children, title, ...props }: Props) => {
  const deviceInfo = useDeviceInfo();
  return (
    <div className={`w-full h-full flex flex-col items-center ${deviceInfo.isSmallScreen ? '' : 'px-10'}`} {...props}>
      <div className={`w-full text-title ${deviceInfo.isSmallScreen ? 'pl-4 py-2 border border-black' : 'py-5'}`}>{title}</div>
        <div className={`w-full h-full overflow-auto ${deviceInfo.isSmallScreen ? 'pb-[4rem]' : ''}`}>
          {children}
        </div>
    </div>
  );
};

export default AdminCurrentLayout;
