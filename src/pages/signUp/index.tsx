import React from "react";
import SignUp from "../../components/signUp/SignUp";
import { BodyStyle } from "../../style/style";
import HeaderLayout from "../../components/Layout/Header.layout";

const Index = () => {
  return (
    <BodyStyle>
      <HeaderLayout title="회원가입" btn="back" />
      <SignUp />
    </BodyStyle>
  );
};

export default Index;
