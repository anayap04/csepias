import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { Body, SubTitleLightSmall, SubTitleSmall, TagLabel, TitleLightSmall } from "../../foundations/Typography";

export const Content = styled.div`
  width: ${({ width, isMobile }) => isMobile ?  width * 0.9 :  width * 0.4}px;
  margin: 0 0 0 auto;
  display: flex;
  height: 257px;
  flex-direction: row;
  padding-top: 77px;
`;

Content.defaultProps = {
  theme: DefaultTheme,
};

export const ColTitle = styled.div`
  padding: 10px 0px 0px 10px;
  width ${({ width, isMobile }) => isMobile ?  width * 0.6 :  width * 0.25}px;
  background-color: ${({ theme }) => theme.colors.white700};
  & > ${TitleLightSmall}, ${SubTitleSmall}, ${Body}, ${TagLabel} {
    margin: ${({isMobile}) => isMobile ? '5px' : '16px'};
  }
`;

ColTitle.defaultProps = {
  theme: DefaultTheme,
};

export const ColInfo = styled.div`
  width ${({ width }) => (width ? width * 0.8 : "12vw")};
  height: 227px;
  text-align: center;
  display: grid;
  
  
`;

ColInfo.defaultProps = {
  theme: DefaultTheme,
};

export const Row = styled.div`
  width: ${({ width, isMobile }) => isMobile ?  width * 0.3 :  width * 0.15}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  height: 128px;
  & ${SubTitleLightSmall}  {
    margin: 5px;
  }
`;

export const CardContainer = styled.div`
  width: ${({ width }) => width * 0.95}px;
  background-image: url(${({ urlImage }) => urlImage});
  background-size: ${({ width }) => width * 0.95}px;
  height: 334px;
  margin-top: 30px;
  &:hover {
    ${Content} {
      height: 333px;
      padding-top: 0px;
      width: ${({ width }) => width * 0.95}px;
    }
    ${ColTitle} {
      margin-top: 0;
      width: ${({ width, isMobile }) => isMobile ?  width * 0.7 :  width * 0.9}px;
      transition: width 0.3s ease-in-out;
      background-color: ${({ theme }) => theme.colors.white700}bd;
      height: 324px;
    }
    ${Row} {
      height: 167px;
      transition: 0.3s ease-in-out;
    }
  }
`;
