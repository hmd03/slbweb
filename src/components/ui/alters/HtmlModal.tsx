import React from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

interface HtmlModalProps {
    htmlContent: string;
    onClose: () => void;
}

const HtmlModal: React.FC<HtmlModalProps> = ({ htmlContent, onClose }) => {
    const deviceInfo = useDeviceInfo();

    return (
        <div className='fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-50'>
            <div
                className={`
          flex flex-col bg-white rounded-lg shadow-lg
          ${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                  ? 'max-w-[95vw] w-full max-h-[60vh]'
                  : 'min-w-[50vw] max-w-[95vw] max-h-[60vh]'
          }
        `}
            >
                {/* ─── 헤더 (고정) ─── */}
                <div className='sticky top-0 bg-white z-10 p-4 flex justify-end border-b'>
                    <button onClick={onClose} className='text-black rounded'>
                        X
                    </button>
                </div>

                {/* ─── 콘텐츠 (스크롤) ─── */}
                <div className='overflow-auto p-6 flex-1 prose'>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
            </div>
        </div>
    );
};

export default HtmlModal;
