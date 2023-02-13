import React from "react";
import * as S from "./BestPostItem.style";

const BestPostItem = () => {
  return (
    <S.Li>
      <button type="button">
        <img src="" alt="테스트" />
        <S.ContentsWrapper>
          <S.InfoWrapper>
            <small className="font_info">카테고리</small>
            <S.Dl>
              <div>
                <dt className="font_info">좋아요</dt>
                <dd className="font_info">0</dd>
              </div>
              <div>
                <dt className="font_info">댓글</dt>
                <dd className="font_info">0</dd>
              </div>
            </S.Dl>
          </S.InfoWrapper>
          <S.Contents>
            글의 제목이 들어갑니다. "임시 제목입니다. 길게 늘어진 제목을
            테스트합니다. 아마도 두 줄이 최대겠죠?"
          </S.Contents>
          <S.Writer className="font_info">작성자</S.Writer>
        </S.ContentsWrapper>
      </button>
    </S.Li>
  );
};

export default BestPostItem;
