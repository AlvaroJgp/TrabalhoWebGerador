import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./pages/root"
import Erro from "./pages/Erro"
import Desmotivacional from "./pages/Desmotivacional"
import Motivacional from "./pages/Motivacional"
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Erro />
  },
  {
    path: "Desmotivacional",
    element: <Desmotivacional />,
  },
  {
    path: "Motivacional",
    element: <Motivacional />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
