import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import * as S from "./index.style";

const Index = () => {
  // TODO - 결과적으로 나중에는 배열 DATA 를 내려줘서 <Category> 내부에서 map 로직을 돌려야겠다.
  const mockCate = {
    userName: "작성자",
    regDt: "1",
    likeCount: 0,
    CommentCount: 0,
    contents: "겨울이 없다면 봄은 그리 즐겁지 않을 것이다. 고난을 맛보지 않으면 성공이 반갑지 않을 것이다.",
  }

  return (
    <>
      <S.HiddenTitleH2>랜딩페이지</S.HiddenTitleH2>
      <Banner/>
      <S.CateWrapper>
        <Category cateTitle={"사기 예방법"} {...mockCate}/>
        <Category cateTitle={"커뮤니티"} {...mockCate}/>
      </S.CateWrapper>
    </>
  );
};

export default Index;