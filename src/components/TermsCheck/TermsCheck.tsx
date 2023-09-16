import React from "react";
import * as S from "./TermsCheck.style";
import IArrow from "../../assets/icon/icon_arrow.png";
import Required from "../Required";

const TermsCheck = () => {
  return (
    <S.Wrapper>
      <S.DivideLine />
      <S.Title>
        이용약관동의
        <Required />
      </S.Title>
      <S.TermsWrapper>
        <S.MainLabel htmlFor="terms_1">
          <S.CheckBox type="checkbox" id="terms_1" />
          아래 약관에 모두 동의합니다.
        </S.MainLabel>
        <S.Line />
        <S.DetailTermsWrapper>
          <S.Label htmlFor="terms_2">
            <S.CheckBox type="checkbox" id="terms_2" />
            <span>[필수] 이용 약관 필수 동의</span>
            <button type="button">
              <S.DetailImg src={IArrow} alt="자세히 보기" />
            </button>
          </S.Label>
          <S.Label htmlFor="terms_3">
            <S.CheckBox type="checkbox" id="terms_3" />
            <span>[필수] 개인정보 처리방침 필수 동의</span>
            <button type="button">
              <S.DetailImg src={IArrow} alt="자세히 보기" />
            </button>
          </S.Label>
          <S.Label htmlFor="terms_4">
            <S.CheckBox type="checkbox" id="terms_4" />
            <span>[필수] 만 14세 이상임에 필수 동의</span>
            <button type="button">
              <S.DetailImg src={IArrow} alt="자세히 보기" />
            </button>
          </S.Label>
        </S.DetailTermsWrapper>
      </S.TermsWrapper>
    </S.Wrapper>
  );
};

export default TermsCheck;
