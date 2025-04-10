import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useDeviceInfo from "../../../hooks/useDeviceInfo";

interface RollingCardProps {
  images: string[];
}

const RollingCard: React.FC<RollingCardProps> = ({ images }) => {
  const deviceInfo = useDeviceInfo();
  const visibleCount = deviceInfo.isSmallScreen || deviceInfo.isMobile ? 1 : 3;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const maxIndex = images.length - 1;

  const prevSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev <= 0 ? images.length - visibleCount : prev - 1));
  };

  const nextSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev + visibleCount > maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left");
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, visibleCount, images.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !(deviceInfo.isSmallScreen || deviceInfo.isMobile))
      return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      touchStartX.current = null;
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [deviceInfo, current]);

  const visibleImages = Array.from({ length: visibleCount }, (_, i) => {
    return images[(current + i) % images.length];
  });

  const slideClass =
    direction === "left" ? "animate-slide-left" : "animate-slide-right";

  return (
    <div
      ref={containerRef}
      className={`${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
          ? "p-10"
          : " w-full max-w-[1200px]"
      } relative mx-auto overflow-visible`}
    >
      <div
        className={`flex gap-4 w-full mx-auto justify-between transition-transform duration-500 ${slideClass}`}
      >
        {visibleImages.map((src, index) => (
          <div
            key={index}
            className={`flex-1 box-border shadow-lg rounded-xl ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? "w-full"
                : "min-w-[30%] max-w-[33%]"
            }`}
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? "-left-4 "
            : "-left-12 "
        } absolute top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full z-10`}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? "-right-4 "
            : "-right-12 "
        } absolute top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full z-10`}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default RollingCard;
