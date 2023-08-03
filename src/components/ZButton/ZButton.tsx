import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import theme from "../../style/theme";

interface Props extends ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  color?: "original" | "originalBright" | "originalDisabled";
  isRound?: keyof typeof theme.ROUND;
  height?: number;
  outline?: boolean;
}

const ZButton = (props: Props) => {
  let {
    color = "original",
    isRound = "mm",
    height = 48,
    outline = false,
  } = props;

  if (props.disabled) {
    color = "originalDisabled";
  }

  return (
    <Button
      colored={color}
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
  round: keyof typeof theme.ROUND;
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
