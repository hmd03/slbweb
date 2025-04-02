import React, { ReactNode, HTMLAttributes } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Header from '../headers/Header';
import Footer from '../footer/Footer';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CurrentLayout = ({ children, ...props }: Props) => {
  const deviceInfo = useDeviceInfo();
  return (
    <div className={`w-full h-full flex flex-col items-center`} {...props}>
      <Header>
          {children}
          <div className='h-[4000px]'></div>
      </Header>
      <Footer />
    </div>
  );
};

export default CurrentLayout;