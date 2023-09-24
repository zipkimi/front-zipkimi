import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 26px 0 66px 0;
`;

export const DivideLine = styled.div`
  position: absolute;
  top: -26px;
  left: -20px;
  background-color: #f0f0f0f0;
  width: 100vw;
  height: 7px;
`;

export const Title = styled.label`
  display: flex;
  margin-bottom: 19px;
  font-weight: ${({ theme }) => theme.FONT.medium};
`;

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  border: none;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  label {
    display: flex;
    align-items: center;
  }
`;

export const MainLabel = styled.label`
  ${({ theme }) => theme.TEXT.text15};
  font-weight: ${({ theme }) => theme.FONT.medium};
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.COLOR.lightGray};
  width: 100%;
  height: 1px;
`;

export const DetailTermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  span {
    margin-right: auto;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.COLOR.gray};
  border-radius: ${({ theme }) => theme.ROUND.xs};
  margin: 0 8px 0 0;

  &:checked {
    border: 1px solid ${({ theme }) => theme.COLOR.original};
    background-color: ${({ theme }) => theme.COLOR.original};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;

export const DetailImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const TermsDetailWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  margin: 0.5rem 0 1rem;
`;
