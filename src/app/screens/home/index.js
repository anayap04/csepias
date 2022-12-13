import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import Link from "../../components/atoms/buttons/Link";
import Header from "../../components/organism/header";
import {
  Body,
  SubTitle,
  Title,
  TitlePrincipal,
} from "../../components/foundations/Typography";
import {
  Root,
  Container,
  Content,
  ContentHome,
  ContentSummary,
  LinkDiv,
} from "./styles";
import mockAgenda from "../../../__mocks__/agendaInfo.json";
import mockCourse from "../../../__mocks__/coursesInfo.json";
import mockEditorial from "../../../__mocks__/editorialInfo.json";
import PhotoCard from "../../components/organism/photo-card";

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
      {`El Colegio Superior de Especialistas y Profesionales en Inteligencia y Administración de la Seguridad A.C. (CSEPIAS) 
        es un órgano colegiado sin precedente, conformado por especialistas y profesionales de la seguridad, con amplia experiencia y reconocimiento 
        en el ámbito nacional e internacional; CSEPIAS nace con una visión integral entorno a la profesionalización, estandarización, homologación, 
        certificación e innovación, de todas las actividades relacionadas con la seguridad.`}
    </Body>
    <LinkDiv>
      <Link
        bigger
        onClick={() => navigate("/info")}
        textColor={theme.colors.white}
        label="Ver más..."
      />
    </LinkDiv>
  </ContentSummary>
);

const SummaryCourses = ({ theme, navigate }) => (
  <ContentSummary>
    <Title color={theme.colors.white}>{"Cursos"}</Title>
    <PhotoCard
      photo={mockCourse.data[0].image}
      title={mockCourse.data[0].title}
      description={mockCourse.data[0].summary}
      linkLabel="Ir al curso"
      onClickBtn={() => {}}
      colorTag={theme.colors.pantoneBlue}
      tag="Cursos"
    />
    <LinkDiv>
      <Link
        bigger
        onClick={() => navigate("/cursos")}
        textColor={theme.colors.white}
        label="Ver Todos los cursos disponibles"
      />
    </LinkDiv>
  </ContentSummary>
);

const SummaryAgenda = ({ theme, navigate }) => (
  <ContentSummary>
    <Title color={theme.colors.white}>{"Agenda"}</Title>
    <PhotoCard
      photo={mockAgenda[0][0].image}
      title={mockAgenda[0][0].nameEvent}
      description={mockAgenda[0][0].summary}
      linkLabel="Ir al evento"
      onClickBtn={() => {}}
      tag="Editorial"
      colorTag={theme.colors.pantoneOrange}
    />
    <LinkDiv>
      <Link
        bigger
        onClick={() => navigate("/agenda")}
        textColor={theme.colors.white}
        label="Ver la agenda de este mes"
      />
    </LinkDiv>
  </ContentSummary>
);

const SummaryEditorial = ({ theme, navigate }) => (
  <ContentSummary>
    <Title color={theme.colors.white}>{"Editorial"}</Title>
    <PhotoCard
      photo={mockEditorial.data[0].photo}
      title={mockEditorial.data[0].title}
      description={mockEditorial.data[0].summary}
      linkLabel="Ir al curso"
      onClickBtn={() => {}}
      tag="Editorial"
      colorTag={theme.colors.pantoneGold}
    />
    <LinkDiv>
      <Link
        bigger
        onClick={() => navigate("/editorial")}
        textColor={theme.colors.white}
        label="Ver todas las publicaciones"
      />
    </LinkDiv>
  </ContentSummary>
);

const Home = (props) => {
  const [background, setBackground] = useState("transparent");
  const navigate = useNavigate();
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
