import styled, {keyframes} from "styled-components";
import { fadeIn } from "react-animations";
import { Body, SubTitle } from "../../components/foundations/Typography";

const fadeAnimation = keyframes`${fadeIn}`;

export const BodyContainer = styled.div`
  background-color: ${({theme}) => theme.colors.pantoneGreen};
  padding: 30px;
  margin-top: -10px;  
`

export const Content = styled.div`
background-color: ${({theme}) => theme.colors.pantoneGreen};
`

export const Image = styled.img`
  width: 100vw; 
`

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