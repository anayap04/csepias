import React from "react";
import { BodyBold } from "../../foundations/Typography";
import { TextIconContainer, IconContainer } from "./TextIconStyles";
import Icons from "../../foundations/Icons";

const TextIconBtn = (props) => {
  const {  label, iconName, iconSize, onClick, width } = props;

  return (
    <TextIconContainer width={width} onClick={() => onClick ? onClick() : null}>
      <BodyBold>{label}</BodyBold>
      <IconContainer><Icons iconName={iconName} size={iconSize} /></IconContainer>
    </TextIconContainer>
  );
};

export default TextIconBtn;
