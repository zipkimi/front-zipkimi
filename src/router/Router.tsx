import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Fraud from "../pages/Fraud";
import DetailPrevent from "../pages/Fraud/Prevent/Detail/DetailPrevent";
import CreatePrevent from "../pages/Fraud/Prevent/Create/CreatePrevent";
import Home from "../pages/Home";
import { FRAUD, ROUTES } from "../const/ROUTES";
import NewAccount from "../pages/newAccount";
import Success from "../pages/success";
import Sms from "../pages/sms";
import Login from "../pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.NEW} element={<NewAccount />} />
          <Route path={ROUTES.SUCCESS} element={<Success />} />
          <Route path={ROUTES.SMS} element={<Sms />} />
          <Route path={FRAUD.HOME} element={<Fraud />} />
          <Route path={FRAUD.DETAIL} element={<DetailPrevent />} />
          <Route path={FRAUD.CREATE} element={<CreatePrevent />} />
          <Route path={FRAUD.CREATE} element={<CreatePrevent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
