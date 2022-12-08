import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";

export const PrimaryContainer = styled.button`
  width: ${({width}) => width ? width+'px': 'fit-content'};
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  border: 0;
  margin-top: 10px;
`;

export const LinkContainer = styled.a`
  width: 200px;
  backgound-color: transparent;
  &:hover {
    cursor: pointer;
  }

`;

export const IconBtnContainer = styled.button`
  background-color: transparent;
  width: 43px;
  heigth: 43px;
  border: 3px ${({theme}) => theme.colors.black} solid;
  padding: 5px 0px 5px 4px;
  margin: auto;
  &:hover {
    background-color: ${({hoverColor}) => hoverColor};
    cursor: pointer;
  }
`
IconBtnContainer.defaultProps = {
  theme: DefaultTheme,
}

