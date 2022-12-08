import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";

const TitlePrincipal = styled.p`
  font-size: 44px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-BdPro;
  text-shadow: ${({ withShadow }) =>
    withShadow && "4px -1px 4px rgba(0,0,0,0.85)"};
`;

const Title = styled.p`
  font-size: 36px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-BdPro;
  text-shadow: ${({ withShadow }) =>
    withShadow && "4px -1px 4px rgba(0,0,0,0.85)"};
`;

const TitleLight = styled.p`
  font-size: 28px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-ProExtraLight;
`;

const TitleLightSmall = styled.p`
  font-size: 20px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-ProExtraLight;
`;

const SubTitleLight = styled.p`
  font-size: 24px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-ProExtraLight;
`;
const SubTitleLightSmall = styled.p`
  font-size: 18px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-ProExtraLight;
`;

const SubTitle = styled.p`
  font-size: 24px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-BdPro;
  text-shadow: ${({ withShadow }) =>
    withShadow && "4px -1px 4px rgba(0,0,0,0.85)"};
`;

const SubTitleSmall = styled.p`
  font-size: 18px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-BdPro;
  text-shadow: ${({ withShadow }) =>
    withShadow && "4px -1px 4px rgba(0,0,0,0.85)"};
`;

const BodyBold = styled.p`
  font-size: 16px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-RPro;
  font-weight: 800;
`;

BodyBold.defaultProps = {
  theme: DefaultTheme,
};

const Body = styled.p`
  font-size: 16px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-RPro;
`;

Body.defaultProps = {
  theme: DefaultTheme,
};

const TagLabel = styled.p`
  font-size: 18px;
  color: ${({ theme, color }) => color || theme.colors.black};
  font-family: Acumin-ProLight;
  font-weight: 300;
`;

export {
  TitlePrincipal,
  Title,
  SubTitle,
  BodyBold,
  Body,
  TagLabel,
  TitleLight,
  TitleLightSmall,
  SubTitleLight,
  SubTitleSmall,
  SubTitleLightSmall,
};
