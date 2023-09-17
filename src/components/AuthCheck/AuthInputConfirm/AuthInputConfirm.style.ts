import styled, { css } from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const TypeNumber = styled.input.attrs({
  placeholderTextcolor: "#bcbcbc",
})`
  border-radius: 4px 0 0 4px;
  border: 1px solid ${({ theme }) => theme.COLOR.lightGray};
  border-right: none;
  width: 100%;
  height: 48px;
  padding-left: 14px;
  line-height: 22px;
  font-size: 15px;
  color: Black;
  font-weight: 500;
  outline: none;
`;

export const BoxButton = styled.button<{ showTimer: boolean }>`
  border: 1px solid ${({ theme }) => theme.COLOR.lightGray};
  border-radius: 0 4px 4px 0;
  min-width: 75px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLOR.whiteGray};
  color: ${({ theme }) => theme.COLOR.gray};
  ${(props) =>
    props.showTimer &&
    css`
      border: none;
      background-color: #3617cd;
      color: white;
    `}
`;
