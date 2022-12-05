import React from "react";
import Header from "../../components/atoms/header";
import { LineHorizontal } from "../../components/atoms/line-separator/Separators";
import { SubTitle } from "../../components/foundations/Typography";
import { Container, HeadContainer } from "./styles";

const Editorial = (props) => {
  return (
    <div>
      <Header optionSelected="editorial" />
      <Container>
        <HeadContainer>
          <SubTitle>{"Editorial"}</SubTitle>
          <LineHorizontal />
        </HeadContainer>
      </Container>
    </div>
  );
};

export default Editorial;
