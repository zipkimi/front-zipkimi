import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./BtnFindIdPw.style";
import { ROUTES } from "../../const/ROUTES";

const BtnFindIdPw = () => {
  const navigate = useNavigate();

  return (
    <S.BtnWrapper>
      <button
        type="button"
        onClick={() =>
          navigate(ROUTES.FIND, { state: { name: "아이디 찾기" } })
        }
      >
        아이디 찾기
      </button>
      |
      <button
        type="button"
        onClick={() =>
          navigate(ROUTES.FIND, { state: { name: "비밀번호 찾기" } })
        }
      >
        비밀번호 찾기
      </button>
    </S.BtnWrapper>
  );
};

export default BtnFindIdPw;
