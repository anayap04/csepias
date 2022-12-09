import styled from "styled-components";
import { SubTitleLightSmall } from "../../foundations/Typography";

export const Container = styled.div`
  width: ${({width}) => width || 150}px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  & ${SubTitleLightSmall} {
    margin-top: 2px;
    margin-bottom: 0px;
  }
`

export const IconContainer = styled.div`
  margin-right: 12px;
`