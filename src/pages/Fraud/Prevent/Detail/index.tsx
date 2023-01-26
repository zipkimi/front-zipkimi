import React from "react";
import * as S from "./style";

const Index = () => {
  return (
    <section>
      <S.HighlightH2>
        <span>사기예방법 공유</span>
      </S.HighlightH2>
      <article>
        <S.TitleH3>제목을 보여줍니다. RPOPS 를 받아서 보여줄거에요.</S.TitleH3>
        <S.SubTitleP>
          소제목 입니다. 여기에는 소제목을 보여줄거에요. 제목보다는 작고 연한
          글씨로 보여줍니다.
        </S.SubTitleP>
        <S.ContentsWrapper>
          <p>
            여기는 내용을 랜더링 해줄거에요. 이미지도 들어가야 하고, 작성할 때
            적용한 양식이 동일하게 출력되어야해요.
          </p>
          <br />
          <p>내용이 쭉쭉 들어올 거에요</p>
          <br />
          <S.TempImg src="" alt="이미지도 있을거에요." />
          <br />
          <p>이미지에 대한 설명도 해주고, 간략한 내용을 정리해서 보여줘요.</p>
          <br />
          <S.TempTxt>1. 주제도 있을거에요.</S.TempTxt>
          <p>
            그럼 당연히 내용도 있겠죠. 아무 텍스트나 작성해서 대충 긴 글을
            보여줘야 겠어요. 젊은이들은 젊음이 얼마나 힘들고 무시무시할 수
            있는지 안다. 그들의 젊음은 다른 모든 사람들에게 허비되는데 그야말로
            끔찍한 일이다. 젊은이들에게는 권위도 존경도 없다.
          </p>
          <br />
          <p>
            사업의 성공은 훈련과 절도, 고된 노력을 요한다. 그러나 이런 것들에
            지레 겁먹지만 않으면 성공의 기회는 오늘도 그 어느 때 못지 않다.
            성공에 있어 가장 어려운 면은 성공한 상태를 계속 유지해야 한다는
            것이다. 이 분야에서 재능은 출발점일 뿐이다. 당신은 그 재능을 계속
            연마해야 한다. 언젠가 재능을 구하려 하면 그것은 거기에 없을 것이다.
          </p>
        </S.ContentsWrapper>
      </article>
    </section>
  );
};

export default Index;
