import React from "react";
import styled from "styled-components";
import Logo from "../../assets/icon/icon_zipkimi(k).png";

type Props = {
  firstWord?: string;
  secondWord?: string;
};

const Header = ({ firstWord, secondWord }: Props) => {
  return (
    <HeaderWrapper>
      <div>
        <BackBtn type="button">
          <img src="" alt="뒤로가기" />
        </BackBtn>
      </div>
      <TitleWrapper>
        <img src={Logo} alt="집킴이" />
        <Title>
          <span>{firstWord}</span>
          <span>{secondWord}</span>
        </Title>
      </TitleWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  //border-bottom: 1px solid black;
  box-shadow: 0 0 5px 1px gray;
  padding-bottom: 1rem;
`;

const BackBtn = styled.button`
  border: 1px solid black;
  padding: 0.5rem;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  img {
    display: inline-block;
    height: 80px;
  }
`;

const Title = styled.strong`
  display: block;
  margin-top: 1rem;
  span {
    font-size: ${({ theme }) => theme.SIZE.xl};
  }
  span:first-child {
    color: cornflowerblue;
  }
  span:last-child {
    color: goldenrod;
  }
`;
