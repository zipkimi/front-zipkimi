import React from "react";
import * as S from "./SuccessAlert.style";
import ISuccess from "../../assets/icon/icon_success.png";

const SuccessAlert = () => {
  return (
    <S.Wrapper>
      <S.Logo src={ISuccess} alt="집킴이 로고" />
      <S.Strong>회원가입 완료</S.Strong>
      <S.Celebration>
        홍길동님의 회원가입을 축하합니다.
        <br />
        5초 후 자동으로 홈 화면으로 이동합니다.
      </S.Celebration>
    </S.Wrapper>
  );
};

export default SuccessAlert;
