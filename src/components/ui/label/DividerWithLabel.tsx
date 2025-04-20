import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface DividerWithLabelProps {
  label: string;
  isLineView?: boolean;
  color?: string;
  px?: string;
}

const DividerWithLabel: React.FC<DividerWithLabelProps> = ({
  label,
  isLineView = true,
  color = '[#58595B]',
  px = '1rem',
}) => {
  const deviceInfo = useDeviceInfo();
  return (
    <div
      className={`flex items-center w-full text-main font-normal ${
        deviceInfo.isMobile || deviceInfo.isSmallScreen
          ? 'px-8'
          : isLineView
          ? ''
          : 'justify-center'
      }`}
    >
      <div
        className={`h-px bg-${color} flex-grow border border-${color}`}
        style={isLineView ? undefined : { visibility: 'hidden' }}
      />

      <span
        className={`${
          deviceInfo.isMobile || deviceInfo.isSmallScreen
            ? 'text-slbSubTitleMo'
            : 'text-slbSubTitle'
        } bg-${color} text-white rounded-tr-[1rem] rounded-bl-[1rem] ml-px mr-px whitespace-nowrap`}
        style={{ padding: `4px ${px}` }}
      >
        {label}
      </span>
      <div
        className={`h-px bg-${color} flex-grow border border-${color}`}
        style={isLineView ? undefined : { visibility: 'hidden' }}
      />
    </div>
  );
};

export default DividerWithLabel;
