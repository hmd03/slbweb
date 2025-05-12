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

const registerImageFormat = (): void => {
    const Parchment = Quill.import('parchment');
    const BaseImage = Quill.import('formats/image') as any;
    const ATTRIBUTES = [
        'alt',
        'height',
        'width',
        'style',
        'float',
        'display',
        'margin',
    ];

    class ImageFormat extends BaseImage {
        static formats(domNode: HTMLElement): Record<string, string> {
            return ATTRIBUTES.reduce(
                (formats: Record<string, string>, attr: string) =>
                    domNode.hasAttribute(attr)
                        ? { ...formats, [attr]: domNode.getAttribute(attr)! }
                        : formats,
                {}
            );
        }

        format(name: string, value: string): void {
            if (ATTRIBUTES.includes(name)) {
                if (value) this.domNode.setAttribute(name, value);
                else this.domNode.removeAttribute(name);
            } else {
                super.format(name, value);
            }
        }
    }

    Quill.register(ImageFormat, true);

    const Display = new Parchment.Attributor.Style('display', 'display', {
        whitelist: ['inline', 'block'],
    });
    const Float = new Parchment.Attributor.Style('float', 'float', {
        whitelist: ['left', 'right', 'none'],
    });
    const Margin = new Parchment.Attributor.Style('margin', 'margin', {});
    Quill.register(Display, true);
    Quill.register(Float, true);
    Quill.register(Margin, true);
};

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

const Editor = forwardRef<EditorHandle, EditorProps>(
    ({ value, onChange, height = '400px' }, ref) => {
        const [toolbarId] = useState<string>(() => `toolbar-${uuidv4()}`);
        const quillRef = useRef<ReactQuill | null>(null);

        const fontSizeArr = [
            '8px',
            '9px',
            '10px',
            '12px',
            '14px',
            '16px',
            '20px',
            '24px',
            '32px',
            '42px',
            '54px',
            '68px',
            '84px',
            '98px',
        ];

        useEffect(() => {
            if (!isQuillRegistered) {
                const Size = Quill.import('attributors/style/size') as any;
                const Color = Quill.import('attributors/style/color') as any;
                const Background = Quill.import(
                    'attributors/style/background'
                ) as any;

                Size.whitelist = fontSizeArr;
                Quill.register(Size, true);
                Quill.register(Color, true);
                Quill.register(Background, true);

                registerImageFormat();
                isQuillRegistered = true;
            }
        }, []);

        useImperativeHandle(ref, () => ({
            getHTML: (): string =>
                quillRef.current?.getEditor().root.innerHTML || '',
            getText: (): string =>
                quillRef.current?.getEditor().getText() || '',
            getContents: (): any =>
                quillRef.current?.getEditor().getContents() || null,
        }));

        const forceOnChange = (): void => {
            const editor = quillRef.current?.getEditor();
            if (editor) onChange(editor.root.innerHTML);
        };

        useEffect(() => {
            const editor = quillRef.current?.getEditor();
            if (!editor) return;
            editor.on('text-change', forceOnChange);
            editor.on('selection-change', (range, oldRange, source) => {
                if (range && source === 'user') setTimeout(forceOnChange, 0);
            });
            editor.root.addEventListener('click', () =>
                setTimeout(forceOnChange, 0)
            );
        }, []);

        const modules = useMemo(
            () => ({
                toolbar: { container: `#${toolbarId}` },
                ImageResize: { parchment: Quill.import('parchment') },
            }),
            [toolbarId]
        );

        const formats = useMemo<string[]>(
            () => [
                'header',
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'list',
                'bullet',
                'indent',
                'link',
                'image',
                'size',
                'color',
                'background',
                'width',
                'height',
                'style',
                'float',
                'display',
                'margin',
                'align',
            ],
            []
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
                    formats={formats}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
);

export default Editor;
