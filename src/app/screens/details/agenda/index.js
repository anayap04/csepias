import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import Header from "../../../components/organism/header";
import data from "../../../../__mocks__/agendaInfo.json";
import {
  Root,
  BodyContent,
  ImageContent,
  SummaryInfo,
  DescriptionContent,
  MoreInfo,
  Content,
} from "./styles";
import {
  Body,
  BodyBold,
  SubTitle,
  Title,
} from "../../../components/foundations/Typography";
import Tag from "../../../components/atoms/tag";
import { getTagLabel, mapTimes } from "../../../../utils/mappers";
import IconTextInfo from "../../../components/atoms/icon-text";
import { isMobile } from "react-device-detect";
import Primary from "../../../components/atoms/buttons/Primary";
import useWindowDimensions from "../../../../utils/useWindowDimensions";

const DetailEvent = (props) => {
  const theme = useTheme() || DefaultTheme;
  const location = useLocation();
  const {width} = useWindowDimensions()
  const idMonth = location.state.month;
  const eventCode = location.state.idEvent;
  const eventSelected = data[idMonth].filter(
    (event) => event.id === eventCode
  )[0];

  return (
    <Root>
      <Header optionSelected="agenda" />
      <BodyContent>
        <Tag
          label={getTagLabel(eventSelected.typeEvent)}
          color={eventSelected.typeEvent}
        />
        <Title>{eventSelected.nameEvent}</Title>
        <SummaryInfo>
          <IconTextInfo icon="Calendar" text={eventSelected.date} />
          <IconTextInfo
            icon="Clock"
            width={200}
            text={mapTimes(eventSelected.times)}
          />
          <IconTextInfo icon="Location" text={eventSelected.location} />
        </SummaryInfo>
        <ImageContent src={eventSelected.image} />
      </BodyContent>
      <Content>
      <DescriptionContent isMobile={isMobile}>
        <Body>{eventSelected.description}</Body>
        <SubTitle>{"Panelistas"}</SubTitle>
        {eventSelected.panelists.map((cont, index) => (
          <div key={index}>
            <BodyBold>{cont.name}</BodyBold>
            <Body>{cont.description}</Body>
          </div>
        ))}
      </DescriptionContent>
      <MoreInfo isMobile={isMobile}>
        <SubTitle>{"Para más información"}</SubTitle>
        <Body>{"info@csepsias.org"}</Body>
        <Primary width={isMobile ? width * 0.7 : width * 0.25} backgroundColor={theme.colors.pantoneGreen} label="Contáctanos en WhatsApp" />
        <Primary width={isMobile ? width * 0.7 : width * 0.25} backgroundColor={theme.colors.pantoneBlue} label="Descarga la agenda y el flyer" />
      </MoreInfo>
      </Content>
    </Root>
  );
};

export default DetailEvent;
