import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from "react";
import EYE_OFF from "../../assets/icon/icon_eye_off.png";
import EYE_ON from "../../assets/icon/icon_eye_on.png";
import * as S from "./ZInput.style";

interface Props extends InputHTMLAttributes<any> {
  register?: any;
  fieldName: string;
  errors: any;
  reset: any;
  watch: any;
}

const ZInput2 = (props: Props) => {
  const { register, fieldName, errors, reset, watch } = props;
  const [isHide, setIsHide] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const value = watch(fieldName);
  const isPw = fieldName === "password" || fieldName === "rePassword";

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
      <S.InputWrapper
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocus={isReset}
      >
        <S.Input
          type={isPw && isHide ? "password" : "text"}
          {...props}
          isError={errors[fieldName]}
          {...register}
        />
        <S.BtnWrapper>
          <S.CloseBtn type="button" isShow={isReset} onClick={handleReset}>
            <S.Img
              src={require("../../assets/icon/icon_clear.png")}
              alt="삭제"
            />
          </S.CloseBtn>
          {isValid && !errors[fieldName] && (
            <S.ImgCheck
              src={require("../../assets/icon/icon_check.png")}
              alt="완료"
            />
          )}
          {!isPw && <S.LayoutBox></S.LayoutBox>}
          {isPw && (
            <S.ShowBtn type="button" onClick={() => setIsHide((prev) => !prev)}>
              <S.Img src={isHide ? EYE_OFF : EYE_ON} alt="비밀번호 가리기" />
            </S.ShowBtn>
          )}
        </S.BtnWrapper>
      </S.InputWrapper>
      {errors[fieldName] && <S.ErrTxt>*{errors[fieldName]?.message}</S.ErrTxt>}
    </>
  );
};

export default ZInput2;
