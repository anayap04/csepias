import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { BodyBold } from "../../foundations/Typography";

export const HeaderDiv = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  height: 55px;
  display: flex;
  flex-direction: row;
`;

HeaderDiv.defaultProps = {
  theme: DefaultTheme,
};

export const ImageContainer = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;

export const Tabs = styled.div`
  padding-bottom: 10px;
  display: flex;
  float: right;
  margin: auto 0 auto auto;
`;

export const Tab = styled.div`
  width: 150px;
  text-align: center;
  background-color: ${({ hoverColor,actual  }) => actual ? hoverColor : 'transparent'};
  & > ${BodyBold} {
  color: ${({ theme, actual }) => actual ? theme.colors.white: theme.colors.black};
  }
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    cursor: pointer;
    & > ${BodyBold} {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

Tab.defaultProps = {
  theme: DefaultTheme,
};
