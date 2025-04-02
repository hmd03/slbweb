import React, { useRef, useCallback, useState } from 'react';
import axios from 'axios';
import { LoadingState } from '../../../store/atom';
import { useRecoilState } from 'recoil';
import Checkbox from '../checkbox/Checkbox';
import Button from '../buttons/Button';

const Footer = () => {
    const senderRef = useRef<HTMLInputElement>(null);
    const preferredRegionRef = useRef<HTMLInputElement>(null);
    const contactRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useRecoilState(LoadingState);
    const [isChecked, setIsChecked] = useState(false);

    const footerContent = [ `COMPANY : 주식회사 시크릿케이 CEO : 박찬호 TEL : 1533-0516`,
                            `BUSINESS LICENSE : 617-88-02240 CFO : <a href="mailto:secretk_master@naver.com">김예원(secretk_master@naver.com)</a>`,
                            `ADDRESS : 14481 경기 부천시 원미구 삼작로256번길 9 2층`,
                            `Copyright © SLB 샐러드&포케 [SALAD LIFE BALANCE]. All rights reserved.`];

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const onSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
    
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
                });
    
                const data = response.data;
                if (response.status === 201) {
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

    return (
        <div className='flex flex-col w-full justify-center items-center bg-[#F1F2F2]'>
            <div className='flex justify-between max-w-[1300px] w-full py-10'>
                <div>
                    <div className='flex text-[2.4rem] font-semibold'><p className='font-black'>창업 문의</p> | 빠른 상담 가능</div>
                    <div className='text-[5rem] font-black leading-none'>1533-0616</div>
                </div>
                <div className='w-[50%] ml-16'>
                    <form onSubmit={onSubmit} className={`w-full flex justify-between items-center`}>
                        <div>
                            <div className='flex w-full mb-2'>
                                <input 
                                    aria-label='이름' 
                                    type='text' 
                                    placeholder='이름' 
                                    ref={senderRef}
                                    autoComplete='name'
                                    className={`border-[2px] border-black px-4 py-3 w-full mr-2`}
                                />
                                <input 
                                    aria-label='창업희망지역' 
                                    type='text' 
                                    placeholder='창업희망지역' 
                                    ref={preferredRegionRef}
                                    autoComplete='preferredRegion'
                                    className={`border-[2px] border-black px-4 py-3 w-full`}
                                />
                            </div>
                            <input 
                                aria-label='연락처' 
                                type='text' 
                                placeholder='연락처' 
                                ref={contactRef}
                                autoComplete='contact'
                                className={`border-[2px] border-black px-4 py-3 w-full mb-1`}
                            />
                            <div className='flex w-full'>
                                <Checkbox
                                    isChecked={isChecked}
                                    onValueChangeHandler={handleCheckboxChange}
                                    disabled={false}
                                >
                                    위와 같이 개인정보를 수집ㆍ이용하는데 동의합니다.
                                </Checkbox>
                                <Button theme='admin' className='px-2 py-0'>내용보기</Button>
                            </div>
                        </div>
                        <div className='mb-auto'>
                            <button 
                                type='submit'
                                className='p-4 w-[6.5rem] h-[6rem] text-title text-White bg-[#FF331F] border-[1px] border-Black rounded-xl flex flex-col items-center justify-center'
                            >
                                <p className='leading-none'>문의</p>
                                <p className='leading-none'>하기</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className='w-full bg-Black text-[#E6E7E8] flex w-full justify-center items-center py-10'>
                <div className='max-w-[1300px] flex w-full justify-center items-center'>
                    <div className='flex flex-col w-full'>
                        {footerContent.map((item, index) => (
                            <span key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </div>
                    <div className='flex h-full mb-auto'>
                        <button className='mr-2' onClick={handleNaverBlogRedirect}>
                            <img alt='naverblog' src={`${process.env.PUBLIC_URL}/naverblog.png`} className='h-[2rem] m-auto'/>
                        </button>
                        <button onClick={handleInstargramRedirect}>
                            <img alt='instargram' src={`${process.env.PUBLIC_URL}/instargram.png`} className='h-[2rem] m-auto'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
