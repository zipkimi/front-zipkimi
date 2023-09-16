import React, { useState } from "react";
import * as S from "./AuthInput.style";

interface AuthInputProps {
  showTimer: boolean;
  onButtonClick: () => void;
}

const AuthInput: React.FC<AuthInputProps> = ({ showTimer, onButtonClick }) => {
  return (
    <S.Box>
      <S.TypeNumber placeholder="휴대전화 번호를 입력해주세요" />
      <S.BoxButton type="button" onClick={onButtonClick} showTimer={showTimer}>
        {showTimer ? "재발송" : "인증"}
      </S.BoxButton>
    </S.Box>
  );
};

export default AuthInput;
