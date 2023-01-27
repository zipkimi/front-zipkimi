import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Fraud from "../pages/Fraud";
import Detail from "../pages/Fraud/Prevent/Detail";
import Create from "../pages/Fraud/Prevent/Create";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Fraud />} />
          <Route path={"/:id"} element={<Detail />} />
          <Route path={"/register"} element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
