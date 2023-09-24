import styled from "styled-components";

export const TabWrapper = styled.nav`
  display: flex;
`;

export const TabBtn = styled.button<{ isSelected: boolean }>`
  border: none;
  border-bottom: ${({ theme, isSelected }) =>
    isSelected
      ? `2px solid ${theme.COLOR.original}`
      : `1px solid ${theme.COLOR.gray}`};
  width: 100%;
  padding-bottom: 10px;
  ${({ theme }) => theme.TEXT.text13};
  font-weight: ${({ theme }) => theme.FONT.medium};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLOR.original : theme.COLOR.gray};
`;
