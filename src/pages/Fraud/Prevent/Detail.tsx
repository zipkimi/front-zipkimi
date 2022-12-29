import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <section>
      <HighlightH2>
        <span>사기예방법 공유</span>
      </HighlightH2>
    </section>
  );
};

export default Detail;

const HighlightH2 = styled.h2`
  border-bottom: 1px solid black;
  text-align: center;

  span {
    display: inline-block;
    border-bottom: 2px solid ${({ theme }) => theme.COLOR.original};
    padding-bottom: 5px;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLOR.original};
  }
`;
