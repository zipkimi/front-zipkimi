import React from "react";
import styled from "styled-components";
import { BodyStyle, ContentsWrapper } from "../../style/style";
import CreateAccountBtnGroup from "../../components/login/CreateAccountBtnGroup";
import HeaderLayout from "../../components/Layout/Header.layout";
import Logo from "../../assets/icon/icon_logo.png";
import BtnSingUp from "../../components/BtnSingUp/BtnSingUp";

const Index = () => {
  return (
    <BodyStyle>
      <HeaderLayout title="로그인" btn="back" />
      <ContentsWrapper>
        <div>
          <ImgLogo src={Logo} alt="집킴이 로고" />
          <CreateAccountBtnGroup />
          <BtnSingUp />
          <iframe
            title="loading"
            src="https://lottie.host/?file=c8897eff-84cf-4562-9a04-255ae2b1f38f/7BXxoV87R0.json"
          />
        </div>
      </ContentsWrapper>
    </BodyStyle>
  );
};

export default Index;

const ImgLogo = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: 72px auto;
`;
