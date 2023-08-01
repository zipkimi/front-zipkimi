import React from "react";
import * as S from "./SuccessAlert.style";
import ZButton from "../ZButton/ZButton";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icon/icon_zipkimi(k).png";

const SuccessAlert = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <div>
        <S.Strong>회원가입을 축하합니다!</S.Strong>
        <S.Logo src={Logo} alt="집킴이 로고" />
        <S.Celebration>
          홍길동님의 회원가입을 축하합니다.
          <br />
          <span>5초 후 자동으로 홈 화면으로 이동합니다.</span>
        </S.Celebration>
      </div>
      <ZButton onClick={() => navigate("/login")}>홈 화면으로 이동하기</ZButton>
    </S.Wrapper>
  );
};

export default SuccessAlert;
