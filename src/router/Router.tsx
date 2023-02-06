import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Fraud from "../pages/Fraud";
import DetailPrevent from "../pages/Fraud/Prevent/Detail/DetailPrevent";
import CreatePrevent from "../pages/Fraud/Prevent/Create/CreatePrevent";
import Home from "../pages/Home";
import { FRAUD, ROUTES } from "../const/ROUTES";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={FRAUD.HOME} element={<Fraud />} />
          <Route path={FRAUD.DETAIL} element={<DetailPrevent />} />
          <Route path={FRAUD.CREATE} element={<CreatePrevent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
