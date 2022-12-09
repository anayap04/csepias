import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import Icons from "../../foundations/Icons";
import { SubTitleLightSmall } from "../../foundations/Typography";
import { Container, IconContainer } from "./styles";

const IconTextInfo = (props) => {
  const { icon, text, width, secondLine } = props;
  const theme = useTheme() || DefaultTheme;

  return (
    <Container width={width}>
      <IconContainer>
      <Icons iconName={icon} size={theme.dimensions.icon.l} />
      </IconContainer>
      <div>
      <SubTitleLightSmall>{text}</SubTitleLightSmall>
      {secondLine && <SubTitleLightSmall>{secondLine}</SubTitleLightSmall>}
      </div>
    </Container>
  );
};

export default IconTextInfo;
