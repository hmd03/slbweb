// components/DividerWithLabel.tsx

import React from "react";

interface DividerWithLabelProps {
  label: string;
}

const DividerWithLabel: React.FC<DividerWithLabelProps> = ({ label }) => {
  return (
    <div className="flex items-center w-full text-main font-normal">
      <div className="h-[2px] bg-[#58595B] flex-grow" />
      <span className="bg-[#58595B] text-white text-title px-4 py-[4px] rounded-tr-[1rem] rounded-bl-[1rem] ml-px mr-px whitespace-nowrap">
        {label}
      </span>
      <div className="h-px bg-gray-400 flex-grow" />
    </div>
  );
};

export default DividerWithLabel;
