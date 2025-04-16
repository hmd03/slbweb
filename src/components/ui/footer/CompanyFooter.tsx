import React, { useState } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import { useRecoilValue } from 'recoil';
import { siteSettingState } from '../../../store/atom';
import HtmlModal from '../alters/HtmlModal';

const CompanyFooter = () => {
  const deviceInfo = useDeviceInfo();
  const siteSetting = useRecoilValue(siteSettingState);
  const [modalContent, setModalContent] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const footerContent = [
    `COMPANY : 주식회사 시크릿케이 CEO : 박찬호 TEL : 1533-0516`,
    `BUSINESS LICENSE : 617-88-02240 CFO : <a href="mailto:secretk_master@naver.com">김예원(secretk_master@naver.com)</a>`,
    `ADDRESS : 14481 경기 부천시 원미구 삼작로256번길 9 2층`,
    `Copyright © SLB 샐러드&포케 [SALAD LIFE BALANCE]. All rights reserved.`,
  ];

  const handleNaverBlogRedirect = () => {
    window.open('https://blog.naver.com/slbsalad/', '_blank');
  };

  const handleInstargramRedirect = () => {
    window.open('https://www.instagram.com/slb_official_/', '_blank');
  };

  const handleShowModal = (type: 'terms' | 'privacy') => {
    const content =
      type === 'terms' ? siteSetting.termsOfService : siteSetting.privacyPolicy;
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className='flex flex-col w-full justify-center items-center bg-[#F1F2F2]'
        id='companyFooter'
      >
        <div
          className={`w-full bg-Black text-[#E6E7E8] flex w-full justify-center items-center ${
            deviceInfo.isSmallScreen || deviceInfo.isMobile ? 'py-5' : 'py-10'
          }`}
        >
          <div
            className={`${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'max-w-[90%]'
                : 'max-w-[1300px]'
            } flex w-full justify-between items-center`}
          >
            <div
              className={`flex w-full flex-col gap-1 ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-[0.5rem]'
                  : ''
              }`}
            >
              {footerContent.map((item, index) => (
                <span key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
              <div className='mt-2 flex gap-2 text-xs'>
                <button
                  onClick={() => handleShowModal('terms')}
                  className='underline'
                >
                  이용약관
                </button>
                <span>|</span>
                <button
                  onClick={() => handleShowModal('privacy')}
                  className='underline'
                >
                  개인정보 처리방침
                </button>
              </div>
            </div>

            <div
              className={`flex h-full gap-1 ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'flex-col'
                  : 'mb-auto'
              }`}
            >
              <button onClick={handleNaverBlogRedirect}>
                <img
                  alt='naverblog'
                  src={`${process.env.PUBLIC_URL}/naverblog.png`}
                  className='h-[2rem] m-auto'
                />
              </button>
              <button onClick={handleInstargramRedirect}>
                <img
                  alt='instargram'
                  src={`${process.env.PUBLIC_URL}/instargram.png`}
                  className='h-[2rem] m-auto'
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HtmlModal 모달 렌더링 */}
      {isModalOpen && (
        <HtmlModal
          htmlContent={modalContent}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default CompanyFooter;
