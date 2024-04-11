import Kbd from "./kbd";
import CreateNoteIcon from "./svg/write-note-svg";

const NoteListEmpty = () => {
  return (
    <div className="flex h-full items-center justify-center flex-col">
      <CreateNoteIcon />
      <span>
        Press <Kbd>ctrl-n</Kbd> to create new note
      </span>
    </div>
  );
};

export default NoteListEmpty;
