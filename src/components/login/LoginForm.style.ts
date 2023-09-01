import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 4rem;
`;

export const Logo = styled.img`
  display: inline-block;
  width: 70px;
`;

export const FormWrapper = styled.form`
  > div {
    margin-bottom: 2rem;
  }

  > div:last-child {
    margin-bottom: 0;
  }
`;

export const LoginWrapper = styled.div`
  margin-top: 3rem;
`;

export const UtilWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  label,
  div,
  button {
    color: ${({ theme }) => theme.COLOR.darkGray};
  }
`;
