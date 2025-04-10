import React from "react";
import useDeviceInfo from "../../../hooks/useDeviceInfo";

interface ChipProps {
  text: string;
  type: string;
}

const Chip: React.FC<ChipProps> = ({ text, type = 'black' }) => {
  const deviceInfo = useDeviceInfo();
  return (
    <div
      className={`${
        deviceInfo.isMobile || deviceInfo.isSmallScreen
          ? "text-detail rounded-tr-[0.75rem] rounded-bl-[0.75rem] px-3"
          : "text-main rounded-tr-[1rem] rounded-bl-[1rem] px-4 "
      } inline-block font-black w-fit ${
        type === "black" ? "bg-Black text-White " : "bg-White text-Black"
      } `}
    >
      {text}
    </div>
  );
};

export default Chip;
