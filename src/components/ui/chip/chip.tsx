import React from "react";

interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="inline-block bg-Black text-White text-sub font-bold px-4 py-1 rounded-tl-xl rounded-br-xl w-fit">
      {text}
    </div>
  );
};

export default Chip;
