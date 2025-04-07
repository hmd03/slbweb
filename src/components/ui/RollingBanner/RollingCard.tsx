import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useDeviceInfo from "../../../hooks/useDeviceInfo";

interface RollingCardProps {
  images: string[];
}

const RollingCard: React.FC<RollingCardProps> = ({ images }) => {
  const deviceInfo = useDeviceInfo();
  const visibleCount = deviceInfo.isSmallScreen ? 1 : 3;
  const [current, setCurrent] = useState(0);

  const maxIndex = images.length - 1;

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? images.length - visibleCount : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + visibleCount > maxIndex ? 0 : prev + 1));
  };

  const visibleImages = Array.from({ length: visibleCount }, (_, i) => {
    return images[(current + i) % images.length];
  });

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-visible">
      <div className="flex flex-wrap gap-4 transition-transform duration-500 w-full mx-auto justify-between">
        {visibleImages.map((src, index) => (
          <div
            key={index}
            className={`flex-1 box-border shadow-lg rounded-xl ${
              deviceInfo.isSmallScreen ? "w-full" : "min-w-[30%] max-w-[33%]"
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
        className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full z-10"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute -right-12 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full z-10"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default RollingCard;
