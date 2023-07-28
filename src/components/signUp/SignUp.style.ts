import styled from "styled-components";

export const VerifyBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 0.5rem;
  button {
    background-color: ${({ theme }) => theme.COLOR.original};
    color: white;
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }
`;
