import CountdownTimer from "../CountdownTimer/CountdownTimer";
import * as S from "./AuthInput.style";

const AuthInput = () => {
  return (
    <S.Box>
      <S.TypeNumber placeholder="휴대전화 번호를 입력해주세요" />
      <CountdownTimer showTimer={false} />
      <S.BoxButton>인증</S.BoxButton>
    </S.Box>
  );
};

export default AuthInput;
