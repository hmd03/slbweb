import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface HtmlModalProps {
  htmlContent: string;
  onClose: () => void;
}

const HtmlModal: React.FC<HtmlModalProps> = ({ htmlContent, onClose }) => {
  const deviceInfo = useDeviceInfo();
  
  return (
    <div className='fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-50 border border-[2px]'>
      <div
        className={`${
          deviceInfo.isMobile || deviceInfo.isSmallScreen
            ? 'max-w-[95vw] w-full min-h-[50vh] max-h-[60vh]'
            : 'max-w-[95vw] min-w-[50vw] min-h-[50vh] max-h-[60vh]'
        } bg-white rounded-lg shadow-lg p-6 overflow-auto flex flex-col justify-between mb-40`}
      >
        <div className='flex justify-end'>
          <button
            className='text-Black rounded'
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div
          className='prose w-full'
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
};

export default HtmlModal;
