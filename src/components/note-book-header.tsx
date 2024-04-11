import { Cog } from "lucide-react";
import Button from "./button";
import { Window } from "@tauri-apps/api/window";
import { Webview } from "@tauri-apps/api/webview";
import { AppWindow } from "../utiles";
import { useEffect } from "react";
import { listen } from "@tauri-apps/api/event";

const storageEventCallback = (e: StorageEvent) => {
  if (e.key === "theme" && e.newValue) {
    const b = document.getElementsByTagName("body").item(0);

    if (e.newValue === "dark") {
      b?.classList.remove("dark");
      b?.classList.add("white");
    } else {
      b?.classList.remove("white");
      b?.classList.add("dark");
    }
  }
};

window.addEventListener("storage", storageEventCallback);

const SidebarHeader = () => {
  const handleSettingPressed = async () => {
    const optionWindow = new Window("optionsWindow", {
      center: true,
      parent: AppWindow,
      title: "options",
      width: 900,
      height: 600,
      minHeight: 600,
      maxHeight: 600,
      resizable: true,
    });

    optionWindow.once("tauri://created", () => {
      const webview = new Webview(optionWindow, "optionsView", {
        url: "options.html",
        width: 900,
        height: 600,
        x: 0,
        y: 0,
      });

      webview.once("tauri://error", function (e) {
        // an error happened creating the webview
        console.log(e);
      });
    });
  };

  useEffect(() => {
    // Listen for message from options window to change class name of an element
    listen("changeClassName", (event) => {
      console.log(event);
      // const { elementId, newClassName } = event.payload;
      const element = document.getElementsByTagName("body").item(0);
      if (element) {
        element.classList.toggle("dark");
      }
    });
  }, []);

  return (
    <div data-tauri-drag-region className="flex justify-between w-full p-2 ">
      <div>Codenote</div>
      <Button onClick={handleSettingPressed}>
        <Cog />
      </Button>
    </div>
  );
};

export default SidebarHeader;
