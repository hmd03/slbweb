import React, { ReactNode, HTMLAttributes } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Header from '../headers/Header';
import Footer from '../footer/Footer';
import MobileHeader from '../headers/MobileHeader';
import QuickBar from '../QuickBar/QuickBar';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CurrentLayout = ({ children, ...props }: Props) => {
  const deviceInfo = useDeviceInfo();
  return (
    <div className={`w-full h-full flex flex-col items-center`} {...props}>
      {deviceInfo.isSmallScreen 
      ? <>
        <MobileHeader>
          {children}
        </MobileHeader>
        
        </>
      : <Header>
          {children}
      </Header>}
      <QuickBar />
      <Footer />
    </div>
  );
};

export default CurrentLayout;