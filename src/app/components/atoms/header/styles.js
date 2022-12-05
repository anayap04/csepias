import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";

export const HeaderDiv = styled.div`
  width: 100vw;
  background-color: ${({theme}) => theme.colors.white};
  height: 55px;
`

HeaderDiv.defaultProps = {
  theme: DefaultTheme,
}