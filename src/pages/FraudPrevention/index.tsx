import React from "react";
import Card from "../../components/Card/Card";
import styled from "styled-components";

const Index = () => {
  return (
    <div>
      <h2>사기예방법 공유</h2>
      <Ul>
        <Card
          title={"제목입니다."}
          contents={
            "사람이 행복하기 위해서는 일을 할 수 있어야 할 뿐 아니라 자신이 한 일을 제대로 판단할 수 있어야 한다."
          }
        />
        <Card
          title={"제목입니다."}
          contents={
            "사람이 행복하기 위해서는 일을 할 수 있어야 할 뿐 아니라 자신이 한 일을 제대로 판단할 수 있어야 한다."
          }
          writer={"yunsik cho"}
          regDt={"2022-12-25"}
          info={{
            comments: 130,
            likes: 2900,
          }}
        />
      </Ul>
    </div>
  );
};

export default Index;

const Ul = styled.ul`
  padding: 2rem;

  li:not(li:last-child) {
    margin-bottom: 1rem;
  }
`;
