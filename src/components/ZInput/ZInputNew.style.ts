import styled from "styled-components";

export const InputWrapper = styled.div<{ isFocus: boolean }>`
  position: relative;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  ${(props) => {
    if (props.isFocus) {
      return `outline: 1px solid blue;`;
    }
    return "";
  }}
`;

export const Input = styled.input<{ isError?: boolean }>`
  border: 1px solid
    ${({ theme, isError }) => (isError ? theme.COLOR.red : theme.COLOR.gray)};
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  height: 48px;
  padding: 14px 80px 14px 14px;
  ${({ theme }) => theme.TEXT.text15};
  font-weight: ${({ theme }) => theme.FONT.medium};
  outline: none;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 14px;
  display: inline-flex;
  align-items: center;
  column-gap: 20px;
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
  width: 20px;
  height: 20px;
`;

export const ErrTxt = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.COLOR.red};
  ${({ theme }) => theme.TEXT.text13}
`;
