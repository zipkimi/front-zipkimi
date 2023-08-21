import React, { FormHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends FormHTMLAttributes<unknown> {
  children: React.ReactNode;
  button: React.ReactNode;
}

const FormLayout = ({ children, button, ...props }: Props) => {
  return (
    <FormWrapper {...props}>
      <ContentWrapper>{children}</ContentWrapper>
      {button}
    </FormWrapper>
  );
};

export default FormLayout;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .mb-1 {
    margin-bottom: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;
