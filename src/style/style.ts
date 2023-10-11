import styled from "styled-components";

export const BodyStyle = styled.div`
  //min-height: 100vh;
  //height: calc(var(--vh, 1vh) * 100);
  height: 100%;
  padding-top: 56px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  height: 100%;
`;
