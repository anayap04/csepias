import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import useWindowDimensions from "../../../../utils/useWindowDimensions";
import { DefaultTheme } from "../../../../theme/themes";
import { isMobile } from "react-device-detect";
import Header from "../../../components/organism/header";
import Primary from "../../../components/atoms/buttons/Primary";
import Tag from "../../../components/atoms/tag";
import IconTextInfo from "../../../components/atoms/icon-text";
import {
  Body,
  BodyBold,
  SubTitle,
  Title,
} from "../../../components/foundations/Typography";
import {
  Root,
  BodyContent,
  ImageContent,
  SummaryInfo,
  DescriptionContent,
  MoreInfo,
  Content,
  Table,
  TableBody,
  TableRow,
} from "./styles";

import { getTagLabel } from "../../../../utils/mappers";

//Mock data
import data from "../../../../__mocks__/coursesInfo.json";

const DetailCourse = (props) => {
  const theme = useTheme() || DefaultTheme;
  const location = useLocation();
  const { width } = useWindowDimensions();
  const code = location.state.idCourse;

  const courseSelected = data.data.filter((course) => course.id === code)[0];
  console.log(courseSelected);

  const mapRow = (r) => (
    <TableRow isMobile={isMobile}>
      <td>
        <BodyBold>{r.type}</BodyBold>
      </td>
      <td>
        <Body>{`$ ${r.cost} MXN`}</Body>
      </td>
    </TableRow>
  );

  return (
    <Root>
      <Header optionSelected="agenda" />
      <BodyContent>
        <Tag
          label={getTagLabel(courseSelected.tag)}
          color={courseSelected.tag}
        />
        <Title>{courseSelected.title}</Title>
        <SummaryInfo>
          <IconTextInfo
            width={260}
            icon="Calendar"
            text={`Inicia: ${courseSelected.startDate}`}
            secondLine={`(${courseSelected.days
              .toString()
              .replace(",", ", ")})`}
          />
          <IconTextInfo
            icon="Clock"
            width={200}
            text={courseSelected.hours}
            secondLine={`Duración: ${courseSelected.hoursDuration} horas`}
          />
        </SummaryInfo>
        <ImageContent src={courseSelected.image} />
      </BodyContent>
      <Content>
        <DescriptionContent isMobile={isMobile}>
          <Body>{courseSelected.summary}</Body>
          <SubTitle>{"Temas"}</SubTitle>
          {courseSelected.topics.map((cont, index) => (
            <div key={index}>
              <BodyBold>{cont.title}</BodyBold>
              <Body>{cont.description}</Body>
            </div>
          ))}
          <SubTitle>{"Panelistas"}</SubTitle>
          {courseSelected.participants.map((cont, index) => (
            <div key={index}>
              <BodyBold>{cont.name}</BodyBold>
              <Body>{cont.description}</Body>
            </div>
          ))}
        </DescriptionContent>
        <MoreInfo isMobile={isMobile}>
          <SubTitle>{"Costos"}</SubTitle>
          <Table  isMobile={isMobile}>
            <TableBody isMobile={isMobile}>
              {courseSelected.prices.map((row) => mapRow(row))}
            </TableBody>
          </Table>
          <Primary
            width={isMobile ? width * 0.7 : width * 0.25}
            backgroundColor={theme.colors.pantoneGreen}
            label="Contáctanos en WhatsApp"
          />
        </MoreInfo>
      </Content>
    </Root>
  );
};

export default DetailCourse;
