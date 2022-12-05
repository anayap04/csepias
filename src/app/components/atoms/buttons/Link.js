import React from "react";
import { LinkContainer } from "./styles";
import { BodyBold } from "../../foundations/Typography";


const Link = (props) => {
  const { label, textColor, onClick } = props;

  return (
    <LinkContainer onClick={() => onClick()}>
      <BodyBold color={textColor}>{label}</BodyBold>
    </LinkContainer>
  );
};

export default Link;
