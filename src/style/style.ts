import styled from "styled-components";

export const BodyStyle = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
