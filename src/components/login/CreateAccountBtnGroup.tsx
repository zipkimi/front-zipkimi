import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CreateAccountBtnGroup.style";
import INaver from "../../assets/icon/icon_naver.png";
import IKakao from "../../assets/icon/icon_kakao.png";
import { ROUTES } from "../../const/ROUTES";
import EmailLoginButton from "./EmailLoginButton";

const CreateAccountBtnGroup = () => {
  const navigate = useNavigate();
  const createAccount = () => {
    navigate(ROUTES.SIGN_IN);
  };

  return (
    <S.BtnWrapper>
      <S.NaverBtn type="button">
        <img src={INaver} alt="" />
        네이버로 계속하기
      </S.NaverBtn>
      <S.KakaoBtn type="button">
        <img src={IKakao} alt="" />
        카카오로 계속하기
      </S.KakaoBtn>
      <S.MoreTxt>또는</S.MoreTxt>
      <EmailLoginButton type="button" onClick={createAccount}>
        이메일로 로그인 하기
      </EmailLoginButton>
    </S.BtnWrapper>
  );
};

export default CreateAccountBtnGroup;
