import React from "react";
import Header from "../../components/organism/header";
import head from "../../../assets/images/head.png";
import {
  SubTitle,
  Body,
  ItalicTitle,
} from "../../components/foundations/Typography";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import { useState } from "react";
import { useRef } from "react";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import {
  Image,
  BodyContainer,
  Content,
  FragmentList,
  GeneralCol,
  QuoteCol,
  Quote,
} from "./styles";


const AboutUs = ({ theme, idSelected, setIdSelected }) => {
  return (
    <FragmentList
      isActive={idSelected === 0}
      onClick={() => (idSelected === 0 ? null : setIdSelected(0))}
    >
      <SubTitle color={theme.colors.white}>{"¿Quiénes somos?"}</SubTitle>
      {idSelected === 0 && (
        <>
          <Body color={theme.colors.white}>
            {`El Colegio Superior de Especialistas y Profesionales en Inteligencia y Administración 
          de la Seguridad A.C. (CSEPIAS), es un órgano colegiado integrado por profesionales y 
          expertos de la seguridad, con el propósito de impulsar, promover y fortalecer, la práctica, 
          gestión, educación y profesionalización de la seguridad, así como de la cultura cívica e 
          integración organizacional para la seguridad. CSEPIAS tiene su marco de acción entorno a 
          la seguridad patrimonial (Security), protección civil (Safety), ciberseguridad y bioseguridad 
          que entre otras considera, la calidad de vida e identidad de las personas con su entorno.`}
          </Body>
          <Body color={theme.colors.white}>
            {`CSEPIAS contribuye a fortalecer la seguridad física, seguridad personal, seguridad tecnológica, 
         de redes, sistemas y bases de datos, robótica, internet de las cosas, seguridad intelectual, 
         inteligencia, contrainteligencia, protección civil, atención de emergencias y desastres, 
         seguridad para el trabajo, seguridad e higiene, seguridad humana, manejo y atención de crisis, 
         seguridad sanitaria, seguridad ambiental y ecológica, seguridad alimentaria, seguridad de la salud, 
         control de confianza e investigación y todas aquellas actividades relacionadas con la gestión 
         de la paz, el orden, la convivencia, la vida, la salud, la integridad, el bienestar, el cuidado 
         de bienes, pertenencias y espacios, así como de la estabilidad y sustentabilidad humana.`}
          </Body>
          <Body color={theme.colors.white}>
            {`CSEPIAS agrega valor a las organizaciones a través de convenios de colaboración para el 
         desarrollo, diseño, recomendaciones, evaluación, auditoría, o difusión, de conocimientos y 
         metodologías para fortalecer la seguridad e integridad organizacional.`}
          </Body>
        </>
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
          {`Ser un órgano colegiado integrado por profesionales de la seguridad, con el fin de dotar, 
          capacitar y fortalecer los conocimientos, habilidades y competencias de sus agremiados 
          y de la sociedad en general en materia de seguridad bajo cinco ejes rectores que son: 
          investigación, educación, difusión, práctica y ejecución ética; de los conocimientos 
          en materia de seguridad.`}
        </Body>
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
        <Body color={theme.colors.white}>
          {`Ser el organismo referente de profesionales de seguridad de México y Latinoamérica 
          que permita la integración, capacitación e interacción de personas, instituciones, 
          organismos, dependencias, fuerzas armadas y empresas nacionales o extranjeras, 
          con el propósito de robustecer y homologar criterios, definiciones y actividades 
          en materia de seguridad.`}
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
  const { height, width } = useWindowDimensions();
  const [idSelected, setIdSelected] = useState(0);

  useEffect(() => {
    if (ref.current.offsetHeight > height * 0.8) {
      ref.current.style.height = `${height * 0.9}px`;
    }
  }, [ref, idSelected, height]);

  return (
    <div>
      <Header optionSelected="info" />
      <Content ref={ref}>
        <Image src={head} alt="fondo" />
        <BodyContainer isMobile={isMobile}>
          <GeneralCol width={isMobile ? width * 0.85 : width * 0.5}>
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
          </GeneralCol>
          <QuoteCol isMobile={isMobile} width={isMobile ? width * 0.85 : width * 0.3}>
            <Quote>
              <ItalicTitle color={theme.colors.white}>
              {`CSEPIAS agrega valor a la organizaciones a través de convenios 
              de colaboración para el desarrollo, diseño, recomendaciones, evaluación, auditoría; 
              o difusión de conocimientos y metodologías para fortalecer la seguridad e integridad 
              organizacional`}
              </ItalicTitle>
            </Quote>
          </QuoteCol>
        </BodyContainer>
      </Content>
    </div>
  );
};

export default Info;
