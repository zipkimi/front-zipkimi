import React from "react";
import SignUp from "../../components/signUp/SignUp";
import { BodyStyle } from "../../style/style";
import HeaderLayout from "../../components/Layout/Header.layout";
// import SignUpLayout from "../../components/Layout/SignUp.layout";
// import Header from "../../components/Layout/Header";

const Index = () => {
  return (
    <BodyStyle>
      <HeaderLayout title="회원가입" btn="back" />
      <SignUp />
    </BodyStyle>
  );
};

export default Index;
