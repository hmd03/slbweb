import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import Toolbar from './Toolbar';
import { v4 as uuidv4 } from 'uuid';
import 'react-quill/dist/quill.snow.css';

Quill.register('modules/ImageResize', ImageResize);

let isQuillRegistered = false;

export interface EditorHandle {
  getHTML: () => string;
  getText: () => string;
  getContents: () => any;
}

interface EditorProps {
  value: string;
  height?: string;
  onChange: (content: string) => void;
}

// forwardRef를 사용해 외부에서 ref 접근 가능하게 처리
const Editor = forwardRef<EditorHandle, EditorProps>(
  ({ value, onChange, height = '400px' }, ref) => {
    const [toolbarId] = useState(() => `toolbar-${uuidv4()}`);
    const quillRef = useRef<ReactQuill | null>(null);

    const fontSizeArr = [
      '8px', '9px', '10px', '12px', '14px', '16px',
      '20px', '24px', '32px', '42px', '54px', '68px',
      '84px', '98px',
    ];

    useEffect(() => {
      if (!isQuillRegistered) {
        const Size = Quill.import('attributors/style/size');
        const Color = Quill.import('attributors/style/color');
        const Background = Quill.import('attributors/style/background');

        Size.whitelist = fontSizeArr;
        Quill.register(Size, true);
        Quill.register(Color, true);
        Quill.register(Background, true);

        isQuillRegistered = true;
      }
    }, []);

    // 외부에서 사용할 수 있도록 함수 정의
    useImperativeHandle(ref, () => ({
      getHTML: () => {
        const editor = quillRef.current?.getEditor();
        return editor ? editor.root.innerHTML : '';
      },
      getText: () => {
        const editor = quillRef.current?.getEditor();
        return editor ? editor.getText() : '';
      },
      getContents: () => {
        const editor = quillRef.current?.getEditor();
        return editor ? editor.getContents() : null;
      },
    }));

    // 강제 onChange (정렬 같은 UI 이벤트까지 수동 반영)
    const forceOnChange = () => {
      const editor = quillRef.current?.getEditor();
      if (editor) {
        onChange(editor.root.innerHTML);
      }
    };

    useEffect(() => {
      const editor = quillRef.current?.getEditor();
      if (!editor) return;

      editor.on('text-change', () => {
        forceOnChange();
      });

      editor.on('selection-change', (range, oldRange, source) => {
        if (range && source === 'user') {
          setTimeout(() => forceOnChange(), 0);
        }
      });

      editor.root.addEventListener('click', () => {
        setTimeout(() => forceOnChange(), 0);
      });
    }, []);

    const modules = useMemo(
      () => ({
        toolbar: {
          container: `#${toolbarId}`,
        },
        ImageResize: {
          parchment: Quill.import('parchment'),
        },
      }),
      [toolbarId]
    );

    return (
      <div className='w-full max-w-[1300px] p-4 bg-white rounded-lg shadow-md'>
        <Toolbar id={toolbarId} />
        <ReactQuill
          ref={quillRef}
          className='font-sans'
          style={{ height }}
          theme='snow'
          modules={modules}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default Editor;
