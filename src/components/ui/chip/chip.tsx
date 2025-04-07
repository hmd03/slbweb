import React from "react";

interface ChipProps {
  text: string;
  type: string;
}

const Chip: React.FC<ChipProps> = ({ text, type = 'black' }) => {
  return (
    <div className={`inline-block text-main font-bold px-4 rounded-tr-[1rem] rounded-bl-[1rem] w-fit ${type === 'black' ? 'bg-Black text-White ' : 'bg-White text-Black'} `}>
      {text}
    </div>
  );
};

export default Chip;
