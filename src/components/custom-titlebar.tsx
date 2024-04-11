import { Minimize2, Minus, X, Maximize2 } from "lucide-react";
import { useState } from "react";
import { AppWindow } from "../utiles";

const CustomTitlebar = () => {
  const handleMinimize = () => AppWindow.minimize();
  const handleClose = () => AppWindow.close();

  const toggleMaximize = async () => {
    await AppWindow.toggleMaximize();
    const isMax = await AppWindow.isMaximized();
    setIsMaximaized(!isMax);
  };
  const [isMaximized, setIsMaximaized] = useState(true);

  return (
    <div
      data-tauri-drag-region
      className="flex justify-end select-none dark:text-gray-600  opacity-70 w-full"
    >
      <TitlebarButton onClick={handleMinimize}>
        <Minus />
      </TitlebarButton>
      <TitlebarButton onClick={toggleMaximize}>
        {isMaximized ? <Maximize2 /> : <Minimize2 />}
      </TitlebarButton>
      <TitlebarButton onClick={handleClose}>
        <X />
      </TitlebarButton>
    </div>
  );
};

export default CustomTitlebar;

type TitlebarButtonProps = { children: React.ReactNode; onClick: () => void };
const TitlebarButton = (props: TitlebarButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="inline-flex content-center items-center w-[30px] h-[30px] dark:text-gray-300 dark:hover:bg-gray-800 hover:bg-gray-500/30 p-1 hover:last:bg-red-600"
    >
      {props.children}
    </button>
  );
};
