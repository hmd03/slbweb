import React, { useState, useRef, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const LazyRenderOnView: React.FC<Props> = ({ children, threshold = 0.1, rootMargin = '0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return <div className='w-full flex flex-col items-center' ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyRenderOnView;
