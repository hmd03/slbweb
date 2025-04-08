import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminCurrentLayout from '../../ui/layout/AdminCurrentLayout';
import OutlineButton from '../../ui/buttons/OutlineButton';
import axios from 'axios';
import Button from '../../ui/buttons/Button';
import InputField from '../../ui/inputs/InputField';
import FileInput from '../../ui/inputs/FileInput';
import AlterModal from '../../ui/alters/AlterModal';
import { useRecoilState } from 'recoil';
import { LoadingState } from '../../../store/atom';
import Dropdown from '../../ui/dropdown/Dropdown';

const AdminStoreForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const [loading, setLoading] = useRecoilState(LoadingState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState<() => void>(() => () => {});
  const [isCancelVisible, setIsCancelVisible] = useState(true);

  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [openDate, setOpenDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/stores/${id}`).then((res) => {
        const store = res.data;
        setRegion(store.region);
        setName(store.name);
        setAddress(store.address);
        setPhone(store.phone);
        setTags(store.tags);
        setOpenDate(store.openDate);
        setImagePath(store.thumbnail);
      });
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePath(URL.createObjectURL(file));
    }
  };

  const handleTagChange = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    if (!region || !name || !address || !phone || !openDate || (!id && !imageFile)) {
      setMessage('모든 필드를 입력해주세요.');
      setIsCancelVisible(false);
      setModalVisible(true);
      return;
    }
    setMessage(`${id ? '수정' : '등록'} 하시겠습니까?`);
    setOnConfirm(() => submitData);
    setIsCancelVisible(true);
    setModalVisible(true);
  };

  const submitData = async () => {
    const formData = new FormData();
    formData.append('region', region);
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('openDate', openDate);
    tags.forEach((tag) => formData.append('tags', tag));
    if (imageFile) formData.append('thumbnail', imageFile);

    try {
      setLoading(true);
      const res = id
        ? await axios.put(`/api/stores/${id}`, formData)
        : await axios.post('/api/stores', formData);
      if (res.status === 200 || res.status === 201) navigate('/admin/store');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setModalVisible(false);
    }
  };

  const handleDelete = () => {
    setMessage('삭제 하시겠습니까?');
    setOnConfirm(() => deleteStore);
    setIsCancelVisible(true);
    setModalVisible(true);
  };

  const deleteStore = async () => {
    if (!id) return;
    try {
      setLoading(true);
      await axios.delete(`/api/stores/${id}`);
      navigate('/admin/store');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setModalVisible(false);
    }
  };

  const thClassName = 'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
  const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

  return (
    <AdminCurrentLayout title={`매장 ${id ? '수정' : '등록'}`}>
      <div className='w-full p-5 border border-Black bg-White flex flex-col items-center'>
        <table className='min-w-full border-collapse border border-[2px] border-Black'>
          <tbody>
            <tr>
              <th className={thClassName}>지역</th>
              <td className={tdClassName}>
                <Dropdown
                  placeholder='지역 선택'
                  items={[{ label: '서울', value: '서울' }, { label: '경기', value: '경기' }]}
                  defaultValue={region}
                  onSelectItemHandler={setRegion}
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>매장명</th>
              <td className={tdClassName}>
                <InputField value={name} onChange={(e) => setName(e.target.value)} placeholder='매장명을 입력해 주세요.' />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>주소</th>
              <td className={tdClassName}>
                <InputField value={address} onChange={(e) => setAddress(e.target.value)} placeholder='매장 주소를 입력해 주세요.' />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>연락처</th>
              <td className={tdClassName}>
                <InputField value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='매장 연락처를 입력해 주세요.' />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>썸네일</th>
              <td className={`${tdClassName} h-[15rem]`}>
                    <div className='w-full h-full flex items-end justify-between'>
                        <FileInput
                            id='imgInput'
                            msg={''}
                            accept='image/*'
                            onChange={handleImageChange}
                        />
                        {imagePath !== '' && (
                            <img
                                className='ml-10 w-[12rem] h-[14rem] mr-1'
                                id='thumbnail'
                                alt='thumbnail'
                                src={imagePath}
                            />
                        )}
                    </div>
                </td>
            </tr>
            <tr>
              <th className={thClassName}>태그</th>
              <td className={tdClassName}>
                <label className='mr-4'>
                  <input
                    type='checkbox'
                    checked={tags.includes('홀')}
                    onChange={() => handleTagChange('홀')}
                    className='mr-1'
                  />
                  홀
                </label>
                <label className='mr-4'>
                  <input
                    type='checkbox'
                    checked={tags.includes('포장')}
                    onChange={() => handleTagChange('포장')}
                    className='mr-1'
                  />
                  포장
                </label>
                <label>
                  <input
                    type='checkbox'
                    checked={tags.includes('배달')}
                    onChange={() => handleTagChange('배달')}
                    className='mr-1'
                  />
                  배달
                </label>
              </td>
            </tr>
            <tr>
              <th className={thClassName}>오픈일</th>
              <td className={tdClassName}>
                <InputField type='date' value={openDate} onChange={(e) => setOpenDate(e.target.value)} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='flex w-full items-center justify-center h-fit mt-2 gap-2'>
          <Button onClick={handleSubmit} theme='admin'>
            {id ? '수정' : '등록'}
          </Button>
          {id && <Button onClick={handleDelete} theme='error'>삭제</Button>}
          <OutlineButton onClick={() => navigate('/admin/store')} theme='admin'>목록</OutlineButton>
        </div>
      </div>
      {isModalVisible && (
        <AlterModal
          message={message}
          isCancelVisible={isCancelVisible}
          onConfirm={onConfirm}
          onCancel={() => setModalVisible(false)}
        />
      )}
    </AdminCurrentLayout>
  );
};

export default AdminStoreForm;
