import CountdownTimer from "../CountdownTimer/CountdownTimer";
import * as S from "./GreyAuthInput.style";

const GreyAuthInput = () => {
  return (
    <S.Box>
      <S.TypeNumber placeholder="인증 번호를 입력해주세요" />
      <CountdownTimer showTimer={false} />
      <S.BoxButton>확인</S.BoxButton>
    </S.Box>
  );
};

export default GreyAuthInput;
