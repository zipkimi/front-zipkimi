import styled from "styled-components";

export const P = styled.p`
  margin-top: 30px;
  text-align: center;
  ${({ theme }) => theme.TEXT.text13}
  color: ${({ theme }) => theme.COLOR.dark};
  a {
    margin-left: 4px;
    ${({ theme }) => theme.TEXT.text13}
    color: ${({ theme }) => theme.COLOR.original};
    text-decoration: underline;
  }
`;
