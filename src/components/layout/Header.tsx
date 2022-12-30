import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <h1>Safe-In-LOGO</h1>
      <nav>헤더: 네비게이션바</nav>
      <div>바탕화면 테스트</div>
    </header>
  );
};

export default Header;

const header = styled.header`
  margin: 0 auto;
  width: 1100px;
  height: 35px;
  line-height: 35px;
  border:1px solid #3587d4
`;

const nav = styled.nav`
  margin:0 auto;
  width: 800px;
  height:15px;
  border:1px solid #3587d4
  box-sizing:border-box;
`;
