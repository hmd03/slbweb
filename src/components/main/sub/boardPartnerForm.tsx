import React, { useRef, useState } from 'react';
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import { useRecoilState } from 'recoil';
import { LoadingState } from '../../../store/atom';
import AlterModal from '../../ui/alters/AlterModal';
import axios from 'axios';

const BoardPartnerForm: React.FC = () => {
    const deviceInfo = useDeviceInfo();

    const [loading, setLoading] = useRecoilState(LoadingState);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [onConfirm, setOnConfirm] = useState(() => () => {});

    // refs
    const titleRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null);
    const managerRef = useRef<HTMLInputElement>(null);
    const phone1Ref = useRef<HTMLInputElement>(null);
    const phone2Ref = useRef<HTMLInputElement>(null);
    const phone3Ref = useRef<HTMLInputElement>(null);
    const emailIdRef = useRef<HTMLInputElement>(null);
    const emailDomainRef = useRef<HTMLInputElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const agreeRef = useRef<HTMLInputElement>(null);

    const [emailDomainSelect, setEmailDomainSelect] = useState('');

    const isValidEmail = (local: string, domain: string) => {
        const email = `${local}@${domain}`;
        const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const onSubmit = async () => {
        const title = titleRef.current?.value || '';
        const manager = managerRef.current?.value || '';
        const content = contentRef.current?.value || '';
        const agreed = agreeRef.current?.checked;

        const emailLocal = emailIdRef.current?.value || '';
        const emailDomain = emailDomainRef.current?.value || '';

        if (
            (emailLocal != '' || emailDomain != '') &&
            !isValidEmail(emailLocal, emailDomain)
        ) {
            handleOpenModal(
                '유효한 이메일 형식을 입력해 주세요.',
                false,
                handleCancel
            );
            return;
        }

        if (
            !title ||
            !manager ||
            !phone1Ref.current?.value ||
            !phone2Ref.current?.value ||
            !phone3Ref.current?.value ||
            !content ||
            !agreed
        ) {
            handleOpenModal(
                '필수 항목을 모두 입력해 주세요.',
                false,
                handleCancel
            );
            return;
        }

        handleOpenModal('등록 하시겠습니까?', true, handleConfirm);
    };

    const handleEmailDomainSelect = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;
        setEmailDomainSelect(value);

        if (emailDomainRef.current) {
            if (value === '') {
                emailDomainRef.current.value = '';
                emailDomainRef.current.disabled = false;
                emailDomainRef.current.focus();
            } else {
                emailDomainRef.current.value = value;
                emailDomainRef.current.disabled = true;
            }
        }
    };

    const handleConfirm = async () => {
        try {
            setModalVisible(false);
            setLoading(true);

            const isMobile = deviceInfo.isMobile;

            const formData = new FormData();
            formData.append('title', titleRef.current?.value || '');
            formData.append('senderCompany', companyRef.current?.value || '');
            formData.append(
                'senderName',
                `${managerRef.current?.value || ''}`.trim()
            );
            formData.append(
                'senderContact',
                `${phone1Ref.current?.value}-${phone2Ref.current?.value}-${phone3Ref.current?.value}`
            );
            formData.append(
                'senderEmail',
                `${emailIdRef.current?.value}@${emailDomainRef.current?.value}`
            );
            formData.append('content', contentRef.current?.value || '');
            formData.append('isMobile', isMobile ? 'true' : 'false');
            if (fileRef.current?.files?.[0]) {
                formData.append('media', fileRef.current.files[0]);
            }

            const response = await axios.post(
                '/api/partnership/proposals',
                formData
            );
            const data = response.data;

            if (response.status === 201) {
                alert('등록되었습니다.');
                window.location.reload();
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert((error as Error).message);
        } finally {
            setLoading(false);
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
    const tableHeadStyle = `bg-LightGray font-semibold text-left break-keep ${
        deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? 'text-[12px] pt-2 pl-1'
            : 'text-detail pl-4 pt-4'
    } w-[30%]`;

    return (
        <div className='w-full flex justify-center px-4 py-8 bg-white'>
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
                        협력제안
                    </p>
                    <div
                        className={`w-[1px]  border-r border-black  ${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'h-5 my-2 Slb-Title-mo'
                                : 'h-10 my-5 Slb-Title'
                        }`}
                    />
                    <p
                        className={`${
                            deviceInfo.isMobile || deviceInfo.isSmallScreen
                                ? 'Slb-Title-mo'
                                : 'Slb-Title'
                        }`}
                    >
                        SLB와의{' '}
                        <span className='text-Point'>협력, 제안 사항</span>은
                    </p>
                    <p
                        className={`${
                            deviceInfo.isMobile || deviceInfo.isSmallScreen
                                ? 'Slb-Title-mo'
                                : 'Slb-Title mb-20'
                        }`}
                    >
                        이곳에 남겨 주시면 빠르게 연락 드리겠습니다
                    </p>
                </div>

                <p className='text-detail text-Black mb-2'>
                    ✓ 표시는 필수 입력 항목입니다.
                </p>

                <table className='w-full table-fixed border border-black border-separate border-spacing-0 text-detail'>
                    <colgroup>
                        <col className='w-[30%]' />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th
                                className={`${tableCellStyle} ${tableHeadStyle}`}
                            >
                                ✓ 제목
                            </th>
                            <td className={tableCellStyle}>
                                <input
                                    ref={titleRef}
                                    className='w-full border border-gray-300 p-2'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th
                                className={`${tableCellStyle} ${tableHeadStyle}`}
                            >
                                회사명
                            </th>
                            <td className={tableCellStyle}>
                                <input
                                    ref={companyRef}
                                    className='w-full border border-gray-300 p-2'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th
                                className={`${tableCellStyle} ${tableHeadStyle}`}
                            >
                                ✓ 담당자명 / 직함
                            </th>
                            <td className={tableCellStyle}>
                                <input
                                    ref={managerRef}
                                    placeholder='담당자명/직함'
                                    className='w-full border border-gray-300 p-2'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th
                                className={`${tableCellStyle} ${tableHeadStyle}`}
                            >
                                ✓ 연락처
                            </th>
                            <td className={tableCellStyle}>
                                <div className='flex gap-2'>
                                    <input
                                        ref={phone1Ref}
                                        maxLength={3}
                                        inputMode='numeric'
                                        onInput={(e) =>
                                            (e.currentTarget.value =
                                                e.currentTarget.value.replace(
                                                    /[^0-9]/g,
                                                    ''
                                                ))
                                        }
                                        className='w-1/3 border border-gray-300 p-2'
                                    />
                                    <span className='mt-2'>-</span>
                                    <input
                                        ref={phone2Ref}
                                        maxLength={4}
                                        inputMode='numeric'
                                        onInput={(e) =>
                                            (e.currentTarget.value =
                                                e.currentTarget.value.replace(
                                                    /[^0-9]/g,
                                                    ''
                                                ))
                                        }
                                        className='w-1/3 border border-gray-300 p-2'
                                    />
                                    <span className='mt-2'>-</span>
                                    <input
                                        ref={phone3Ref}
                                        maxLength={4}
                                        inputMode='numeric'
                                        onInput={(e) =>
                                            (e.currentTarget.value =
                                                e.currentTarget.value.replace(
                                                    /[^0-9]/g,
                                                    ''
                                                ))
                                        }
                                        className='w-1/3 border border-gray-300 p-2'
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th
                                className={`${tableCellStyle} ${tableHeadStyle}`}
                            >
                                E-mail
                            </th>
                            <td className={tableCellStyle}>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-1 items-center'>
                                        <input
                                            ref={emailIdRef}
                                            className='w-full border border-gray-300 p-2'
                                        />
                                        <span>@</span>
                                        <input
                                            ref={emailDomainRef}
                                            className='w-full border border-gray-300 p-2'
                                            disabled={emailDomainSelect !== ''}
                                        />
                                        <select
                                            onChange={handleEmailDomainSelect}
                                            className={`w-full border border-gray-300 p-2 ${
                                                deviceInfo.isSmallScreen ||
                                                deviceInfo.isMobile
                                                    ? 'text-[8px] py-3'
                                                    : ''
                                            }`}
                                        >
                                            <option value=''>직접 입력</option>
                                            <option value='naver.com'>
                                                naver.com
                                            </option>
                                            <option value='nate.com'>
                                                nate.com
                                            </option>
                                            <option value='gmail.com'>
                                                gmail.com
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th
                                className={`${tableCellStyle} ${tableHeadStyle}`}
                            >
                                파일첨부
                            </th>
                            <td className={tableCellStyle}>
                                <input
                                    type='file'
                                    ref={fileRef}
                                    className='w-full'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th
                                className={`${tableCellStyle} ${tableHeadStyle}`}
                            >
                                ✓ 제안 내용
                            </th>
                            <td className={tableCellStyle}>
                                <textarea
                                    ref={contentRef}
                                    className='w-full h-40 border border-gray-300 p-2 resize-none'
                                    placeholder='제안 내용을 입력해 주세요'
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className='mt-4'>
                    <label
                        className={`flex items-center ${
                            deviceInfo.isSmallScreen || deviceInfo.isMobile
                                ? 'text-[10px]'
                                : 'text-detail'
                        }`}
                    >
                        <input
                            ref={agreeRef}
                            type='checkbox'
                            className='mr-2'
                        />
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

                <div className='flex justify-center mt-6 gap-4'>
                    <button
                        type='button'
                        className='bg-Point text-White px-6 py-2 rounded-full'
                        onClick={onSubmit}
                    >
                        등록하기
                    </button>
                    <button
                        type='button'
                        className='border border-gray-400 px-6 py-2 rounded-full'
                    >
                        취소
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

export default BoardPartnerForm;
