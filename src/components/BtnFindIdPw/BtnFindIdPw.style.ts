import styled from "styled-components";

export const P = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.SIZE.font13};
  color: ${({ theme }) => theme.COLOR.lightGray};
  a {
    font-size: ${({ theme }) => theme.SIZE.font13};
    color: ${({ theme }) => theme.COLOR.darkGray};
  }
  a:first-child {
    margin-right: 20px;
  }
  a:last-child {
    margin-left: 20px;
  }
`;
