import styled from "styled-components";

export const TitleWrapper = styled.p`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  margin: auto;
`;

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

export const FindIdWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Small = styled.small`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLOR.txtInfo};
`;

export const BtnFindId = styled.button`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLOR.original};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

export const BtnWrapper = styled.div`
  margin-top: auto;
`;
