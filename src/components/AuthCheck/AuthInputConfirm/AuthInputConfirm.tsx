import React from "react";
import CountdownTimer from "../../CountdownTimer/CountdownTimer";
import * as S from "./AuthInputConfirm.style";

type Props = {
  showTimer: boolean;
};

const AuthInputConfirm = ({ showTimer }: Props) => {
  return (
    <S.Box>
      <S.TypeNumber placeholder="인증 번호를 입력해주세요" />
      {showTimer && <CountdownTimer showTimer={showTimer} />}
      <S.BoxButton type="button" showTimer={showTimer}>
        확인
      </S.BoxButton>
    </S.Box>
  );
};

export default AuthInputConfirm;
