import React, { useEffect, useRef, useState } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import useDeviceInfo from "../../../hooks/useDeviceInfo";

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
  const playerRefs = useRef<(YouTubePlayer | null)[]>([]);
  const hasInteracted = useRef(false);

  const widthRatio = deviceInfo.isSmallScreen || deviceInfo.isMobile ? 1 : 65;
  const heightRatio = deviceInfo.isSmallScreen || deviceInfo.isMobile ? 1 : 192;

  // 비율 기반 높이 계산
  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      const height = (width * widthRatio) / heightRatio;
      setBannerHeight(height);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [widthRatio, heightRatio]);

  // 배너 교체 타이머
  useEffect(() => {
    if (items.length === 0) return;
    const durationSec = items[currentIndex]?.duration ?? 5;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, durationSec * 1000);
    return () => clearInterval(interval);
  }, [currentIndex, items]);

  // 유저 상호작용 시 소리 켜기
  useEffect(() => {
    const handleInteraction = () => {
      if (hasInteracted.current) return;
      hasInteracted.current = true;

      const currentPlayer = playerRefs.current[currentIndex];
      if (currentPlayer) {
        currentPlayer.unMute();
        currentPlayer.playVideo();
      }

      // 이후 이벤트 제거
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [currentIndex]);

  const extractYouTubeId = (url: string): string => {
    if (url.includes("embed")) {
      const match = url.match(/embed\/([^?&]+)/);
      return match ? match[1] : "";
    }
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : "";
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: `${bannerHeight}px` }}
    >
      {items.map((item, index) => {
        const videoId = extractYouTubeId(
          typeof item.media === "string" ? item.media : item.media.filePath
        );

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? "aspect-[1/1]"
                : ""
            } ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            {item.fileType === "video" ? (
              <YouTube
                videoId={videoId}
                opts={{
                  width: "100%",
                  height: `${bannerHeight}`,
                  playerVars: {
                    autoplay: 1,
                    mute: 1, // 처음엔 무조건 mute
                    loop: 1,
                    playlist: videoId,
                  },
                }}
                onReady={(event: { target: { mute: () => void; playVideo: () => void; }; }) => {
                  playerRefs.current[index] = event.target;
                  event.target.mute(); // 브라우저 autoplay 제한 대응
                  event.target.playVideo(); // 강제 재생
                }}
              />
            ) : (
              <img
                style={{ height: `${bannerHeight}px` }}
                className="w-full object-fill"
                src={
                  typeof item.media === "string"
                    ? item.media
                    : item.media.filePath
                }
                alt={`Banner ${index}`}
              />
            )}
          </div>
        );
      })}

      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? "w-1 h-1"
                : "w-3 h-3 border border-[#231F20]"
            } rounded-full cursor-pointer ${
              index === currentIndex ? "bg-Point" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RollingBanner;
