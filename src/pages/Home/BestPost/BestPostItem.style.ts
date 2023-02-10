import styled from "styled-components";
import * as Card from "../../../components/Card/Card.style";

export const Li = styled(Card.Li)`
  //max-width: 300px;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 180px;
    background-color: lightgray;
  }

  button {
    text-align: left;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Dl = styled.dl`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
  }
  dt {
    margin-right: 5px;
  }
`;

export const Contents = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 10px 0;
`;

export const Writer = styled.small`
  margin-left: auto;
`;
