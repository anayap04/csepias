import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { HeaderDiv, ImageContainer, Tabs, Tab } from "./styles";
import { BodyBold } from "../../foundations/Typography";
import { useNavigate } from "react-router-dom";
const logo = require("../../../../assets/images/logo.png");

const Header = (props) => {
  const {optionSelected} = props;
  const theme = useTheme() || DefaultTheme;
  const navigate = useNavigate();

  return (
    <HeaderDiv>
      <ImageContainer>
        <img alt="logo" width={199} src={logo} />
      </ImageContainer>
      <Tabs>
        <Tab
          actual={optionSelected === 'info'}
          onClick={() => navigate("/")}
          hoverColor={theme.colors.pantoneGreen}
        >
          <BodyBold>{"¿Quiénes somos?"}</BodyBold>
        </Tab>
        <Tab
          actual={optionSelected === 'courses'}
          onClick={() => navigate("/cursos")}
          hoverColor={theme.colors.pantoneBlue}
        >
          <BodyBold>{"Cursos"}</BodyBold>
        </Tab>
        <Tab
          actual={optionSelected === 'agenda'}
          onClick={() => navigate("/agenda")}
          hoverColor={theme.colors.pantoneOrange}
        >
          <BodyBold>{"Agenda"}</BodyBold>
        </Tab>
        <Tab
        actual={optionSelected === 'editorial'}
          onClick={() => navigate("/editorial")}
          hoverColor={theme.colors.pantoneGold}
        >
          <BodyBold>{"Editorial"}</BodyBold>
        </Tab>
      </Tabs>
    </HeaderDiv>
  );
};

export default Header;
