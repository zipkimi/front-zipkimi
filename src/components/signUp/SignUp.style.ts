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

export const VerifyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  input {
    border: none;
    border-radius: ${({ theme }) => theme.ROUND.xs};
    height: 48px;
    padding: 14px 16px;
    font-size: 1rem;
    &::placeholder {
      color: lightgray;
    }
  }
`;

export const SelectWrapper = styled.div`
  padding: 0 16px;
  select {
    border: none;
    border-radius: ${({ theme }) => theme.ROUND.xs};
    width: 100%;
    height: 48px;
    padding: 14px 0;
    font-size: 1rem;
    &::placeholder {
      color: lightgray;
    }
  }
`;

export const DivideLine = styled.div`
  background-color: black;
  width: 95%;
  height: 1px;
  margin: auto;
`;

export const TermsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  height: 48px;
  margin-top: 1rem;
  padding: 14px 16px;
  label {
    display: flex;
    align-items: center;
  }
`;

export const TermsDetailWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  margin: 0.5rem 0 1rem;
`;

export const TermsDetail = styled.div`
  width: 100%;
  padding: 14px 16px;
`;

export const TermsDetailTxt = styled.div`
  line-height: 1.4rem;
  word-break: keep-all;
`;
