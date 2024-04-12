import { useAtomValue } from "jotai";
import {
  firstColumnAtom,
  middleColumnAtom,
  columnVisibilityAtom,
} from "./atoms/columns-atom";
import Notebooks from "./components/note-book";
import ThreeColumnLayout from "./components/three-column-layout";
import CustomTitlebar from "./components/custom-titlebar";
import ShortcutHandler, { shortcutConfig } from "./components/action-handler";
import NoteList from "./components/note-list";
import EditorContainer from "./components/editor-container";

function App() {
  const firstColumnWidth = useAtomValue(firstColumnAtom);
  const middleColumnWidth = useAtomValue(middleColumnAtom);
  const columnVisibility = useAtomValue(columnVisibilityAtom);

  return (
    <>
      <ShortcutHandler shortcuts={shortcutConfig} />
      <ThreeColumnLayout
        renderNotebook={() => <Notebooks />}
        renderNoteList={() => <NoteList />}
        renderThirdColumn={() => (
          <div data-tauri-drag-region className="flex flex-col h-full">
            <CustomTitlebar />
            <EditorContainer />
          </div>
        )}
        notebookWidth={firstColumnWidth}
        notebookVisible={columnVisibility.notebook}
        noteListWidth={middleColumnWidth}
        noteListVisible={columnVisibility.notelist}
      />
    </>
  );
}

export default App;
