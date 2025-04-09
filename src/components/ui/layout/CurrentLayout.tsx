import React, { ReactNode, HTMLAttributes } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Header from '../headers/Header';
import Footer from '../footer/Footer';
import MobileHeader from '../headers/MobileHeader';
import QuickBar from '../QuickBar/QuickBar';
import SeoHelmet from '../../common/SeoHelmet';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CurrentLayout = ({ children, ...props }: Props) => {
  const deviceInfo = useDeviceInfo();
  return (
    <div className={`w-full h-full flex flex-col items-center`} {...props}>
      <SeoHelmet />
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          <MobileHeader>{children}</MobileHeader>
        </>
      ) : (
        <Header>{children}</Header>
      )}
      <QuickBar />
      <Footer />
    </div>
  );
};

export default CurrentLayout;