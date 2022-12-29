import React from "react";
import Card from "../../../components/Card/Card";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { list } from "../../../mockData";

const Index = () => {
  const navigate = useNavigate();

  // TODO - API 연결
  //  상세조회를 어느 주소로 보내느냐에 따라 달라짐.
  const onDetail = (id: number) => {
    navigate(`/${id}`);
  };

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

  return (
    <Ul>
      <Card {...tempData} onDetail={onDetail} />
      {list.map((item) => {
        return <Card onDetail={onDetail} {...item} />;
      })}
    </Ul>
  );
};

export default Index;

const Ul = styled.ul`
  padding: 2rem;

  li:not(li:last-child) {
    margin-bottom: 1rem;
  }
`;
