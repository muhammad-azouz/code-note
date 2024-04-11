import * as React from "react";
import { useCallback, useEffect } from "react";
import useResizableColumn from "../hooks/useResizableColumn";
import { useAtomValue } from "jotai";
import themeAtom from "../atoms/theme-atom";
import { changeTheme } from "../utiles";
export type ThreeColumnLayoutProps = {
  type: "three-column";
  notebookVisible: boolean;
  noteListVisible: boolean;
};
type RenderView = (callbacks: ThreeColumnLayoutProps) => React.ReactNode;
type Props = {
  renderNotebook: RenderView;
  renderNoteList: RenderView;
  renderThirdColumn: RenderView;
  notebookVisible?: boolean;
  noteListVisible?: boolean;
  notebookWidth?: number;
  noteListWidth?: number;
};

const ThreeColumnLayout = ({
  renderNotebook,
  renderNoteList,
  renderThirdColumn,
  notebookVisible = true,
  noteListVisible = true,
  notebookWidth,
  noteListWidth,
}: Props) => {
  const [leftWidth, setLeftWidth] = React.useState(
    notebookVisible ? notebookWidth : 0,
  );
  const [middleWidth, setMiddleWidth] = React.useState(
    noteListVisible ? noteListWidth : 0,
  );

  const toggleLeftView = useCallback(
    (visible: boolean) => {
      setLeftWidth(visible ? notebookWidth : 0);
    },
    [notebookWidth],
  );

  const themeMode = useAtomValue(themeAtom);

  useEffect(() => {
    changeTheme(themeMode);
  }, [themeMode]);

  const toggleMiddleView = useCallback(
    (visible: boolean) => {
      setMiddleWidth(visible ? noteListWidth : 0);
    },
    [noteListWidth],
  );

  useEffect(() => {
    toggleLeftView(notebookVisible);
  }, [notebookVisible, toggleLeftView]);

  useEffect(() => {
    toggleMiddleView(noteListVisible);
  }, [noteListVisible, toggleMiddleView]);

  // resize notebook section
  const notebookRef = React.useRef<HTMLDivElement>(null);
  const { handleMouseDown: rsMouseDownHandler } = useResizableColumn(
    notebookRef,
    (n: number) => setLeftWidth(n),
  );

  // resize notebook section
  const noteListRef = React.useRef<HTMLDivElement>(null);
  const { handleMouseDown: handleNoteListResize } = useResizableColumn(
    noteListRef,
    (n: number) => setMiddleWidth(n),
  );

  return (
    <div className="flex h-svh dark:text-slate-300 text-slate-700">
      <aside
        className={`flex-none transition-width duration-200 ease-in-out text-nowrap select-none overflow-hidden  max-w-[500px] relative text-slate-300 bg-gray-700`}
        style={{ width: leftWidth }}
        ref={notebookRef}
      >
        {renderNotebook({
          type: "three-column",
          notebookVisible,
          noteListVisible,
        })}
        <div
          className="absolute w-1  end-0 top-0 h-full cursor-col-resize"
          onMouseDown={rsMouseDownHandler}
        ></div>
      </aside>
      <aside
        className="flex-none transition-width duration-200 ease-in-out  text-nowrap select-none overflow-hidden relative dark:bg-gray-600 bg-gray-200"
        style={{ width: middleWidth }}
        ref={noteListRef}
      >
        {renderNoteList({
          type: "three-column",
          notebookVisible,
          noteListVisible,
        })}
        <div
          className="absolute w-1  end-0 top-0 h-full cursor-col-resize"
          onMouseDown={handleNoteListResize}
        ></div>
      </aside>
      <main className="flex-grow dark:bg-gray-700 bg-gray-100">
        {renderThirdColumn({
          type: "three-column",
          notebookVisible,
          noteListVisible,
        })}
      </main>
    </div>
  );
};

export default ThreeColumnLayout;
