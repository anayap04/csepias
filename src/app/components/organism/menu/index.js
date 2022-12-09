import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { slide as Menu } from "react-burger-menu";
import { MenuItem } from "./styles";
import icon from "../../../../assets/images/svg/menu.svg";
import cross from "../../../../assets/images/svg/cross.svg";

const HamMenu = (props) => {
  const theme = useTheme() || DefaultTheme;

  const styles = {
    bmMenu: {
      background: theme.colors.white,
      padding: "2.5em 1em 0",
      fontSize: "1.15em",
    },
    bmBurgerButton: {
      position: "absolute",
      width: 36,
      height: 30,
      right: 10,
      top: 10,
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
    bmBurgerBars: {
      background: theme.colors.pantoneGray424,
    },
    bmItemList: {
      color: theme.colors.black,
      paddingTop: theme.dimensions.l,
    },
    bmItem: {
      paddingTop: theme.dimensions.m,
    },
  };

  return (
    <Menu
      right
      styles={styles}
      customBurgerIcon={<img alt="Menu" src={icon} />}
      customCrossIcon={<img alt="Cerrar" src={cross} />}
    >
      <MenuItem alt="Informacion" href="/info">
        {"Quienes somos"}
      </MenuItem>
      <MenuItem alt="Cursos" href="/cursos">
        {"Cursos"}
      </MenuItem>
      <MenuItem alt="Agenda" href="/agenda">
        {"Agenda"}
      </MenuItem>
      <MenuItem alt="Editorial" href="/editorial">
        {"Editorial"}
      </MenuItem>
    </Menu>
  );
};

export default HamMenu;
