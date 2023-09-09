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
  background-color: #f0f0f0f0;
  width: 100%;
  height: 7px;
  margin: 20px 0px 0px 0px;
`;

export const LightDivideLine = styled.div`
  background-color: #f0f0f0;
  width: 95%;
  height: 1px;
  margin: 20px 0px 20px 0px;
`;
export const Line = styled.div`
  background-color: none;
  width: 0px;
  height: 0px;
`;

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  border: none;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  height: 48px;
  /* margin-top: 1rem; */
  /* padding: 14px 16px; */
  label {
    display: flex;
    align-items: center;
  }
`;
export const StyledInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.COLOR.gray};
  border-radius: ${({ theme }) => theme.ROUND.xs};
  margin: 4px 8px 4px 4px;

  &:checked {
    background-color: ${({ theme }) => theme.COLOR.original};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
`;
export const DetailBtn = styled.img`
  width: 8px;
  height: 14px;
  margin-left: 3rem;
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
