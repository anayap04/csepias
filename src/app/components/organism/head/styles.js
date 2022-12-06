import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  padding-left: ${({ isMobile }) => (isMobile ? "20px" : "30px")};
  text-align: center;
`;

export const HeadContainer = styled.div`
  text-align: center;
  width: 90vw;
`;

export const HeadTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding-left:  ${({ isMobile }) => (isMobile ? "30vw" : "40vw")};
`;

export const IconContainer = styled.div`
  padding-top: 15px;
  padding-left: 5px;
`;
