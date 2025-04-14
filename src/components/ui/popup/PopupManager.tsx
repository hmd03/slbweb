// components/PopupManager.tsx
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import clsx from 'clsx';

type PopupInfo = {
  title: string;
  link: string;
  x: number;
  y: number;
  width: number;
  height: number;
  image: string;
};

type PopupManagerProps = {
  popups: PopupInfo[];
};

const PopupManager: React.FC<PopupManagerProps> = ({ popups }) => {
  const [visiblePopups, setVisiblePopups] = useState<PopupInfo[]>([]);

  useEffect(() => {
    const shown = Cookies.get('popup_hidden');
    if (!shown) {
      setVisiblePopups(popups);
    }
  }, [popups]);

  const handleClose = (title: string) => {
    setVisiblePopups((prev) => prev.filter((p) => p.title !== title));
  };

  const handleHideForHour = () => {
    Cookies.set('popup_hidden', 'true', { expires: 1 }); 
    setVisiblePopups([]);
  };

  const hasPopup = visiblePopups.length > 0;

  return (
    <>
      {hasPopup && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-40' />
      )}
      {visiblePopups.map((popup, idx) => (
        <div
          key={popup.title + idx}
          className='fixed z-50 bg-white shadow-lg border'
          style={{
            left: popup.x,
            top: popup.y,
            width: popup.width,
            height: popup.height,
          }}
        >
          <a href={popup.link} target='_blank' rel='noopener noreferrer'>
            <img
              src={popup.image}
              alt={popup.title}
              className='w-full h-full object-cover'
            />
          </a>
          <div className='flex justify-end gap-2 p-2 text-sm bg-white'>
            <button
              onClick={handleHideForHour}
              className='text-blue-600 hover:underline'
            >
              24시간 동안 다시 열람하지 않음
            </button>
            <button
              onClick={() => handleClose(popup.title)}
              className='text-gray-600 hover:underline'
            >
              닫기
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopupManager;
