import NoteListEmpty from "./note-list-empty";
import NoteListHeader from "./note-list-header";
import NoteListSearch from "./note-list-search";

const NoteList = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <NoteListHeader noteTitle="all notes" />
      <NoteListSearch />
      <NoteListEmpty />
    </div>
  );
};

export default NoteList;
