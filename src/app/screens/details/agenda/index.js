import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import Header from "../../../components/organism/header";

import data from '../../../../__mocks__/agendaInfo.json'
import { Root, BodyContent, ImageContent } from "./styles";
import { Title } from "../../../components/foundations/Typography";
import Tag from "../../../components/atoms/tag";
import { getTagLabel } from "../../../../utils/mappers";

const DetailEvent = (props) => {
  const theme = useTheme() || DefaultTheme;
  const location = useLocation()
  const idMonth = location.state.month;
  const eventCode = location.state.idEvent;
  const eventSelected = data[idMonth].filter(event => event.id === eventCode)[0];
  console.log(eventSelected)
  return (
    <Root>
      <Header optionSelected="agenda" />
      <BodyContent>
        <Tag label={getTagLabel(eventSelected.typeEvent)} color={eventSelected.typeEvent} />
        <Title>{eventSelected.nameEvent}
        </Title>
        <ImageContent src={eventSelected.image} />
      </BodyContent>
    </Root>
  );
};

export default DetailEvent;
