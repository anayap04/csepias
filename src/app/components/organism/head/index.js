import React from "react";
import { LineHorizontal } from "../../atoms/line-separator/Separators";
import { Body, SubTitle } from "../../foundations/Typography";
import { Container, HeadContainer } from "./styles";
import { isMobile } from "react-device-detect";

const Head = (props) => {
  const { children, title, description } = props;

  return (
    <Container isMobile={isMobile}>
      <HeadContainer>
        <SubTitle>{title}</SubTitle>
        <Body>{description}</Body>
        {children}
        <LineHorizontal width={isMobile && "88vw"} />
      </HeadContainer>
    </Container>
  );
};

export default Head;
