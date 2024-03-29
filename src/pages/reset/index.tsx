import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BodyStyle } from "../../style/style";
import HeaderLayout from "../../components/Layout/Header.layout";
import FormLayout from "../../components/Layout/Form.layout";
import InputLayout from "../../components/InputLayout/Input.layout";
import ZInput from "../../components/ZInput/ZInput";
import ZButton from "../../components/ZButton/ZButton";
import { ROUTES } from "../../const/ROUTES";

const Index = () => {
  const navigate = useNavigate();
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
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "비밀번호 형식을 확인해주세요.",
    },
  });

  return (
    <BodyStyle>
      <HeaderLayout title="찾기" btn="back" />
      <FormLayout button="" onSubmit={handleSubmit(onSubmit)}>
        <InputLayout htmlFor="password" label="새 비밀번호" required>
          <ZInput
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName="password"
            register={pwRegister}
            placeholder="영문, 숫자, 특수문자 조합 8~16자"
          />
        </InputLayout>
        <InputLayout htmlFor="rePassword" label="새 비밀번호 확인" required>
          <ZInput
            watch={watch}
            errors={errors}
            reset={reset}
            fieldName="rePassword"
            register={rePwRegister}
            placeholder="새 비밀번호를 한번 더 입력해주세요."
          />
        </InputLayout>
        <ZButton onClick={() => navigate(ROUTES.FIND_SUCCESS)} isRound="xs">
          확인
        </ZButton>
      </FormLayout>
    </BodyStyle>
  );
};

export default Index;
