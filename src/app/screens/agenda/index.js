import React from "react";
import Header from "../../components/atoms/header";
import { LineHorizontal } from "../../components/atoms/line-separator/Separators";
import { SubTitle } from "../../components/foundations/Typography";
import { Container, HeadContainer } from "./styles";

const Agenda = (props) => {
  return (
    <div>
      <Header optionSelected="agenda" />
      <Container>
        <HeadContainer>
          <SubTitle>{"Agenda"}</SubTitle>
          <LineHorizontal />
        </HeadContainer>
      </Container>
    </div>
  );
};

export default Agenda;
