import React from "react";
import styled from "styled-components";
import Prevent from "./Prevent";

const Index = () => {
  return (
    <section>
      <HiddenH2>사기 및 피해 관련글</HiddenH2>
      <Nav>
        <UlFixed>
          <li>
            <TempActiveBtn type="button">사기예방법 공유</TempActiveBtn>
          </li>
          <li>
            <button type="button">사기 대처법</button>
          </li>
          <li>
            <button type="button">피해 커뮤니티</button>
          </li>
        </UlFixed>
      </Nav>
      <Prevent />
    </section>
  );
};

export default Index;

const HiddenH2 = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

const Nav = styled.nav`
  border-bottom: 1px solid black;
`;

const UlFixed = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  width: fit-content;
  margin: auto;

  button {
    padding-bottom: 5px;
    font-size: 1.3rem;
    word-break: keep-all;

    &:hover {
      color: ${({ theme }) => theme.COLOR.original};
    }
  }
`;

const TempActiveBtn = styled.button`
  color: ${({ theme }) => theme.COLOR.original};
  border-bottom: 2px solid ${({ theme }) => theme.COLOR.original};
`;
