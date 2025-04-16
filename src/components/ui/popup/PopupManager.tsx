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

const PopupManager: React.FC<PopupManagerProps> = ({
  popups,
  isMobile = false,
}) => {
  const [visiblePopups, setVisiblePopups] = useState<PopupInfo[]>([]);
  const [popupInitialized, setPopupInitialized] = useState(false);
  const [popupTopOffset, setPopupTopOffset] = useState<number>(0);

  useEffect(() => {
    if (isMobile) {
      const header = document.getElementById('header_mo');
      if (header) {
        const headerHeight = header.offsetHeight;
        setPopupTopOffset(headerHeight + 10); // 10px 아래로 여유
      }
    }
  }, [isMobile]);

  // 팝업 목록이 바뀔 때마다 각 팝업에 해당하는 쿠키가 있는지 확인하여 필터링합니다.
  useEffect(() => {
    const filteredPopups = popups.filter(
      (popup) => !Cookies.get(`popup_hidden_${popup.title}`)
    );
    setVisiblePopups(filteredPopups);
    setPopupInitialized(true);
  }, [popups]);

  // 특정 팝업만 닫기 (배열에서 제거)
  const handleClose = (popupToClose: PopupInfo) => {
    setVisiblePopups((prev) =>
      prev.filter((popup) => popup.title !== popupToClose.title)
    );
  };

  // 특정 팝업만 24시간 동안 숨김 처리 (쿠키 저장 후 배열에서 제거)
  const handleHideForDay = (popupToHide: PopupInfo) => {
    Cookies.set(`popup_hidden_${popupToHide.title}`, 'true', { expires: 1 });
    setVisiblePopups((prev) =>
      prev.filter((popup) => popup.title !== popupToHide.title)
    );
  };

  const topPopup = visiblePopups[0];

  if (!popupInitialized) return null;
  if (isMobile && !topPopup) return null;

  return (
    <>
      {isMobile ? (
        <div
          className='fixed left-0 right-0 z-[9998] overflow-hidden w-full'
          style={{ top: popupTopOffset }}
        >
          <div className='flex w-full justify-center'>
            <div className='bg-white shadow-xl border rounded-md overflow-hidden max-w-full'>
              <a href={topPopup.link} target='_blank' rel='noopener noreferrer'>
                <img
                  src={topPopup.image}
                  alt={topPopup.title}
                  className='w-[90vw] object-contain'
                  style={{
                    aspectRatio: `${topPopup.width} / ${topPopup.height}`,
                  }}
                />
              </a>
              <div className='bg-black bg-opacity-70 text-white flex justify-between text-xs px-3 py-2'>
                <button onClick={() => handleHideForDay(topPopup)}>
                  24시간 동안 다시 열람하지 않습니다.
                </button>
                <button onClick={() => handleClose(topPopup)}>닫기</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        visiblePopups.map((popup, idx) => (
          <div
            key={popup.title + idx}
            className='fixed z-[9999] bg-white shadow-lg border rounded-md overflow-hidden'
            style={{
              top: popup.locationY,
              left: popup.locationX,
              width: popup.width,
              height: popup.height,
            }}
          >
            <a href={popup.link} target='_blank' rel='noopener noreferrer'>
              <img
                src={popup.image}
                alt={popup.title}
                className='w-full object-contain'
                style={{ height: popup.height - 32 }}
              />
            </a>
            <div className='absolute bottom-0 left-0 right-0 h-[32px] bg-black bg-opacity-70 text-white flex justify-between text-xs px-3 py-2'>
              <button onClick={() => handleHideForDay(popup)}>
                24시간 동안 다시 열람하지 않습니다.
              </button>
              <button onClick={() => handleClose(popup)}>닫기</button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default PopupManager;
