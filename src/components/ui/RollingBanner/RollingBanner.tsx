import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface BannerItem {
  media: string;
  fileType: string;
  duration: number; 
  link: string;
}

interface RollingBannerProps {
  items: BannerItem[];
}

const RollingBanner: React.FC<RollingBannerProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(0);
  const deviceInfo = useDeviceInfo();

  const widthRatio = deviceInfo.isSmallScreen ? 1 : 65;
  const heightRatio = deviceInfo.isSmallScreen ? 1 : 192;

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      const height = (width * widthRatio) / heightRatio;
      setBannerHeight(height);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [widthRatio, heightRatio]); 

  useEffect(() => {
    if (items.length > 0) {
      setCurrentIndex(0);
    }
  }, [items]);

  useEffect(() => {
    if (items.length === 0) return;

    const durationSec = items[currentIndex]?.duration ?? 5;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, durationSec * 1000);

    return () => clearInterval(interval);
  }, [currentIndex, items]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: `${bannerHeight}px` }}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          {item.fileType === 'video' ? (
            <video
              style={{ height: `${bannerHeight}px` }}
              className="w-full object-fill"
              autoPlay
              loop
              muted
            >
              <source src={item.media} type="video/mp4" />
            </video>
          ) : (
            <img
              style={{ height: `${bannerHeight}px` }}
              className="w-full object-fill"
              src={item.media}
              alt={`Banner ${index}`}
            />
          )}
          <a href={item.link} className="absolute inset-0" />
        </div>
      ))}
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full border border-[#231F20] cursor-pointer 
              ${index === currentIndex ? 'bg-Point' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RollingBanner;
