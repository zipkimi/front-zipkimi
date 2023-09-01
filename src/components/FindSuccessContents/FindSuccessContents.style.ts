import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.strong`
  display: block;
  margin-bottom: 6px;
  font-size: ${({theme}) => theme.SIZE.font18};
  font-weight: bold;
`

export const SubTxt = styled.small`
  font-size: ${({theme}) => theme.SIZE.font13};
  color: ${({theme}) => theme.COLOR.darkGray};
`

export const EmailWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 40px;
  img {
    display: inline-block;
    width: 38px;
    height: 38px;
  }
  address {
    display: inline-block;
    text-decoration: none;
    font-style: normal;
  }
`