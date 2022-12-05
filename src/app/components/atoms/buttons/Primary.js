import React from "react";
import { useTheme } from "styled-components";
import { BodyBold } from "../../foundations/Typography";
import { DefaultTheme } from "../../../../theme/themes";

const Primary = (props) => {
  const theme = useTheme() || DefaultTheme;
  const { backgoundColor = theme.colors.pantonerGreen, label } = props;

  return (
    <PrimaryContainer backgroundColor={backgroundColor}>
      <BodyBold>{label}</BodyBold>
    </PrimaryContainer>
  );
};

export default Primary;
