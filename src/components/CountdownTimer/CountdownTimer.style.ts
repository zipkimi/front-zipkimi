import styled from "styled-components";

export const TimerBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLOR.lightGray};
  border-left: none;
  height: 48px;
  padding-right: 14px;
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.COLOR.red};
  ${({ theme }) => theme.FONT.size13};
`;
