import React from "react";
import InputLayout from "../InputLayout/InputLayout";
import ZInput from "../ZInput/ZInput";
import ZButton from "../ZButton/ZButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./FindId.style";

const FindId = () => {
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
        <span>아이디</span>
        <span> 찾기</span>
      </S.TitleWrapper>
      <S.TxtWrapper>
        <S.Strong>회원정보에 등록한 휴대전화로 인증</S.Strong>
        <S.Small>
          회원정보에 등록한 휴대전화 번호와 입력한 휴대전화가 같아야 인증번호를
          받을 수 있습니다.
        </S.Small>
      </S.TxtWrapper>
      <S.FormWrapper>
        <InputLayout htmlFor={""} label={"이름"}>
          <ZInput
            fieldName={"name"}
            errors={errors}
            reset={reset}
            watch={watch}
          />
        </InputLayout>
        <InputLayout htmlFor={""} label={"휴대전화"}>
          <ZInput
            fieldName={"name"}
            errors={errors}
            reset={reset}
            watch={watch}
          />
        </InputLayout>
        <S.BtnWrapper>
          <ZButton>인증번호 받기</ZButton>
        </S.BtnWrapper>
      </S.FormWrapper>
    </>
  );
};

export default FindId;
