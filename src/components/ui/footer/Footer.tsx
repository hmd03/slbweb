import React, { useRef, useCallback, useState } from 'react';
import axios from 'axios';
import { LoadingState } from '../../../store/atom';
import { useRecoilState } from 'recoil';
import Checkbox from '../checkbox/Checkbox';
import Button from '../buttons/Button';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import AlterModal from '../alters/AlterModal';

const Footer = () => {
    const senderRef = useRef<HTMLInputElement>(null);
    const preferredRegionRef = useRef<HTMLInputElement>(null);
    const contactRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useRecoilState(LoadingState);
    const [isChecked, setIsChecked] = useState(false);
    const deviceInfo = useDeviceInfo();

    const [isModalVisible, setModalVisible] = useState(false);
        const [isCancelVisible, setIsCancelVisible] = useState(true);
        const [message, setMessage] = useState('');
        const [onConfirm, setOnConfirm] = useState(() => () => {});

    const footerContent = [ `COMPANY : 주식회사 시크릿케이 CEO : 박찬호 TEL : 1533-0516`,
                            `BUSINESS LICENSE : 617-88-02240 CFO : <a href="mailto:secretk_master@naver.com">김예원(secretk_master@naver.com)</a>`,
                            `ADDRESS : 14481 경기 부천시 원미구 삼작로256번길 9 2층`,
                            `Copyright © SLB 샐러드&포케 [SALAD LIFE BALANCE]. All rights reserved.`];

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const handleSubmitClick = () => {
        handleOpenModal(`등록 하시겠습니까?`, true, () => onSubmit());
    };

    const onSubmit = useCallback(
        async () => {
            const sender = senderRef.current?.value;
            const preferredRegion = preferredRegionRef.current?.value;
            const contact = contactRef.current?.value;
    
            if (!sender || !preferredRegion || !contact || !isChecked) {
                alert('이름, 창업희망지역, 연락처, 개인정보 수집 동의를 모두 입력해주세요.');
                return;
            }
    
            setLoading(true);
    
            try {
                const response = await axios.post('/api/inquiries', {
                    senderName: sender,
                    preferredRegion: preferredRegion,
                    senderContact: contact,
                    isMobile: deviceInfo.isMobile,
                    category: 1
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
        },
        [setLoading, isChecked]
    );
    

    const handleNaverBlogRedirect = () => {
        window.open('https://slbslb.com/', '_blank');
      };

    const handleInstargramRedirect = () => {
    window.open('https://www.instagram.com/slb_official_/', '_blank');
    };

    const handleOpenModal = (msg: string, isCancel = true, confirmFunction: () => void) => {
        setMessage(msg);
        setIsCancelVisible(isCancel)
        setOnConfirm(() => confirmFunction);
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    }

    return (
        <div id='footer' className='flex flex-col w-full justify-center items-center bg-[#F1F2F2]'>
            <div className={`flex w-full ${deviceInfo.isSmallScreen ? 'flex-col justify-center items-center max-w-[80%] py-5' : 'max-w-[1300px] justify-between py-10'}`}>
                <div className={`${deviceInfo.isSmallScreen ? 'flex w-full justify-between items-center':''}`}>
                    <div className={`flex font-semibold ${deviceInfo.isSmallScreen ? 'text-title' :'text-[2.4rem] '}`}>
                        {deviceInfo.isSmallScreen 
                        ?   <div className='flex flex-col items-center'>
                                <p className='font-black text-main'>창업 문의</p><span className='w-full border border-b-[1px] border-black' />
                                <p className='text-detail'>빠른 상담 가능</p>
                            </div>
                        :   <><p className='font-black'>창업 문의</p>| 빠른 상담 가능</>}
                        
                        </div>
                    <div className={`font-black leading-none ${deviceInfo.isSmallScreen ?'text-[2.4rem] ':'text-[5rem] '}`}>1533-0616</div>
                </div>
                <div className={`${deviceInfo.isSmallScreen ? 'w-full': 'w-[50%] ml-16'}`}>
                    <div className={`w-full flex justify-between items-center`}>
                        <div>
                            <div className='flex w-full mb-2'>
                                <input 
                                    aria-label='이름' 
                                    type='text' 
                                    placeholder='이름' 
                                    ref={senderRef}
                                    autoComplete='name'
                                    className={`${deviceInfo.isSmallScreen ?'h-[2.5rem] px-1 py-1':'px-4 py-3'} border-[2px] border-black w-full mr-2`}
                                />
                                <input 
                                    aria-label='창업희망지역' 
                                    type='text' 
                                    placeholder='창업희망지역' 
                                    ref={preferredRegionRef}
                                    autoComplete='preferredRegion'
                                    className={`${deviceInfo.isSmallScreen ?'h-[2.5rem] px-1 py-1':'px-4 py-3'} border-[2px] border-black w-full`}
                                />
                            </div>
                            <input 
                                aria-label='연락처' 
                                type='text' 
                                placeholder='연락처' 
                                ref={contactRef}
                                autoComplete='contact'
                                className={`${deviceInfo.isSmallScreen ?'h-[2.5rem] px-1 py-1':'px-4 py-3'} border-[2px] border-black w-full`}
                            />
                        </div>
                        <div className={`${deviceInfo.isSmallScreen ? 'ml-2' : 'mb-auto'}`}>
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
                    <div className={`flex w-full mt-2 ${deviceInfo.isSmallScreen ? 'justify-between ' : ''}`}>
                                <Checkbox
                                    isChecked={isChecked}
                                    onValueChangeHandler={handleCheckboxChange}
                                    disabled={false}
                                >
                                    <p className={`${deviceInfo.isSmallScreen ? 'text-[0.6rem]' : ''}`}>위와 같이 개인정보를 수집ㆍ이용하는데 동의합니다.</p>
                                </Checkbox>
                                <button className={`px-2 py-0 bg-Black text-White ${deviceInfo.isSmallScreen ? 'text-[0.6rem] whitespace-nowrap':' ml-2'}`}>내용보기</button>
                            </div>
                </div>
            </div>
            
            <div className={`w-full bg-Black text-[#E6E7E8] flex w-full justify-center items-center ${deviceInfo.isSmallScreen ? 'py-5' : 'py-10 '}`}>
                <div className={`${deviceInfo.isSmallScreen ? 'max-w-[90%]' : 'max-w-[1300px]'} flex w-full justify-center items-center`}>
                    <div className={`flex w-full flex-col ${deviceInfo.isSmallScreen ? 'text-[0.5rem]' : ''}`}>
                        {footerContent.map((item, index) => (
                            <span key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </div>
                    <div className={`flex h-full gap-1 ${deviceInfo.isSmallScreen ? 'flex-col' : 'mb-auto'}`}>
                        <button className='' onClick={handleNaverBlogRedirect}>
                            <img alt='naverblog' src={`${process.env.PUBLIC_URL}/naverblog.png`} className={`h-[2rem] m-auto`}/>
                        </button>
                        <button onClick={handleInstargramRedirect}>
                            <img alt='instargram' src={`${process.env.PUBLIC_URL}/instargram.png`} className='h-[2rem] m-auto'/>
                        </button>
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

export default Footer;
