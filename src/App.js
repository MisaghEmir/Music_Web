import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";

function App() {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  return (
    <Router>
      <div
        className="grid text-textSecond_50 grid-cols-12 p-4 bg-background_body h-[100vh] gap-2"
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
            sidebar ? "md:col-span-7" : "md:col-span-9"
          }  rounded-lg`}
        >
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path={"/"} element={<Home />} />
            </Routes>
          </Suspense>
        </div>
        <div className=" col-span-2 hidden md:block p-20 bg-background_box rounded-lg">
          more
        </div>
      </div>
    </Router>
  );
}

export default App;
