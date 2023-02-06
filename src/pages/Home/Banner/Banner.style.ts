import styled from "styled-components";

export const SlideImg = styled.img`
  min-height: 450px;
`;

export const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;