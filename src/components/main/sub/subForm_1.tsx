import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

const SubForm1: React.FC = () => {
    const deviceInfo = useDeviceInfo();
    const { page } = useParams<{ page: string }>();

    console.log(page);

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
            <div>
                <section id="section-1"
                className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo'
                    : 'Slb-Title'
                } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}>
                    <div className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ''
                    : 'mb-5 mt-40'
                }`}>
                        동상이몽 창업?
                    </div>
                    <div>
                        요즘 인기 있다고 무작정 창업?
                    </div>
                    <div
                    className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile ? ' Slb-Point-mo' : ' Slb-Point'
                    } flex items-end leading-none text-[#FF331F]`}
                    >
                        인기는 반짝하다 사라질 수 있다!
                    </div>

                    <div
                    className={`w-[1px]  border border-black  ${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'h-10 my-4'
                        : 'h-40 my-10'
                    }`}
                    />
                    <div className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'Slb-Content-mo' : 'Slb-Content gap-2 mb-40'
                    } flex leading-none flex-col items-center`}>
                        <p>예비 창업자들의 오해</p>
                        <p>요즘 뜨고 있으니까, 너도 나도 하는 것 같으니까? 창업!</p>
                        <p>잠깐, 멈추세요! 무작정 창업 하지 말고 이것만 알고 시작하세요</p>
                        <p>창업 아이템 선정 시 핵심 기준 SLB가 알려드립니다</p>
                    </div>
                </section>
                <section id="section-2" >
                    
                </section>
                <section id="section-3"
                className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'Slb-Title-mo'
                    : 'Slb-Title'
                } bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit`}>
                    <div className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? ''
                    : 'mb-5 mt-40'
                     }`}>
                        동상이몽 창업?
                    </div>
                    <div>
                        요즘 인기 있다고 무작정 창업?
                    </div>
                    <div
                    className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile ? ' Slb-Point-mo' : ' Slb-Point'
                    } flex items-end leading-none text-[#FF331F]`}
                    >
                        인기는 반짝하다 사라질 수 있다!
                    </div>

                    <div
                    className={`w-[1px]  border border-black  ${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile
                        ? 'h-10 my-4'
                        : 'h-40 my-10'
                    }`}
                    />
                    <div className={`${
                        deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'Slb-Content-mo' : 'Slb-Content gap-2 mb-40'
                    } flex leading-none flex-col items-center`}>
                        <p>예비 창업자들의 오해</p>
                        <p>요즘 뜨고 있으니까, 너도 나도 하는 것 같으니까? 창업!</p>
                        <p>잠깐, 멈추세요! 무작정 창업 하지 말고 이것만 알고 시작하세요</p>
                        <p>창업 아이템 선정 시 핵심 기준 SLB가 알려드립니다</p>
                    </div>
                </section>
                <section id="section-4" >
                    
                </section>
            </div>
    );
};

export default SubForm1;
