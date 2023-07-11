import React from "react";
import Required from "../Required";
import styled from "styled-components";

type Props = {
  htmlFor: string;
  label: string | React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
};

const InputForm = ({ htmlFor, label, required, children }: Props) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>
        {label}
        {required && <Required />}
      </Label>
      {children}
    </div>
  );
};

export default InputForm;

const Label = styled.label`
  display: block;
  color: #555555;
  margin-bottom: 0.5rem;
`;
