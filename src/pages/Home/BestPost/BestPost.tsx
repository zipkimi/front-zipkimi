import React from "react";
import * as S from "./BestPost.style";
import BestPostItem from "./BestPostItem";

const BestPost = () => {
  return (
    <S.Wrapper>
      <h3>중요/공유/베스트 글</h3>
      <S.Ul>
        <BestPostItem />
        <BestPostItem />
        <BestPostItem />
        <BestPostItem />
      </S.Ul>
    </S.Wrapper>
  );
};

export default BestPost;
