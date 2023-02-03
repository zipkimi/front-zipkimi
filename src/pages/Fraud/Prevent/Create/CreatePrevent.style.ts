import styled from "styled-components";
import ReactQuill from "react-quill";

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

  label {
    display: block;
    font-size: 1.3rem;
    text-align: center;
    margin: 1rem 0 0.5rem;
  }

  input {
    display: block;
    border: 1px solid #cccccc;
    border-radius: ${({ theme }) => theme.ROUND.xs};
    width: 100%;
    height: 2.5rem;
    padding: 0 5px;
    text-align: center;
  }
`;

export const TitleInput = styled.input`
  font-size: 1.6rem;
`;

export const SubTitleInput = styled.input`
  color: ${({ theme }) => theme.COLOR.secondWhite};
`;

export const CustomQuill = styled(ReactQuill)`
  height: 500px;

  > .ql-container.ql-editor {
    overflow-y: scroll;
  }
`;

export const BtnWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: right;

  button:not(button:last-child) {
    margin-right: 10px;
  }
`;
