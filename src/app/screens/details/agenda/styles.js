import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  padding-bottom: 100px;
`

export const BodyContent = styled.div`
  padding: 30px 20px 100px 30px;
`

export const ImageContent = styled.img`
  width: 100vw;
  height: 44vh;
  margin: -30px;
`