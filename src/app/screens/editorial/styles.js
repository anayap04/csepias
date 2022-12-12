import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 30px;
`


export const BodyContent = styled.div`
  padding: 30px 20px 100px 30px;
  background-color: ${({theme}) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  ${CardContainer} {
    margin-right: 40px;
    margin-left: 10px;
    margin-top: 30px;
  }
`