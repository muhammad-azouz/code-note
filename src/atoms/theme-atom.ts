import { atomWithStorage } from "jotai/utils";
import { getItem, setItem, removeItem } from "../utiles";
import { ThemeMode } from "../types/types";

const key = "themeMode";
const defaultThemeMode: ThemeMode = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches
  ? "dark"
  : "light";

const themeAtom = atomWithStorage<ThemeMode>(
  "themeMode",
  getItem<ThemeMode>(key, defaultThemeMode),
  {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    subscribe: (key: string, callback: (value: ThemeMode) => void) => {
      const storageEventCallback = (e: StorageEvent) => {
        if (e.key === key && e.newValue) {
          callback(JSON.parse(e.newValue));
        }
      };
      window.addEventListener("storage", storageEventCallback);
      return () => {
        window.removeEventListener("storage", storageEventCallback);
      };
    },
  },
);

export default themeAtom;
