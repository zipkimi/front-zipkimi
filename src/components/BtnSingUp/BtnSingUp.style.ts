import styled from "styled-components";

export const P = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.SIZE.font13};
  color: ${({ theme }) => theme.COLOR.dark};
  a {
    margin-left: 4px;
    font-size: ${({ theme }) => theme.SIZE.font13};
    color: ${({ theme }) => theme.COLOR.original};
    text-decoration: underline;
  }
`;
