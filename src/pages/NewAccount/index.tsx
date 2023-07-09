import React from "react";
import InputForm from "../../components/InputForm";
import { useForm } from "react-hook-form";

const Index = () => {
  const {
    handleSubmit,
    register,
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
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "비밀번호 형식을 확인해주세요.",
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputForm register={emailRegister} />
        {/* @ts-ignore */}
        {errors.email && <small>{errors?.email?.message}</small>}
        <InputForm register={pwRegister} />
        {/* @ts-ignore */}
        {errors.password && <small>{errors?.password?.message}</small>}
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
