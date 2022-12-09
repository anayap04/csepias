import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";

export const TextIconContainer = styled.button`
  background-color: transparent;
  border: 3px ${({ theme }) => theme.colors.black} solid;
  display: flex;
  flex-direction: row;
  width: ${({width}) => width ? width : '150'}px;
  text-align: center;
  padding-top: 10px;
  height: 43px;
  & > * {
    margin: 0;
  }
  &: hover {
    cursor: pointer;
  }
`;

TextIconContainer.defaultProps = {
  theme: DefaultTheme,
}

export const IconContainer = styled.div`
  padding-top: 2px;
  padding-left: 7px;
  height: 20px;
  margin: 0 5px 0 auto;
  
`
