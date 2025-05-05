import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import Button from '../../ui/buttons/Button';
import OutlineButton from '../../ui/buttons/OutlineButton';
import AlterModal from '../../ui/alters/AlterModal';
import InputField from '../../ui/inputs/InputField';
import { LoadingState, UserState } from '../../../store/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { formatDate } from '../../utils/dateUtils';
import axios from 'axios';

const AdminMasterWriteForm: React.FC = () => {
  const [loading, setLoading] = useRecoilState(LoadingState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id, isv } = useParams<{ id?: string; isv?: string }>();
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const { isSupervisor } = useRecoilValue(UserState);

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const chackPasswordRef = useRef<HTMLInputElement>(null);
  const createdAtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/users/${id}`);
          console.log(response.data);
          if (response.status === 200) {
            const data = response.data;
            nameRef.current!.value = data.name;
            idRef.current!.value = data.id;
            createdAtRef.current!.value = formatDate(data.createdAt);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async () => {
    const name = nameRef.current?.value || '';
    const inputid = idRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const checkPassword = chackPasswordRef.current?.value || '';

    setLoading(true);

    if (!/^[가-힣]+$/.test(name)) {
      handleOpenModal('이름은 한글만 가능합니다.', false, handleCancel);
      setLoading(false);
      return;
    }
    if (!/^[a-zA-Z]{6,}$/.test(inputid)) {
      handleOpenModal(
        '아이디는 영어로 최소 6자 이상이어야 합니다.',
        false,
        handleCancel
      );
      setLoading(false);
      return;
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(password)) {
      handleOpenModal(
        '비밀번호는 영어, 숫자, 특수문자를 포함하여 최소 6자 이상이어야 합니다.',
        false,
        handleCancel
      );
      setLoading(false);
      return;
    }
    if (password !== checkPassword) {
      handleOpenModal(
        '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
        false,
        handleCancel
      );
      setLoading(false);
      return;
    }

    handleOpenModal(
      `${!id ? '관리자를' : '수정'} 등록 하시겠습니까?`,
      true,
      handleConfirm
    );

    setModalVisible(true);
  };

  const handleDelClick = () => {
    handleOpenModal('삭제 하시겠습니까?', true, deleteId);
  };

  const deleteId = async () => {
    try {
      if (id) {
        const response = await axios.delete(`api/users/${id}`);

        const data = response.data;

        if (response.status === 200) {
          navigate('/admin/master');
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
    const name = nameRef.current?.value || '';
    const inputid = idRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    try {
      if (!id) {
        const response = await axios.post('/api/auth/signup', {
          id: inputid,
          name: name,
          password: password,
        });

        const data = response.data;

        if (response.status === 201) {
          navigate('/admin/master');
        } else {
          alert(data.message);
        }
      } else {
        const response = await axios.patch(
          `api/users/${id.split('=')[1]}/password`,
          {
            password: password,
          }
        );

        const data = response.data;

        if (response.status === 200) {
          navigate('/admin/master');
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
    navigate('/admin/master');
  };

  const thClassName =
    'bg-LightGray border border-Black border-[2px] p-2 text-left';
  const tdClassName =
    'bg-White border border-Black border-[2px] p-2 text-center w-[70%]';

  return (
    <AdminCurrentLayout title='관리자 등록'>
      <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <thead className='text-diagram'></thead>
          <tbody className='text-diagram'>
            <tr>
              <th className={thClassName}>이름</th>
              <td className={tdClassName}>
                <InputField
                  className=' p-1 w-full border-[2px] '
                  placeholder='한글만 가능'
                  ref={nameRef}
                  autoComplete='id'
                  readOnly={!!id}
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>아이디</th>
              <td className={tdClassName}>
                <InputField
                  className=' p-1 w-full border-[2px] '
                  placeholder='영어(최소 6자 이상)'
                  ref={idRef}
                  autoComplete='name'
                  readOnly={!!id}
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>비밀번호</th>
              <td className={tdClassName}>
                <InputField
                  className=' p-1 w-full border-[2px] '
                  placeholder='영어+숫자+특문(최소 6자 이상)'
                  ref={passwordRef}
                  autoComplete='password'
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>비밀번호 확인</th>
              <td className={tdClassName}>
                <InputField
                  className=' p-1 w-full border-[2px] '
                  placeholder='영어+숫자+특문(최소 6자 이상)'
                  ref={chackPasswordRef}
                  autoComplete='chackPassword'
                />
              </td>
            </tr>
            {!!id && (
              <tr>
                <th className={thClassName}>가입일</th>
                <td className={tdClassName}>
                  <InputField
                    className=' p-1 w-full border-[2px] '
                    ref={createdAtRef}
                    autoComplete='createdAt'
                    readOnly={!!id}
                  />
                </td>
              </tr>
            )}
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
          {isv === '0' && !!id && isSupervisor && (
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

export default AdminMasterWriteForm;
