import styled from "styled-components";

export const HiddenTitleH2 = styled.h2`
  ${({theme}) => theme.TEXT.hide};
`

export const CateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  margin-top: 3rem;
`