import React from "react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import Header from "../../components/atoms/header";
import {
  Body,
  SubTitle,
  TitlePrincipal,
} from "../../components/foundations/Typography";
import { Container, Content, ContentHome, ContentSummary } from "./styles";

const TitleHome = ({ theme }) => (
  <ContentHome>
    <TitlePrincipal withShadow color={theme.colors.white}>
      {
        "Trazabilidad, requisito fundamental de los Sistemas Integrales de Seguridad (SIS)."
      }
    </TitlePrincipal>
  </ContentHome>
);

const SummaryInfo = ({ theme }) => (
  <ContentSummary>
    <SubTitle color={theme.colors.white}>{"Quiénes somos"}</SubTitle>
    <Body color={theme.colors.white}>
      {
        `El Colegio Superior de Especialistas y Profesionales en Inteligencia y Administración de la Seguridad A.C. (CSEPIAS) 
        es un órgano colegiado sin precedente, conformado por especialistas y profesionales de la seguridad, con amplia experiencia y reconocimiento 
        en el ámbito nacional e internacional; CSEPIAS nace con una visión integral entorno a la profesionalización, estandarización, homologación, 
        certificación e innovación, de todas las actividades relacionadas con la seguridad.`
      }
    </Body>
  </ContentSummary>
);

const Home = (props) => {
  const [background, setBackground] = useState("transparent");
  const theme = useTheme() || DefaultTheme;
  return (
    <div>
      <Header setBackground={setBackground} />
      <Container>
        <Content background={background}>
          {background === "transparent" && <TitleHome theme={theme} />}
          {background === theme.colors.pantoneGreen && (
            <SummaryInfo theme={theme} />
          )}
        </Content>
      </Container>
    </div>
  );
};

export default Home;
