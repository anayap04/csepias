import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: 100px;
`;

export const BodyContent = styled.div`
  padding: 30px 20px 100px 30px;
`;

export const ImageContent = styled.img`
  width: 100vw;
  height: 44vh;
  margin-left: -30px;
  margin-right: -30px;
  object-fit: cover;
  object-position: 100% 0;
`;
export const SummaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -30px;
  margin-bottom: 30px;
`;

export const DescriptionContent = styled.div`
  margin-top: -30px;
  padding-left: 30px;
  width: ${({ isMobile }) => (isMobile ? "85vw" : "60vw")};

`;

export const MoreInfo = styled.div`
  width: ${({ isMobile }) => (isMobile ? "85vw" : "30vw")};
  border: 2px ${({ theme }) => theme.colors.pantoneBlue} solid;
  text-align: center;
  margin-left: 30px;
  height: 280px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
