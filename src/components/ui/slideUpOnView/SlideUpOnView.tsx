import React, { useEffect, useRef, useState } from 'react';

interface SlideUpOnViewProps {
  children: React.ReactNode;
}

const SlideUpOnView: React.FC<SlideUpOnViewProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isTouchingBottom =
        rect.top <= windowHeight && rect.top >= windowHeight - 10;

      if (isTouchingBottom) {
        setAnimate(true);

        setTimeout(() => {
          setAnimate(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-700 ease-out ${
        animate ? 'animate-slideup' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default SlideUpOnView;
