import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../ui/buttons/Button';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';

declare global {
  interface Window {
    naver: any;
  }
}

const SubStoreDetailFrom = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const mapRef = useRef<HTMLDivElement | null>(null);
  const deviceInfo = useDeviceInfo();
  let mapHeight = deviceInfo.isMobile || deviceInfo.isSmallScreen ? 200 : 600;
  const [data, setData] = useState<{
    name: string;
    address: string;
    contact: string;
    tags: string;
    img: string;
  }>({
    name: '',
    address: '',
    contact: '',
    tags: '',
    img: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/stores/${id}`);
          if (response.status === 200) {
            const item = response.data;

            let strbase64 = '';
            if (item.media !== null) {
              const fileId = item.media.id;
              strbase64 = await getFile(fileId);
            }

            setData({
              name: item.name,
              address: item.address,
              contact: item.contact,
              tags: item.tags,
              img: strbase64,
            });

            console.log(item);

            if (item.address && item.address.trim() !== '') {
              drawMap(item.address);
            }
          }
        } catch (error) {
          console.log('사용자 정보를 가져오는 데 실패했습니다.');
        }
      }
    };

    fetchData();
  }, [id]);

  const drawMap = (address: string) => {
    if (!address) {
      console.warn('주소가 비어있습니다.');
      return;
    }

    if (window.naver && window.naver.maps && mapRef.current) {
      window.naver.maps.Service.geocode(
        { query: address},
        function (status: string, response: any) {
          console.log('Geocode Status:', status);
          console.log('Geocode Response:', response);

          if (status !== window.naver.maps.Service.Status.OK) {
            alert('주소 변환 실패 (네트워크 문제 또는 주소 인식 실패)');
            return;
          }

          if (!response.v2.addresses || response.v2.addresses.length === 0) {
            alert('주소를 찾을 수 없습니다.');
            return;
          }

          const result = response.v2.addresses[0];
          const location = new window.naver.maps.LatLng(result.y, result.x);

          const map = new window.naver.maps.Map(mapRef.current, {
            center: location,
            zoom: 17,
          });

          const marker = new window.naver.maps.Marker({
            position: location,
            map,
          });

          window.naver.maps.Event.addListener(marker, 'click', () => {
            const searchQuery = encodeURIComponent(address);
            const url = `https://map.naver.com/p/search/${searchQuery}`;
            window.open(url, '_blank');
          });
        }
      );
    }
  };


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

  const onBackPage = () => {
    navigate('/store');
  };

  const tdClassName =
    'flex p-6 w-full border-b-[1px] border-DeepGray text-center Slb-Content justify-between items-center';

  return (
    <div className={`w-full flex justify-center`}>
      <div className='w-full max-w-[1300px]'>
        <div>
          <div className='w-full'>
            <div className='w-full flex flex-col gap-4 mt-10 mb-4'>
              <span className='text-slbTitle'>{data.name}</span>
              <span className='flex gap-4'>
                {data.tags && data.tags.trim() !== ''
                  ? JSON.parse(data.tags).map(
                      (v: React.Key | null | undefined) => (
                        <div
                          key={v}
                          className='flex gap-2 items-center bg-Black rounded-full px-6 py-1 text-White'
                        >
                          <span className='whitespace-nowrap'>{v}</span>
                        </div>
                      )
                    )
                  : null}
              </span>
            </div>
            <div className='w-full flex gap-10 items-center text-slbSubTitle mb-4'>
              <span>주소: {data.address}</span>
              <span>전화번호: {data.contact}</span>
            </div>
            <div className='w-full'>
              <img
                loading='lazy'
                className={`aspect-[1920/650] w-full h-full`}
                alt={data.name}
                src={data.img}
              />
            </div>
            <div className='flex justify-center my-6'>
              <div
                ref={mapRef}
                style={{ width: '100%', height: mapHeight }}
                className='rounded-md shadow-md'
              />
            </div>
          </div>
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

export default SubStoreDetailFrom;
