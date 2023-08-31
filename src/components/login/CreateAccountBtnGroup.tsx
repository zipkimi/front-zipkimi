import React from "react";
import { useNavigate } from "react-router-dom";
import ZButton from "../ZButton/ZButton";
import * as S from "./CreateAccountBtnGroup.style";
import INaver from "../../assets/icon/icon_naver.png";
import IKakao from "../../assets/icon/icon_kakao.png";

const CreateAccountBtnGroup = () => {
  const navigate = useNavigate();
  const createAccount = () => {
    navigate("/signup");
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
      <ZButton type="button" onClick={createAccount} isRound="xs" outline>
        이메일로 로그인 하기
      </ZButton>
    </S.BtnWrapper>
  );
};

export default CreateAccountBtnGroup;
