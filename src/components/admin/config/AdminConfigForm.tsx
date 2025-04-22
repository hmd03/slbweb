import React, { useEffect, useRef, useState } from 'react';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import Button from '../../ui/buttons/Button';
import InputField from '../../ui/inputs/InputField';
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';
import Editor from '../../ui/Editer/Editor';
import AlterModal from '../../ui/alters/AlterModal';
import { LoadingState, siteSettingState } from '../../../store/atom';
import { formatPhone } from '../../utils/formatUtils';

const AdminConfigForm: React.FC = () => {
    const [loading, setLoading] = useRecoilState(LoadingState);
    const setSetting = useSetRecoilState(siteSettingState);

    const [isModalVisible, setModalVisible] = useState(false);
    const [isCancelVisible, setIsCancelVisible] = useState(true);
    const [message, setMessage] = useState('');
    const [onConfirm, setOnConfirm] = useState(() => () => {});

    const [editorPrivacy, setEditorPrivacy] = useState<string>('');
    const [editorTerms, setEditorTerms] = useState<string>('');
    const siteNameRef = useRef<HTMLInputElement>(null);
    const siteTitleRef = useRef<HTMLInputElement>(null);
    const keywordsRef = useRef<HTMLInputElement>(null);
    const siteDescRef = useRef<HTMLInputElement>(null);
    const smsRef = useRef<HTMLInputElement>(null);

    const handlePrivacyChange = (content: string) => {
        setEditorPrivacy(content);
    };

    const handleTermsChange = (content: string) => {
        setEditorTerms(content);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/setting`);
                if (response.status === 200) {
                    const data = response.data;
                    console.log(data);
                    siteNameRef.current!.value = data.name;
                    siteTitleRef.current!.value = data.title;
                    keywordsRef.current!.value = data.keywords;
                    siteDescRef.current!.value = data.description;
                    smsRef.current!.value = data.contactList.join(',');
                    setEditorPrivacy(data.privacyPolicy);
                    setEditorTerms(data.termsOfService);
                }
            } catch (error) {
                console.log(error);
                console.log('사용자 정보를 가져오는 데 실패했습니다.');
            }
        };

        fetchData();
    }, []);

    const onSubmit = async () => {
        const siteName = siteNameRef.current?.value || '';
        const siteTitle = siteTitleRef.current?.value || '';
        const siteDesc = siteDescRef.current?.value || '';
        const keywords = keywordsRef.current?.value || '';
        const sms = smsRef.current?.value || '';
        const privacyPolicy = editorPrivacy;
        const terms = editorTerms;

        if (
            siteName === '' ||
            siteTitle === '' ||
            siteDesc === '' ||
            sms === '' ||
            keywords === '' ||
            privacyPolicy === '' ||
            privacyPolicy === '<p></p>' ||
            privacyPolicy === '<p><br></p>' ||
            terms === '' ||
            terms === '<p></p>' ||
            terms === '<p><br></p>'
        ) {
            handleOpenModal(`모든 값을 입력해 주세요`, false, handleCancel);
        } else {
            handleOpenModal(`저장 하시겠습니까?`, true, handleConfirm);
        }
    };

    const handleConfirm = async () => {
        const name = siteNameRef.current?.value || '';
        const title = siteTitleRef.current?.value || '';
        const description = siteDescRef.current?.value || '';
        const contactList = smsRef.current?.value || '';
        const privacyPolicy = editorPrivacy;
        const termsOfService = editorTerms;
        const keywords = keywordsRef.current?.value || '';

        const formattedContacts = contactList.split(',').map((item) => {
            const digits = item.replace(/\D/g, '').trim();
            return formatPhone(digits);
        });

        console.log(formattedContacts);

        try {
            setLoading(true);
            const response = await axios.put(`api/setting`, {
                name,
                title,
                contactList: formattedContacts,
                keywords,
                description,
                privacyPolicy,
                termsOfService,
            });

            const data = response.data;
            setLoading(false);

            if (response.status === 200) {
                setSetting({
                    name,
                    title,
                    description,
                    privacyPolicy,
                    termsOfService,
                });
                console.log(response);
                alert(data.message);
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

    const handleCancel = () => {
        setModalVisible(false);
    };

    const thClassName =
        'bg-LightGray border border-Black border-[2px] p-2 text-center w-[30%]';
    const tdClassName =
        'bg-White border border-Black border-[2px] p-2 text-center w-full';

    return (
        <AdminCurrentLayout title='사이트 설정'>
            <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
                <table className='min-w-full border-collapse border border-[2px] border-Black'>
                    <tbody className='text-diagram'>
                        <tr>
                            <th className={thClassName}>사이트명</th>
                            <td className={tdClassName}>
                                <InputField
                                    ref={siteNameRef}
                                    placeholder='사이트명'
                                    className='w-full border-[2px] p-1'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>사이트 타이틀</th>
                            <td className={tdClassName}>
                                <InputField
                                    ref={siteTitleRef}
                                    placeholder='사이트 타이틀'
                                    className='w-full border-[2px] p-1'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>사이트 설명</th>
                            <td className={tdClassName}>
                                <InputField
                                    ref={siteDescRef}
                                    placeholder='사이트 설명'
                                    className='w-full border-[2px] p-1'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>SMS문의 수신번호</th>
                            <td className={tdClassName}>
                                <InputField
                                    ref={smsRef}
                                    placeholder='01012345678'
                                    className='w-full border-[2px] p-1'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>키워드</th>
                            <td className={tdClassName}>
                                <InputField
                                    ref={keywordsRef}
                                    placeholder='키워드'
                                    className='w-full border-[2px] p-1'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>개인정보 처리방침</th>
                            <td className={tdClassName}>
                                <Editor
                                    value={editorPrivacy}
                                    onChange={handlePrivacyChange}
                                    height='160px'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={thClassName}>이용약관</th>
                            <td className={tdClassName}>
                                <Editor
                                    value={editorTerms}
                                    onChange={handleTermsChange}
                                    height='160px'
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='w-full flex justify-center mt-4'>
                    <Button
                        onClick={onSubmit}
                        theme='admin'
                        className='px-10 py-2 border border-[2px]'
                    >
                        저장
                    </Button>
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
        </AdminCurrentLayout>
    );
};

export default AdminConfigForm;
