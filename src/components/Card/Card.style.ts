import styled from "styled-components";

export const Li = styled.li`
  box-shadow: 0 0 7px 1px #00000040;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  overflow: hidden;
  transition: all 0.15s;

  &:hover {
    box-shadow: 0 3px 7px 1px #00000040;
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.COLOR.secondOriginal};
  }
`;

export const Container = styled.button`
  display: flex;
  width: 100%;
  text-align: left;
  color: black;

  img {
    display: block;
    background-color: #00000040;
    width: 140px;
    height: 140px;
    flex-shrink: 0;
  }
`;

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 140px;

  strong {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }

  small {
    font-size: 0.8rem;
    word-break: break-word;
  }
`;
