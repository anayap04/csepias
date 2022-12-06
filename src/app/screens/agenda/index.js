import React, { useState } from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import Head from "../../components/organism/head";
import Header from "../../components/organism/header";
import IconBtn from "../../components/atoms/buttons/IconBtn";
import ListView from "../../components/molecules/list-view";
import { SubTitle } from "../../components/foundations/Typography";
import { Filter, FilterControlers } from "./styles";
import { useEffect } from "react";

const Agenda = (props) => {
  const theme = useTheme() || DefaultTheme;
  const arrayList = [
    { label: "Octubre", id:0 },
    { label: "Noviembre", id: 1 },
    { label: "Diciembre", id: 2 },
  ];
  const [id, setId ]= useState(0);
  const [value, getValue] = useState(arrayList[id] ?  arrayList[id].label : arrayList[0].label);
  const increment = () => setId(id + 1);

  useEffect(() => {
    getValue(arrayList[id] ? arrayList[id].label : arrayList[0].label)
    if (!arrayList[id]) {
      setId(0)
    }
  }, [id])
 
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
        <Filter>
        <SubTitle>{value}</SubTitle>
        <FilterControlers>
          <ListView width={150} getValue={getValue} initialValue={value} arrayList={arrayList} />{" "}
          <IconBtn
            onClick={() => increment()}
            hoverColor={theme.colors.pantoneGreen}
            iconName="RightArrow"
          />
        </FilterControlers>
        </Filter>
      </Head>
    </div>
  );
};

export default Agenda;
