import { LiHTMLAttributes, ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  title: string;
  selected: boolean;
  noteCount?: number;
  minun?: boolean;
  heading?: boolean;
  button?: ReactNode;
} & LiHTMLAttributes<HTMLLIElement>;
const NotebookListItem = (props: Props) => {
  const { icon, title, selected, noteCount, ...other } = props;
  return (
    <li
      {...other}
      className={`px-5 items-center justify-between ${selected ? "bg-gray-600" : ""} cursor-pointer ${props.minun ? "ps-12 " : ""} ${!props.heading ? "hover:bg-black/20" : "text-gray-400"}`}
    >
      <div className="flex flex-row items-center h-8">
        <div className="text-sm flex items-center gap-1 tracking-wide flex-1">
          {icon}
          {title}
        </div>
        <div className="text-xs w-8 justify-center flex me-[-10px] ">
          {noteCount}
          {props.button}
        </div>
      </div>
    </li>
  );
};

export default NotebookListItem;
