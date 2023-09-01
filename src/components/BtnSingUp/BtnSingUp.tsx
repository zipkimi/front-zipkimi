import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./BtnSingUp.style";
import { ROUTES } from "../../const/ROUTES";

const BtnSingUp = () => {
  const navigate = useNavigate();

  return (
    <S.P>
      계정이 없으신가요?{" "}
      <a href="#new" onClick={() => navigate(ROUTES.SIGNUP)}>
        회원가입
      </a>
    </S.P>
  );
};

export default BtnSingUp;
