import React, { useState } from "react";
import styled from "styled-components";
import EYE_OFF from "../assets/icon/icon_eye_off.png";
import EYE_ON from "../assets/icon/icon_eye_on.png";

const InputForm = (props: any) => {
  const { fieldName, errors, reset, watch, placeholder } = props;
  const [isReset, setIsReset] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const value = watch(fieldName);
  const isPw = fieldName === "password";

  const handleFocus = () => {
    setIsReset(true);
    setIsValid(false);
  };

  const handleBlur = () => {
    setIsReset(false);
    if (!errors[fieldName] && value !== "") {
      setIsValid(true);
    }
  };

  const handleReset = () => {
    reset({ [fieldName]: "" });
  };

  return (
    <>
      <InputWrapper onFocus={handleFocus} onBlur={handleBlur} isFocus={isReset}>
        <Input
          type={isPw && isHide ? "password" : "text"}
          placeholder={placeholder}
          isError={errors[fieldName]}
          {...props.register}
        />
        <BtnWrapper>
          <CloseBtn type="button" isShow={isReset} onClick={handleReset}>
            <Img src={require("../assets/icon/icon_clear.png")} alt="삭제" />
          </CloseBtn>
          {isValid && !errors[fieldName] && (
            <ImgCheck
              src={require("../assets/icon/icon_check.png")}
              alt="완료"
            />
          )}
          {isPw && (
            <ShowBtn type="button" onClick={() => setIsHide((prev) => !prev)}>
              <Img src={isHide ? EYE_OFF : EYE_ON} alt="비밀번호 가리기" />
            </ShowBtn>
          )}
          {!isPw && <LayoutBox></LayoutBox>}
        </BtnWrapper>
      </InputWrapper>
      {/* @ts-ignore */}
      {errors[fieldName] && <ErrTxt>*{errors[fieldName]?.message}</ErrTxt>}
    </>
  );
};

export default InputForm;

const InputWrapper = styled.div<{ isFocus: boolean }>`
  position: relative;
  ${(props) => {
    if (props.isFocus) {
      return `outline: 2px solid blue;`;
    }
  }}
`;

const Input = styled.input<{ isError: boolean }>`
  border: 1px solid ${({ isError }) => (isError ? "#3a00e5" : "inherit")};
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

const LayoutBox = styled.div`
  width: 20px;
  height: 20px;
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

const ErrTxt = styled.p`
  margin-top: 0.3rem;
  color: #3a00e5;
`;
