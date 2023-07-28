import React from "react";
import InputLayout from "../InputLayout/InputLayout";
import ZInput from "../ZInput/ZInput";
import ZButton from "../ZButton/ZButton";
import * as S from "./SignUp.style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
    <S.Wrapper>
      <S.Title>
        <S.Logo src="" alt="집킴이" />
        <S.SubTitle>
          <span>회원</span>
          <span>가입</span>
        </S.SubTitle>
      </S.Title>
      <S.FormWrapper action="" onSubmit={handleSubmit(onSubmit)}>
        <InputLayout htmlFor={"id"} label={"아이디"}>
          <ZInput
            type="text"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName={"email"}
            register={emailRegister}
            placeholder={"이메일 주소를 입력해주세요."}
          />
        </InputLayout>
        <InputLayout htmlFor={"id"} label={"비밀번호"}>
          <ZInput
            type="password"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName={"password"}
            register={pwRegister}
            placeholder={"영문, 숫자, 특수문자 조합 8 ~ 16자"}
          />
        </InputLayout>
        <div>
          <ZInput
            type="password"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName={"password"}
            register={pwRegister}
            placeholder={"이름"}
          />
          <ZInput
            type="password"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName={"password"}
            register={pwRegister}
            placeholder={"통신사"}
          />
          <ZInput
            type="password"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName={"password"}
            register={pwRegister}
            placeholder={"전화번호"}
          />
          <S.VerifyBtnWrapper>
            <button type="button" onClick={() => navigate("/verify")}>
              인증하기
            </button>
          </S.VerifyBtnWrapper>
        </div>
        <ZInput
          type="password"
          watch={watch}
          errors={errors}
          reset={reset}
          fieldName={"password"}
          register={pwRegister}
          placeholder={"인증 약관 전체 동의"}
        />
        <S.LoginWrapper>
          <ZButton type="submit" onClick={() => navigate("/success")}>
            다음
          </ZButton>
        </S.LoginWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default SignUp;
