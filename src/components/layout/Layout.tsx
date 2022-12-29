import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;

const Wrapper = styled.main`
  width: 1200px;
  margin: auto;
`;
