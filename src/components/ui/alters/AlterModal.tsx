import React, { useState } from 'react';

interface ModalProps {
  message: string;
  isCancelVisible: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

const AlterModal: React.FC<ModalProps> = ({
  message,
  isCancelVisible = true,
  onConfirm,
  onCancel,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (isConfirmed) return;
    setIsConfirmed(true);
    onConfirm();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999] px-10'>
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <p className='mb-4 break-keep text-sm md:text-base'>{message}</p>
        <div className='flex justify-end'>
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 transition-opacity duration-200 ${
              isConfirmed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
            onClick={handleConfirm}
            disabled={isConfirmed}
          >
            확인
          </button>
          {isCancelVisible && (
            <button
              className='border border-black bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors'
              onClick={onCancel}
            >
              취소
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlterModal;
