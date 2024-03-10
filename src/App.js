import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div
        className="grid grid-cols-12 p-4 bg-background_body  gap-2"
        theme-mode="dark"
      >
        <div className=" col-span-3 p-20 bg-background_box rounded-lg">
          sidebar
        </div>
        <div className=" col-span-6 p-20 bg-background_box rounded-lg">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path={"/"} element={<Home />} />
            </Routes>
          </Suspense>
        </div>
        <div className=" col-span-3 p-20 bg-background_box rounded-lg">
          more
        </div>
      </div>
    </Router>
  );
}

export default App;
