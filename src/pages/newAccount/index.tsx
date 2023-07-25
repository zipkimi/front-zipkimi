import React from "react";
import ZInput2 from "../../components/ZInput2/ZInput2";
import { useForm } from "react-hook-form";
import InputLayout from "../../components/InputLayout/InputLayout";
import ZButton from "../../components/ZButton2/ZButton";
import styled from "styled-components";
import { BodyStyle } from "../../style/style";

const Index = () => {
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

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

  const rePwRegister = register("rePassword", {
    required: { value: true, message: "비밀번호를 한번 더 입력해주세요." },
    pattern: {
      value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8}/,
      message: "비밀번호 형식을 확인해주세요.",
    },
  });

  const nameRegister = register("name", {
    required: { value: true, message: "이름을 입력해주세요." },
  });

  return (
    <div>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <BodyStyle>
          <div>
            <InputLayout htmlFor={"email"} label={"아이디"}>
              <ZInput2
                id={"email"}
                register={emailRegister}
                fieldName={"email"}
                errors={errors}
                reset={reset}
                watch={watch}
                placeholder={"예) abc@email.com"}
              />
            </InputLayout>
            <InputLayout htmlFor={"password"} label={"비밀번호"}>
              <ZInput2
                register={pwRegister}
                fieldName={"password"}
                errors={errors}
                reset={reset}
                watch={watch}
                placeholder={"영문, 숫자, 특수기호 포함 8 ~ 12자"}
              />
            </InputLayout>
            <InputLayout htmlFor={"rePassword"} label={"비밀번호 재확인"}>
              <ZInput2
                register={rePwRegister}
                fieldName={"rePassword"}
                errors={errors}
                reset={reset}
                watch={watch}
                placeholder={"비밀번호를 한번 더 입력해 주세요."}
              />
            </InputLayout>
            <InputLayout htmlFor={"name"} label={"이름"}>
              <ZInput2
                register={nameRegister}
                fieldName={"name"}
                errors={errors}
                reset={reset}
                watch={watch}
                placeholder={"예) 고길동"}
              />
            </InputLayout>
            <ZButton type="button" color={"originalDisabled"} height={48}>
              인증하기
            </ZButton>
          </div>
          <ZButton type="submit" disabled={isSubmitting} isRound={"none"}>
            다음
          </ZButton>
        </BodyStyle>
      </Wrapper>
    </div>
  );
};

export default Index;

const Wrapper = styled.form`
  > div > div > div {
    margin-bottom: 1rem;
  }

  //> div > div > div:last-child {
  //  margin-top: 2rem;
  //  margin-bottom: 0;
  //}
`;

const Button = styled.button`
  margin-top: auto;
  display: block;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.COLOR.original};
  color: white;
`;
