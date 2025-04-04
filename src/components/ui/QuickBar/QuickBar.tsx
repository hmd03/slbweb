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
        className={`fixed right-4 z-50 transition-all duration-300 ease-in-out flex flex-col items-center`}
        style={{ bottom: `${bottomOffset}px` }}
        >
        {!deviceInfo.isSmallScreen && (
            <div className="overflow-hidden flex flex-col items-center shadow-md border border-black rounded-[40px]">
            <div className="bg-white px-6 pt-4 pb-2 text-center">
                <p className="text-[1rem] font-bold leading-tight">
                온라인<br />창업문의
                </p>
                <a
                href="/inquiry"
                className="inline-block bg-black text-white rounded-full mt-2 px-6 py-1 text-sm font-semibold"
                >
                바로가기
                </a>
            </div>

            <div className="bg-black text-white w-full text-center px-6 py-4 rounded-t-[40px]">
                <p className="text-base font-semibold mb-1">빠른상담</p>
                <div className="text-[2rem] font-bold leading-none">
                1533<br />0516
                </div>
            </div>
            </div>
        )}

        <button
            onClick={scrollToTop}
            className="w-[4.5rem] h-[4.5rem] mt-4 mb-1 border border-black rounded-full flex items-center justify-center"
        >
            <svg
            className="w-6 h-6 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path d="M12 4l-6 6h4v6h4v-6h4z" />
            </svg>
        </button>
        </div>

  );
};

export default QuickBar;
