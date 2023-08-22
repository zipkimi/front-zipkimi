import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import SignUpLayout from "../../components/Layout/SignUp.layout";
import ZButton from "../../components/ZButton/ZButton";

const Index = () => {
  const navigate = useNavigate();

  return (
    <SignUpLayout
      header={<Header firstWord="아이디 / 비밀번호" secondWord=" 찾기" />}
    >
      <BtnWrapper>
        <ZButton onClick={() => navigate("/find-id")}>아이디 찾기</ZButton>
        <ZButton onClick={() => navigate("/find-pw")}>비밀번호 찾기</ZButton>
        <Small>클릭하면 해당 페이지로 이동합니다.</Small>
      </BtnWrapper>
    </SignUpLayout>
  );
};

export default Index;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`;

const Small = styled.small`
  display: block;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLOR.darkGray};
`;
