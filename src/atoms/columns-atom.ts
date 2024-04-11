import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";
import { getItem, setItem, removeItem } from "../utiles";

export const firstColumnAtom = atom(240);
export const middleColumnAtom = atom(270);

type ColumnVisibility = {
  notebook: boolean;
  notelist: boolean;
  notebookHistory: boolean;
};
// merchant atom
const notebookKey = "columnVisibility";
export const columnVisibilityAtom = atomWithStorage<ColumnVisibility>(
  notebookKey,
  getItem<ColumnVisibility>(notebookKey, {
    notebook: true,
    notelist: true,
    notebookHistory: true,
  }),
  {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    subscribe: (key: string, callback: (value: ColumnVisibility) => void) => {
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
