import * as S from "./AuthInput.style";

type Props = {
  showTimer: boolean;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
  onButtonClick: () => void;
};

const AuthInput = ({ showTimer, onButtonClick }: Props) => {
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
