import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import Link from "../../atoms/buttons/Link";
import { Body, SubTitle, SubTitleSmall } from "../../foundations/Typography";
import { BodyCard, ImageContainer, ContainerCard, Image } from "./styles";

const CardSummary = (props) => {
  const { title, summary, btnLabel, onClickBtn, image } = props;
  const [showSummary, setShow] = useState(false);
  const theme = useTheme() || DefaultTheme;
  const handleMouseEnter = (event) => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  };

  return (
    <ContainerCard
      isMobile={isMobile}
      onClick={() => onClickBtn()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShow(false)}
    >
      <ImageContainer>
        <Image isMobile={isMobile} src={image} />
      </ImageContainer>
      <BodyCard>
        {showSummary && !isMobile ? (
          <SubTitleSmall>{title}</SubTitleSmall>
        ) : (
          <SubTitle>{title}</SubTitle>
        )}
        {showSummary && !isMobile && <Body>{summary}</Body>}
        <Link
          onClick={() => onClickBtn()}
          textColor={theme.colors.pantoneGreen}
          label={btnLabel}
        />
      </BodyCard>
    </ContainerCard>
  );
};

export default CardSummary;
