import React, { useEffect, useRef } from 'react';
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
  const [visibleSections, setVisibleSections] = React.useState<number[]>([]);

  const iframeLoadedRef = useRef(false);

  const handleIframeLoad = () => {
    if (iframeLoadedRef.current) return;
    iframeLoadedRef.current = true;
    if (page && page !== '1') {
      scrollToSection(`section-${page}`);
    }
  };

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerId =
      deviceInfo.isMobile || deviceInfo.isSmallScreen
        ? 'header_mo'
        : 'header_list';
    const headerEl = document.getElementById(headerId);
    const headerHeight = headerEl?.offsetHeight ?? 0;

    const absoluteY =
      target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({ top: absoluteY});
  };

  useEffect(() => {
    if (!page || page === '1') return;
    const pageNum = parseInt(page);
    if (visibleSections.includes(pageNum)) {
      scrollToSection(`section-${page}`);
    }
  }, [page, visibleSections]);

  return (
    <div>
      {[1, 2, 3, 4].map((sectionNum) => (
        <LazyRenderOnView
          key={sectionNum}
          forceRender={page === String(sectionNum)}
          onVisible={() => {
            setVisibleSections((prev) =>
              prev.includes(sectionNum) ? prev : [...prev, sectionNum]
            );
          }}
        >
          <div
            className='w-full flex flex-col items-center'
            id={`section-${sectionNum}`}
          >
            {(() => {
              switch (sectionNum) {
                case 1:
                  return <Sub2Section1 onIframeLoad={handleIframeLoad} />;
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
          </div>
        </LazyRenderOnView>
      ))}
    </div>
  );
};


export default SubForm2;
