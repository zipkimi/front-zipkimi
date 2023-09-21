import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<unknown> {
  children: React.ReactNode;
}
const EmailLoginButton = ({ children, ...props }: Props) => {
  return <Button {...props}>{children}</Button>;
};

export default EmailLoginButton;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.COLOR.lightGray};
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  height: 56px;
  padding: 14px 16px;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.FONT.medium};
  color: ${({ theme }) => theme.COLOR.dark};
  outline: none;
  background-color: white;
`;
