import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface Props {
  title?: string;
}

const AppBar = (props: Props) => {
  const { title } = props;
  const navigate = useNavigate();

  const onBackButtonHandler = () => {
    navigate(-1);
  };

  return (
    <div className='flex items-center p-4 w-full'>
      <MdArrowBackIosNew
        onClick={onBackButtonHandler}
        className='w-6 h-6 cursor-pointer'
      />
      <p className='headline3 ml-2'>{title}</p>
    </div>
  );
};

export default AppBar;
