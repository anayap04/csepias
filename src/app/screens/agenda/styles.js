import styled from "styled-components";
import { IconBtnContainer } from "../../components/atoms/buttons/styles";
import { Root } from "../../components/molecules/list-view/styles";

export const BodyContent = styled.div`
  padding-left: 30px;
  padding-bottom: 100px;
`

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  padding-top: 10px;
  width: ${({isMobile}) => isMobile ? '95vw': '95vw' };
  & > * {
    margin: 5px 0px 0px 0px;
  }
`

export const FilterControlers = styled.div`
  display: ${({isMobile}) => isMobile ? 'contents': 'flex' };
  flex-direction: row;
  float: right;
  margin: ${({isMobile}) => isMobile ? '15px': 'auto 10px auto auto' };
  ${IconBtnContainer} {
    margin-left: ${({isMobile}) => isMobile && '5px'};
    margin-right: ${({isMobile}) => isMobile && '5px'};
  }
  ${Root} {
    margin-left: ${({isMobile}) => isMobile && '5px'};
    margin-top: 1px;
  }
`