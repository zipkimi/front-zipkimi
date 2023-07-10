import React from "react";
import InputForm from "../../components/InputForm";
import { useForm } from "react-hook-form";

const Index = () => {
  const {
    watch,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onError = (error: any) => {
    console.log(error);
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
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputForm
          register={emailRegister}
          fieldName={"email"}
          errors={errors}
          reset={reset}
          watch={watch}
          placeholder={"이메일을 입력해주세요."}
        />
        <InputForm
          register={pwRegister}
          fieldName={"password"}
          errors={errors}
          reset={reset}
          watch={watch}
          placeholder={
            "영문, 숫자, 특수기호 포함 8 ~ 12자 비밀번호를 입력해주세요."
          }
        />
        <div>
          <button type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
