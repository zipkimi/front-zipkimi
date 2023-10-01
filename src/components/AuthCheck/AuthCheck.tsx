import React, { useState } from "react";
import styled from "styled-components";
import InputLayout from "../InputLayout/Input.layout";
import AuthInput from "./AuthInput/AuthInput";
import AuthInputConfirm from "./AuthInputConfirm/AuthInputConfirm";

const AuthCheck = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const handleButtonClick = () => {
    setShowTimer(true);
    setIsReset(true);
  };

  const handleConfirmButtonClick = () => {
    setShowTimer(false); // 확인 버튼 클릭 시 타이머 감춤
  };

  return (
    <Wrapper>
      <InputLayout htmlFor="phone" label="휴대폰 번호" required>
        <AuthInput
          showTimer={showTimer}
          onButtonClick={handleButtonClick}
          setIsReset={setIsReset}
        />
      </InputLayout>
      <InputLayout htmlFor="auth" label="인증 번호" required>
        <AuthInputConfirm
          showTimer={showTimer}
          isReset={isReset}
          setIsReset={setIsReset}
          onButtonClick={handleConfirmButtonClick}
        />
      </InputLayout>
    </Wrapper>
  );
};

export default AuthCheck;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
