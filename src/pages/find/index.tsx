import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ZButton from "../../components/ZButton/ZButton";
import HeaderLayout from "../../components/Layout/Header.layout";
import FormLayout from "../../components/Layout/Form.layout";
import ZTab from "../../components/ZTab/ZTab";
import InputLayout from "../../components/InputLayout/Input.layout";
import ZInputNew from "../../components/ZInput/ZInputNew";
import { BodyStyle } from "../../style/style";
import { ROUTES } from "../../const/ROUTES";
import AuthCheck from "../../components/AuthCheck/AuthCheck";

const Index = () => {
  const [tab, setTab] = useState("아이디 찾기");
  const navigate = useNavigate();
  const location = useLocation();
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setTab(location.state?.name || "아이디 찾기");
  }, []);

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

  // const authRegister = register("authCode", {
  //   required: { value: true, message: "인증 번호를 입력해주세요." },
  //   pattern: {
  //     value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8}/,
  //     message: "인증 번호를 정상적으로 입력해주세요.",
  //   },
  // });

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
        <ZTab
          tabs={["아이디 찾기", "비밀번호 찾기"]}
          onChangeTab={changeTab}
          defaultTab={location.state?.name}
        />
        {tab === "아이디 찾기" && (
          <>
            <AuthCheck />
            <ZButton isRound="xs">아이디 찾기</ZButton>
          </>
        )}
        {tab === "비밀번호 찾기" && (
          <>
            <InputLayout htmlFor="email" label="가입한 이메일 주소" required>
              <ZInputNew
                type="email"
                watch={watch}
                errors={errors}
                reset={reset}
                fieldName="email"
                register={emailRegister}
                placeholder="이메일 주소를 입력해주세요"
              />
            </InputLayout>
            <AuthCheck />
            <ZButton onClick={() => navigate(ROUTES.RESET)} isRound="xs">
              비밀번호 찾기
            </ZButton>
          </>
        )}
      </FormLayout>
    </BodyStyle>
  );
};

export default Index;
