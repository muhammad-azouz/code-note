import React, { useEffect } from "react";
import { columnVisibilityAtom } from "../atoms/columns-atom";
import { useAtom } from "jotai/react";

interface ShortcutConfig {
  [shortcut: string]: string;
}

export const shortcutConfig: ShortcutConfig = {
  "Ctrl+/": "toggle-notebook",
  "Ctrl+Shift+D": "distraction-free",
  // Add more shortcuts as needed
};

interface ShortcutHandlerProps {
  shortcuts: ShortcutConfig;
}

const ShortcutHandler: React.FC<ShortcutHandlerProps> = ({ shortcuts }) => {
  const [columnVisibility, setColumnVisibility] = useAtom(columnVisibilityAtom);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const shortcut = getShortcutKey(event);
      if (shortcut && shortcuts[shortcut]) {
        event.preventDefault(); // Prevent default browser behavior for the shortcut
        const action = shortcuts[shortcut];
        // Perform action associated with the shortcut
        handleAction(action);
      }
    };

    const getShortcutKey = (event: KeyboardEvent): string | null => {
      const modifiers = [];
      if (event.ctrlKey) modifiers.push("Ctrl");
      if (event.shiftKey) modifiers.push("Shift");
      // Add support for other modifiers like Alt, Meta, etc.
      const key = event.key.toUpperCase();
      return modifiers.length > 0 ? `${modifiers.join("+")}+${key}` : key;
    };

    const handleAction = (action: string) => {
      // Implement action logic here
      if (action === "toggle-notebook") {
        if (!columnVisibility.notebook && !columnVisibility.notelist) {
          setColumnVisibility((old) => ({
            ...old,
            notelist: !old.notelist,
          }));
        } else {
          setColumnVisibility((old) => ({
            ...old,
            notebook: !old.notebook,
            notebookHistory: !old.notebook,
          }));
        }
      }

      if (action === "distraction-free") {
        // If both columns are visible, hide them
        if (columnVisibility.notebook || columnVisibility.notelist) {
          setColumnVisibility((prev) => ({
            ...prev,
            notelist: false,
            notebook: false,
          }));
        } else {
          // If both columns are hidden, toggle visibility of the note list column
          if (!columnVisibility.notebook && !columnVisibility.notelist) {
            setColumnVisibility((prev) => ({
              ...prev,
              notelist: true,
              notebook: prev.notebookHistory,
            }));
          } else {
            // Toggle visibility of both columns
            setColumnVisibility((prev) => ({
              ...prev,
              notelist: !prev.notelist,
              notebook: !prev.notebook,
            }));
          }
        }
      }
    };

    document.addEventListener("keydown", handleShortcut);

    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, [shortcuts, columnVisibility]);

  return null;
};

export default ShortcutHandler;
