import React from "react";
import FormLayout from "../Layout/Form.layout";
import ZButton from "../ZButton/ZButton";
import { useNavigate } from "react-router-dom";
import * as S from "./Verified.style";

const Verified = () => {
  const navigate = useNavigate();

  return (
    <FormLayout
      button={
        <S.BtnWrapper>
          <S.BtnTempPw type="button">임시비밀번호 확인하기</S.BtnTempPw>
          <ZButton onClick={() => navigate("/login")}>
            로그인 화면으로 이동하기
          </ZButton>
        </S.BtnWrapper>
      }
    >
      <S.Small>모든 정보는 블록체인을 이용해 안전하게 저장됩니다.(?)</S.Small>
      <S.ListWrapper>
        <S.DataWrapper>
          <dt>성명</dt>
          <dd>김철수</dd>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>생년월일</dt>
          <dd>0000.00.00</dd>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>성별</dt>
          <dd>남/여</dd>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>상태</dt>
          <S.BadgeVerified>인증실패</S.BadgeVerified>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>회원가입 경로</dt>
          <S.BadgeRoute>이메일</S.BadgeRoute>
        </S.DataWrapper>
      </S.ListWrapper>
    </FormLayout>
  );
};

export default Verified;
