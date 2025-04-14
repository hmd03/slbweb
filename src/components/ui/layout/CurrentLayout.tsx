import React, { ReactNode, HTMLAttributes } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Header from '../headers/Header';
import MobileHeader from '../headers/MobileHeader';
import QuickBar from '../QuickBar/QuickBar';
import SeoHelmet from '../../common/SeoHelmet';
import InqueryFooter from '../footer/InqueryFooter';
import CompanyFooter from '../footer/CompanyFooter';

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
          <MobileHeader>
            <>
              {children}
              <QuickBar />
              <InqueryFooter />
            </>
          </MobileHeader>
        </>
      ) : (
        <Header>
          <>
            {children}
            <QuickBar />
            <InqueryFooter />
          </>
        </Header>
      )}

      <CompanyFooter />
    </div>
  );
};

export default CurrentLayout;
