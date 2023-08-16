import React, { FormHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends FormHTMLAttributes<any> {
  children: React.ReactNode;
  button: React.ReactNode;
}

const FormLayout = ({ children, button, ...props }: Props) => {
  return (
    <FormWrapper {...props}>
      <div>{children}</div>
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