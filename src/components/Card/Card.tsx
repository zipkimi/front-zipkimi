import React from "react";
import { CardProps } from "../../types/card";
import * as S from "./Card.style";

const Card = (props: CardProps) => {
  const { id, title, contents, writer, regDt, comments, likes, onDetail } =
    props;

  return (
    <S.Li>
      <S.Container type="button" onClick={() => onDetail(id)}>
        <img src="" alt="이미지" />
        <S.TxtWrapper>
          <strong>{title}</strong>
          <p>{contents}</p>
          <div>
            {writer && <small>{`${writer} / ${regDt}`}</small>}
            {comments && <small>{`댓글: ${comments} 좋아요: ${likes}`}</small>}
          </div>
        </S.TxtWrapper>
      </S.Container>
    </S.Li>
  );
};

export default Card;
