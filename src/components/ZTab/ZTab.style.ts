import styled from "styled-components";

export const TabWrapper = styled.nav`
  display: flex;
`;

export const TabBtn = styled.button<{ isSelected: boolean }>`
  border: none;
  border-bottom: ${({ isSelected }) => (isSelected ? "2px" : "1px")} solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.COLOR.original : theme.COLOR.gray};
  width: 100%;
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.SIZE.font13};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLOR.original : theme.COLOR.gray};
`;
