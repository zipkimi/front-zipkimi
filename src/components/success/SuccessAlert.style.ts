import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const Strong = styled.strong`
  display: block;
  margin-top: 6rem;
  margin-bottom: 60px;
  font-size: 1.6rem;
`;

export const Logo = styled.img`
  display: inline-block;
  border: 1px solid gray;
  width: 100px;
  height: 100px;
`;

export const Celebration = styled.p`
  margin-top: 80px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLOR.txtInfo};

  span {
    display: block;
    margin-top: 2rem;
    color: ${({ theme }) => theme.COLOR.txtInfo};
  }
`;
