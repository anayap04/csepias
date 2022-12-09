import styled from "styled-components";
import { Body, BodyBold } from "../../../components/foundations/Typography";

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
  margin: -30px;
  object-fit: cover;
  object-position: 100% 0;
  margin-top: 10px;
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
  height: 250px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Table = styled.table`
width: ${({ isMobile }) => (isMobile ? "85vw" : "28vw")};
margin-left: 40px;
`

export const TableBody = styled.tbody`
width: ${({ isMobile }) => (isMobile ? "85vw" : "28vw")};
`


export const TableRow = styled.tr`
width: ${({ isMobile }) => (isMobile ? "85vw" : "20vw")};
text-align: left;
& ${Body} {
  margin-top: 5px;
  margin-bottom: 5px;

}
& ${BodyBold} {
  margin-top: 5px;
  margin-bottom: 5px;

}

`
