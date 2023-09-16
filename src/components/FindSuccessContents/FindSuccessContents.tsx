import React from "react";
import * as S from "./FindSuccessContents.style";
import IUser from "../../assets/icon/icon_user.png";

const FindSuccessContents = () => {
  return (
    <S.Wrapper>
      <p>
        <S.Title>고객님의 집킴이 계정을 찾았습니다.</S.Title>
        <S.SubTxt>아이디 확인 후 로그인해주세요.</S.SubTxt>
      </p>
      <S.EmailWrapper>
        <img src={IUser} alt="이메일" />
        <address>abc@gmail.com</address>
      </S.EmailWrapper>
    </S.Wrapper>
  );
};

export default FindSuccessContents;
