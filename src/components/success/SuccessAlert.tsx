import React from "react";
import * as S from "./SuccessAlert.style";

const SuccessAlert = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Strong>가입을 환영합니다!</S.Strong>
        <S.Logo src="" alt="집킴이 로고" />
        <S.Celebration>
          홍길동님의 회원가입을 축하합니다.
          <br />
          5초 후 자동으로 홈 화면으로 이동합니다.
        </S.Celebration>
      </div>
    </S.Wrapper>
  );
};

export default SuccessAlert;
