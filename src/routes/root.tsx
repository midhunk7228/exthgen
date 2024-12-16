import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
]);
