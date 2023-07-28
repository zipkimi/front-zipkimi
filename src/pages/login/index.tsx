import React from "react";
import { BodyStyle, ContentsWrapper } from "../../style/style";
import LoginForm from "../../components/login/LoginForm";
import CreateAccountBtnGroup from "../../components/login/CreateAccountBtnGroup";

const Index = () => {
  return (
    <BodyStyle>
      <ContentsWrapper>
        <LoginForm />
        <CreateAccountBtnGroup />
      </ContentsWrapper>
    </BodyStyle>
  );
};

export default Index;
