import React, { useCallback, useEffect } from "react";
import useCodeMirror from "../hooks/use-codemirror";
import { EditorState } from "@codemirror/state";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props;

  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange],
  );

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView]);

  return <div className="flex-1 h-full" ref={refContainer}></div>;
};

export default Editor;
