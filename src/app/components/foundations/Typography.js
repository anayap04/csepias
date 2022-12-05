import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";

const BodyBold = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: Acumin-RPro;
  font-weight: 900;
`;

BodyBold.defaultProps = {
  theme: DefaultTheme,
}

const Body = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: Acumin-RPro;
`;

Body.defaultProps = {
  theme: DefaultTheme,
}




export { BodyBold, Body };
