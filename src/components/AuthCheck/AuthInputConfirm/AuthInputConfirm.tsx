import React from "react";
import CountdownTimer from "../../CountdownTimer/CountdownTimer";
import * as S from "./AuthInputConfirm.style";

type Props = {
  showTimer: boolean;
  isReset: boolean;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
  onButtonClick: () => void;
};

const AuthInputConfirm = ({
  showTimer,
  isReset,
  setIsReset,
  onButtonClick,
}: Props) => {
  const handleButtonClcik = () => {
    if (showTimer) {
      onButtonClick();
      setIsReset(true);
    }
  };
  return (
    <S.Box>
      <S.TypeNumber placeholder="인증 번호를 입력해주세요" />
      {showTimer && (
        <CountdownTimer
          showTimer={showTimer}
          isReset={isReset}
          setIsReset={setIsReset}
        />
      )}
      <S.BoxButton
        type="button"
        onClick={handleButtonClcik}
        showTimer={showTimer}
      >
        확인
      </S.BoxButton>
    </S.Box>
  );
};

export default AuthInputConfirm;
