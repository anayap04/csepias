import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import Link from "../../atoms/buttons/Link";
import useWindowDimensions from "../../../../utils/useWindowDimensions";
import {
  Body,
  SubTitle,
  TagLabel,
  TitleLight,
  SubTitleLight,
  SubTitleSmall,
  SubTitleLightSmall,
  TitleLightSmall,
} from "../../foundations/Typography";
import { CardContainer, Content, ColInfo, ColTitle, Row } from "./styles";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const CardLong = (props) => {
  const {
    title,
    image,
    date,
    buttonLabel,
    onClickBtn,
    tag,
    colorTag,
    customWidth,
    description,
    timeArr,
  } = props;
  const { width } = useWindowDimensions();
  const [showDescription, setShowMore] = useState(false);
  const theme = useTheme() || DefaultTheme;
  const actualWidth = customWidth || width;
  const widthCustom = isMobile ? actualWidth * 0.9 : actualWidth;
  const renderTimes = (time) => (
    <>
      {isMobile ? (
        <SubTitleLightSmall
          color={theme.colors.white}
        >{`${time.city} – ${time.time}`}</SubTitleLightSmall>
      ) : (
        <SubTitleLight
          color={theme.colors.white}
        >{`${time.city} – ${time.time}`}</SubTitleLight>
      )}
    </>
  );

  return (
    <CardContainer
      isMobile={isMobile}
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
      width={widthCustom}
      urlImage={image}
    >
      <Content isMobile={isMobile} width={widthCustom}>
        <ColInfo isMobile={isMobile} width={widthCustom}>
          <Row
            isMobile={isMobile}
            width={widthCustom}
            backgroundColor={theme.colors.pantoneGreen}
          >
            {isMobile ? (
              <TitleLightSmall color={theme.colors.white}>{date}</TitleLightSmall>
            ) : (
              <TitleLight color={theme.colors.white}>{date}</TitleLight>
            )}
          </Row>
          <Row
            isMobile={isMobile}
            width={widthCustom}
            backgroundColor={theme.colors.pantoneBlue}
          >
            {timeArr.map((value) => renderTimes(value))}
          </Row>
        </ColInfo>
        <ColTitle isMobile={isMobile} width={widthCustom}>
          <TagLabel color={colorTag}>{tag}</TagLabel>
          {isMobile ? (
            <SubTitleSmall>{title}</SubTitleSmall>
          ) : (
            <SubTitle>{title}</SubTitle>
          )}
          {showDescription && <Body>{description}</Body>}
          <Link onClick={() => onClickBtn()} label={buttonLabel} />
        </ColTitle>
      </Content>
    </CardContainer>
  );
};

export default CardLong;
