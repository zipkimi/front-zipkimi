import styled from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NaverBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  padding: 14px;
  font-size: ${({ theme }) => theme.FONT.size16};
  color: white;
  outline: none;
  background-color: #03c75a;
  img {
    width: 14px;
    height: 14px;
    margin-right: 11px;
  }
`;

export const KakaoBtn = styled(NaverBtn)`
  margin-top: -10px;
  background-color: #fee500;
  color: #3a1d1d;
  img {
    width: 20px;
    height: 18px;
    margin-right: 8px;
  }
`;

export const MoreTxt = styled.span`
  position: relative;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT.size12};
  color: ${({ theme }) => theme.COLOR.darkGray};
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 133px;
    height: 1px;
    background-color: ${({ theme }) => theme.COLOR.lightGray};
  }
  &::after {
    right: 0;
  }
`;
