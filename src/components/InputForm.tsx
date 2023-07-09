import React, { useState } from "react";
import styled from "styled-components";

const InputForm = () => {
  const [value, setValue] = useState("");
  const [isReset, setIsReset] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setIsReset(true);
    setIsValid(false);
  };

  const handleBlur = () => {
    setIsReset(false);
    if (value) {
      setIsValid(true);
    }
  };

  // TODO - 패턴 props 전달
  const validateEmail = (email: string) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleChange = (value: string) => {
    setValue(value);

    console.log(validateEmail(value));
  };

  return (
    <InputWrapper onFocus={handleFocus} onBlur={handleBlur} isFocus={isReset}>
      <Input
        type={isHide ? "password" : "text"}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        placeholder={"영문, 숫자 조합 8 ~ 16자"}
        required={true}
      />
      <BtnWrapper>
        <CloseBtn type="button" isShow={isReset} onClick={() => setValue("")}>
          <Img src={require("../assets/icon/icon_clear.png")} alt="삭제" />
        </CloseBtn>
        {isValid && (
          <ImgCheck src={require("../assets/icon/icon_check.png")} alt="삭제" />
        )}
        <ShowBtn type="button" onClick={() => setIsHide((prev) => !prev)}>
          {isHide && (
            <Img src={require("../assets/icon/icon_eye_off.png")} alt="삭제" />
          )}
          {!isHide && (
            <Img src={require("../assets/icon/icon_eye_on.png")} alt="삭제" />
          )}
        </ShowBtn>
      </BtnWrapper>
    </InputWrapper>
  );
};

export default InputForm;

const InputWrapper = styled.form<{ isFocus: boolean }>`
  position: relative;
  ${(props) => {
    if (props.isFocus) {
      return `outline: 2px solid blue;`;
    }
  }}

  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  font-size: 1rem;
  outline: none;
`;

const BtnWrapper = styled.div`
  position: absolute;
  right: 16px;
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  height: 48px;
  z-index: 10;
`;

const CloseBtn = styled.button<{ isShow: boolean }>`
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  cursor: ${({ isShow }) => (isShow ? "pointer" : "default")};
`;

const ShowBtn = styled.button`
  z-index: 10;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const ImgCheck = styled.img`
  width: 18px;
  height: 13px;
`;
