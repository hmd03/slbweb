import React from 'react';

interface ModalProps {
  message: string;
  isCancelVisible: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

const AlterModal: React.FC<ModalProps> = ({ message, isCancelVisible = true, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={onConfirm}
          >
            확인
          </button>
          {isCancelVisible && (
            <button
              className="border border-Black bg-White-300 text-black px-4 py-2 rounded"
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
