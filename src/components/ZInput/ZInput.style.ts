import styled from "styled-components";

export const InputWrapper = styled.div<{ isFocus: boolean }>`
  position: relative;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  ${(props) => {
    if (props.isFocus) {
      return `outline: 2px solid blue;`;
    }
  }}
`;

export const Input = styled.input<{ isError: boolean }>`
  border: 1px solid ${({ isError }) => (isError ? "#3a00e5" : "inherit")};
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  font-size: 1rem;
  outline: none;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 16px;
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  height: 48px;
  z-index: 10;
`;

export const CloseBtn = styled.button<{ isShow: boolean }>`
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  cursor: ${({ isShow }) => (isShow ? "pointer" : "default")};
`;

export const LayoutBox = styled.div`
  width: 20px;
  height: 20px;
`;

export const ShowBtn = styled.button`
  z-index: 10;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const ImgCheck = styled.img`
  width: 18px;
  height: 13px;
`;

export const ErrTxt = styled.p`
  margin-top: 0.3rem;
  color: #3a00e5;
`;
