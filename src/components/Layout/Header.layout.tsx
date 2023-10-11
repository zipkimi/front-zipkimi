import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import IBefore from "../../assets/icon/icon_before.png";

type Props = {
  btn?: React.ReactNode;
  title: string;
};

const HeaderLayout = ({ btn, title }: Props) => {
  const navigate = useNavigate();

  return (
    <Header>
      {btn !== "back" && btn}
      {btn === "back" && (
        <button type="button" onClick={() => navigate(-1)}>
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
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: white;
  z-index: 100;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.TEXT.text18};
  font-weight: ${({ theme }) => theme.FONT.regular};
`;

const LayoutBox = styled.div`
  width: 24px;
  height: 24px;
`;
