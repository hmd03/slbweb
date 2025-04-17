import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

const SubForm1: React.FC = () => {
    const deviceInfo = useDeviceInfo();
    const { page } = useParams<{ page: string }>();

    useEffect(() => {
        if (!page || page === '1') return;
      
        const target = document.getElementById(`section-${page}`);
        if (!target) return;
      
        const headerId = (deviceInfo.isMobile || deviceInfo.isSmallScreen) ? 'header_mo' : 'header';
        const headerEl = document.getElementById(headerId);
        const headerHeight = headerEl?.offsetHeight ?? 0;
      
        const absoluteY =
          target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
        window.scrollTo({ top: absoluteY });
      }, [page, deviceInfo.isMobile]);

    return (
        <>
            <div>
                <section id="section-1" >

                </section>
                <section id="section-2" >
                    
                </section>
                <section id="section-3" >
                    
                </section>
                <section id="section-4" >
                    
                </section>
            </div>
        </>
    );
};

export default SubForm1;
