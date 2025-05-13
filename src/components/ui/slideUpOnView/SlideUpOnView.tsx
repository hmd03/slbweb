import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SlideUpOnViewProps {
  children: React.ReactNode;
}

const SlideUpOnView: React.FC<SlideUpOnViewProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const idRef = useRef<string>(uuidv4());
  const [isVisible, setIsVisible] = useState(false); // 기본은 안보이게
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const top = rect.top;

      const triggerPoint = windowHeight * 0.9;
      const bottomTouchThreshold = Math.abs(top - windowHeight) < 5;

      // 화면 하단과 top이 맞닿으면 사라짐
      if (bottomTouchThreshold) {
        setIsVisible(false);
        setAnimate(false);
        return;
      }

      // top이 90% 이하로 진입하면 보임
      if (top <= triggerPoint) {
        setIsVisible(true);
        setAnimate(true);
      } else {
        // 다시 위로 스크롤되면 사라지게
        setIsVisible(false);
        setAnimate(false);
      }
    };

    onScroll(); // mount 시 체크
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      id={`slideup-${idRef.current}`}
      ref={ref}
      className={`
        z-0 flex flex-col items-center transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${animate ? 'animate-slideup' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default SlideUpOnView;
