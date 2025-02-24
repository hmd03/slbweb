import React from 'react';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="w-full h-full absolute flex justify-center items-center z-100 bg-white bg-opacity-80">
      <div className="border-8 border-gray-300 border-t-8 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loading;
