import React, { useRef, useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingState } from '../../../store/atom';
import { useRecoilState } from 'recoil';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import AlterModal from '../alters/AlterModal';

const InqueryFooter = () => {
  const senderRef = useRef<HTMLInputElement>(null);
  const preferredRegionRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useRecoilState(LoadingState);
  const deviceInfo = useDeviceInfo();

  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(true); // 👈 고정 여부 상태

  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});

  const handleSubmitClick = () => {
    handleOpenModal(`등록 하시겠습니까?`, true, () => onSubmit());
  };

  const onSubmit = useCallback(async () => {
    const sender = senderRef.current?.value;
    const preferredRegion = preferredRegionRef.current?.value;
    const contact = contactRef.current?.value;

    if (!sender || !preferredRegion || !contact) {
      alert('이름, 창업희망지역, 연락처를 모두 입력해주세요.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/inquiries', {
        senderName: sender,
        preferredRegion,
        senderContact: contact,
        isMobile: deviceInfo.isMobile,
        category: 1,
      });

      const data = response.data;
      if (response.status === 201) {
        console.log(data);
        handleCancel();
        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  const handleOpenModal = (
    msg: string,
    isCancel = true,
    confirmFunction: () => void
  ) => {
    setMessage(msg);
    setIsCancelVisible(isCancel);
    setOnConfirm(() => confirmFunction);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  // footer height 측정
  useEffect(() => {
    const measureFooter = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.getBoundingClientRect().height);
      }
    };

    measureFooter();
    window.addEventListener('resize', measureFooter);
    return () => window.removeEventListener('resize', measureFooter);
  }, []);

  return (
    <>
      {(deviceInfo.isSmallScreen || deviceInfo.isMobile) && isFixed && (
        <div style={{ height: `${footerHeight}px` }} />
      )}
      <div
        id='footer'
        ref={footerRef}
        className={`sticky bg-[#F1F2F2] transition-all duration-300
        ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? ` ${
                isFixed
                  ? 'fixed bottom-0 left-0 z-10 w-full shadow-md'
                  : 'static'
              }`
            : 'w-full'
        }`}
      >
        <div
          className={`flex w-full gap-1 my-1 mx-auto ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex-col justify-center items-center px-4'
              : 'max-w-[1300px] justify-between py-6'
          }`}
        >
          <span
            className={`flex w-full items-center justify-center whitespace-nowrap ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'text-[18px] px-auto'
                : 'text-[18px]'
            }`}
          >
            <p
              className={` ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'font-bold'
                  : 'font-bold'
              }`}
            >
              창업문의
            </p>
            | 빠른 상담 가능
            <div
              className={` ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-1'
                  : 'none'
              }`}
            ></div>
            <p
              className={` ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'ml-2 text-[22px] font-black'
                  : 'ml-2 text-[24px] font-black'
              }`}
            >
              1533-0516
            </p>
          </span>
          <input
            aria-label='이름'
            type='text'
            placeholder='이름'
            ref={senderRef}
            autoComplete='name'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-[2.5rem] px-1 py-1 text-[12px]'
                : 'p-1 ml-4'
            } border-[2px] border-black w-full`}
          />
          <input
            aria-label='창업희망지역'
            type='text'
            placeholder='창업희망지역'
            ref={preferredRegionRef}
            autoComplete='preferredRegion'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-[2.5rem] px-1 py-1 text-[12px]'
                : 'p-1'
            } border-[2px] border-black w-full`}
          />
          <input
            aria-label='연락처'
            type='text'
            placeholder='연락처'
            ref={contactRef}
            autoComplete='contact'
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-[2.5rem] px-1 py-1 text-[12px]'
                : 'p-1'
            } border-[2px] border-black w-full`}
          />
          <button
            type='button'
            onClick={handleSubmitClick}
            className='flex bg-Point rounded-sm flex-nowrap text-White items-center justify-center whitespace-nowrap w-full px-2'
          >
            ✓ 개인정보 수집 동의 후 보내기
          </button>
        </div>

        {isModalVisible && (
          <AlterModal
            message={message}
            isCancelVisible={isCancelVisible}
            onConfirm={onConfirm}
            onCancel={handleCancel}
          />
        )}
      </div>
    </>
  );
};

export default InqueryFooter;
