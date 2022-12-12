import React from "react";
import { isMobile } from "react-device-detect";
import { useTheme } from "styled-components";
import useWindowDimensions from "../../../../utils/useWindowDimensions";
import Link from "../../atoms/buttons/Link";
import {
  Body,
  SubTitle,
  SubTitleLight,
  TagLabel,
} from "../../foundations/Typography";
import {
  CardRoot,
  ImageContent,
  Container,
  ColImage,
  Caption,
  BorderContent,
} from "./styles";

const PhotoCard = (props) => {
  const theme = useTheme();
  const {
    photo,
    title,
    description,
    linkLabel,
    onClickBtn,
    tag,
    captionLabel,
    colorTag,
  } = props;
  const { width } = useWindowDimensions();

  return (
    <CardRoot isMobile={isMobile} width={width}>
      {!isMobile && (
        <ColImage urlImage={photo}>
          {captionLabel && (
            <Caption>
              <SubTitleLight color={theme.colors.white}>
                {captionLabel}
              </SubTitleLight>
            </Caption>
          )}
        </ColImage>
      )}
      <Container isMobile={isMobile} width={width}>
        <TagLabel color={colorTag}>{tag}</TagLabel>
        <SubTitle>{title}</SubTitle>
        <Body>{description}</Body>

        <Link label={linkLabel} onClick={() => onClickBtn()} />
      </Container>
      {isMobile && <BorderContent />}
    </CardRoot>
  );
};

export default PhotoCard;
