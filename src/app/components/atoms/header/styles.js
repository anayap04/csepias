import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { BodyBold } from "../../foundations/Typography";

export const HeaderDiv = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  height: 55px;
  display: flex;
  flex-direction: row;
  padding-bottom: 0px;
`;

HeaderDiv.defaultProps = {
  theme: DefaultTheme,
};

export const ImageContainer = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  width: 50vw;
  &:hover {
    cursor: pointer;
  }
`;

export const Tabs = styled.div`
  padding-bottom: 0px;
  display: flex;
  float: right;
  margin: auto 0 0 auto;
`;

export const Tab = styled.div`
  width: 150px;
  text-align: center;
  heigth: 55px;
  margin-bottom: 0px;
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
