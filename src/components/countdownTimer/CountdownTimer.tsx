import React, { useState, useEffect } from "react";
import * as S from "./CountdownTimer.style";

const CountdownTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds,
  ).padStart(2, "0")}`;

  return (
    <S.TimerBox>
      <S.Time>{formattedTime}</S.Time>
    </S.TimerBox>
  );
};

export default CountdownTimer;
