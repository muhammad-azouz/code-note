import { CiSearch } from "react-icons/ci";
const NoteListSearch = () => {
  return (
    <div className="flex dark:bg-gray-700 bg-gray-300 px-2 py-1 m-2 rounded">
      <CiSearch size={25} />
      <input
        autoComplete="off"
        name="noteSearch"
        className="bg-transparent outline-none"
        placeholder="Filter"
      />
    </div>
  );
};

export default NoteListSearch;
