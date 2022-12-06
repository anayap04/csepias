import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";

export const LineHorizontal = styled.hr`
  border-top: 3px solid${({theme}) => theme.colors.black};
  width: ${({width}) => width ? width : '95vw' };
`
LineHorizontal.defaultProps = {
  theme: DefaultTheme,
}