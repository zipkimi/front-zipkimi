import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as S from "./BtnFindIdPw.style";
import { ROUTES } from "../../const/ROUTES";

const BtnFindIdPw = () => {
  const navigate = useNavigate();

  return (
    <S.BtnWrapper>
      <BtnFontWeight
        type="button"
        onClick={() =>
          navigate(ROUTES.FIND, { state: { name: "아이디 찾기" } })
        }
      >
        아이디 찾기
      </BtnFontWeight>
      |
      <BtnFontWeight
        type="button"
        onClick={() =>
          navigate(ROUTES.FIND, { state: { name: "비밀번호 찾기" } })
        }
      >
        비밀번호 찾기
      </BtnFontWeight>
    </S.BtnWrapper>
  );
};

export default BtnFindIdPw;

const BtnFontWeight = styled.button`
  font-weight: ${({ theme }) => theme.FONT.medium};
`;
