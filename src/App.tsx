import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Fraud from "./pages/Fraud";
import Detail from "./pages/Fraud/Prevent/Detail";
import Register from "./pages/Fraud/Prevent/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Fraud />} />
          <Route path={"/:id"} element={<Detail />} />
          <Route path={"/register"} element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
