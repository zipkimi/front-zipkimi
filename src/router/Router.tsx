import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { ROUTES } from "../const/ROUTES";
import NewAccount from "../pages/signUp";
import Success from "../pages/success";
import Login from "../pages/login";
import Find from "../pages/find";
import Verified from "../pages/verified";
import Input from "../pages/input";
import SingIn from "../pages/singIn";
import Reset from "../pages/reset";
import FindSuccess from "../pages/findSuccess";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/input" element={<Input />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_IN} element={<SingIn />} />
          <Route path={ROUTES.SIGNUP} element={<NewAccount />} />
          <Route path={ROUTES.SUCCESS} element={<Success />} />
          <Route path={ROUTES.VERIFIED} element={<Verified />} />
          <Route path={ROUTES.FIND} element={<Find />} />
          <Route path={ROUTES.FIND_SUCCESS} element={<FindSuccess />} />
          <Route path={ROUTES.RESET} element={<Reset />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
