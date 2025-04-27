import React, { useEffect, useState } from 'react';
import useDeviceInfo from '../../../../hooks/useDeviceInfo';
import axios from 'axios';
import AdminPagination from '../../../ui/paging/AdminPagination';
import { useNavigate, useParams } from 'react-router-dom';

const SubBoardNoticeFrom = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string; }>();

  return (
    <div className={`w-full flex justify-center`}>
      <div className='w-full max-w-[1300px]'>
        <div></div>
      </div>
    </div>
  );
};

export default SubBoardNoticeFrom;
