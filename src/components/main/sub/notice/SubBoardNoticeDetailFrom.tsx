import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDate } from '../../../utils/dateUtils';
import Button from '../../../ui/buttons/Button';

const SubBoardNoticeFrom = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<{
    title: string;
    createdAt: string;
    content: string;
  }>({ title: '', createdAt: '', content: '' });

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/notices/${id}`);
          if (response.status === 200) {
            const item = response.data;
            console.log('item.content :', item.content);
            setData({
              title: item.title,
              createdAt: item.createdAt,
              content: item.content,
            });
          }
        } catch (error) {
          console.log('Error :', error);
        }
      }
    };

    fetchData();
  }, [id]);

  const onBackPage = () => {
    navigate('/board/notice');
  };

  const tdClassName =
    'flex p-6 w-full border-b-[1px] border-DeepGray text-center Slb-Content justify-between items-center';

  return (
    <div className={`w-full flex justify-center`}>
      <div className='w-full max-w-[1300px]'>
        <div>
          <table className='min-w-full border-collapse mt-10 border-t-[2px] border-Black'>
            <thead className=''></thead>
            <tbody className=''>
              <tr>
                <td className={`${tdClassName}`}>
                  <span>{data.title}</span>
                  <span className='text-[12px]'>
                    {formatDate(data.createdAt)}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="w-full font-sans">
                  <div className="ql-snow">
                    <div
                      className="ql-editor"
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='flex justify-center my-20'>
            <Button
              onClick={onBackPage}
              theme='admin'
              className='px-12 py-4 rounded-full'
            >
              목록보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBoardNoticeFrom;
