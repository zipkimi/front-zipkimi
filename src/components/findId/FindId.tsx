import React from "react";
import InputLayout from "../InputLayout/InputLayout";
import ZInput from "../ZInput/ZInput";
import ZButton from "../ZButton/ZButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./FindId.style";
import FormLayout from "../Layout/Form.layout";
import { CARRIERS } from "../../const/CARRIERS";

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
    <FormLayout
      action=""
      onSubmit={handleSubmit(onSubmit)}
      button={
        <ZButton type="submit" onClick={() => navigate("/find-pw")}>
          인증번호 받기
        </ZButton>
      }
    >
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
            placeholder={"고길동"}
          />
        </InputLayout>
        <InputLayout htmlFor={""} label={"휴대전화"}>
          <S.CarrierWrapper>
            <select name="" id="">
              {CARRIERS.map((carrier) => {
                return (
                  <option key={carrier.value} value={carrier.value}>
                    {carrier.name}
                  </option>
                );
              })}
            </select>
            <ZInput
              type={"number"}
              fieldName={"name"}
              errors={errors}
              reset={reset}
              watch={watch}
              placeholder={"01012345678"}
            />
          </S.CarrierWrapper>
        </InputLayout>
      </S.FormWrapper>
    </FormLayout>
  );
};

export default FindId;
