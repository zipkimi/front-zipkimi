import styled from "styled-components";

export const NaverBtn = styled.button`
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  font-weight: bold;
  color: white;
  outline: none;
  background-color: #10ce72;
`;

export const KakaoBtn = styled(NaverBtn)`
  background-color: #f7e600;
  color: #3a1d1d;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
