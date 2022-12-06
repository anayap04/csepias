import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";

export const MenuItem = styled.a`
  backgroung-color: ${({ theme }) => theme.colors.white} !important;
  font-family: Acumin-RPro;
  &:link {
    text-decoration: none;
  }
  &:visited {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`;

MenuItem.defaultProps = {
  theme: DefaultTheme,
};
