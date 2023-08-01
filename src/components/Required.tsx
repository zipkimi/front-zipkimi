import React from "react";
import styled from "styled-components";

const Required = () => {
  return <RedStar>*</RedStar>;
};

export default Required;

const RedStar = styled.span`
  color: red;
  font-size: 14px;
`;
