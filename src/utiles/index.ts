import { Window } from "@tauri-apps/api/window";

export function getItem<T>(key: string, initValue: T) {
  const savedValue = localStorage.getItem(key);

  if (savedValue) {
    return JSON.parse(savedValue) as T;
  }

  return initValue;
}

export function setItem<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}

export const AppWindow = Window.getCurrent();

export const changeTheme = (theme: "light" | "dark") => {
  // document.querySelector("body")?.setAttribute("data-theme", theme);

  if (theme === "light") {
    document.querySelector("body")?.classList.remove("dark");
    document.querySelector("body")?.classList.add("light");
  } else {
    document.querySelector("body")?.classList.remove("light");
    document.querySelector("body")?.classList.add("dark");
  }
};
