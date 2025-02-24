import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/Index";
import Portfolio from "../pages/Portfolio/Index";
import PortfolioDetails from "../pages/Portfolio/PortfolioDetails";
import Careers from "../pages/Careers/Index";
import Blogs from "../pages/Blogs/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "portfolio-details/:id",
    element: <PortfolioDetails />,
  },
  {
    path: "careers",
    element: <Careers />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
]);
