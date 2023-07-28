import React from "react";
import ZButton from "../ZButton/ZButton";
import * as S from "./CreateAccountBtnGroup.style";
import { useNavigate } from "react-router-dom";

const CreateAccountBtnGroup = () => {
  const navigate = useNavigate();
  const createAccount = () => {
    navigate("/signup");
  };

  return (
    <S.BtnWrapper>
      <S.NaverBtn type="button">네이버로 시작</S.NaverBtn>
      <S.KakaoBtn type="button">카카오로 시작</S.KakaoBtn>
      <ZButton type="button" onClick={createAccount}>
        회원가입
      </ZButton>
    </S.BtnWrapper>
  );
};

export default CreateAccountBtnGroup;
