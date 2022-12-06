import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  padding-left: ${({isMobile}) => isMobile ? '20px' : '30px'};
`

export const HeadContainer = styled.div`
  text-align: center;
  width: 90vw;
`