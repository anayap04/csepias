import React from "react";
import Header from "../../components/organism/header";
import Head from "../../components/organism/head";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import { BodyContent } from "../courses/styles";
import { CardContainer } from "./styles.js";
import PhotoCard from "../../components/organism/photo-card";
//Mock data
import mock from "../../../__mocks__/editorialInfo.json";

const Editorial = (props) => {
  const theme = useTheme() || DefaultTheme;
  const renderCards = (card) => (
    <CardContainer>
      <PhotoCard
        key={card.id}
        tag="Editorial"
        photo={card.photo}
        title={card.title}
        captionLabel={`Por: ${card.author}`}
        linkLabel="Ir a la publicación"
        colorTag={theme.colors.pantoneGold}
        description={card.summary}
      />
    </CardContainer>
  );

  return (
    <div>
      <Header optionSelected="editorial" />
      <Head
        title="Editorial"
        icon="Homework"
        colorIcon={theme.colors.pantoneGold}
      />
      <BodyContent>{mock.data.map((data) => renderCards(data))}</BodyContent>
    </div>
  );
};

export default Editorial;
