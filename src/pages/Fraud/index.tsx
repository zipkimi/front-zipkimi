import React from "react";
import Prevent from "./Prevent";
import * as S from "./style";

const Index = () => {
  return (
    <section>
      <S.HiddenH2>사기 및 피해 관련글</S.HiddenH2>
      <S.Nav>
        <S.UlFixed>
          <li>
            <S.TempActiveBtn type="button">사기예방법 공유</S.TempActiveBtn>
          </li>
          <li>
            <button type="button">사기 대처법</button>
          </li>
          <li>
            <button type="button">피해 커뮤니티</button>
          </li>
        </S.UlFixed>
      </S.Nav>
      <Prevent />
    </section>
  );
};

export default Index;
