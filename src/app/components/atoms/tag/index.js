import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { TagLabel } from "../../foundations/Typography";
import { getTagColor, TagContainer } from "./styles";

const Tag = (props) => {
  const { label, color } = props;
  const theme = useTheme() || DefaultTheme;
  const colorFont = getTagColor(color, theme)

  return (
    <TagContainer type={color}>
      <TagLabel color={colorFont}>{label}</TagLabel>
    </TagContainer>
  );
};

export default Tag;
