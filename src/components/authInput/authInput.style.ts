import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  height: 48px;
  line-height: 22px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`;

export const TypeNumber = styled.input.attrs({
  placeholderTextcolor: "#bcbcbc",
})`
  /* width: 150px; */
  line-height: 22px;
  height: 22px;
  margin: 13px 0px 13px 14px;
  font-size: 15px;
  color: Black;
  font-weight: 500;
  outline: none;
  border: none;
`;

export const BoxButton = styled.button`
  width: 69px;
  height: 48px;
  background-color: #5330e0;
  border-radius: 0px 4px 4px 0px;
  color: white;
`;
