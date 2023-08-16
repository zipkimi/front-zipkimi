import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;

const Wrapper = styled.main`
  width: 100%;
  margin: auto;
`;
