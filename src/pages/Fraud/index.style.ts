import styled from "styled-components";

export const HiddenH2 = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

export const Nav = styled.nav`
  border-bottom: 1px solid black;
`;

export const UlFixed = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  width: fit-content;
  margin: auto;

  button {
    padding-bottom: 5px;
    font-size: 1.3rem;
    word-break: keep-all;

    &:hover {
      color: ${({ theme }) => theme.COLOR.original};
    }
  }
`;

export const TempActiveBtn = styled.button`
  color: ${({ theme }) => theme.COLOR.original};
  border-bottom: 2px solid ${({ theme }) => theme.COLOR.original};
`;
