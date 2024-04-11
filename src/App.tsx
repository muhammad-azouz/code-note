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
import Editor from "./components/editor";
import NoteList from "./components/note-list";

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
            <Editor />
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
