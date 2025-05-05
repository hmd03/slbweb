import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import OutlineButton from '../../ui/buttons/OutlineButton';
import axios from 'axios';
import Button from '../../ui/buttons/Button';
import InputField from '../../ui/inputs/InputField';
import FileInput from '../../ui/inputs/FileInput';
import AlterModal from '../../ui/alters/AlterModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoadingState, UserState } from '../../../store/atom';
import useDeviceInfo from '../../../hooks/useDeviceInfo';

const AdminReviewCardAddModForm: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const { isSupervisor } = useRecoilValue(UserState);

  const [loading, setLoading] = useRecoilState(LoadingState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});

  const titleRef = useRef<HTMLInputElement>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageMsg, setImageMsg] = useState<string>('이미지 사이즈 366X507');

  const [imagePath, setImagePath] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePath(URL.createObjectURL(file));
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImageMsg(`선택한 이미지 사이즈 ${img.width}X${img.height}`);
      };
    } else {
      setImageFile(null);
      setImagePath('');
      setImageMsg('이미지 사이즈 366X507');
    }
  };

  const getFile = async (id: string, fileName: string) => {
    try {
      const response = await axios.get(`api/files/${id}`, {
        responseType: 'arraybuffer',
      });

      const contentType = response.headers['content-type'];
      const base64String = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );

      const strbase64 = `data:${contentType};base64,${base64String}`;

      setImagePath(strbase64);

      const img = new Image();
      img.src = strbase64;
      img.onload = () => {
        setImageMsg(`불러온 이미지 사이즈 ${img.width}X${img.height}`);
      };

      const byteString = atob(base64String);
      const mimeString = contentType;
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });
      const file = new File([blob], fileName, { type: mimeString });

      setImageFile(file);

      return strbase64;
    } catch (error) {
      console.log('error: ' + error);
      return '';
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/content/cards/${id}`);
          if (response.status === 200) {
            const data = response.data;

            titleRef.current!.value = data.title;

            if (data.media.fileName !== null) {
              getFile(data.media.id, data.media.fileName);
            }
          }
        } catch (error) {
          console.log('Error :', error);
        }
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async () => {
    const title = titleRef.current?.value || '';

    const isImageSelected = imageFile !== null;

    const isTitleEmpty = title === '';
    const isIdUndefined = id === undefined;

    if (!isImageSelected || isTitleEmpty) {
      const errorMessage = `제목, 이미지를 등록 해주세요`;
      handleOpenModal(errorMessage, false, handleCancel);
    } else {
      handleOpenModal(`등록 하시겠습니까?`, true, handleConfirm);
    }
  };

  const handleConfirm = async () => {
    const title = titleRef.current?.value || '';
    const media = imageFile;

    try {
      const formData = new FormData();
      formData.append('type', 'review');
      formData.append('title', title);

      if (media !== null) {
        formData.append('media', media);

        if (!id) {
          setLoading(true);
          const response = await axios.post(`/api/content/cards`, formData);

          const data = response.data;
          setLoading(false);

          if (response.status === 201) {
            navigate('/admin/card/review');
          } else {
            alert(data.message);
          }
        } else {
          setLoading(true);
          const response = await axios.put(`api/content/cards/${id}`, formData);

          const data = response.data;
          setLoading(false);

          if (response.status === 200) {
            navigate('/admin/card/review');
          } else {
            alert(data.message);
          }
        }
      }
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
      setModalVisible(false);
    }
  };

  const handleDelClick = () => {
    handleOpenModal('삭제 하시겠습니까?', true, deleteId);
  };

  const deleteId = async () => {
    try {
      if (id) {
        const response = await axios.delete(`api/content/cards/${id}`);

        const data = response.data;

        if (response.status === 200) {
          navigate('/admin/banner');
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

  const handleCancel = () => {
    setModalVisible(false);
  };

  const onBackPage = () => {
    navigate('/admin/card/review');
  };

  const thClassName =
    'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
  const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

  return (
    <AdminCurrentLayout
      title={`리뷰 카드 ${id !== undefined ? '수정' : ''} 등록`}
    >
      <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <thead className='text-diagram'></thead>
          <tbody className='text-diagram'>
            <tr>
              <th className={thClassName}>리뷰 카드 제목</th>
              <td className={`${tdClassName} text-center`}>
                <InputField
                  className=' p-1 w-full border-[2px] '
                  placeholder='제목을 입력해 주세요.'
                  ref={titleRef}
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>리뷰 카드 이미지</th>
              <td className={`${tdClassName}`}>
                <div
                  className={`w-full flex ${
                    deviceInfo.isSmallScreen || deviceInfo.isMobile
                      ? 'flex-col'
                      : 'flex-row items-center '
                  }`}
                >
                  <FileInput
                    id='imgInput'
                    msg={imageMsg}
                    accept='image/*'
                    onChange={handleImageChange}
                  />
                  {imagePath !== '' && (
                    <img
                      className='ml-10 w-[6.65rem] h-[2.25rem]'
                      id='thumbnail'
                      alt='thumbnail'
                      src={imagePath}
                    />
                  )}
                </div>
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

export default AdminReviewCardAddModForm;
