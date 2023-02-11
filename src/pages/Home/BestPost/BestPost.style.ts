import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 3rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  column-gap: 1rem;
  padding: 1rem;
  overflow: hidden;

  // Swiper style 가져와서 적용시키는게 더 좋을듯
  @media screen and (max-width: 1000px) {
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      display: inline-block;
      white-space: pre-wrap;
      &:not(li:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;
