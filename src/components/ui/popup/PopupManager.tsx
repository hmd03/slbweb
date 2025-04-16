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
  const [headerHeight, setHeaderHeight] = useState<number>(80);
  const [popupInitialized, setPopupInitialized] = useState(false);

  // 처음 마운트 시에만 쿠키 체크
  useEffect(() => {
    const shown = Cookies.get('popup_hidden');
    if (shown) {
      setVisiblePopups([]);
      setPopupInitialized(true);
    }
  }, []);

  // 팝업 리스트가 바뀔 때마다 반영 (단, 쿠키가 없을 때만)
  useEffect(() => {
    const shown = Cookies.get('popup_hidden');
    if (!shown && popups.length > 0) {
      setVisiblePopups(popups);
      setPopupInitialized(true);
    }
  }, [popups]);

  // 헤더 높이 계산
  useEffect(() => {
    const headerId = isMobile ? 'header_mo' : 'header';
    const headerElement = document.getElementById(headerId);
    if (headerElement) {
      setHeaderHeight(headerElement.getBoundingClientRect().height);
    }
  }, [isMobile]);

  const handleClose = () => {
    setVisiblePopups(prev => prev.slice(1));
  };

  const handleHideForDay = () => {
    Cookies.set('popup_hidden', 'true', { expires: 1 });
    setVisiblePopups([]);
  };

  const topPopup = visiblePopups[0];

  if (!popupInitialized) return null; // 쿠키 확인/초기화 안됐으면 렌더 막음
  if (isMobile && !topPopup) return null; // 모바일인데 팝업 없으면 렌더 안함

  return (
    <>
      {isMobile ? (
        <div
          className="fixed z-[9998] bg-white shadow-lg border rounded-md overflow-hidden"
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
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white flex justify-between text-xs px-3 py-2 z-[9999]">
            <button onClick={handleHideForDay}>24시간 동안 다시 열람하지 않습니다.</button>
            <button onClick={handleClose}>닫기</button>
          </div>
        </div>
      ) : (
        visiblePopups.map((popup, idx) => (
          <div
            key={popup.title + idx}
            className="fixed z-[9999] bg-white shadow-lg border rounded-md overflow-hidden"
            style={{
              top: Math.max(popup.locationY, headerHeight),
              left: popup.locationX,
              width: popup.width,
              height: popup.height + 32,
            }}
          >
            <a href={popup.link} target="_blank" rel="noopener noreferrer">
              <img
                src={popup.image}
                alt={popup.title}
                className={`w-[${popup.width}px] h-[${popup.height}px] object-cover`}
              />
            </a>
            <div className="absolute h-[32px] bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white flex justify-between text-xs px-3 py-2 z-[9999]">
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
