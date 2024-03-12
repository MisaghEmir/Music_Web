import { lazy } from "react";


const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));



export const router = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Search />,
    path: "/search",
  },
]