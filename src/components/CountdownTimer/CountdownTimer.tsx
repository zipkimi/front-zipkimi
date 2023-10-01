import React, { useEffect, useState, useMemo } from "react";
import * as S from "./CountdownTimer.style";

type Props = {
  showTimer: boolean;
  isReset: boolean;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
};

const CountdownTimer = ({ showTimer, isReset, setIsReset }: Props) => {
  const initialTime = 5 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    if (isReset) {
      setTimeRemaining(initialTime);
      setIsReset(false);
    }

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isReset, setIsReset]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedTime = useMemo(() => {
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
  }, [minutes, seconds]);

  if (!showTimer) {
    return null;
  }

  return (
    <S.TimerBox>
      <S.Time>{formattedTime}</S.Time>
    </S.TimerBox>
  );
};

export default CountdownTimer;
