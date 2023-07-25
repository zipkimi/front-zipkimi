import React from "react";
import InputLayout from "../../components/InputLayout/InputLayout";
import { useForm } from "react-hook-form";
import ZInput from "../../components/ZInput/ZInput";
import ZInput2 from "../../components/ZInput2/ZInput2";
import ZButton from "../../components/ZButton/ZButton";
import styled from "styled-components";

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

  return (
    <Wrapper>
      <Title>
        <Logo src="" alt="집킴이" />
      </Title>
      <FormWrapper action="" onSubmit={handleSubmit(onSubmit)}>
        <InputLayout htmlFor={"id"} label={""}>
          <ZInput
            type="text"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName={"email"}
            register={emailRegister}
            placeholder={"이메일"}
          />
        </InputLayout>
        <InputLayout htmlFor={"id"} label={""}>
          <ZInput
            type="password"
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName={"password"}
            register={pwRegister}
            placeholder={"비밀번호"}
          />
        </InputLayout>
        <LoginWrapper>
          <ZButton type="submit" disabled={true}>
            로그인
          </ZButton>
        </LoginWrapper>
      </FormWrapper>
      <UtilWrapper>
        <label htmlFor="autoLogin">
          <input type="checkbox" id="autoLogin" />
          자동 로그인
        </label>
        <div>
          <a href="">아이디</a> | <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </UtilWrapper>
      <BtnWrapper>
        <NaverBtn type="button">네이버로 시작</NaverBtn>
        <KakaoBtn type="button">카카오로 시작</KakaoBtn>
        <ZButton type="button">회원가입</ZButton>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Index;

// naver
// #10ce72

// kakao
// 갈색 : #3A1D1D
// 노란색 : #F7E600

const Wrapper = styled.div`
  padding: 0 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 4rem;
`;

const Logo = styled.img`
  display: inline-block;
  border: 1px solid black;
  width: 75px;
  height: 75px;
`;

const FormWrapper = styled.form`
  > div {
    margin-bottom: 2rem;
  }

  > div:last-child {
    margin-bottom: 0;
  }
`;

const LoginWrapper = styled.div`
  margin-top: 3rem;
`;

const UtilWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const NaverBtn = styled.button`
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  font-weight: bold;
  color: white;
  outline: none;
  background-color: #10ce72;
`;

const KakaoBtn = styled(NaverBtn)`
  background-color: #f7e600;
  color: #3a1d1d;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6rem;
`;
