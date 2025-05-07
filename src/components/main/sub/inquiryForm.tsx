import React, { useRef, useState } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import { useRecoilState } from 'recoil';
import { LoadingState } from '../../../store/atom';
import AlterModal from '../../ui/alters/AlterModal';
import axios from 'axios';
import { trackGoogleConversion, trackNaverConversion } from '../../utils/analytics';

const InquiryForm: React.FC = () => {
  const deviceInfo = useDeviceInfo();

  const [loading, setLoading] = useRecoilState(LoadingState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [selectedSource, setSelectedSource] = useState<string>('');

  const nameRef = useRef<HTMLInputElement>(null);
  const phone1Ref = useRef<HTMLInputElement>(null);
  const phone2Ref = useRef<HTMLInputElement>(null);
  const phone3Ref = useRef<HTMLInputElement>(null);
  const regionRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLSelectElement>(null);
  const etcSourceRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const agreeRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const senderName = nameRef.current?.value || '';
    const senderContact = `${phone1Ref.current?.value}-${phone2Ref.current?.value}-${phone3Ref.current?.value}`;
    const preferredRegion = regionRef.current?.value || '';
    const ageGroup = ageRef.current?.value || '';
    const content = messageRef.current?.value || '';
    const agreed = agreeRef.current?.checked || false;
    const discoveryRoute =
      selectedSource === '기타' ? etcSourceRef.current?.value : selectedSource;

    if (
      !senderName ||
      !senderContact ||
      !preferredRegion ||
      !ageGroup ||
      !discoveryRoute ||
      !content ||
      !agreed
    ) {
      handleOpenModal('모든 필수 항목을 입력해 주세요.', false, handleCancel);
      return;
    }
    handleConfirm();
    //handleOpenModal(`등록 하시겠습니까?`, true, handleConfirm);
  };

  const handleConfirm = async () => {
    try {
      handleCancel();
      setLoading(true);

      const payload = {
        senderName: nameRef.current?.value,
        senderContact: `${phone1Ref.current?.value}-${phone2Ref.current?.value}-${phone3Ref.current?.value}`,
        preferredRegion: regionRef.current?.value,
        ageGroup: ageRef.current?.value,
        discoveryRoute:
          selectedSource === '기타'
            ? etcSourceRef.current?.value
            : selectedSource,
        content: messageRef.current?.value,
        isMobile: deviceInfo.isMobile,
        category: 2,
      };
      const response = await axios.post('/api/inquiries', payload);

      const data = response.data;
      if (response.status === 201) {
        trackGoogleConversion();
        trackNaverConversion();
        alert('등록되었습니다.');
        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
      setModalVisible(false);
    }
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

  const tableCellStyle = `border border-black align-top ${
    deviceInfo.isSmallScreen || deviceInfo.isMobile
      ? 'text-[12px]'
      : 'text-detail p-2'
  }`;
  const tableHeadStyle = `bg-LightGray font-semibold text-left break-keep w-[40%] ${
    deviceInfo.isSmallScreen || deviceInfo.isMobile
      ? 'text-[14px] pt-2 pl-1'
      : 'text-detail pt-4 pl-4'
  }`;

  const sources = [
    '검색광고(네이버, 다음, 구글 등)',
    '앱광고(인스타그램, 페이스북, 당근 등)',
    '뉴스기사',
    '블로그(네이버, 다음, 구글 등)',
    'SNS 게시물(인스타그램, 페이스북 등)',
    '유튜브 영상',
    'SLB 매장 방문',
    '지인소개',
    '기타',
  ];

  return (
    <div className={`w-full flex justify-center px-4 py-8 bg-white`}>
      {/* 05/04 변경 -SH
       *   max-w-[1300px] -> max-w-[1100px]
       */}
      <div className='w-full max-w-[1100px]'>
        <div className='flex flex-col items-center justify-center mb-6'>
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Title-mo'
                : 'Slb-Title'
            }`}
          >
            온라인 창업 문의
          </p>
          <div
            className={`w-[1px]  border-r border-black  ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'h-5 my-2'
                : 'h-10 my-5'
            }`}
          />
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Title-mo'
                : 'Slb-Title'
            }`}
          >
            끝까지 함께하는 프랜차이즈의 시작!
          </p>
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Point-mo'
                : 'Slb-Point'
            } text-Point`}
          >
            SLB와 함께하세요
          </p>
          <p
            className={`${
              deviceInfo.isMobile || deviceInfo.isSmallScreen
                ? 'Slb-Content-mo'
                : 'Slb-Content my-20'
            }`}
          >
            SLB 가맹 상담을 신청하실 수 있는 곳입니다.
          </p>
        </div>

        <p className='text-detail text-Black mb-2'>
          ✓ 표시는 필수 입력 항목입니다.
        </p>

        <table className='w-full border border-black border-separate border-spacing-0 text-detail'>
          <tbody>
            <tr>
              <th className={`${tableCellStyle} ${tableHeadStyle}`}>✓ 이름</th>
              <td className={tableCellStyle}>
                <input
                  ref={nameRef}
                  type='text'
                  placeholder='이름을 입력하세요'
                  className='w-full border border-gray-300 p-2'
                />
              </td>
            </tr>
            <tr>
              <th className={`${tableCellStyle} ${tableHeadStyle}`}>
                ✓ 연락처
              </th>
              <td className={tableCellStyle}>
                <div className='flex gap-2'>
                  <input
                    ref={phone1Ref}
                    type='text'
                    inputMode='numeric'
                    maxLength={3}
                    className='w-1/3 border border-gray-300 p-2'
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^0-9]/g,
                        ''
                      );
                    }}
                  />
                  <span className='mt-2'>-</span>
                  <input
                    ref={phone2Ref}
                    type='text'
                    inputMode='numeric'
                    maxLength={4}
                    className='w-1/3 border border-gray-300 p-2'
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^0-9]/g,
                        ''
                      );
                    }}
                  />
                  <span className='mt-2'>-</span>
                  <input
                    ref={phone3Ref}
                    type='text'
                    inputMode='numeric'
                    maxLength={4}
                    className='w-1/3 border border-gray-300 p-2'
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^0-9]/g,
                        ''
                      );
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th className={`${tableCellStyle} ${tableHeadStyle}`}>
                ✓ 창업 희망 지역
              </th>
              <td className={tableCellStyle}>
                <input
                  ref={regionRef}
                  type='text'
                  placeholder='예: 서울 강남구'
                  className='w-full border border-gray-300 p-2'
                />
              </td>
            </tr>
            <tr>
              <th className={`${tableCellStyle} ${tableHeadStyle}`}>
                ✓ 연령대
              </th>
              <td className={tableCellStyle}>
                <select
                  ref={ageRef}
                  className='w-full border border-gray-300 p-2'
                >
                  <option value=''>선택</option>
                  <option value='20'>20대</option>
                  <option value='30'>30대</option>
                  <option value='40'>40대</option>
                  <option value='50'>50대 이상</option>
                </select>
              </td>
            </tr>
            <tr>
              <th className={`${tableCellStyle} ${tableHeadStyle}`}>
                ✓ SLB를 최초 알게 된 경로
              </th>
              <td
                className={`${tableCellStyle} space-y-1 ${
                  deviceInfo.isMobile || deviceInfo.isSmallScreen
                    ? 'break-keep gap-2'
                    : 'flex flex-wrap gap-2'
                }`}
              >
                {sources.map((label, idx) => {
                  const id = `source-${idx}`;
                  return (
                    <div key={idx} className='flex items-center mr-10'>
                      <input
                        id={id}
                        type='radio'
                        name='source'
                        value={label}
                        checked={selectedSource === label}
                        onChange={() => setSelectedSource(label)}
                        className='mr-2'
                      />
                      <label htmlFor={id}>{label}</label>
                      {label === '기타' && selectedSource === '기타' && (
                        <input
                          ref={etcSourceRef}
                          type='text'
                          className='ml-2 border border-gray-300 p-1 flex-1 w-[10%]'
                          placeholder='기타 입력'
                        />
                      )}
                    </div>
                  );
                })}
              </td>
            </tr>
            <tr>
              <th className={`${tableCellStyle} ${tableHeadStyle}`}>
                ✓ 문의 내용
              </th>
              <td className={tableCellStyle}>
                <textarea
                  ref={messageRef}
                  className='w-full h-32 border border-gray-300 p-2 resize-none'
                  placeholder='문의 내용을 작성해주세요'
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* 개인정보 동의 */}
        <div className='mt-4'>
          <label
            className={`flex items-center ${
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? 'text-[10px]'
                : 'text-detail'
            }`}
          >
            <input ref={agreeRef} type='checkbox' className='mr-2' />
            개인정보 수집 및 이용에 관한 사항(필수)에 동의합니다.
            <button
              className={`px-2 py-0 bg-Black text-White ${
                deviceInfo.isSmallScreen || deviceInfo.isMobile
                  ? 'text-[0.6rem] whitespace-nowrap'
                  : ' ml-2'
              }`}
            >
              내용보기
            </button>
          </label>
        </div>

        {/* 제출 버튼 */}
        <div className='flex justify-center mt-6 gap-4'>
          <button
            type='button'
            className='bg-Point text-White px-6 py-2 rounded-full'
            onClick={onSubmit}
          >
            등록하기
          </button>
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

export default InquiryForm;
