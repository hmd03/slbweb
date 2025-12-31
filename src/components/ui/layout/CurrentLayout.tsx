import React, { ReactNode, HTMLAttributes, useRef } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import Header from '../headers/Header';
import MobileHeader from '../headers/MobileHeader';
import QuickBar from '../QuickBar/QuickBar';
import SeoHelmet from '../../common/SeoHelmet';
import InqueryFooter from '../footer/InqueryFooter';
import CompanyFooter from '../footer/CompanyFooter';
import { useLocation } from 'react-router-dom';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CurrentLayout = ({ children, ...props }: Props) => {
  const deviceInfo = useDeviceInfo();
  const location = useLocation();
  const shopInShopRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`w-full h-full flex flex-col items-center`} {...props}>
      <SeoHelmet />
      {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
        <>
          {location.pathname === '/' && (
            <div ref={shopInShopRef} className='flex flex-col w-full items-start justify-end Slb-Content px-4 h-fit h-[9rem] bg-LightGray text-Black py-[0.5rem]'>
              <p className=''>샵인샵이 필요할 때?</p>
              <p>
                  고기덮밥전문 <span className='font-semibold'>삼시육끼덮밥</span>
              </p>
              <a
                  href='https://saladpokeslb.wixsite.com/shopinshop'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-[4rem] bg-Point text-White mt-2 px-4'
              >
                  바로가기 →
              </a>
            </div>
          )}
          <MobileHeader shopInShopRef={shopInShopRef}>
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
