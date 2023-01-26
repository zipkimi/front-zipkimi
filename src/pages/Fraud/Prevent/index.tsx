import React from "react";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";
import { list } from "../../../mockData";
import OriginalBtn from "../../../components/OriginalBtn";
import * as S from "./style";

const Index = () => {
  const navigate = useNavigate();
  const tempData = {
    id: 999,
    title: "제목입니다.",
    contents:
      "사람이 행복하기 위해서는 일을 할 수 있어야 할 뿐 아니라 자신이 한 일을 제대로 판단할 수 있어야 한다.",
    writer: "yunsik cho",
    regDt: "2022-12-25",
    comments: 130,
    likes: 2900,
  };

  // TODO - API 연결
  //  상세조회를 어느 주소로 보내느냐에 따라 달라짐.
  const onDetail = (id: number) => {
    navigate(`/${id}`);
  };

  const onRegister = () => {
    navigate(`/register`);
  };

  return (
    <S.Wrapper>
      <S.HiddenH3>사기예방법 공유</S.HiddenH3>
      <OriginalBtn onClick={onRegister}>글쓰기</OriginalBtn>
      <S.Ul>
        <Card {...tempData} onDetail={onDetail} />
        {list.map((item, index) => {
          return <Card key={index} onDetail={onDetail} {...item} />;
        })}
      </S.Ul>
    </S.Wrapper>
  );
};

export default Index;
