import React, { useState } from 'react';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  msg: string;
  type?: string;
}

const FileInput: React.FC<FileInputProps> = ({ msg, type = 'admin', ...inputProps }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div className='flex items-center'>
      <input
        type='file'
        onChange={handleFileChange}
        className='hidden'
        {...inputProps}
      />
      <input
        type='button'
        value='파일 선택'
        onClick={() => document.getElementById(inputProps.id!)?.click()}
        className={`${
          type === 'main'
            ? 'bg-White border-[2px] border-[#d1d5db4D]'
            : 'bg-gray-300 border-[2px] rounded font-bold border-Black'
        }  text-black px-4 py-2 cursor-pointer border `}
      />
      <label
        htmlFor={inputProps.id}
        className='cursor-pointer text-Black px-4 py-2 whitespace-pre-line text-left'
      >
        {fileName || msg}
      </label>
    </div>
  );
};

export default FileInput;
