import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputLayout from "../InputLayout/Input.layout";
import ZInput from "../ZInput/ZInput";
import ZButton from "../ZButton/ZButton";
import * as S from "./SignUp.style";
import FormLayout from "../Layout/Form.layout";
import { CARRIERS } from "../../const/CARRIERS";

const SignUp = () => {
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const [isOpenTerms, setIsOpenTerms] = useState(false);

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
        <ZButton type="submit" onClick={() => navigate("/success")}>
          다음
        </ZButton>
      }
    >
      <InputLayout htmlFor="id" label="아이디" className="mb-1">
        <ZInput
          type="text"
          watch={watch}
          errors={errors}
          reset={reset}
          fieldName="email"
          register={emailRegister}
          placeholder="이메일 주소를 입력해주세요."
        />
      </InputLayout>
      <InputLayout htmlFor="id" label="비밀번호" className="mb-1">
        <ZInput
          type="password"
          watch={watch}
          errors={errors}
          reset={reset}
          fieldName="password"
          register={pwRegister}
          placeholder="영문, 숫자, 특수문자 조합 8 ~ 16자"
        />
      </InputLayout>
      <S.VerifyWrapper>
        <input type="text" placeholder="이름" />
        <S.DivideLine />
        <S.SelectWrapper>
          <select name="" id="">
            {CARRIERS.map((carrier) => {
              return (
                <option key={carrier.value} value={carrier.value}>
                  {carrier.name}
                </option>
              );
            })}
          </select>
        </S.SelectWrapper>
        <S.DivideLine />
        <input type="text" placeholder="전화번호" />
      </S.VerifyWrapper>
      <S.VerifyBtnWrapper>
        <button type="button" onClick={() => navigate("/verify")}>
          인증하기
        </button>
      </S.VerifyBtnWrapper>
      <S.TermsWrapper>
        <label htmlFor="terms">
          <input type="checkbox" id="terms" />
          인증 약관전체 동의 (필수)
        </label>
        <button type="button" onClick={() => setIsOpenTerms((prev) => !prev)}>
          더보기
        </button>
      </S.TermsWrapper>
      {isOpenTerms && (
        <S.TermsDetailWrapper>
          <S.TermsDetail>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" />
              개인정보 처리방침 필수 동의
            </label>
          </S.TermsDetail>
          <S.DivideLine />
          <S.TermsDetail>
            <S.TermsDetailTxt>
              여기에는 어떤 내용이 들어갈거에요. 매우 긴 내용이 계속해서 들어갈
              거에요. 영원히. 사람들이 보기싫게. 야, 여기에는 어떤 내용이
              들어갈거에요. 매우 긴 내용이 계속해서 들어갈 거에요. 영원히.
              변수창출 사람들이 보기싫게. 여기에는 어떤 내용이 들어갈거에요.
              매우 긴 내용이 계속해서 들어갈 거에요. 영원히. 사람들이 보기싫게.
              여기에는 어떤 내용이 들어갈거에요. 매우 긴 내용이 계속해서 들어갈
              거에요. 영원히. 사람들이 보기싫게. 여기에는 어떤 내용이 슉슈슉
              들어갈거에요. 매우 긴 내용이 계속해서 들어갈 거에요. 영원히.
              사람들이 보기싫게. 여기에는 어떤 코카콜라 내용이 들어갈거에요.
              매우 긴 콜라 내용이 계속해서 들어갈 거에요. 영원히. 사람들이
              보기싫게. 여기에는 어떤 내용이 들어갈거에요. 매우 긴 내용이
              계속해서 들어갈 거에요. 마구잡이 영원히. 사람들이 보기싫게.
              여기에는 어떤 내용이 막 들어갈거에요. 매우 긴 내용이 계속해서
              들어갈 거에요. 영원히. 사람들이 보기싫게. 여기에는 어떤 내용이
              들어갈거에요. 매우 긴 내용이 계속해서 들어갈 거에요. 영원히.
              사람들이 보기싫게. 여기에는 투루크 막토 어떤 내용이 들어갈거에요.
              매우 긴 내용이 계속해서 들어갈 거에요. 영원히. 사람들이 보기싫게.
            </S.TermsDetailTxt>
          </S.TermsDetail>
        </S.TermsDetailWrapper>
      )}
    </FormLayout>
  );
};

export default SignUp;
