import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { SubTitle } from "../../foundations/Typography";



export const ImageContainer = styled.div`
  heigth: 160px;
  z-index: 1;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: 100% 0;
  width: 270px;
  height: 160px;
  z-index: -1;
`;

export const BodyCard = styled.div`
  height: 159px;
  margin-top: -18px;
  padding-top: 16px;
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


export const ContainerCard = styled.div`
  width: 270px;
  height: 320px;
  border: 2px ${({ theme }) => theme.colors.black} solid;
  z-index: 0;
  &:hover {
    ${BodyCard} {
      height: 300px;
      transition: 0.3s ease-in-out;
      margin-top: -161px;
      position: absolute;
      width: 270px;
      background-color: ${({ theme }) => theme.colors.white}c2;
    }
  }
  
`;

ContainerCard.defaultProps = {
  theme: DefaultTheme,
};