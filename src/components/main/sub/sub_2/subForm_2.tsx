import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import LazyRenderOnView from '../../../common/LazyRenderOnView';
import Sub2Section1 from './Sub2Section1';
import Sub2Section2 from './Sub2Section2';
import Sub2Section3 from './Sub2Section3';
import Sub2Section4 from './Sub2Section4';

const SubForm2: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  const { page } = useParams<{ page: string }>();

  const isDeviceReady =
    deviceInfo.isMobile !== undefined &&
    deviceInfo.isTouchDevice !== undefined &&
    deviceInfo.isSmallScreen !== undefined;

  console.log(deviceInfo);

  useEffect(() => {
    if (!isDeviceReady) return;
    if (!page || page === '1') return;
    requestAnimationFrame(() => {
      const target = document.getElementById(`section-${page}`);
      if (!target) return;

      const headerId =
        deviceInfo.isMobile || deviceInfo.isSmallScreen
          ? 'header_list_mo'
          : 'header';
      const headerEl = document.getElementById(headerId);
      const headerHeight = headerEl?.offsetHeight ?? 0;

      const absoluteY =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({ top: absoluteY });
    });
  }, [page, deviceInfo.isMobile]);

  
  return (
    <>
      <div>
        {[1, 2, 3, 4].map((sectionNum) => (
          <LazyRenderOnView key={sectionNum} forceRender={page === String(sectionNum)}>
            {(() => {
              switch (sectionNum) {
                case 1:
                  return <Sub2Section1 />;
                case 2:
                  return <Sub2Section2 />;
                case 3:
                  return <Sub2Section3 />;
                case 4:
                  return <Sub2Section4 />;
                default:
                  return null;
              }
            })()}
          </LazyRenderOnView>
        ))}
      </div>
    </>
  );
};

export default SubForm2;
