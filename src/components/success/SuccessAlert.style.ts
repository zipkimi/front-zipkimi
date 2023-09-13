import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  margin-top: 75px;
  padding: 20px;
`;

export const Strong = styled.strong`
  display: block;
  margin-top: 15px;
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.FONT.size20};
`;

export const Logo = styled.img`
  display: inline-block;
  width: 48px;
  height: 48px;
`;

export const Celebration = styled.p`
  ${({ theme }) => theme.TEXT.text15}
  color: ${({ theme }) => theme.COLOR.dark};
`;
