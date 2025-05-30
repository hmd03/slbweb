import React, { useEffect, useRef, useState } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

const QuickBar: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  const [bottomOffset, setBottomOffset] = useState(8);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector('#footer');
    if (!footerRef.current) return;

    const handleScroll = () => {
      const footerRect = footerRef.current!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const footerTop = footerRect.top;

      const overlap = Math.max(0, viewportHeight - footerTop);
      setBottomOffset(overlap + 8);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed right-4 z-50 transition-all duration-300 ease-in-out flex flex-col items-center `}
      style={{ bottom: `${bottomOffset}px` }}
    >
      {!(deviceInfo.isSmallScreen || deviceInfo.isMobile) && (
        <div className='overflow-hidden flex flex-col items-center shadow-md border-[2px] border-black rounded-[40px]'>
          <div className='bg-white px-4 pt-4 pb-2 text-center'>
            <p className='text-[1rem] font-bold leading-tight'>
              온라인
              <br />
              창업문의
            </p>
            <a
              href='/inquiry'
              className='inline-block bg-black text-white rounded-full mt-2 px-4 py-1 text-sm font-semibold'
            >
              바로가기
            </a>
          </div>

          <div className='w-full h-full bg-White'>
            <div className='bg-black text-white w-full text-center py-4 rounded-t-[40px]'>
              <p className='text-base font-semibold mb-1'>빠른상담</p>
              <div className='Slb-Content leading-none'>
                1533
                <br />
                0516
              </div>
            </div>
          </div>
        </div>
      )}
      <div></div>
      <button
        onClick={scrollToTop}
        aria-label="scrollToTop"
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'w-[2.5rem] h-[2.5rem]'
            : 'w-[4rem] h-[4rem]'
        } mt-4 mb-1 border-[2px] border-black rounded-full flex items-center justify-center bg-White`}
      >
        <svg
          className='w-6 h-6 text-black'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 4l-6 6h4v6h4v-6h4z' />
        </svg>
      </button>
    </div>
  );
};

export default QuickBar;
