import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";

export const Root = styled.div`
  width: ${({width}) => width}px;
  margin-right: 15px;
  margin-left: 15px;
  
`

export const ListContainer = styled.div`
  border: 3px ${({theme}) => theme.colors.black} solid;
  position: absolute;
  width: ${({width}) => width - 6}px;
`

ListContainer.defaultProps = {
  theme: DefaultTheme,
}

export const Item = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  height: 35px;
  padding-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  & > * {
    margin: 0 0 0 0;
  }
  &: hover {
    background-color: ${({theme}) => theme.colors.pantoneGreen};
  }
`
Item.defaultProps = {
  theme: DefaultTheme,
}