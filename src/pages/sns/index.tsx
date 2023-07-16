import React from "react";
import InputLayout from "../../components/InputLayout/InputLayout";
import ZInput from "../../components/ZInput/ZInput";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ZButton from "../../components/ZButton/ZButton";

const Index = () => {
  const { reset, watch, handleSubmit } = useForm();

  const submit = () => {
    console.log("submit...!");
  };

  return (
    <div>
      <h2>본인 인증</h2>
      <Form action="" onSubmit={handleSubmit(submit)}>
        <InputLayout htmlFor={"phone"} label={"휴대폰 번호"}>
          <Wrapper>
            <Input type="text" defaultValue={"+82"} />
            <ZInput
              fieldName={"phone"}
              errors={"휴대폰 번호를 입력해주세요."}
              reset={reset}
              watch={watch}
            />
          </Wrapper>
        </InputLayout>
      </Form>
      <InputLayout htmlFor={"authNum"} label={"인증번호"}>
        <ZInput
          fieldName={"authNum"}
          errors={"인증번호를 정확히 입력해주세요."}
          reset={reset}
          watch={watch}
        />
      </InputLayout>
      <BtnWrapper>
        <ZButton>완료</ZButton>
      </BtnWrapper>
    </div>
  );
};

export default Index;

const Form = styled.form`
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  margin-right: 1rem;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  height: 48px;
  padding: 14px 16px;
  font-size: 1rem;
  outline: none;
`;

const BtnWrapper = styled.div`
  margin-top: 5rem;
`;
