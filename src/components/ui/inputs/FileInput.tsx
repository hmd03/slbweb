import React, { useState } from 'react';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  msg: string;
}

const FileInput: React.FC<FileInputProps> = ({ msg, ...inputProps }) => {
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
    <div className="flex items-center">
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        {...inputProps}
      />
      <input
        type="button"
        value="파일 선택"
        onClick={() => document.getElementById(inputProps.id!)?.click()}
        className="bg-gray-300 text-black px-4 py-2 rounded cursor-pointer border border-[2px] border-Black font-bold"
      />
      <label
        htmlFor={inputProps.id}
        className="cursor-pointer text-Black px-4 py-2 whitespace-pre-line text-left"
      >
        {fileName || msg}
      </label>
    </div>
  );
};

export default FileInput;
