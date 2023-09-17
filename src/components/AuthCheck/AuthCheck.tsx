import React, { useState } from "react";
import styled from "styled-components";
import InputLayout from "../InputLayout/Input.layout";
import AuthInput from "./AuthInput/AuthInput";
import AuthInputConfirm from "./AuthInputConfirm/AuthInputConfirm";

const AuthCheck = () => {
  const [showTimer, setShowTimer] = useState(false);

  const handleButtonClick = () => {
    setShowTimer(true);
  };

  return (
    <Wrapper>
      <InputLayout htmlFor="phone" label="휴대폰 번호" required>
        <AuthInput showTimer={showTimer} onButtonClick={handleButtonClick} />
      </InputLayout>
      <InputLayout htmlFor="auth" label="인증 번호" required>
        <AuthInputConfirm showTimer={showTimer} />
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
