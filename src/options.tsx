import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Options from "./components/options";
import Themes from "./components/options/themes";

export const browserRouter = createHashRouter([
  {
    path: "/",
    element: <Options />,
    children: [
      {
        path: "/",
        element: <div />,
      },
      {
        path: "/themes",
        element: <Themes />,
      },
      {
        path: "/editing",
        element: <div>editing</div>,
      },
      {
        path: "/preview",
        element: <div>preview</div>,
      },
      {
        path: "/keybindings",
        element: <div>key bindings</div>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
);
