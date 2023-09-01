import CountdownTimer from "../countdownTimer/CountdownTimer";
import * as S from "./AuthInput.style";

const AuthInput = () => {
  return (
    <S.Box>
      <S.TypeNumber placeholder="인증번호 6자리 입력" />
      <CountdownTimer />
      <S.BoxButton>확인</S.BoxButton>
    </S.Box>
  );
};

export default AuthInput;
