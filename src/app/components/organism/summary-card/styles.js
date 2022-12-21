import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { fadeIn } from "react-animations";
import { SubTitle } from "../../foundations/Typography";

const fadeAnimation = keyframes`${fadeIn}`;

export const ImageContainer = styled.div`
  heigth: 160px;
  z-index: 1;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: 100% 0;
  width: ${({ isMobile }) => (isMobile ? "80vw" : "270px")};
  height: 160px;
  z-index: -1;
`;

export const BodyCard = styled.div`
  height: 159px;
  margin-top: -18px;
  padding-top: 16px;
  padding-left: 3px;
  padding-right: 3px;
  z-index: 10;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  ${SubTitle} {
    margin-bottom: 10px;
  }
`;

BodyCard.defaultProps = {
  theme: DefaultTheme,
};

export const BodyDescription = styled.div`
  display: none;
  opacity: 0;
  height: 0px;
  transition-delay: 2s;
`;

export const ContainerCard = styled.div`
  width: ${({ isMobile }) => (isMobile ? "80vw" : "270px")};
  height: 320px;
  border: 2px ${({ theme }) => theme.colors.black} solid;
  z-index: 0;
  animation: 0.5s ${fadeAnimation};
  &:hover {
    ${BodyCard} {
      height: 300px;
      transition: height 0.3s ease-in-out;
      margin-top: -161px;
      position: absolute;
      width: ${({ isMobile }) => (isMobile ? "80vw" : "264px")};
      background-color: ${({ theme }) => theme.colors.white}c2;
      ${BodyDescription} {
        height: 150px;
        transition: all 20.5s ease 20.1s;
        display: block;
        opacity: 1;
        transition-delay: 2s;
      }
    }
    
    
  }
`;

ContainerCard.defaultProps = {
  theme: DefaultTheme,
};
