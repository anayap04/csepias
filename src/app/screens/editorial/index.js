import React from "react";
import Header from "../../components/organism/header";
import Head from "../../components/organism/head";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";

const Editorial = (props) => {
  const theme = useTheme() || DefaultTheme
  return (
    <div>
      <Header optionSelected="editorial" />
        <Head title="Editorial"  icon="Homework" colorIcon={theme.colors.pantoneGold} />
    </div>
  );
};

export default Editorial;
