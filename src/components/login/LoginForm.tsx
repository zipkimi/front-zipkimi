import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputLayout from "../InputLayout/Input.layout";
import ZInput from "../ZInput/ZInput";
import ZButton from "../ZButton/ZButton";
import * as S from "./LoginForm.style";
import Logo from "../../assets/icon/icon_zipkimi(k).png";

const LoginForm = () => {
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: unknown) => {
    console.log(data);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (data?.password !== data?.rePassword) {
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
    <div>
      <S.Title>
        <S.Logo src={Logo} alt="집킴이" />
      </S.Title>
      <S.FormWrapper action="" onSubmit={handleSubmit(onSubmit)}>
        <InputLayout htmlFor="id" label="">
          <ZInput
            type="text"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName="email"
            register={emailRegister}
            placeholder="이메일"
          />
        </InputLayout>
        <InputLayout htmlFor="id" label="">
          <ZInput
            type="password"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName="password"
            register={pwRegister}
            placeholder="비밀번호"
          />
        </InputLayout>
        <S.LoginWrapper>
          <ZButton type="submit" disabled isRound="xs">
            로그인
          </ZButton>
        </S.LoginWrapper>
      </S.FormWrapper>
      <S.UtilWrapper>
        <label htmlFor="autoLogin">
          <input type="checkbox" id="autoLogin" />
          자동 로그인
        </label>
        <div>
          <button type="button" onClick={() => navigate("/find-id")}>
            아이디
          </button>{" "}
          |{" "}
          <button type="button" onClick={() => navigate("/find-pw")}>
            비밀번호를 잊으셨나요?
          </button>
        </div>
      </S.UtilWrapper>
    </div>
  );
};

export default LoginForm;
