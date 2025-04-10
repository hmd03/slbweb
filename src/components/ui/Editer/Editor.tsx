import React, { useEffect, useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import Toolbar from "./Toolbar";
import { v4 as uuidv4 } from "uuid";

Quill.register("modules/ImageResize", ImageResize);

let isQuillRegistered = false;

interface EditorProps {
  value: string;
  height?: string;
  onChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange, height = '400px' }) => {
  const [isClient, setIsClient] = useState(false);
  const toolbarId = useMemo(() => `toolbar-${uuidv4()}`, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: `#${toolbarId}`,
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    }),
    [toolbarId]
  );

  const fontSizeArr = [
    "8px",
    "9px",
    "10px",
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "42px",
    "54px",
    "68px",
    "84px",
    "98px",
  ];

  useEffect(() => {
    if (!isQuillRegistered) {
      const Size = Quill.import("attributors/style/size");
      const Color = Quill.import("attributors/style/color");
      const Background = Quill.import("attributors/style/background");

      Size.whitelist = fontSizeArr;

      Quill.register(Size, true);
      Quill.register(Color, true);
      Quill.register(Background, true);

      isQuillRegistered = true;
    }

    setIsClient(true);
  }, []);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <Toolbar id={toolbarId} />
      {isClient && (
        <ReactQuill
          style={{ height }}
          theme="snow"
          modules={modules}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Editor;
