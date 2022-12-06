import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { HeaderDiv, ImageContainer, Tabs, Tab } from "./styles";
import { BodyBold } from "../../foundations/Typography";
import { useNavigate } from "react-router-dom";
import HamMenu from "../menu";
import { isMobile } from "react-device-detect";
const logo = require("../../../../assets/images/logo.png");

const Header = (props) => {
  const { optionSelected, setBackground } = props;
  const theme = useTheme() || DefaultTheme;

  const navigate = useNavigate();

  return (
    <HeaderDiv>
      <ImageContainer
        onMouseEnter={() =>
          setBackground ? setBackground("transparent") : null
        }
        onClick={() => navigate("/")}
      >
        <img alt="logo" width={199} src={logo} />
      </ImageContainer>
      {isMobile ? (
        <HamMenu />
      ) : (
        <Tabs
          onMouseEnter={() =>
            setBackground ? setBackground("transparent") : null
          }
        >
          <Tab
            actual={optionSelected === "info"}
            onMouseEnter={() =>
              setBackground ? setBackground(theme.colors.pantoneGreen) : null
            }
            onClick={() => navigate("/info")}
            hoverColor={theme.colors.pantoneGreen}
          >
            <BodyBold>{"¿Quiénes somos?"}</BodyBold>
          </Tab>
          <Tab
            actual={optionSelected === "courses"}
            onClick={() => navigate("/cursos")}
            onMouseEnter={() =>
              setBackground ? setBackground(theme.colors.pantoneBlue) : null
            }
            hoverColor={theme.colors.pantoneBlue}
          >
            <BodyBold>{"Cursos"}</BodyBold>
          </Tab>
          <Tab
            actual={optionSelected === "agenda"}
            onClick={() => navigate("/agenda")}
            onMouseEnter={() =>
              setBackground ? setBackground(theme.colors.pantoneOrange) : null
            }
            hoverColor={theme.colors.pantoneOrange}
          >
            <BodyBold>{"Agenda"}</BodyBold>
          </Tab>
          <Tab
            actual={optionSelected === "editorial"}
            onClick={() => navigate("/editorial")}
            onMouseEnter={() =>
              setBackground ? setBackground(theme.colors.pantoneGold) : null
            }
            hoverColor={theme.colors.pantoneGold}
          >
            <BodyBold>{"Editorial"}</BodyBold>
          </Tab>
        </Tabs>
      )}
    </HeaderDiv>
  );
};

export default Header;
