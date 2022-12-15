import styled, {keyframes} from "styled-components";
import { fadeIn } from "react-animations";
import { Body, SubTitle } from "../../components/foundations/Typography";
import { DefaultTheme } from "../../../theme/themes";

const fadeAnimation = keyframes`${fadeIn}`;

export const BodyContainer = styled.div`
  background-color: ${({theme}) => theme.colors.pantoneGreen};
  padding: 30px;
  margin-top: -10px;
  display: ${({isMobile}) => isMobile ? 'relative' : 'flex'};
`

export const Content = styled.div`
background-color: ${({theme}) => theme.colors.pantoneGreen};
`

export const Image = styled.img`
  width: 100vw; 
`

export const GeneralCol = styled.div`
  width: ${({width}) => width}px;
`

export const QuoteCol = styled.div`
  width: ${({width}) => width}px;
  margin-left: ${({width, isMobile}) => isMobile ? '15' :  width * 0.25}px;
`

export const Quote = styled.div`
  border-left: 2px ${({theme}) => theme.colors.white} solid;
  padding-left: 15px;
`

Quote.defaultProps = {
  theme: DefaultTheme,
}

export const FragmentList = styled.div`
  ${Body} {
    margin-top: 5px;
    margin-bottom: 10px;
    animation: 0.3s ${({isActive}) => isActive ? fadeAnimation : null};
  }
  &:hover {
    cursor: ${({isActive}) => isActive ? 'default' : 'pointer'};
    ${SubTitle} {
      opacity: ${({isActive}) => isActive ? '100%' : '70%'};
    }
  }

`