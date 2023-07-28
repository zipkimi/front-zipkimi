import React from "react";
import InputLayout from "../InputLayout/InputLayout";
import ZInput from "../ZInput/ZInput";
import ZButton from "../ZButton/ZButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./FindPw.style";

const FindPw = () => {
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    if (data.password !== data.rePassword) {
      setError(
        "rePassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true },
      );
    }
  };

  const emailRegister = register("email", {
    required: { value: true, message: "이메일을 입력해주세요." },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "이메일 형식을 확인해주세요.",
    },
  });

  const pwRegister = register("password", {
    required: { value: true, message: "비밀번호를 입력해주세요." },
    pattern: {
      value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8}/,
      message: "비밀번호 형식을 확인해주세요.",
    },
  });

  return (
    <>
      <S.Logo src="" alt="집킴이" />
      <S.TitleWrapper>
        <span>비밀번호</span>
        <span> 찾기</span>
      </S.TitleWrapper>
      <S.TxtWrapper>
        <S.Strong>비밀번호를 찾고자 하는 아이디를 입력해주세요.</S.Strong>
      </S.TxtWrapper>
      <S.FormWrapper>
        <InputLayout htmlFor={""} label={""}>
          <ZInput
            fieldName={"name"}
            errors={errors}
            reset={reset}
            watch={watch}
            placeholder={"이메일을 입력해주세요."}
          />
        </InputLayout>
        <S.FindIdWrapper>
          <S.Small>아이디가 기억나지 않는다면?</S.Small>
          <S.BtnFindId type="button" onClick={() => navigate("/find-id")}>
            아이디 찾기
          </S.BtnFindId>
        </S.FindIdWrapper>
        <S.BtnWrapper>
          <ZButton onClick={() => navigate("/login")}>다음</ZButton>
        </S.BtnWrapper>
      </S.FormWrapper>
    </>
  );
};

export default FindPw;
