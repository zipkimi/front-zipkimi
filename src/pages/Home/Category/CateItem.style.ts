import styled from "styled-components";

export const Container = styled.a`
  display: block;
  padding: .7rem 1rem;
  
  .font_info {
    font-size: ${({theme}) => theme.SIZE.info};
    color: ${({theme}) => theme.COLOR.txtInfo};
  }
`;

export const WriterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > div {
    display: flex;
    align-items: center;
    
    img {
      display: inline-block;
      border-radius: 50%;
      height: 25px;
      width: 25px;
      margin-right: 5px;
      background-color: lightgray;
      object-fit: contain;
      object-position: center center;
    }
    strong {
      margin-right: 5px;
    }
  }
`;

export const Dl = styled.dl`
  display: flex;
  gap: .5rem;
  
  div {
    display: flex;
  }
  dt {
    margin-right: 5px;
  }
`

export const Contents = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
`