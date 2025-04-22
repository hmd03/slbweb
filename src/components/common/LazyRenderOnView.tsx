import React, { useState, useRef, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  forceRender?: boolean;
  onVisible?: () => void;
}

const LazyRenderOnView: React.FC<Props> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  forceRender = false,
  onVisible,
}) => {
  const [isVisible, setIsVisible] = useState(forceRender);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (forceRender) {
      setIsVisible(true);
      onVisible?.();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          onVisible?.();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, forceRender]);

  return (
    <div className='w-full flex flex-col items-center' ref={ref}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyRenderOnView;
