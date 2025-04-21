import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  HTMLAttributes,
} from 'react';
import { IoIosCall, IoMdMenu } from 'react-icons/io';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';
import { FaPhoneAlt, FaCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AlterModal from '../alters/AlterModal';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MobileHeader = ({ children, ...props }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigate = useNavigate();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => { });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const measureHeader = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };

    measureHeader();
    window.addEventListener('resize', measureHeader);
    return () => window.removeEventListener('resize', measureHeader);
  }, []);

  const mainMenuItems = [
    { title: '한식X샐러드&포케 SLB?', link: '/sub_1/1', isReady: true },
    { title: '기회를 붙잡는 노하우', link: '/sub_2/1', isReady: true },
    { title: '끝까지 함께 성장합니다!', link: '/sub_3/1', isReady: false },
    { title: '성장하는 SLB 개설비용', link: '/sub_4/1', isReady: false },
    { title: '성공창업문의', link: '/inquiry', isReady: true },
    { title: 'SLB 이야기', link: '/story', isReady: false },
  ];

  const subMenuItems = [
    [
      {
        title: '맛에 대한 고집이/n남다른 특별함을 만든다',
        link: '/sub_1/1',
        isReady: true,
      },
      { title: '아쉬움에 항상 고민합니다', link: '/sub_1/2', isReady: true },
      { title: '동상이몽 창업?', link: '/sub_1/3', isReady: true },
      {
        title: '배달부터 홀 운영까지/n해본 사람들이 함께합니다',
        link: '/sub_1/4',
        isReady: true,
      },
    ],
    [
      {
        title: '성장하는 시장/n성장하는 아이템 SLB',
        link: '/sub_2/1',
        isReady: true,
      },
      {
        title: '고객이 인정하는/n샐러드&포케 맛집!',
        link: '/sub_2/2',
        isReady: true,
      },
      {
        title: '음식점 일이/n이렇게 쉬워도 되나요?',
        link: '/sub_2/3',
        isReady: true,
      },
      { title: '특별한 메뉴소개', link: '/sub_2/4', isReady: true },
    ],
    [
      {
        title: 'SLB는 점주님과/n끝까지 합께 합니다',
        link: '/sub_3/1',
        isReady: false,
      },
      {
        title: '청년, 중장년, 남녀/n누구나 성공창업가능!',
        link: '/sub_3/2',
        isReady: false,
      },
      {
        title: '샐러드&포케 창업/n이것만은 꼭! 확인하세요?',
        link: '/sub_3/3',
        isReady: false,
      },
      {
        title: '고객이 묻습니다./n카페인가요? 힙한 인테리어',
        link: '/sub_3/4',
        isReady: false,
      },
    ],
    [
      {
        title: '어떤 상권에서도/n안정적인 수익성!',
        link: '/sub_4/1',
        isReady: false,
      },
      {
        title: '과하지 않은/n맞춤 창업 비용',
        link: '/sub_4/2',
        isReady: false,
      },
      {
        title: '꼼꼼하고 체계적인/nSLB 창업절차',
        link: '/sub_4/3',
        isReady: false,
      },
      {
        title: '일잘하는 사람들의/n운영관리 시스템',
        link: '/sub_4/4',
        isReady: false,
      },
    ],
    [
      { title: '온라인 창업문의', link: '/inquiry', isReady: true },
      { title: '고객문의', link: '/board/cs', isReady: true },
      { title: '협력제안', link: '/board/partner', isReady: true },
      { title: '찾아오시는 길', link: '/map', isReady: true },
    ],
    [
      { title: '브랜드 스토리', link: '/story', isReady: false },
      { title: '공지&뉴스', link: '/board/notice', isReady: false },
      { title: '샐톡톡 이벤트', link: '/board/event', isReady: false },
      { title: '매장안내', link: '/store', isReady: false },
    ],
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const readyPage = () => {
    handleOpenModal(
      '해당 페이지는 현재 더 나은 서비스 제공을 위해 준비 중입니다.\n빠른 시일 내에 만나보실 수 있도록 하겠습니다!',
      false,
      handleCancel
    );
  };

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

  const handleCancel = () => setModalVisible(false);

  return (
    <div className='w-full flex flex-col items-center' {...props}>
      <div style={{ height: `${headerHeight}px` }} id='header_mo' />
      <header
        className='bg-white shadow w-full fixed top-0 left-0 z-[100]'
        ref={headerRef}
        id='header_list_mo'
      >
        <div className='flex justify-between items-center p-4'>
          <button onClick={handleMenuToggle} className='text-main'>
            <IoMdMenu size={30} />
          </button>
          <div onClick={handleLogoClick} className='cursor-pointer select-none'>
            <img
              alt='Logo'
              src={`${process.env.PUBLIC_URL}/adminLoginLogo.png`}
              className='h-[3rem]'
            />
          </div>
          <a href='tel:15330516' className='flex items-center'>
            <span className='flex items-center justify-center w-[18px] h-[18px] bg-black rounded-full mr-1'>
              <IoIosCall color='white' size={12} />
            </span>
          </a>
        </div>
      </header>

      {isMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-full z-[1000] bg-black bg-opacity-10'>
          <div
            ref={menuRef}
            className='absolute top-0 left-0 w-[80%] h-full bg-black bg-opacity-80 z-50 flex flex-col justify-between'
          >
            <div className='text-white overflow-y-auto mt-2'>
              <ul className='flex flex-col divide-y divide-gray-700'>
                {mainMenuItems.map((item, index) => (
                  <li key={index} className='border-b-[2px] border-gray-700'>
                    <button
                      onClick={() => handleCategoryClick(index)}
                      className='w-full text-left text-main font-bold flex justify-between items-center px-4 pt-3 pb-1 '
                    >
                      {item.title}
                      {subMenuItems[index] && (
                        <>
                          {selectedCategory === index ? (
                            <SlArrowDown size={12} />
                          ) : (
                            <SlArrowRight size={12} />
                          )}
                        </>
                      )}
                    </button>
                    {selectedCategory === index && (
                      <ul className='w-full'>
                        {subMenuItems[index].map((submenuItem, subIndex) => (
                          <li
                            key={subIndex}
                            className='border-t-[2px] border-gray-700 py-2'
                          >
                            {submenuItem.isReady ? (
                              <a
                                href={submenuItem.link}
                                onClick={closeMenu}
                                className='px-4 py-1 text-detail text-white hover:underline flex'
                              >
                                ▸
                                <div className='ml-1 break-keep whitespace-pre-line'>
                                  {submenuItem.title.replace('/n', ' ')}
                                </div>
                              </a>
                            ) : (
                              <button
                                onClick={readyPage}
                                className='px-4 py-1 text-detail text-white hover:underline flex w-full text-left'
                              >
                                ▸
                                <div className='ml-1 break-keep whitespace-pre-line'>
                                  {submenuItem.title.replace('/n', ' ')}
                                </div>
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex text-white text-sm font-semibold'>
              <a
                href='/inquiry'
                onClick={closeMenu}
                className='bg-[#F03838] flex-1 py-3 flex items-center justify-center gap-2'
              >
                <FaPhoneAlt size={14} /> 온라인 창업문의
              </a>
              <a
                href='/board/cs'
                onClick={closeMenu}
                className='bg-[#F58220] flex-1 py-3 flex items-center justify-center gap-2'
              >
                <FaCommentDots size={14} /> 고객 문의
              </a>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col justify-center w-full border-t'>
        {children}
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

export default MobileHeader;
