import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import styleTheme from "../../style/theme";

interface Props extends ButtonHTMLAttributes<unknown> {
  children: React.ReactNode;
  color?: "original" | "originalBright" | "originalDisabled";
  isRound?: keyof typeof styleTheme.ROUND;
  height?: number;
  outline?: boolean;
}

const ZButton = ({
  color = "original",
  isRound = "mm",
  height = 48,
  outline = false,
  ...props
}: Props) => {
  return (
    <Button
      colored={props.disabled ? "originalDisabled" : color}
      round={isRound}
      height={height}
      outline={outline}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default ZButton;

export const Button = styled.button<{
  colored: "original" | "originalBright" | "originalDisabled";
  round: keyof typeof styleTheme.ROUND;
  height: number;
  outline: boolean;
}>`
  border: ${({ theme, outline, colored }) =>
    outline ? `1px solid ${theme.COLOR[colored]}` : "none"};
  border-radius: ${({ theme, round }) => theme.ROUND[round]};
  width: 100%;
  height: ${({ height }) => `${height}px`};
  padding: 14px 16px;
  font-size: 1rem;
  color: ${({ theme, outline, colored }) =>
    outline ? theme.COLOR[colored] : "white"};
  outline: none;
  background-color: ${({ theme, colored, outline }) =>
    outline ? "white" : theme.COLOR[colored]};
`;
