import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
export const Content = styled.div`
  width: 300px;
  height: 266px;
  flex-direction: column;
  /* padding: 36px 0px; */
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > p {
    ${({ theme }) => theme.TEXT.text13}
    color: ${({ theme }) => theme.COLOR.dark};
  }
`;
export const CloseBtn = styled.button`
  display: flex;
  width: 260px;
  height: 52px;
  padding: 14px 16px;
  margin: 40px 0px 20px 0px;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLOR.dimGray};
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
