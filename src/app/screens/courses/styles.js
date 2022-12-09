import styled from "styled-components";
import { ContainerCard } from "../../components/organism/summary-card/styles";

export const BodyContent = styled.div`
  padding: 30px 30px 100px 30px;
  background-color: ${({theme}) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  ${ContainerCard} {
    margin-right: 40px;
    margin-left: 10px;
    margin-top: 30px;
  }
`