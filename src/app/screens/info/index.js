import React from "react";
import Header from "../../components/organism/header";
import head from "../../../assets/images/head.png";
import { Image, BodyContainer, Content, FragmentList } from "./styles";
import { SubTitle, Body } from "../../components/foundations/Typography";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import { useState } from "react";
import { useRef } from "react";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { useEffect } from "react";

const AboutUs = ({ theme, idSelected, setIdSelected }) => {
  return (
    <FragmentList
      isActive={idSelected === 0}
      onClick={() => (idSelected === 0 ? null : setIdSelected(0))}
    >
      <SubTitle color={theme.colors.white}>{"¿Quiénes somos?"}</SubTitle>
      {idSelected === 0 && (
        <Body color={theme.colors.white}>
          {`El Colegio Superior de Especialistas y Profesionales en 
        Inteligencia y Administración de la Seguridad A.C. (CSEPIAS) es un órgano colegiado sin 
        precedente, conformado por especialistas y profesionales de la seguridad, con amplia experiencia 
        y reconocimiento en el ámbito nacional e internacional; CSEPIAS nace con una visión integral 
        entorno a la profesionalización, estandarización, homologación, certificación e innovación, de 
        todas las actividades relacionadas con la seguridad.`}
        </Body>
      )}
    </FragmentList>
  );
};

const Mision = ({ theme, idSelected, setIdSelected }) => (
  <FragmentList
    isActive={idSelected === 1}
    onClick={() => (idSelected === 1 ? null : setIdSelected(1))}
  >
    <SubTitle color={theme.colors.white}>{"Misión"}</SubTitle>
    {idSelected === 1 && (
      <>
        <Body color={theme.colors.white}>
          {`Ser un organismo colegiado, integrado por profesionales y especialistas 
      de la seguridad y la protección civil (Security & Safety), orientados a fortalecer éstos sectores, bajo 
      los siguientes ejes:`}
        </Body>
        <Body
          color={theme.colors.white}
        >{`Educación y profesionalización`}</Body>
        <Body
          color={theme.colors.white}
        >{`Investigación y desarrollo científico`}</Body>
        <Body
          color={theme.colors.white}
        >{`Divulgación y difusión del conocimiento`}</Body>
        <Body
          color={theme.colors.white}
        >{`Normalización y certificación de la práctica`}</Body>
        <Body color={theme.colors.white}>{`Innovación tecnológica`}</Body>
      </>
    )}
  </FragmentList>
);

const Vision = ({ theme, idSelected, setIdSelected }) => (
  <FragmentList
    isActive={idSelected === 2}
    onClick={() => (idSelected === 2 ? null : setIdSelected(2))}
  >
    <SubTitle color={theme.colors.white}>{"Visión"}</SubTitle>
    {idSelected === 2 && (
      <>
        {" "}
        <Body color={theme.colors.white}>
          {`Ser el organismo colegiado de seguridad y protección civil 
      (Security & Safety), más importante e influyente en México y América Latina, respecto a las buenas 
      prácticas, la homologación, la profesionalización, la certificación e Innovación tecnológica, 
      de la seguridad integral en los diversos sectores sociales, fuerzas armadas, instituciones policiales, 
      académicas y sectores empresariales.`}
        </Body>
      </>
    )}
  </FragmentList>
);

const Objectives = ({ theme, idSelected, setIdSelected }) => (
  <FragmentList isActive={idSelected === 3} onClick={() => setIdSelected(3)}>
    <SubTitle color={theme.colors.white}>{"Objetivos"}</SubTitle>
    {idSelected === 3 && (
      <>
        {" "}
        <Body color={theme.colors.white}>
          {`Vincular expertos y profesionales de Security & Safety hacia una 
      Seguridad Integral`}
        </Body>
        <Body color={theme.colors.white}>
          {`Fomentar el desarrollo y observación de los ejes de la Seguridad 
      Humana (SH-7)`}
        </Body>
        <Body color={theme.colors.white}>
          {`Compartir información y conocimientos sobre SH-7 y Seguridad 
      Integral.`}
        </Body>
        <Body color={theme.colors.white}>
          {`Realizar investigación y generar publicaciones en materia de SH-7 
      y Seguridad Integral.`}
        </Body>
        <Body color={theme.colors.white}>
          {`Homologar conceptos, procedimientos, protocolos y metodologías 
      para la Seguridad Integral.`}
        </Body>
        <Body color={theme.colors.white}>
          {`Transferir conocimientos y proponer nuevos esquemas para la 
      Seguridad Integral en instalaciones, espacios públicos, procesos y gestión del desarrollo social.`}
        </Body>
        <Body color={theme.colors.white}>
          {`Vincular al CSEPIAS con organizaciones e instituciones 
      gubernamentales, académicas y colegiadas, nacionales e internacionales entorno a la Seguridad Integral 
      y la Seguridad Humana.`}
        </Body>
      </>
    )}
  </FragmentList>
);

const Info = (props) => {
  const theme = useTheme() || DefaultTheme;
  const ref = useRef();
  const { height } = useWindowDimensions();
  const [idSelected, setIdSelected] = useState(0);

  useEffect(() => {
    if (ref.current.offsetHeight > height * 0.8) {
      ref.current.style.height = `${height * 0.9}px`;
    }
  }, [ref.current, idSelected, height]);

  return (
    <div>
      <Header optionSelected="info" />
      <Content ref={ref}>
        <Image src={head} alt="fondo" />
        <BodyContainer>
          <AboutUs
            theme={theme}
            idSelected={idSelected}
            setIdSelected={setIdSelected}
          />
          <Mision
            theme={theme}
            idSelected={idSelected}
            setIdSelected={setIdSelected}
          />
          <Vision
            theme={theme}
            idSelected={idSelected}
            setIdSelected={setIdSelected}
          />
          <Objectives
            theme={theme}
            idSelected={idSelected}
            setIdSelected={setIdSelected}
          />
        </BodyContainer>
      </Content>
    </div>
  );
};

export default Info;
