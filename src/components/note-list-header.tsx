import { BsPen, BsSortAlphaDown } from "react-icons/bs";
import Button from "./button";
type Props = {
  noteTitle: string;
};
const NoteListHeader = (props: Props) => {
  return (
    <header
      data-tauri-drag-region
      className="flex justify-between w-full gap-2 overflow-hidden p-2"
    >
      <Button>
        <BsSortAlphaDown size={25} />
      </Button>

      <span className="text-lg overflow-ellipsis overflow-hidden ">
        {props.noteTitle}
      </span>

      <Button>
        <BsPen size={25} className="p-[3px]" />
      </Button>
    </header>
  );
};

export default NoteListHeader;
