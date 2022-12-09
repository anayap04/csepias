import React, { useState } from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import Link from "../../atoms/buttons/Link";
import { Body, SubTitleSmall } from "../../foundations/Typography";
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
      onClick={() => onClickBtn()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShow(false)}
    >
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <BodyCard>
        <SubTitleSmall>{title}</SubTitleSmall>
        {showSummary && <Body>{summary}</Body>}
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
