import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { TagLabel } from "../../foundations/Typography";

export const getTagColor = (type, theme) => {
  const colors = {
    webinar: theme.colors.pantoneOrange,
  }
  return colors[type] || colors.webinar;

}

export const TagContainer = styled.div`
  border: 3px ${({type, theme}) => getTagColor(type, theme)} solid;
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  & ${TagLabel} {
    margin: 0;
  }
`

TagContainer.defaultProps = {
  theme: DefaultTheme,
}