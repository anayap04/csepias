import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { IconBtnContainer } from "./styles";
import Icon from "../../foundations/Icons";

const IconBtn = (props) => {
  const { iconName, onClick, hoverColor } = props;
  const theme = useTheme() || DefaultTheme;
  return (
    <IconBtnContainer hoverColor={hoverColor} onClick={() => onClick ? onClick() : null}>
      <Icon iconName={iconName} size={theme.dimensions.icon.m} />
    </IconBtnContainer>
  );
};

export default IconBtn;
