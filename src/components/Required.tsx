import React from "react";
import styled from "styled-components";

const Required = () => {
  return <Star>*</Star>;
};

export default Required;

const Star = styled.span`
  color: ${({ theme }) => theme.COLOR.original};
  font-size: ${({ theme }) => theme.SIZE.lg};
`;
