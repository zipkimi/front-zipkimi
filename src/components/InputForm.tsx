import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const InputForm = (props: any) => {
  const [isReset, setIsReset] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const {
    formState: { errors },
  } = useForm();

  const handleFocus = () => {
    setIsReset(true);
    setIsValid(false);
  };

  const handleBlur = () => {
    setIsReset(false);
    if (!errors.email) {
      setIsValid(true);
    }
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <InputWrapper onFocus={handleFocus} onBlur={handleBlur} isFocus={isReset}>
        <Input
          type={isHide ? "password" : "text"}
          placeholder={"영문, 숫자 조합 8 ~ 16자"}
          {...props.register}
        />
        <BtnWrapper>
          <CloseBtn type="reset" isShow={isReset}>
            <Img src={require("../assets/icon/icon_clear.png")} alt="삭제" />
          </CloseBtn>
          {isValid && (
            <ImgCheck
              src={require("../assets/icon/icon_check.png")}
              alt="완료"
            />
          )}
          <ShowBtn type="button" onClick={() => setIsHide((prev) => !prev)}>
            {isHide && (
              <Img
                src={require("../assets/icon/icon_eye_off.png")}
                alt="삭제"
              />
            )}
            {!isHide && (
              <Img src={require("../assets/icon/icon_eye_on.png")} alt="삭제" />
            )}
          </ShowBtn>
        </BtnWrapper>
      </InputWrapper>
      {/* @ts-ignore */}
      {errors.email && <small>{errors?.email?.message}</small>}
    </>
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
  margin-bottom: .5rem;
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

const ErrTxt = styled.p`
  color: #3a00e5;
`;
