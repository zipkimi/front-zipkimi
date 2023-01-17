import React from "react";
import styled from "styled-components";
import OriginalBtn from "../OriginalBtn";
// import companylogo from '../../../src/temp_img.jpg'

const Header = () => {
  return (
    <HeaderWrapper>
      <h1><img src={require('../../../src/temp_img.jpg')} alt="임시로고"/></h1>
      <Nav>메뉴1 메뉴2 메뉴3 메뉴4 메뉴5</Nav>
      <Div>커밋용</Div>
      <Li>커밋용2</Li>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  margin: 0 auto;
  width: 1100px;
  height: 35px;
  line-height: 35px;
  display:flex;
`;

const H1 = styled.h1`
  margin: 0 auto;
  width:60px;
  height:60px;
  line-height:60px;
  box-shadow: 60px -16px teal;
  border-radius;
  
`;

const Nav = styled.nav`
  margin:0 auto;
  width:1100px;
  height:80px;
  border:1px solid #3587d4
  box-sizing:border-box;
  font-size: 1.5rem;
  text-align:center;
  
`;

const Div = styled.div`
  display: block;
  width: 500px;
  height: 10px;
`;

const Li = styled.li`
  text-align:center;
`
