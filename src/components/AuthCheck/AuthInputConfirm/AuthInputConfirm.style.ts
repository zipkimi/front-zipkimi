import styled, { css } from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  line-height: 22px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`;

export const TypeNumber = styled.input.attrs({
  placeholderTextcolor: "#bcbcbc",
})`
  /* width: 150px; */
  flex: 1;
  line-height: 22px;
  height: 22px;
  margin: 13px 0 13px 14px;
  font-size: 15px;
  color: Black;
  font-weight: 500;
  outline: none;
  border: none;
`;

export const BoxButton = styled.button<{ showTimer: boolean }>`
  width: 75px;
  height: 46px;
  background-color: #f0f0f0f0;
  border-radius: 0 4px 4px 0;
  color: #bcbcbc;
  ${(props) =>
    props.showTimer &&
    css`
      background-color: #3617cd;
      color: white;
    `}
`;
