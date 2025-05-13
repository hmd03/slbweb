import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface BannerItem {
  media: { filePath: string } | string;
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

  const widthRatio = deviceInfo.isSmallScreen || deviceInfo.isMobile ? 1 : 65;
  const heightRatio = deviceInfo.isSmallScreen || deviceInfo.isMobile ? 1 : 192;

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      const height = (width * widthRatio) / heightRatio;
      setBannerHeight(height);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [widthRatio, heightRatio]);

  useEffect(() => {
    if (items.length === 0) return;
    const durationSec = items[currentIndex]?.duration ?? 5;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, durationSec * 1000);
    return () => clearInterval(interval);
  }, [currentIndex, items]);

  const extractYouTubeId = (url: string): string => {
    if (url.includes('embed')) {
      const match = url.match(/embed\/([^?&]+)/);
      return match ? match[1] : '';
    }
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  };

  const normalizeLink = (link: string): string => {
    if (!/^https?:\/\//i.test(link)) {
      return `https://${link}`;
    }
    return link;
  };

  return (
    <div
      className='relative w-full overflow-hidden z-0'
      style={{ height: `${bannerHeight}px` }}
    >
      {items.map((item, index) => {
        const mediaUrl =
          typeof item.media === 'string' ? item.media : item.media.filePath;
        const fileTypeParts = item.fileType.split('/'); // 예: ["video", "youtube"] 또는 ["image", "jpg"]
        const isActive = index === currentIndex;

        const content =
          fileTypeParts[0] === 'video' && fileTypeParts[1] === 'youtube' ? (
            <iframe
              width='100%'
              height={bannerHeight}
              src={`https://www.youtube.com/embed/${extractYouTubeId(
                mediaUrl
              )}?autoplay=1&mute=1&loop=1&playlist=${extractYouTubeId(
                mediaUrl
              )}&controls=0&modestbranding=1&showinfo=0&rel=0`}
              title={`YouTube video ${index}`}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
            />
          ) : fileTypeParts[0] === 'video' ? (
            <video
              style={{ height: `${bannerHeight}px` }}
              className='w-full object-fill'
              autoPlay
              loop
              muted
            >
              <source src={mediaUrl} type={item.fileType} />
            </video>
          ) : fileTypeParts[0] === 'image' ? (
            <img
              className='w-full object-fill'
              style={{ height: `${bannerHeight}px` }}
              src={mediaUrl}
              alt={`Banner ${index}`}
            />
          ) : null;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'aspect-[1/1]'
                : ''
            } ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            {item.link ? (
              <a
                href={normalizeLink(item.link)}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full h-full'
              >
                {content}
              </a>
            ) : (
              content
            )}
          </div>
        );
      })}

      <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'w-1 h-1'
                : 'w-3 h-3 border border-[#231F20]'
            } rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-Point' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RollingBanner;
