import React, { useState } from 'react';
import Editor from '../components/ui/Editer/Editor';

const Test = () => {
    const [editorContent, setEditorContent] = useState<string>('');

    const handleEditorChange = (content: string) => {
        console.log(content);
        setEditorContent(content);
    };
  return (
    <div className="w-full h-full flex items-center justify-center">
        <Editor value={editorContent} onChange={handleEditorChange} /> 
    </div>
  );
};

export default Test;
