import React from "react";
import styled from "styled-components";
import IRequired from "../assets/icon/icon_required.png";

const Required = () => {
  return <Img src={IRequired} alt="필수" />;
};

export default Required;

const Img = styled.img`
  width: 8px;
  height: 8px;
`;
