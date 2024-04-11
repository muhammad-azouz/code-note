import { Eye, Keyboard, Palette, PencilRuler } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdDisplaySettings } from "react-icons/md";
import { useAtomValue } from "jotai";
import themeAtom from "../../atoms/theme-atom";
import { changeTheme } from "../../utiles";
const Options = () => {
  const themeMode = useAtomValue(themeAtom);

  useEffect(() => {
    changeTheme(themeMode);
  }, [themeMode]);
  return (
    <div className="flex w-full h-screen">
      <aside className="lex basis-[220px] relative dark:bg-gray-700 bg-gray-200 dark:text-slate-200 text-slate-700">
        <div className="absolute top-0 end-0 h-full z-0 w-[2px] bg-gray-400 dark:bg-gray-800"></div>
        <div className="flex flex-col w-full h-full">
          <OptionListItem
            title="Generals"
            active={false}
            to="/"
            icon={<MdDisplaySettings size={25} />}
          />
          <OptionListItem
            title="Themes"
            active={true}
            to="Themes"
            icon={<Palette size={25} />}
          />
          <OptionListItem
            title="Editing"
            active={false}
            to="Editing"
            icon={<PencilRuler />}
          />
          <OptionListItem
            title="Preview"
            active={false}
            to="Preview"
            icon={<Eye />}
          />
          <OptionListItem
            title="Keybindings"
            active={false}
            to="Keybindings"
            icon={<Keyboard />}
          />
        </div>
      </aside>
      <div className="flex-1 bg-gray-100 dark:bg-gray-600 text-slate-700 dark:text-slate-200 h-full p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Options;

type OptionListItem = {
  title: string;
  active: boolean;
  to: string;
  icon: ReactNode;
};
const OptionListItem = (props: OptionListItem) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => {
        return `${isActive ? "dark:bg-black/20 bg-gray-300 border-e-2 border-sky-500 " : "border-e-2 dark:border-gray-800 border-gray-400"} z-20 px-4 py-2 w-full flex justify-between`;
      }}
    >
      {props.title}
      {props.icon}
    </NavLink>
  );
};
