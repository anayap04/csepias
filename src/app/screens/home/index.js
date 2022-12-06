import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import Link  from "../../components/atoms/buttons/Link";
import Header from "../../components/organism/header";
import {
  Body,
  SubTitle,
  TitlePrincipal,
} from "../../components/foundations/Typography";
import HamMenu from "../../components/organism/menu";
import { Root, Container, Content, ContentHome, ContentSummary } from "./styles";

const TitleHome = ({ theme }) => (
  <ContentHome>
    <TitlePrincipal withShadow color={theme.colors.white}>
      {
        "Trazabilidad, requisito fundamental de los Sistemas Integrales de Seguridad (SIS)."
      }
    </TitlePrincipal>
  </ContentHome>
);

const SummaryInfo = ({ theme, navigate }) => (
  <ContentSummary>
    <SubTitle color={theme.colors.white}>{"¿Quiénes somos?"}</SubTitle>
    <Body color={theme.colors.white}>
      {
        `El Colegio Superior de Especialistas y Profesionales en Inteligencia y Administración de la Seguridad A.C. (CSEPIAS) 
        es un órgano colegiado sin precedente, conformado por especialistas y profesionales de la seguridad, con amplia experiencia y reconocimiento 
        en el ámbito nacional e internacional; CSEPIAS nace con una visión integral entorno a la profesionalización, estandarización, homologación, 
        certificación e innovación, de todas las actividades relacionadas con la seguridad.`
      }
    </Body>
    <Link onClick={() => navigate('/info')} textColor={theme.colors.white} label="Ver más..." />
  </ContentSummary>
);


const SummaryCourses = ({ theme, navigate }) => (
  <ContentSummary>
    <SubTitle color={theme.colors.white}>{"Cursos"}</SubTitle>
    <Link onClick={() => navigate('/courses')} textColor={theme.colors.white} label="Ver más..." />
  </ContentSummary>
);

const SummaryAgenda = ({ theme, navigate }) => (
  <ContentSummary>
    <SubTitle color={theme.colors.white}>{"Agenda"}</SubTitle>
    <Link onClick={() => navigate('/agenda')} textColor={theme.colors.white} label="Ver más..." />
  </ContentSummary>
);

const SummaryEditorial = ({ theme, navigate }) => (
  <ContentSummary>
    <SubTitle color={theme.colors.white}>{"Editorial"}</SubTitle>
    <Link onClick={() => navigate('/editorial')} textColor={theme.colors.white} label="Ver más..." />
  </ContentSummary>
);

const Home = (props) => {
  const [background, setBackground] = useState("transparent");
  const navigate = useNavigate()
  const theme = useTheme() || DefaultTheme;
  return (
    <Root>
      <Header setBackground={setBackground} />
      <Container>
        <Content background={background}>
          {background === "transparent" && <TitleHome theme={theme} />}
          {background === theme.colors.pantoneGreen && (
            <SummaryInfo theme={theme} navigate={navigate} />
          )}
          {background === theme.colors.pantoneBlue && (
            <SummaryCourses theme={theme} navigate={navigate} />
          )}
             {background === theme.colors.pantoneOrange && (
            <SummaryAgenda theme={theme} navigate={navigate} />
          )}
          {background === theme.colors.pantoneGold && (
            <SummaryEditorial theme={theme} navigate={navigate} />
          )}
        </Content>
      </Container>
    </Root>
  );
};

export default Home;
