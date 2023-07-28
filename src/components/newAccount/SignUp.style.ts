import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 4rem;
`;

export const SubTitle = styled.strong`
  display: block;
  margin-top: 1rem;
  span {
    font-size: 2rem;
  }
  span:first-child {
    color: cornflowerblue;
  }
  span:last-child {
    color: goldenrod;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  border: 1px solid black;
  width: 75px;
  height: 75px;
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
