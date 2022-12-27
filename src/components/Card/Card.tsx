import React from "react";
import styled from "styled-components";

type Reaction = {
  comments: number;
  likes: number;
};

type Card = {
  title: string;
  contents: string;
  writer?: string;
  regDt?: string;
  info?: Reaction;
};

const Card = (props: Card) => {
  const { title, contents, info, writer, regDt } = props;

  return (
    <Li>
      <Container href="">
        <img src="" alt="이미지" />
        <TxtWrapper>
          <strong>{title}</strong>
          <p>{contents}</p>
          <div>
            {writer && <small>{`${writer} / ${regDt}`}</small>}
            {info && (
              <small>{`댓글: ${info.comments} 좋아요: ${info.likes}`}</small>
            )}
          </div>
        </TxtWrapper>
      </Container>
    </Li>
  );
};

export default Card;

const Li = styled.li`
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

const Container = styled.a`
  display: flex;
  color: black;

  img {
    display: block;
    background-color: #00000040;
    width: 140px;
    height: 140px;
    flex-shrink: 0;
  }
`;

const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;

  strong {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  > div {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }

  small {
    font-size: 0.8rem;
  }
`;
