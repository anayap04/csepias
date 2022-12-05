import React from "react";
import Header from "../../components/atoms/header";
import { LineHorizontal } from "../../components/atoms/line-separator/Separators";
import { SubTitle } from "../../components/foundations/Typography";
import { Container, HeadContainer } from "./styles";

const Courses = (props) => {
  return (
    <div>
      <Header optionSelected="courses" />
      <Container>
        <HeadContainer>
          <SubTitle>{"Cursos"}</SubTitle>
          <LineHorizontal />
        </HeadContainer>
      </Container>
    </div>
  );
};

export default Courses;
