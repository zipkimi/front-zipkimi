import React from "react";
import { Card } from "../../types/card";
import * as S from "./style";

const Index = (props: Card) => {
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

export default Index;
