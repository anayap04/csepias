import { isMobile } from "react-device-detect";
import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { SubTitle, SubTitleLight } from "../../foundations/Typography";
import { fadeIn } from "react-animations";
import border from "../../../../assets/images/border.png";

const fadeAnimation = keyframes`${fadeIn}`;

export const BorderContent = styled.div`
  background: url(${border});
  background-size: 20px 260px;
  width: 20px;
  height: 260px;
  float: right;
  margin-right: 0px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => (isMobile ? width * 0.76 : width * 0.95 - 260)}px;
  padding: 15px;
  ${SubTitle} {
    margin: 0;
  }
`;

export const ColImage = styled.div`
  background: linear-gradient(
      ${({ theme }) => theme.colors.pantoneGreen}9c,
      ${({ theme }) => theme.colors.pantoneGreen}69
    ),
    url(${({ urlImage }) => urlImage});
  background-size: 260px 260px;
  width: 260px;
  height: 260px;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  &:after {
    display: block;
   
  }
`;

export const Caption = styled.div`
  margin: 195px 0 0 0;
  background-color: ${({ theme }) => theme.colors.pantoneBlue};
  height: 50px;
  z-index: 2;
  text-align: center;
  padding-top: 16px;
  transition: all 0.5s;
  ${SubTitleLight} {
    margin: 0px;
  } ;
`;
export const CardRoot = styled.div`
  width: ${({ width }) => isMobile ? width * 0.85 : width * 0.95}px;
  border: 3px ${({ theme }) => theme.colors.black} solid;
  height: 260px;
  display: flex;
  animation: 0.5s ${fadeAnimation};
  flex-direction: row;
  &: hover {
    opacity: 70%;
    cursor: pointer;
    overflow: hidden;
    ${ColImage} {
      -ms-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);

    }
    ${Container} {
      padding-left: 25px;
    }
  
  }
`;

CardRoot.defaultProps = {
  theme: DefaultTheme,
};
