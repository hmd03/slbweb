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
import { formatDateYYYYMMDD } from '../../utils/dateUtils';

const AdminStoreForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const [loading, setLoading] = useRecoilState(LoadingState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState<() => void>(() => () => {});
  const [isCancelVisible, setIsCancelVisible] = useState(true);

  const [imageMsg, setImageMsg] = useState<string>('이미지 사이즈 1920X650');

  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [openDate, setOpenDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState('');
  const [defaultRegion, setDefaultRegion] = useState('');

  const [regionList, setRegionList] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/stores/${id}`);
          console.log(response);
          if (response.status === 200) {
            const data = response.data;

            console.log(data);
            setRegion(data.region.code);
            setDefaultRegion(data.region.name);
            setName(data.name);
            setAddress(data.address);
            setPhone(data.contact);
            setTags(data.tags);
            setOpenDate(formatDateYYYYMMDD(data.createdAt));
            getFile(data.media.id, data.media.fileName);
          }
        } catch (error) {
          console.log("사용자 정보를 가져오는 데 실패했습니다.");
        }
      }

      axios
        .get(`/api/regions`)
        .then((res) => {
          const regions = res.data.map(
            (item: { name: string; code: string }) => ({
              label: item.name,
              value: item.code,
            })
          );
          console.log(regions);
          setRegionList(regions);
        })
        .catch((error) => {
          console.error("Error fetching regions:", error);
        });
    };

    fetchData();

  }, [id]);

  const getFile = async (id: string, fileName: string) => {
    try {
      const response = await axios.get(`api/files/${id}`, {
        responseType: "arraybuffer",
      });

      const contentType = response.headers["content-type"];
      const base64String = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
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
      console.log("error: " + error);
      return "";
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newDate = e.target.value;
          setOpenDate(newDate);
      };

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
          console.log('선택된 파일:', file);
      } else {
          setImageFile(null);
          setImagePath('');
          setImageMsg('이미지 사이즈 1920X650');
      }
  };

  const handleTagChange = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    if (!region || !name || !address || !phone || (!id && !imageFile)) {
      handleOpenModal("모든 필드를 입력해주세요.", false, handleConfirm);
      return;
    }

    handleOpenModal(
      `${id ? "수정" : "등록"} 하시겠습니까?`,
      true,
      handleConfirm
    );
  };

  const handleConfirm = async () => {
    try {
      const formData = new FormData();
      formData.append("region", region);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("contact", phone);
      formData.append("openingDate", openDate);
      formData.append("tags", JSON.stringify(tags));
      if (imageFile) formData.append("media", imageFile);

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      if (!id) {
        setLoading(true);
        const response = await axios.post(`/api/stores`, formData);

        const data = response.data;
        setLoading(false);

        if (response.status === 201) {
          onBackPage();
        } else {
          alert(data.message);
        }
      } else {
        setLoading(true);
        const response = await axios.put(`api/stores/${id}`, formData);

        const data = response.data;
        setLoading(false);

        if (response.status === 200) {
          console.log(response);
          onBackPage();
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

  const handleDelClick = () => {
    handleOpenModal("삭제 하시겠습니까?", true, deleteId);
  };

  const deleteId = async () => {
    try {
      if (id) {
        const response = await axios.delete(`api/stores/${id}`);

        console.log(response);
        const data = response.data;

        if (response.status === 200) {
          navigate("/admin/stores");
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      console.log("error: " + error);
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
    navigate('/admin/store');
  };

  const thClassName = 'bg-LightGray border border-Black border-[2px] p-2 text-left text-center';
  const tdClassName = 'bg-White border border-Black border-[2px] p-2 w-[70%]';

  return (
    <AdminCurrentLayout title={`매장 ${id ? "수정" : "등록"}`}>
      <div className="w-full p-5 border border-Black bg-White flex flex-col items-center">
        <table className="min-w-full border-collapse border border-[2px] border-Black">
          <tbody>
            <tr>
              <th className={thClassName}>지역</th>
              <td className={tdClassName}>
                <Dropdown
                  placeholder="지역 선택"
                  items={regionList}
                  defaultValue={defaultRegion}
                  onSelectItemHandler={setRegion}
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>매장명</th>
              <td className={tdClassName}>
                <InputField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="매장명을 입력해 주세요."
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>주소</th>
              <td className={tdClassName}>
                <InputField
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="매장 주소를 입력해 주세요."
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>연락처</th>
              <td className={tdClassName}>
                <InputField
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="매장 연락처를 입력해 주세요."
                />
              </td>
            </tr>
            <tr>
              <th className={thClassName}>썸네일</th>
              <td className={`${tdClassName}`}>
                <div className="w-full flex items-center">
                  <FileInput
                    id="imgInput"
                    msg={imageMsg}
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {imagePath != "" && (
                    <img
                      className="ml-10 w-[6.65rem] h-[2.25rem]"
                      id="thumbnail"
                      alt="thumbnail"
                      src={imagePath}
                    />
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <th className={thClassName}>태그</th>
              <td className={tdClassName}>
                <label className="mr-4">
                  <input
                    type="checkbox"
                    checked={tags.includes("홀")}
                    onChange={() => handleTagChange("홀")}
                    className="mr-1"
                  />
                  홀
                </label>
                <label className="mr-4">
                  <input
                    type="checkbox"
                    checked={tags.includes("포장")}
                    onChange={() => handleTagChange("포장")}
                    className="mr-1"
                  />
                  포장
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={tags.includes("배달")}
                    onChange={() => handleTagChange("배달")}
                    className="mr-1"
                  />
                  배달
                </label>
              </td>
            </tr>
            <tr>
              <th className={thClassName}>오픈일</th>
              <td className={tdClassName}>
                <InputField
                  type="date"
                  value={openDate}
                  onChange={handleDateChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex w-full items-center justify-center h-fit mt-2 gap-2">
          <Button onClick={handleSubmit} theme="admin">
            {id ? "수정" : "등록"}
          </Button>
          {id && (
            <Button onClick={handleDelClick} theme="error">
              삭제
            </Button>
          )}
          <OutlineButton onClick={() => navigate("/admin/store")} theme="admin">
            목록
          </OutlineButton>
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
