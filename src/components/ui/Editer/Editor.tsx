import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
import Toolbar from './Toolbar';

Quill.register('modules/ImageResize', ImageResize);

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const fontSizeArr = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];
  var Size = Quill.import("attributors/style/size");
  Size.whitelist = fontSizeArr;
  Quill.register(Size, true);

  const modules = {
    toolbar: {
      container: "#toolbar",
    },
    ImageResize: {
      parchment: Quill.import('parchment')
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <Toolbar />
      <ReactQuill 
        className="h-[400px]"
        theme="snow" 
        modules={modules} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default Editor;
