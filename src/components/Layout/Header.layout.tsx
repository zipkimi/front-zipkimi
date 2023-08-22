import React from "react";
import styled from "styled-components";

type Props = {
  btn?: React.ReactNode;
  title: string;
};

const HeaderLayout = ({ btn, title }: Props) => {
  return (
    <Header>
      {btn && btn}
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

const Title = styled.h1`
  font-size: ${({ theme }) => theme.SIZE.font18};
`;

const LayoutBox = styled.div`
  width: 24px;
  height: 24px;
`;
