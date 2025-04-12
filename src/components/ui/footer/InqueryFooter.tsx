import React, { useRef, useCallback, useState } from 'react';
import axios from 'axios';
import { LoadingState } from '../../../store/atom';
import { useRecoilState } from 'recoil';
import Checkbox from '../checkbox/Checkbox';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import AlterModal from '../alters/AlterModal';

const InqueryFooter = () => {
  const senderRef = useRef<HTMLInputElement>(null);
  const preferredRegionRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useRecoilState(LoadingState);
  const deviceInfo = useDeviceInfo();

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
        preferredRegion: preferredRegion,
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

  return (
    <div
      id='footer'
      className='flex flex-col w-full justify-center items-center bg-[#F1F2F2]'
    >
      <div
        className={`flex w-full ${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'flex-col justify-center items-center max-w-[80%] py-5'
            : 'max-w-[1300px] justify-between py-10'
        }`}
      >
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'flex w-full justify-between items-center'
              : ''
          }`}
        >
          <div
            className={`flex font-semibold ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'text-title'
                : 'text-[2.4rem] '
            }`}
          >
            {deviceInfo.isSmallScreen || deviceInfo.isMobile ? (
              <div className='flex flex-col items-center'>
                <p className='font-black text-main'>창업 문의</p>
                <span className='w-full border border-b-[1px] border-black' />
                <p className='text-detail'>빠른 상담 가능</p>
              </div>
            ) : (
              <>
                <p className='font-black'>창업 문의</p>| 빠른 상담 가능
              </>
            )}
          </div>
          <div
            className={`font-black leading-none ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'text-[2.4rem] '
                : 'text-[5rem] '
            }`}
          >
            1533-0616
          </div>
        </div>
        <div
          className={`${
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? 'w-full'
              : 'w-[50%] ml-16'
          }`}
        >
          <div className={`w-full flex justify-between items-center`}>
            <div>
              <div className='flex w-full mb-2'>
                <input
                  aria-label='이름'
                  type='text'
                  placeholder='이름'
                  ref={senderRef}
                  autoComplete='name'
                  className={`${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'h-[2.5rem] px-1 py-1 text-[12px]'
                      : 'px-4 py-3'
                  } border-[2px] border-black w-full mr-2`}
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
                      : 'px-4 py-3'
                  } border-[2px] border-black w-full`}
                />
              </div>
              <input
                aria-label='연락처'
                type='text'
                placeholder='연락처'
                ref={contactRef}
                autoComplete='contact'
                className={`${
                  deviceInfo.isSmallScreen || deviceInfo.isMobile
                    ? 'h-[2.5rem] px-1 py-1 text-[12px]'
                    : 'px-4 py-3'
                } border-[2px] border-black w-full`}
              />
            </div>
            <div
              className={`${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'ml-2'
                  : 'mb-auto'
              }`}
            >
              <button
                type='button'
                onClick={handleSubmitClick}
                className='p-4 w-[6.5rem] h-[6rem] text-title text-White bg-[#FF331F] border-[1px] border-Black rounded-xl flex flex-col items-center justify-center'
              >
                <p className='leading-none'>문의</p>
                <p className='leading-none'>하기</p>
              </button>
            </div>
          </div>
        </div>
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
  );
};

export default InqueryFooter;
