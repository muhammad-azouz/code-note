import { useAtom } from "jotai";
import themeAtom from "../../atoms/theme-atom";
import Heading from "../heading";
import Select from "../select";
import { ThemeMode } from "../../types/types";

const themeList = [
  { key: "dark", value: "Default Dark UI" },
  { key: "light", value: "Default Light UI" },
];

const Themes = () => {
  const [themeMode, setThemeMode] = useAtom(themeAtom);
  const handleThemSelect = (theme: string) => {
    setThemeMode(theme as ThemeMode);
  };
  return (
    <div className="w-full h-full">
      <Heading>UI Theme</Heading>

      <Select
        items={themeList}
        selectedItem={
          themeList.find((t) => t.key === themeMode) || themeList[0]
        }
        callback={handleThemSelect}
      />

      <div className="flex justify-start mt-2">
        <input type="checkbox" name="useSystemMode" className="basis-4 me-2" />
        <label>
          Automaticaly toggle the default light/dark themes based on system
          preferences
        </label>
      </div>
      <div className="flex justify-start mt-2">
        <input type="checkbox" name="useSystemMode" className="basis-4 me-2" />
        <label>Enable acrylic translucent background</label>
      </div>
    </div>
  );
};

export default Themes;
