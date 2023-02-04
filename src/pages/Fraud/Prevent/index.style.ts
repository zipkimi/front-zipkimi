import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 2rem 2rem;
  max-width: 800px;
  margin: auto;
  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;
  }

  > button {
    float: right;
  }
`;

export const HiddenH3 = styled.h3`
  ${({ theme }) => theme.TEXT.hide};
`;

export const Ul = styled.ul`
  clear: both;

  li:not(li:last-child) {
    margin-bottom: 1rem;
  }
`;
