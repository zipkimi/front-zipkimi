import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { ROUTES } from "../const/ROUTES";
import NewAccount from "../pages/signUp";
import Success from "../pages/success";
import Login from "../pages/login";
import FindId from "../pages/findId";
import FindPw from "../pages/findPw";
import Find from "../pages/find";
import Verified from "../pages/verified";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<NewAccount />} />
          <Route path={ROUTES.SUCCESS} element={<Success />} />
          <Route path={ROUTES.VERIFIED} element={<Verified />} />
          <Route path={ROUTES.FIND} element={<Find />} />
          <Route path={ROUTES.FIND_ID} element={<FindId />} />
          <Route path={ROUTES.FIND_PW} element={<FindPw />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
