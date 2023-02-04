import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`

export const CateTitle = styled.h3`
  border-radius: ${({theme}) => theme.ROUND.md};
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.COLOR.secondOriginal};
  
  a:hover {
    color: ${({ theme }) => theme.COLOR.original};
    transition: all .15s;
  }
`

export const Ul = styled.ul`
  margin-top: 1rem;
  li:not(li:last-child) {
    margin-bottom: 1rem;
  }
`;