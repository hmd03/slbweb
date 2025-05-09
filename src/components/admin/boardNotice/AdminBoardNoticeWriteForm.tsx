import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import Button from '../../ui/buttons/Button';
import OutlineButton from '../../ui/buttons/OutlineButton';
import AlterModal from '../../ui/alters/AlterModal';
import InputField from '../../ui/inputs/InputField';
import { LoadingState, UserState } from '../../../store/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import Editor, { EditorHandle } from '../../ui/Editer/Editor';
import RadioButtonGroup from '../../ui/radio/RadioButtonGroup';

const AdminBoardNoticeWriteForm: React.FC = () => {
  const [loading, setLoading] = useRecoilState(LoadingState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const { isSupervisor } = useRecoilValue(UserState);

  const editorRef = useRef<EditorHandle>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const [selectedOption, setSelectedOption] = useState('1');
  const [editorContent, setEditorContent] = useState<string>('');

  const options = [
    { id: 'option1', name: 'group1', value: '1', label: '공지' },
    { id: 'option2', name: 'group1', value: '0', label: '일반' },
  ];

  const handleChange = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/notices/${id}`);
          if (response.status === 200) {
            const data = response.data;
            titleRef.current!.value = data.title;
            setSelectedOption(data.isNotice === true ? '1' : '0');
            setEditorContent(data.content);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async () => {
    const title = titleRef.current?.value || '';
    const content = editorRef.current?.getHTML() || '';

    console.log('content:', content);
    if (
      title === '' ||
      content === '' ||
      content === '<p></p>' ||
      content === '<p><br></p>'
    ) {
      handleOpenModal(`제목, 공지 내용을 확인해 주세요.`, false, handleCancel);
    } else {
      handleOpenModal(`등록 하시겠습니까?`, true, handleConfirm);
    }
  };

  const handleDelClick = () => {
    handleOpenModal('삭제 하시겠습니까?', true, deleteId);
  };

  const deleteId = async () => {
    try {
      if (id) {
        const response = await axios.delete(`api/notices/${id}`);

        const data = response.data;

        if (response.status === 200) {
          navigate('/admin/board/notice');
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      console.log('error: ' + error);
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

  const handleConfirm = async () => {
    const title = titleRef.current?.value || '';
    const isNotice = selectedOption === '1';
    const content = editorRef.current?.getHTML() || '';

    try {
      if (!id) {
        setLoading(true);
        const response = await axios.post('/api/notices', {
          title: title,
          isNotice: isNotice,
          content: content,
        });

        const data = response.data;
        setLoading(false);

        if (response.status === 201) {
          navigate('/admin/board/notice');
        } else {
          alert(data.message);
        }
      } else {
        setLoading(true);
        const response = await axios.put(`api/notices/${id}`, {
          title: title,
          isNotice: isNotice,
          content: content,
        });

        const data = response.data;
        setLoading(false);

        if (response.status === 200) {
          navigate('/admin/board/notice');
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
      setModalVisible(false);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const onBackPage = () => {
    navigate('/admin/board/notice');
  };

  const thClassName =
    'bg-LightGray border border-Black border-[2px] p-2 text-left text-center w-[30%]';
  const tdClassName =
    'bg-White border border-Black border-[2px] p-2 text-center w-full';

  return (
    <AdminCurrentLayout title='공지&뉴스 등록'>
      <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <thead className='text-diagram'></thead>
          <tbody className='text-diagram'>
            <tr>
              <th className={thClassName}>제목</th>
              <td className={tdClassName}>
                <InputField
                  className=' p-1 w-full border-[2px] '
                  placeholder='제목'
                  ref={titleRef}
                  autoComplete='id'
                  // readOnly={!!id}
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>공지</th>
              <td className={tdClassName}>
                <RadioButtonGroup
                  options={options}
                  selectedOption={selectedOption}
                  onChange={handleChange}
                  className='radio-group flex gap-2'
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>내용</th>
              <td className={`${tdClassName}`}>
              <Editor ref={editorRef} value={editorContent} onChange={handleEditorChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='flex w-full items-center justify-center h-fit mt-2 gap-2'>
          <Button
            onClick={onSubmit}
            theme='admin'
            className='px-8 py-[14px] border border-[2px]'
          >
            {!id ? '등록' : '수정'}
          </Button>
          {!!id && isSupervisor && (
            <Button
              onClick={handleDelClick}
              theme='error'
              className='px-8 py-[14px] border border-[2px]'
            >
              삭제
            </Button>
          )}
          <OutlineButton
            onClick={onBackPage}
            theme='admin'
            className='px-8 py-[13px]'
          >
            ← 목록
          </OutlineButton>
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

export default AdminBoardNoticeWriteForm;
