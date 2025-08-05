import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import OutlineButton from '../../ui/buttons/OutlineButton';
import axios from 'axios';
import { formatDate } from '../../utils/dateUtils';
import Button from '../../ui/buttons/Button';
import AlterModal from '../../ui/alters/AlterModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoadingState, UserState } from '../../../store/atom';

const AdminBoardCsViewForm: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id?: string }>();
  const { isSupervisor } = useRecoilValue(UserState);
  const [loading, setLoading] = useRecoilState(LoadingState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCancelVisible, setIsCancelVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [fileBase64, setFileBase64] = useState('');
  const [item, setItem] = useState({
    id: '',
    category: '',
    sender: '',
    senderContact: '',
    senderEmail: '',
    content: '',
    createdAt: '',
    fileName: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        try {
          const response = await axios.get(
            `/api/customer/inquiries/${params.id}`
          );
          if (response.status === 200) {
            const data = response.data;
            let fileName = '';
            if (data.media !== null) {
              const fileId = data.media.id;
              fileName = data.media.fileName;
              const fileitem = await getFile(fileId);
              setFileBase64(fileitem);
            }

            setItem({
              id: data.id,
              category: data.category.name,
              sender: data.sender.name,
              senderContact: data.sender.contact,
              senderEmail: data.sender.email,
              content: data.content,
              createdAt: formatDate(data.createdAt),
              fileName: fileName,
            });
          }
        } catch (error) {
          console.log('error: ' + error);
        }
      }
    };

    fetchData();
  }, [params.id]);

  const getFile = async (id: string) => {
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

      return strbase64;
    } catch (error) {
      console.log('error: ' + error);
      return '';
    }
  };

  const handleDownload = () => {
    if (!fileBase64) return;

    const link = document.createElement('a');
    link.href = fileBase64;
    link.download = item.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onBackPage = () => {
    navigate('/admin/board/cs');
  };

  const handleDelClick = () => {
    handleOpenModal('삭제 하시겠습니까?', true, deleteId);
  };

  const deleteId = async () => {
    try {
      if (params.id) {
        setLoading(true);
        const response = await axios.delete(
          `api/customer/inquiries/${params.id}`
        );

        const data = response.data;
        setLoading(false);

        if (response.status === 200) {
          navigate('/admin/board/cs');
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

  const thClassName =
    'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
  const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

  return (
    <AdminCurrentLayout title='고객문의 상세보기'>
      <div className='w-full h-fit p-5 border border-Black bg-White flex flex-col items-center justify-center'>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <thead className='text-diagram'></thead>
          <tbody className='text-diagram'>
            <tr>
              <th className={thClassName}>분류</th>
              <td className={tdClassName}>{item.category}</td>
            </tr>
            <tr>
              <th className={thClassName}>이름</th>
              <td className={tdClassName}>{item.sender}</td>
            </tr>
            <tr>
              <th className={thClassName}>연락처</th>
              <td className={tdClassName}>{item.senderContact}</td>
            </tr>
            <tr>
              <th className={thClassName}>E-mail</th>
              <td className={tdClassName}>{item.senderEmail}</td>
            </tr>
            <tr>
              <th className={thClassName}>신청일</th>
              <td className={tdClassName}>{item.createdAt}</td>
            </tr>
            <tr>
              <th className={thClassName}>첨부파일</th>
              <td className={tdClassName}>
                {item.fileName ? (
                  <>
                    <OutlineButton
                      theme='admin'
                      onClick={handleDownload}
                      className='px-4 py-1 mr-2'
                    >
                      다운로드
                    </OutlineButton>
                    {item.fileName}
                  </>
                ) : (
                  '첨부파일 없음'
                )}
              </td>
            </tr>
            <tr>
              <th className={thClassName}>제안 내용</th>
              <td className={`${tdClassName} h-[300px]`}>{item.content}</td>
            </tr>
          </tbody>
        </table>
        <div className='flex w-full items-center justify-center h-fit mt-2'>
          {isSupervisor && (
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

export default AdminBoardCsViewForm;
