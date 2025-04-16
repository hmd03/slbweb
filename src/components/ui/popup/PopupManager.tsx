import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type PopupInfo = {
  title: string;
  link: string;
  locationX: number;
  locationY: number;
  width: number;
  height: number;
  image: string;
};

type PopupManagerProps = {
  popups: PopupInfo[];
  isMobile?: boolean;
};

const PopupManager: React.FC<PopupManagerProps> = ({ popups, isMobile = false }) => {
  const [visiblePopups, setVisiblePopups] = useState<PopupInfo[]>([]);

  useEffect(() => {
    const shown = Cookies.get('popup_hidden');
    if (!shown) {
      setVisiblePopups(popups);
    }
  }, [popups]);

  const handleClose = () => {
    setVisiblePopups(prev => prev.slice(1)); // 맨 앞꺼 하나 제거
  };

  const handleHideForDay = () => {
    Cookies.set('popup_hidden', 'true', { expires: 1 });
    setVisiblePopups([]);
  };

  const hasPopup = visiblePopups.length > 0;
  const topPopup = visiblePopups[0];

  return (
    <>
      {hasPopup && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />}

      {isMobile ? (
        topPopup && (
          <div
            className="fixed z-50 bg-white shadow-lg border overflow-hidden"
            style={{
              top: 50,
              left: '50%',
              transform: 'translateX(-50%)',
              width: topPopup.width,
              height: topPopup.height,
            }}
          >
            <a href={topPopup.link} target="_blank" rel="noopener noreferrer">
              <img
                src={topPopup.image}
                alt={topPopup.title}
                className="w-full h-full object-cover"
              />
            </a>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white flex justify-between text-xs px-3 py-2">
              <button onClick={handleHideForDay}>24시간 동안 다시 열람하지 않습니다.</button>
              <button onClick={handleClose}>닫기</button>
            </div>
          </div>
        )
      ) : (
        // PC는 위치 지정된 여러 개 띄우기
        visiblePopups.map((popup, idx) => (
          <div
            key={popup.title + idx}
            className="fixed z-50 bg-white shadow-lg border overflow-hidden"
            style={{
              left: popup.locationX,
              top: popup.locationY,
              width: popup.width,
              height: popup.height,
            }}
          >
            <a href={popup.link} target="_blank" rel="noopener noreferrer">
              <img
                src={popup.image}
                alt={popup.title}
                className="w-full h-full object-cover"
              />
            </a>
            <div className="flex justify-between text-xs p-2 bg-black text-white bg-opacity-80">
              <button onClick={handleHideForDay}>24시간 동안 다시 열람하지 않습니다.</button>
              <button onClick={() => handleClose()}>닫기</button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default PopupManager;
