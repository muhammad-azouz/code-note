import Preview from "./preview";
import Editor from "./editor";
import { useState, useCallback } from "react";

const EditorContainer = () => {
  const [doc, setDoc] = useState<string>("# Hello, World!\n");

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);
  return (
    <div className="text-white flex flex-1  justify-between items-center antialiased overflow-auto">
      {/* <WorkdeskPlaner className="text-gray-500" /> */}
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  );
};

export default EditorContainer;
