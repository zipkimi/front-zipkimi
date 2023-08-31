import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./BtnFindIdPw.style";

const BtnFindIdPw = () => {
  const navigate = useNavigate();

  return (
    <S.P>
      <a href="#id" onClick={() => navigate("/find")}>
        아이디 찾기
      </a>
      |
      <a href="#pw" onClick={() => navigate("/find")}>
        비밀번호 찾기
      </a>
    </S.P>
  );
};

export default BtnFindIdPw;
