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
  cookiesId: string;
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
        setPopupTopOffset(headerHeight + 10);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    const filteredPopups = popups.filter(
      (popup) => !Cookies.get(`popup_hidden_${popup.cookiesId}`)
    );
    setVisiblePopups(filteredPopups);
    setPopupInitialized(true);
  }, [popups]);

  const handleClose = (popupToClose: PopupInfo) => {
    setVisiblePopups((prev) =>
      prev.filter((popup) => popup.cookiesId !== popupToClose.cookiesId)
    );
  };

  const handleHideForDay = (popupToHide: PopupInfo) => {
    Cookies.set(`popup_hidden_${popupToHide.cookiesId}`, 'true', {
      expires: 1,
    });
    setVisiblePopups((prev) =>
      prev.filter((popup) => popup.cookiesId !== popupToHide.cookiesId)
    );
  };

  const normalizeLink = (link: string): string => {
    if (!/^https?:\/\//i.test(link)) {
      return `https://${link}`;
    }
    return link;
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
              <a
                href={normalizeLink(topPopup.link)}
                target='_blank'
                rel='noopener noreferrer'
              >
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
        // 사이트 콘텐츠 기준으로 고정되도록 수정 (fixed → absolute)
        <div className='relative z-0'>
          {visiblePopups.map((popup, idx) => (
            <div
              key={popup.cookiesId + idx}
              className='absolute z-[9999] bg-white shadow-lg border rounded-md overflow-hidden'
              style={{
                top: popup.locationY,
                left: popup.locationX,
                width: popup.width,
                height: popup.height,
              }}
            >
              <a
                href={normalizeLink(popup.link)}
                target='_blank'
                rel='noopener noreferrer'
              >
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
          ))}
        </div>
      )}
    </>
  );
};

export default PopupManager;
