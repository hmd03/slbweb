import React from 'react';
import { MdPerson } from 'react-icons/md';

interface Props {
  src?: string;
  size?: number;
}

const ProfileImg = ({ src, size = 24 }: Props) => {
  const sizeStyles = { width: `${size}px`, height: `${size}px` };
  console.log(sizeStyles);
  return (
    <div
      className='rounded-full flex justify-center items-center overflow-hidden bg-LightGray'
      style={sizeStyles}
    >
      {src ? (
        <img src={src} className='w-full h-full object-cover' alt='프로필' />
      ) : (
        <MdPerson
          size={size}
          className='text-Gray bg-LightGray relative'
          style={{ top: `${size / 6}px` }}
        />
      )}
    </div>
  );
};

export default ProfileImg;
