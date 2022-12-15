import React, { useState } from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import Head from "../../components/organism/head";
import Header from "../../components/organism/header";
import IconBtn from "../../components/atoms/buttons/IconBtn";
import ListView from "../../components/molecules/list-view";
import CardLong from "../../components/organism/card";
import { SubTitle } from "../../components/foundations/Typography";
import { BodyContent, Filter, FilterControlers } from "./styles";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { getDateWithDay } from "../../../utils/dateUtils";
import { CapitalizeFirstWord } from "../../../utils/mappers";

//Mock data
const mock = require("../../../__mocks__/agendaInfo.json");

const Agenda = (props) => {
  const theme = useTheme() || DefaultTheme;
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const arrayList = [
    { label: "Octubre", id: 0 },
    { label: "Noviembre", id: 1 },
    { label: "Diciembre", id: 2 },
  ];
  const [id, setId] = useState(arrayList[0].id);
  const [value, getValue] = useState(
    arrayList[id] ? arrayList[id].label : arrayList[0].label
  );
  const [monthArray, setMonthArray] = useState(mock[id]);
  const increment = () => setId(id + 1);
  const decrement = () => setId(id - 1);

  useEffect(() => {
    if (arrayList[arrayList.length - 1].id < id) {
      setId(arrayList[0].id);
    }
    getValue(arrayList[id] ? arrayList[id].label : arrayList[0].label);
    setMonthArray(arrayList[id] ? mock[id] : mock[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, value]);

  const renderCards = (item, index) => (
    <div key={index}>
      <CardLong
        title={item.nameEvent}
        image={item.image}
        date={CapitalizeFirstWord(getDateWithDay(item.date))}
        description={item.summary}
        buttonLabel="Ver más información"
        tag="Webinar Internacional"
        timeArr={item.times}
        colorTag={theme.colors.pantoneOrange}
        onClickBtn={() =>
          navigate("/agenda/event", {
            state: {
              idEvent: item.id,
              month: id,
            },
          })
        }
      />
    </div>
  );

  return (
    <div>
      <Header optionSelected="agenda" />
      <Head
        icon="Calendar"
        colorIcon={theme.colors.pantoneOrange}
        title="Agenda"
        description={`En esta sección encontrarás todos los eventos que tenemos 
        para este mes. También puedes ver los que tendremos próximamente.`}
      >
        <Filter isMobile={isMobile}>
          {!isMobile && <SubTitle>{value}</SubTitle>}
          <FilterControlers isMobile={isMobile}>
            {id > 0 && (
              <IconBtn
                onClick={() => decrement()}
                hoverColor={theme.colors.pantoneGreen}
                iconName="LeftArrow"
              />
            )}
            <ListView
              getIdValue={setId}
              width={isMobile ? width * 0.57 : 200}
              getValue={getValue}
              initialValue={value}
              arrayList={arrayList}
            />
            <IconBtn
              onClick={() => increment()}
              hoverColor={theme.colors.pantoneGreen}
              iconName="RightArrow"
            />
          </FilterControlers>
        </Filter>
      </Head>
      <BodyContent>
        {monthArray &&
          monthArray.map((item, index) => renderCards(item, index))}
      </BodyContent>
    </div>
  );
};

export default Agenda;
