import React from "react";
import { useTheme } from "styled-components";
import { BodyBold } from "../../foundations/Typography";
import { DefaultTheme } from "../../../../theme/themes";
import { PrimaryContainer } from "./styles";

const Primary = (props) => {
  const theme = useTheme() || DefaultTheme;
  const { backgroundColor = theme.colors.pantonerGreen, label, width } = props;

  return (
    <PrimaryContainer width={width} backgroundColor={backgroundColor}>
      <BodyBold color={theme.colors.white}>{label}</BodyBold>
    </PrimaryContainer>
  );
};

export default Primary;
