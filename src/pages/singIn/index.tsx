import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import HeaderLayout from "../../components/Layout/Header.layout";
import { BodyStyle } from "../../style/style";
import InputLayout from "../../components/InputLayout/Input.layout";
import ZInputNew from "../../components/ZInput/ZInputNew";
import FormLayout from "../../components/Layout/Form.layout";
import ZButton from "../../components/ZButton/ZButton";
import BtnSingUp from "../../components/BtnSingUp/BtnSingUp";
import BtnFindIdPw from "../../components/BtnFindIdPw/BtnFindIdPw";

const Index = () => {
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    <BodyStyle>
      <HeaderLayout title="이메일로 로그인" btn="back" />
      <FormLayout
        button={
          <BtnWrapper>
            <BtnSingUp />
          </BtnWrapper>
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLayout htmlFor="email" label="이메일">
          <ZInputNew
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName="email"
            register={emailRegister}
            placeholder="이메일"
          />
        </InputLayout>
        <InputLayout htmlFor="password" label="비밀번호">
          <ZInputNew
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName="password"
            register={pwRegister}
            placeholder="비밀번호"
          />
        </InputLayout>
        <ZButton>로그인</ZButton>
        <BtnFindIdPw />
      </FormLayout>
    </BodyStyle>
  );
};

export default Index;

const BtnWrapper = styled.div`
  margin-bottom: 30px;
`;
