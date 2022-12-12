import React from "react";
import { LineHorizontal } from "../../atoms/line-separator/Separators";
import { Body, SubTitle } from "../../foundations/Typography";
import { Container, HeadContainer, HeadTitle, IconContainer } from "./styles";
import { isMobile } from "react-device-detect";
import Icon from "../../foundations/Icons";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import useWindowDimensions from "../../../../utils/useWindowDimensions";

const Head = (props) => {
  const { children, title, description, colorIcon, icon } = props;
  const theme = useTheme() || DefaultTheme;
  const { width } = useWindowDimensions();

  return (
    <Container isMobile={isMobile}>
      <HeadContainer>
        <HeadTitle width={width} isMobile={isMobile}>
          <SubTitle>{title}</SubTitle>
          {icon && (
            <IconContainer>
              <Icon
                iconName={icon}
                color={colorIcon}
                size={theme.dimensions.icon.l}
              />
            </IconContainer>
          )}
        </HeadTitle>
        <Body>{description}</Body>
        {children}
        <LineHorizontal width={isMobile && "88vw"} />
      </HeadContainer>
    </Container>
  );
};

export default Head;
