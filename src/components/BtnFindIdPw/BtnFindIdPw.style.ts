import styled from "styled-components";

export const BtnWrapper = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.SIZE.font13};
  color: ${({ theme }) => theme.COLOR.lightGray};
  button {
    font-size: ${({ theme }) => theme.SIZE.font13};
    color: ${({ theme }) => theme.COLOR.darkGray};
  }
  button:first-child {
    margin-right: 20px;
  }
  button:last-child {
    margin-left: 20px;
  }
`;
