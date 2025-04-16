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
  const [headerHeight, setHeaderHeight] = useState<number>(80); // 기본값 fallback

  useEffect(() => {
    const shown = Cookies.get('popup_hidden');
    if (!shown) {
      setVisiblePopups(popups);
    }

    // 헤더 높이 계산
    const headerId = isMobile ? 'header_mo' : 'header';
    const headerElement = document.getElementById(headerId);
    if (headerElement) {
      const height = headerElement.getBoundingClientRect().height;
      setHeaderHeight(height);
    }
  }, [popups, isMobile]);

  const handleClose = () => {
    setVisiblePopups(prev => prev.slice(1)); // 맨 앞 팝업 제거
  };

  const handleHideForDay = () => {
    Cookies.set('popup_hidden', 'true', { expires: 1 }); // 24시간
    setVisiblePopups([]);
  };

  const topPopup = visiblePopups[0];

  return (
    <>
      {isMobile ? (
        topPopup && (
          <div
            className="fixed z-50 bg-white shadow-lg border rounded-md overflow-hidden"
            style={{
              top: headerHeight,
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
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white flex justify-between text-xs px-3 py-2 z-10">
              <button onClick={handleHideForDay}>24시간 동안 다시 열람하지 않습니다.</button>
              <button onClick={handleClose}>닫기</button>
            </div>
          </div>
        )
      ) : (
        visiblePopups.map((popup, idx) => (
          <div
            key={popup.title + idx}
            className="fixed z-50 bg-white shadow-lg border rounded-md overflow-hidden"
            style={{
              top: Math.max(popup.locationY, headerHeight),
              left: popup.locationX,
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
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white flex justify-between text-xs px-3 py-2 z-10">
              <button onClick={handleHideForDay}>24시간 동안 다시 열람하지 않습니다.</button>
              <button onClick={handleClose}>닫기</button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default PopupManager;
