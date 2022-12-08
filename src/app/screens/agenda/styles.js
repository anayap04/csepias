import styled from "styled-components";

export const BodyContent = styled.div`
  padding-left: 30px;
  padding-bottom: 100px;
`

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  padding-top: 10px;
  width: ${({isMobile}) => isMobile ? '90vw': '95vw' };
  & > * {
    margin: 15px 0px 0px 0px;
  }
`

export const FilterControlers = styled.div`
  display: ${({isMobile}) => isMobile ? 'contents': 'flex' };;
  flex-direction: row;
  float: right;
  margin: 0 ${({isMobile}) => isMobile ? '10px': '0' } 10px auto;
`