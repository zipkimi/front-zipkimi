import styled from "styled-components";

export const Small = styled.small`
  display: block;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLOR.darkGray};
`;

export const BtnWrapper = styled.div`
  text-align: center;
`;

export const BtnTempPw = styled.button`
  display: inline-block;
  margin: 0 auto 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLOR.darkGray};
`;

export const ListWrapper = styled.dl`
  margin-top: 2rem;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.COLOR.darkGray};
  dt,
  dd {
    font-size: 0.9rem;
  }
`;

export const BadgeVerified = styled.dd`
  border-radius: ${({ theme }) => theme.ROUND.md};
  padding: 3px;
  width: 65px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.COLOR.darkGray};
`;

export const BadgeRoute = styled.dd`
  border: 1px solid ${({ theme }) => theme.COLOR.original};
  border-radius: ${({ theme }) => theme.ROUND.md};
  padding: 3px;
  width: 65px;
  text-align: center;
  color: ${({ theme }) => theme.COLOR.original};
`;
