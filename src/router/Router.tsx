import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Fraud from "../pages/Fraud";
import DetailPrevent from "../pages/Fraud/Prevent/Detail/DetailPrevent";
import Create from "../pages/Fraud/Prevent/Create/CreatePrevent";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Fraud />} />
          <Route path={"/:id"} element={<DetailPrevent />} />
          <Route path={"/register"} element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
