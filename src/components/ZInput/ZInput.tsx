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

const ZInput = (props: Props) => {
  const { register, fieldName, errors, reset, watch } = props;
  const [isReset, setIsReset] = useState(false);

  const handleFocus = () => {
    setIsReset(true);
  };

  const handleBlur = () => {
    setIsReset(false);
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
        <S.Input {...props} isError={errors[fieldName]} {...register} />
        <S.BtnWrapper>
          <S.CloseBtn type="button" isShow={isReset} onClick={handleReset}>
            <S.Img
              src={require("../../assets/icon/icon_clear.png")}
              alt="삭제"
            />
          </S.CloseBtn>
        </S.BtnWrapper>
      </S.InputWrapper>
      {errors[fieldName] && <S.ErrTxt>*{errors[fieldName]?.message}</S.ErrTxt>}
    </>
  );
};

export default ZInput;
