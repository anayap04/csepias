import styled from "styled-components";
import { Body } from "../../foundations/Typography";

export const Container = styled.div`
  padding-top: 30px;
  padding-left: ${({ isMobile }) => (isMobile ? "20px" : "30px")};
  text-align: center;
`;

export const HeadContainer = styled.div`
  text-align: center;
  width: 95vw;
  ${Body} {
    margin: 0;
  }
`;

export const HeadTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: ${({ isMobile, width }) => (isMobile ? width * 0.31 +"px" : "40vw")};
`;

export const IconContainer = styled.div`
  padding-top: 15px;
  padding-left: 5px;
`;
