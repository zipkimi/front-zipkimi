import styled from "styled-components";

export const TxtWrapper = styled.p`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Strong = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLOR.original};
`;

export const Small = styled.small`
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLOR.darkGray};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

export const CarrierWrapper = styled.div`
  display: flex;
  select {
    border-radius: ${({ theme }) => theme.ROUND.xs};
    margin-right: 0.5rem;
  }
`;
