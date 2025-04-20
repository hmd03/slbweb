import React, {
  useState,
  useRef,
  useEffect,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { IoIosCall } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import AlterModal from '../alters/AlterModal';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Header = ({ children, ...props }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState<number[]>([]);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const menuRefs = useRef<(HTMLLIElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => { });

  const mainMenuItems = [
    { title: '한식X샐러드&포케 SLB?', link: '/sub_1/1', isReady: true },
    { title: '기회를 붙잡는 노하우', link: '/sub_2/1', isReady: false },
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
        isReady: false,
      },
      {
        title: '고객이 인정하는/n샐러드&포케 맛집!',
        link: '/sub_2/2',
        isReady: false,
      },
      {
        title: '음식점 일이/n이렇게 쉬워도 되나요?',
        link: '/sub_2/3',
        isReady: false,
      },
      { title: '특별한 메뉴소개', link: '/sub_2/4', isReady: false },
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

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  const handleLogoClick = () => navigate('/');

  useEffect(() => {
    const widths = menuRefs.current.map((ref) =>
      ref ? ref.getBoundingClientRect().width : 0
    );
    setMenuWidth(widths);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavFixed(window.scrollY > 200); // ✅ 스크롤 200px 이상이면 nav 고정
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div ref={headerRef} className='w-full bg-white shadow z-30'>
        <div className='flex flex-col justify-between items-center px-4 w-full border-b-[2px] border-black'>
          <div className='text-center mt-10'>
            <img
              alt='Logo'
              onClick={handleLogoClick}
              src={`${process.env.PUBLIC_URL}/adminLoginLogo.png`}
              className='h-[6rem] m-auto cursor-pointer select-none'
            />
          </div>
          <div className='flex justify-between items-center max-w-[1300px] mt-3 mb-6 text-main mx-auto w-full'>
            <a
              href='tel:15330516'
              className='flex a-reset items-center'
              style={{ visibility: 'hidden' }}
            >
              <span className='flex items-center justify-center w-[18px] h-[18px] bg-black rounded-full mr-1'>
                <IoIosCall color='white' size={12} />
              </span>
              <span className='text-sub mr-2'>창업문의</span>
              <span className='text-Point text-title font-black'>
                1533-0516
              </span>
            </a>
            <p className='flex-grow text-center text-sub'>
              끝까지 함께하는 한식X샐러드&포케 프랜차이즈
            </p>
            <a href='tel:15330516' className='flex a-reset items-center'>
              <span className='flex items-center justify-center w-[18px] h-[18px] bg-black rounded-full mr-1'>
                <IoIosCall color='white' size={12} />
              </span>
              <span className='text-sub mr-2'>창업문의</span>
              <span className='text-Point text-title font-black'>
                1533-0516
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ✅ nav 영역 - 스크롤 시 fixed top */}
      <div
        id='header'
        ref={navRef}
        className={`w-full bg-white z-[50] shadow transition-all duration-300 ${
          isNavFixed ? 'fixed top-0 left-0' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className='text-center w-full max-w-[1300px] mx-auto'>
          <ul className='flex justify-between text-main py-4'>
            {mainMenuItems.map((item, index) => (
              <li key={index} ref={(el) => (menuRefs.current[index] = el)}>
                {item.isReady ? (
                  <a
                    href={item.link}
                    className='h-[3rem] hover:text-Point w-full flex items-center'
                  >
                    {item.title}
                  </a>
                ) : (
                  <button
                    onClick={readyPage}
                    className='h-[3rem] hover:text-Point w-full text-left'
                  >
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {isMenuOpen && (
            <div className='z-[100] py-6 absolute left-0 w-full bg-black bg-opacity-70 text-white rounded-md'>
              <div className='flex justify-between items-center w-full max-w-[1300px] m-auto'>
                {subMenuItems.map((subMenu, index) => (
                  <div
                    key={index}
                    className='flex flex-col justify-center'
                    style={{ width: `${menuWidth[index]}px` }}
                  >
                    {subMenu.map((submenuItem, subIndex) => (
                      <div
                        key={subIndex}
                        className='flex flex-col items-center justify-center h-[4rem] w-full'
                      >
                        {submenuItem.isReady ? (
                          <a
                            href={submenuItem.link}
                            className='no-underline hover:underline'
                          >
                            {submenuItem.title.split('/n').map((text, idx) => (
                              <div key={idx} className='text-center'>
                                {text}
                              </div>
                            ))}
                          </a>
                        ) : (
                          <button
                            onClick={readyPage}
                            className='text-center hover:underline'
                          >
                            {submenuItem.title.split('/n').map((text, idx) => (
                              <div key={idx}>{text}</div>
                            ))}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* 콘텐츠 */}
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

export default Header;
