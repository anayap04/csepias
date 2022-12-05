import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { HeaderDiv, ImageContainer, Tabs, Tab } from "./styles";
import { BodyBold } from "../../foundations/Typography";
const logo = require("../../../../assets/images/logo.png");

const Header = (props) => {
  const theme = useTheme() || DefaultTheme;

  return (
    <HeaderDiv>
      <ImageContainer>
        <img alt="logo" width={199} src={logo} />
      </ImageContainer>
      <Tabs>
        <Tab hoverColor={theme.colors.pantoneGreen}>
          <BodyBold>{"¿Quiénes somos?"}</BodyBold>
        </Tab>
        <Tab hoverColor={theme.colors.pantoneBlue}>
          {" "}
          <BodyBold>{"Cursos"}</BodyBold>
        </Tab>
        <Tab hoverColor={theme.colors.pantoneOrange}>
          <BodyBold>{"Agenda"}</BodyBold>
        </Tab>
        <Tab hoverColor={theme.colors.pantoneGold}>
          <BodyBold>{"Editorial"}</BodyBold>
        </Tab>
      </Tabs>
    </HeaderDiv>
  );
};

export default Header;
