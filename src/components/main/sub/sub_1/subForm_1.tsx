import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import LazyRenderOnView from '../../../common/LazyRenderOnView';
import Sub1Section1 from './Sub1Section1';
import Sub1Section2 from './Sub1Section2';
import Sub1Section3 from './Sub1Section3';
import Sub1Section4 from './Sub1Section4';

const SubForm1: React.FC = () => {
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
          : 'header_list';
      const headerEl = document.getElementById(headerId);
      const headerHeight = headerEl?.offsetHeight ?? 0;

      const absoluteY =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      console.log(absoluteY);
      console.log(target);
      console.log(headerEl);

      window.scrollTo({ top: absoluteY });
    });
  }, [page, deviceInfo.isMobile]);

  return (
    <div>
  {[1, 2, 3, 4].map((sectionNum) => (
    <LazyRenderOnView key={sectionNum} forceRender={page === String(sectionNum)}>
      {(() => {
        switch (sectionNum) {
          case 1:
            return <Sub1Section1 />;
          case 2:
            return <Sub1Section2 />;
          case 3:
            return <Sub1Section3 />;
          case 4:
            return <Sub1Section4 />;
          default:
            return null;
        }
      })()}
    </LazyRenderOnView>
  ))}
</div>

  );
};

export default SubForm1;
