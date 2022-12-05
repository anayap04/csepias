import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";

const TitlePrincipal = styled.p`
  font-size: 44px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-BdPro;
  text-shadow: ${({withShadow}) => withShadow && '4px -1px 4px rgba(0,0,0,0.85)'};
`;

const SubTitle = styled.p`
  font-size: 24px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-BdPro;
  text-shadow: ${({withShadow}) => withShadow && '4px -1px 4px rgba(0,0,0,0.85)'};
`;


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
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-RPro;
`;

Body.defaultProps = {
  theme: DefaultTheme,
}




export { TitlePrincipal, SubTitle, BodyBold, Body };
