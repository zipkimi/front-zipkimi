import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import theme from "../../style/theme";

interface Props extends ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  color?: "original" | "originalBright" | "originalDisabled";
  isRound?: keyof typeof theme.ROUND;
  height?: number;
}

const ZButton = (props: Props) => {
  const { color = "original", isRound = "sm", height = 58 } = props;
  return (
    <Button colored={color} round={isRound} height={height} {...props}>
      {props.children}
    </Button>
  );
};

export default ZButton;

export const Button = styled.button<{
  colored: "original" | "originalBright" | "originalDisabled";
  round: keyof typeof theme.ROUND;
  height: number;
}>`
  border-radius: ${({ theme, round }) => theme.ROUND[round]};
  width: 100%;
  height: ${({ height }) => `${height}px`};
  padding: 14px 16px;
  font-size: 1rem;
  outline: none;
  background-color: ${({ theme, colored }) => theme.COLOR[colored]};
`;
