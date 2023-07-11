import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<any> {
  children: React.ReactNode;
}

const ZButton = (props: Props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default ZButton;

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  font-size: 1rem;
  outline: none;
  background-color: rgba(58, 0, 229, 0.45);

  &:hover {
    background-color: rgba(58, 0, 229, 0.55);
  }
`;
