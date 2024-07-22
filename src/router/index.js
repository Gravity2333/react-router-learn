import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import Recommend from "../pages/Recommend";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/welcome?a:10&b=20&name=test" />,
      },
      {
        path: "/home/welcome",
        element: <Welcome />,
      },
      {
        path: "/home/recommend",
        element: <Recommend />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
