import React from "react";
import styled from "styled-components";
import IBefore from "../../assets/icon/icon_before.png";

type Props = {
  btn?: React.ReactNode;
  title: string;
};

const HeaderLayout = ({ btn, title }: Props) => {
  return (
    <Header>
      {btn !== "back" && btn}
      {btn === "back" && (
        <button type="button">
          <Img src={IBefore} alt="뒤로가기" />
        </button>
      )}
      <Title>{title}</Title>
      {btn && <LayoutBox />}
    </Header>
  );
};

export default HeaderLayout;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.SIZE.font18};
`;

const LayoutBox = styled.div`
  width: 24px;
  height: 24px;
`;
