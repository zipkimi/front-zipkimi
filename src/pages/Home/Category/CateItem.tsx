import React from "react";
import * as Card from "../../../components/Card/Card.style";
import * as S from "./CateItem.style";
import { CategoryItem } from "../../../types/category";

const CateItem = (props: CategoryItem) => {
  const {userName, contents, regDt, likeCount, CommentCount} = props;

  return (
    <Card.Li>
      <S.Container>
        <S.WriterWrapper>
          <div>
            <img src="" alt="프로필" />
            <strong className="font_info">{userName}</strong>
            <small className="font_info">{regDt}분 전</small>
          </div>
          <S.Dl>
            <div>
              <dt className="font_info">좋아요</dt>
              <dd className="font_info">{likeCount}</dd>
            </div>
            <div>
              <dt className="font_info">댓글</dt>
              <dd className="font_info">{CommentCount}</dd>
            </div>
          </S.Dl>
        </S.WriterWrapper>
        <S.Contents>{contents}</S.Contents>
      </S.Container>
    </Card.Li>
  );
};

export default CateItem;