import styled from "styled-components";

export const HighlightH2 = styled.h2`
  border-bottom: 1px solid black;
  text-align: center;

  span {
    display: inline-block;
    border-bottom: 2px solid ${({ theme }) => theme.COLOR.original};
    padding-bottom: 5px;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLOR.original};
  }
`;

export const TitleH3 = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem 0;
`;

export const SubTitleP = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.COLOR.secondWhite};
`;

export const ContentsWrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;
`;

export const TempImg = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  background-color: lightgray;
`;

export const TempTxt = styled.p`
  font-size: 1.2rem;
`;
