import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import { router } from "./config/routes";
import TopSinger from "./pages/TopSinger";

function App() {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  return (
    <Router>
      <div
        className="grid text-textSecond_50 grid-cols-12 p-3 px-2 bg-background_body h-[100vh] gap-2"
        theme-mode="dark"
      >
        <div
          className={` ${
            sidebar ? "col-span-3" : "col-span-1"
          } hidden md:block relative`}
        >
          <Sidebar />
        </div>
        <div
          className={`col-span-12 main ${
            sidebar ? "md:col-span-9" : "md:col-span-9"
          }  rounded-lg h-[97vh] notscroll  overflow-scroll relative`}
        >
          <Suspense fallback={<Loading />}>
            <Routes>
              {router.map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
              ))}
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
