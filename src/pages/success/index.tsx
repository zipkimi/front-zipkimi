import React from "react";
import styled from "styled-components";
import SuccessAlert from "../../components/success/SuccessAlert";
import { BodyStyle } from "../../style/style";
import ZButton from "../../components/ZButton/ZButton";
import HeaderLayout from "../../components/Layout/Header.layout";

const Index = () => {
  return (
    <BodyStyle>
      <Wrapper>
        <HeaderLayout title="회원가입" btn="back" />
        <SuccessAlert />
      </Wrapper>
      <ZButton type="submit" isRound="none">
        홈 화면으로 이동하기
      </ZButton>
    </BodyStyle>
  );
};

export default Index;

const Wrapper = styled.div`
  padding: 20px;
`;
