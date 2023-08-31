import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ZButton from "../../components/ZButton/ZButton";
import HeaderLayout from "../../components/Layout/Header.layout";
import FormLayout from "../../components/Layout/Form.layout";
import ZTab from "../../components/ZTab/ZTab";
import InputLayout from "../../components/InputLayout/Input.layout";
import ZInputNew from "../../components/ZInput/ZInputNew";
import { BodyStyle } from "../../style/style";

const Index = () => {
  const [tab, setTab] = useState("아이디 찾기");
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

  const changeTab = (value: string) => {
    setTab(value);
  };

  return (
    <BodyStyle>
      <HeaderLayout title="찾기" btn="back" />
      <FormLayout
        button=""
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: "-10px" }}
      >
        <ZTab tabs={["아이디 찾기", "비밀번호 찾기"]} onChangeTab={changeTab} />
        {tab === "아이디 찾기" && (
          <>
            <InputLayout htmlFor="email" label="휴대폰 번호" required>
              <ZInputNew
                watch={watch}
                errors={errors}
                reset={reset}
                fieldName="email"
                register={emailRegister}
                placeholder="이메일"
              />
            </InputLayout>
            <InputLayout htmlFor="password" label="인증번호" required>
              <ZInputNew
                watch={watch}
                errors={errors}
                reset={reset}
                fieldName="password"
                register={pwRegister}
                placeholder="비밀번호"
              />
            </InputLayout>
            <ZButton>아이디 찾기</ZButton>
          </>
        )}
        {tab === "비밀번호 찾기" && (
          <>
            <InputLayout htmlFor="email" label="가입한 이메일 주소" required>
              <ZInputNew
                watch={watch}
                errors={errors}
                reset={reset}
                fieldName="email"
                register={emailRegister}
                placeholder="이메일"
              />
            </InputLayout>
            <InputLayout htmlFor="password" label="휴대폰 번호" required>
              <ZInputNew
                watch={watch}
                errors={errors}
                reset={reset}
                fieldName="password"
                register={pwRegister}
                placeholder="비밀번호"
              />
            </InputLayout>
            <InputLayout htmlFor="password" label="인증번호" required>
              <ZInputNew
                watch={watch}
                errors={errors}
                reset={reset}
                fieldName="password"
                register={pwRegister}
                placeholder="비밀번호"
              />
            </InputLayout>
            <ZButton>비밀번호 찾기</ZButton>
          </>
        )}
      </FormLayout>
    </BodyStyle>
  );
};

export default Index;
