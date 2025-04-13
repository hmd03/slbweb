import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface DividerWithLabelProps {
  label: string;
}

const DividerWithLabel: React.FC<DividerWithLabelProps> = ({ label }) => {
  const deviceInfo = useDeviceInfo();
  return (
    <div
      className={`flex items-center w-full text-main font-normal ${
        deviceInfo.isMobile || deviceInfo.isSmallScreen ? 'px-8' : ''
      }`}
    >
      <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
      <span
        className={`${
          deviceInfo.isMobile || deviceInfo.isSmallScreen
            ? 'text-slbSubTitleMo'
            : 'text-slbSubTitle'
        } bg-[#58595B] text-white  px-4 py-[4px] rounded-tr-[1rem] rounded-bl-[1rem] ml-px mr-px whitespace-nowrap`}
      >
        {label}
      </span>
      <div className='h-px bg-[#58595B] flex-grow border border-[#58595B]' />
    </div>
  );
};

export default DividerWithLabel;
