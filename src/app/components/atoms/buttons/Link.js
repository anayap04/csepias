import React from "react";
import { LinkContainer } from "./styles";
import { BodyBold, SubTitle } from "../../foundations/Typography";

const Link = (props) => {
  const { label, textColor, onClick, bigger } = props;

  return (
    <LinkContainer onClick={() => onClick()}>
      {bigger ? (
        <SubTitle color={textColor}>{label}</SubTitle>
      ) : (
        <BodyBold color={textColor}>{label}</BodyBold>
      )}
    </LinkContainer>
  );
};

export default Link;
