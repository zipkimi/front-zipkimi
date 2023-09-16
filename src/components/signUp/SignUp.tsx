import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputLayout from "../InputLayout/Input.layout";
import ZInputNew from "../ZInput/ZInputNew";
import ZButton from "../ZButton/ZButton";
import * as S from "./SignUp.style";
import FormLayout from "../Layout/Form.layout";
import AuthInput from "../AuthInput/AuthInput";
import AuthInputConfirm from "../AuthInputConfirm/AuthInputConfirm";
import detail from "../../assets/icon/icon_detail.png";

const SignUp = () => {
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: unknown) => {
    console.log(data);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (data.password !== data.rePassword) {
      setError(
        "rePassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true },
      );
    }
    navigate("/success");
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
    required: { value: true, message: "비밀번호를 입력해주세요." },
    pattern: {
      value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8}/,
      message: "비밀번호 형식을 확인해주세요.",
    },
  });

  const name = register("name", {
    required: { value: true, message: "이름을 입력해주세요." },
  });

  return (
    <FormLayout
      action=""
      onSubmit={handleSubmit(onSubmit)}
      button={<ZButton type="submit">회원가입 완료</ZButton>}
    >
      <InputLayout htmlFor="id" label="아이디" required>
        <ZInputNew
          type="email"
          watch={watch}
          errors={errors}
          reset={reset}
          fieldName="email"
          register={emailRegister}
          placeholder="이메일 주소를 입력해주세요."
        />
      </InputLayout>
      <InputLayout htmlFor="password" label="비밀번호" required>
        <ZInputNew
          type="password"
          watch={watch}
          errors={errors}
          reset={reset}
          fieldName="password"
          register={pwRegister}
          placeholder="영문, 숫자, 특수문자 조합 8 ~ 16자"
        />
      </InputLayout>
      <InputLayout htmlFor="rePassword" label="비밀번호 확인" required>
        <ZInputNew
          type="password"
          watch={watch}
          errors={errors}
          reset={reset}
          fieldName="rePassword"
          register={rePwRegister}
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
      </InputLayout>
      <InputLayout htmlFor="name" label="이름" required>
        <ZInputNew
          type="text"
          watch={watch}
          errors={errors}
          reset={reset}
          fieldName="name"
          register={name}
          placeholder="예) 홍길동"
        />
      </InputLayout>
      <InputLayout htmlFor="phone" label="휴대폰 번호" required>
        <AuthInput />
      </InputLayout>
      <InputLayout htmlFor="auth" label="인증 번호" required>
        <AuthInputConfirm />
        <S.DivideLine />
      </InputLayout>
      <InputLayout htmlFor="terms" label="이용약관동의" required>
        <S.Line />
      </InputLayout>
      <S.TermsWrapper>
        <label htmlFor="terms_1">
          <S.StyledInput type="checkbox" id="terms_1" />
          아래 약관에 모두 동의합니다.
        </label>
        <S.LightDivideLine />
        <S.StyledLabel htmlFor="terms_2">
          <S.StyledInput type="checkbox" id="terms_2" />
          [필수] 이용 약관 필수 동의
          <S.DetailBtn src={detail} />
        </S.StyledLabel>
        <S.StyledLabel htmlFor="terms_3">
          <S.StyledInput type="checkbox" id="terms_3" />
          [필수] 개인정보 처리방침 필수 동의
          <S.DetailBtn src={detail} />
        </S.StyledLabel>
        <S.StyledLabel htmlFor="terms_4">
          <S.StyledInput type="checkbox" id="terms_4" />
          [필수] 만 14세 이상임에 필수 동의
          <S.DetailBtn src={detail} />
        </S.StyledLabel>
      </S.TermsWrapper>
      {/* <S.TermsDetailWrapper>
        <S.TermsDetail>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" />
            개인정보 처리방침 필수 동의
          </label>
        </S.TermsDetail>
      </S.TermsDetailWrapper> */}
    </FormLayout>
  );
};

export default SignUp;
